import React, { Component } from 'react';
import $ from "jquery";
import {  GetData, PostData} from "./services/postData.js";


class Discount extends Component {
    constructor(props) {
        super(props);
        this.state={
            user_id:'',
            discounttype:'',
            products:[],
            discount:'',
            hourfrom:'',
            hourto:'',
            offamount:'',
            disproduct:[],
            loyaldiscount:'',
            validated_date:'',
            loyalty_discount:'',
            max_discount:'',
            voucher:'',
            min_purchase:'',
            option:'',
            success:'0'
        }
    }

    componentWillMount = () => {
        let userId = localStorage.getItem("userId");
        this.setState({user_id:userId});
        GetData('all-product').then((result)=>{
            let response= result.data;             
            this.setState({products:response});                          
        })        
    }

    onChange=(e)=>{           
        const checkedArr = [];
        let values;
        if (e.target.type !== 'checkbox') { values = e.target.value; } 
        else if(e.target.name === 'disproduct') {            
            const checkeds = document.getElementsByName('disproduct');
                for (let i = 0; i < checkeds.length; i++) {
                    if (checkeds[i].checked==true) { 
                        checkedArr.push(checkeds[i].value);               
                    }
                }                    
            values = checkedArr;                
        } 
        this.setState({            
            [e.target.name]:values,
        }); 
        console.log(this.state.option)     
    } 
    
    checkall(){       
        const checkeds = document.getElementsByName('disproduct');
            for (let i = 0; i < checkeds.length; i++) {
                checkeds[i].checked = true;                 
        }                         
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let data;
        var convertitem=this.state.disproduct;
        var converteditemid= convertitem.toString(); 
          
        if(this.state.disproduct && this.state.discount){
            data={
                type:'Offpeak Discount',
                user_id:this.state.user_id,
                discount:this.state.discount,                
                fromhour:this.state.hourfrom,
                tohour:this.state.hourto,            
                product_id:converteditemid,   
                amount:this.state.offamount,
                discount_status:'1'
            }
        }
        else{  
            if(this.state.option=='LoyDiscount') {
                data={
                    type:'Loyalty Discount',
                    amount:this.state.loyaldiscount,
                    user_id:this.state.user_id,
                    option:'%Discount',
                    validated_date:this.state.validated_date,
                    discount_status:'1',
                    loyalty_discount:this.state.loyalty_discount,
                    max_discount:this.state.max_discount
                }
            }else {
                data={
                    type:'Loyalty Discount',
                    amount:this.state.loyaldiscount,
                    user_id:this.state.user_id,
                    option:'Loyalty Voucher',
                    validated_date:this.state.validated_date,
                    discount_status:'1',
                    voucher:this.state.voucher,
                    min_purchase:this.state.min_purchase
                }  
            }
        }

        PostData('add_discount',data)
        .then((result)=>{
            this.setState({success:'1'});
            console.log(result)
           
        }).catch(error => {
            console.log(error);
        }); 
    }

    componentDidMount = () => {
        $('input[type="radio"]').on('click',function(){
            var inputValue = $(this).attr("value");
            var targetbox = $("." + inputValue);
            $(".box-new").not(targetbox).hide();
            $(targetbox).show();
        });
    }

    render() {  
        let productdata=this.state.products; 
        const boxNew = {
                display: 'none'
            }
        const LoyDiscount = {
                backgroundColor: 'none'
            }
        const LoyVoucher = {
                backgroundColor: 'none'
            }
        
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Discount</h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <div className="col-md-6" style={{borderRight: '1px #ddd dashed'}}>
                                    <h4 style={{marginTop: '0px'}}>Offpeak Discount</h4>
                                    <hr style={{borderTop: '1px #ddd solid',margin: '0px'}}/>
                                    <div className="clearfix"></div><br/>
                                    <form onSubmit={this.onSubmit}>                                    
                                    <div className="form-group">
                                        <label>% Discount</label>
                                        <div>
                                            <input type="number" className="form-control input-sm" name="discount" placeholder="% Discount" onChange={this.onChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Amount to be purchased</label>
                                        <div>
                                            <input type="number" className="form-control input-sm" name="offamount" placeholder="Enter amount" onChange={this.onChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Timings</label>
                                        <div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-addon">From</span>
                                                <input type="time" name='hourfrom' className="form-control" placeholder="Hour"onChange={this.onChange} required/>
                                                <span className="input-group-addon" style={{borderLeft:'0px',borderRight: '0px'}}>To</span>
                                                <input type="time" name='hourto' className="form-control" placeholder="Hour"onChange={this.onChange} required/>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div className="form-group">
                                        <label>Products</label>
                                        <div>
                                            <div className="form-control" style={{minHeight: '110px',overflowY: 'scroll'}}>
                                                <div className="col-md-12">   
                                                    <label className="checkbox" >
                                                        <input type="checkbox" onClick={this.checkall} />All
                                                    </label>     
                                                    {productdata.map((productname) =>                                                         
                                                        // Only select those product which belong to the Restaurant
                                                        JSON.stringify(productname.user_id)===this.state.user_id ? 
                                                        <label className="checkbox" key={productname.id}>
                                                            <input type="checkbox" name='disproduct' value={productname.id} onClick={this.onChange}/>{productname.name}
                                                        </label>  :  <></>                                                                                                                                                                                                                 
                                                    )}                                                      
                                                </div>
                                                <div className="clearfix"></div><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                    </form>                                    
                                </div>
                            
                                <div className="col-md-6">                                     
                                    <h4 style={{marginTop: '0px'}}>Loyalty Discount</h4>
                                    <hr style={{borderTop: '1px #ddd solid',margin: '0px'}}/>
                                    <div className="clearfix"></div><br/>
                                    <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Amount to be purchased until loyalty discount is awarded</label>
                                        <div>
                                            <input type="number" name="loyaldiscount" className="form-control input-sm" onChange={this.onChange} placeholder="Enter amount"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>How long do you want these discounts to be valid for?</label>
                                        <div>
                                            <input type="number" name="validated_date" className="form-control input-sm" onChange={this.onChange} placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <p><strong>Would you like to give</strong></p>
                                        <div className="styled-input-single" style={{display: 'inline-block'}}>
                                            <input type="radio" name="option" id="yes" value="LoyDiscount"  onClick={this.onChange}/>
                                            <label for="yes">% Discount</label>
                                        </div>
                                        <div className="styled-input-single" style={{display: 'inline-block',marginLeft: '25px'}}>
                                            <input type="radio" name="option" id="no" value="LoyVoucher" onClick={this.onChange} />
                                            <label for="no">Loyalty Voucher</label>
                                        </div>
                                    </div>

                                    <div className="LoyDiscount box-new" style={{...boxNew, ...LoyDiscount}}>
                                        <div>
                                            <div className="form-group">
                                                <label>% Discount</label>
                                                <div>
                                                    <input type="number" name="loyalty_discount" className="form-control input-sm" onChange={this.onChange} placeholder="% Discount"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Maximum Discount (RM)</label>
                                                <div>
                                                    <input type="number" name="max_discount" className="form-control input-sm"  onChange={this.onChange} placeholder="Maximum Discount (RM)"/>
                                                </div>
                                            </div>                                            
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="LoyVoucher box-new" style={{...boxNew, ...LoyVoucher}}>
                                        <div>
                                            <div className="form-group">
                                                <label>Loyalty Voucher (RM)</label>
                                                <div>
                                                    <input type="number" name="voucher"  className="form-control input-sm" onChange={this.onChange} placeholder="Loyalty Voucher (RM)"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Minimum Purchase (RM)</label>
                                                <div>
                                                    <input type="number" name="min_purchase" className="form-control input-sm" onChange={this.onChange} placeholder="Minimum Purchase (RM)"/>
                                                </div>
                                            </div>                                                                                       
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>                               
                                    </form> 
                                </div> <div className="clearfix"></div><br/>                                   
                            </div>
                        </div>

                        <div className="col-md-12">
                            <h4><strong>Listing</strong></h4>
                            <div className="clearfix"></div>
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Discount Name</th>
                                                <th>% Discount</th>
                                                <th>Dates</th>
                                                <th>Timings</th>
                                                <th>View Product</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Loyalty Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>-</td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Loyalty Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>-</td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
 
export default Discount;