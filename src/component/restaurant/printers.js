import React, { Component } from 'react';
import { PostData, GetData, DeleteData, EditData } from './services/postData.js';
import $ from 'jquery';

class Printer extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            user_id:'',
            success:'',
            name:'',
            layout:'',
            model:'',
            business_name:'',
            address:'',
            contact:'',
            sst_num:'',
            logo:'',
            showLogoImage:'',
            LogoImageError:'',
            cash_drawer_conn:false,
            sResult:'',
            allData:[],
            deleteMsgStatus:'',
            editData:[],
            checked:false,
        }
        this.printerSave = this.printerSave.bind(this);
        this.onCheckedCash = this.onCheckedCash.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onLogo = this.onLogo.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }

    componentWillMount(){
        let userId = localStorage.getItem("userId");
        this.setState({user_id:userId});
    }
    componentDidMount(){
        GetData('all_printers').then((result)=> {
            let responseData = result;
            let data = responseData[1].data;
            this.setState({allData:data});
        });
    }

    onLogo = event => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if(file.size < 307200){
                $("#remove_image").show();
                this.setState({showLogoImage:URL.createObjectURL(event.target.files[0])});
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({
                        file:file,
                        logo: reader.result
                    });
                }
            }else{
                this.setState({LogoImageError:'File is too big'})
                
            }
        }
      }

    printerSave(event){
        event.preventDefault();
        if(this.state.name){
            console.log("sending data",this.state);
            PostData('add_printer1',this.state).then((result)=>{

                console.log(result);
                let responseJson = result;
                console.log(responseJson);
                GetData('all_printers').then((result)=> {
                    let responseData = result;
                    let data = responseData[1].data;
                    this.setState({allData:data});
                    console.log("get data",this.state.allData);
                });
                this.setState({success:`${responseJson.response.msg.name} added succesfully`});
                this.setState({sResult:responseJson.response.result});
                //window.history.push('/restaurant/printers');
            });
        }
        //
    }
    deletePrinter(printerId){
        DeleteData('delete_printer',printerId).then((result) => {
            let deleteResponse = result;
            this.setState({deleteMsgStatus:deleteResponse.response.msg});
            //if(deleteResponse.response.result===1){
              // window.history.push('/restaurant/printers');
               console.log("working");
          //  }

          GetData('all_printers').then((result)=> {
            let responseData = result;
            let data = responseData[1].data;
            this.setState({allData:data});
            console.log("get data",this.state.allData);
        });
            
        });
        //
    }
    editPrinter(printerId){
        
        EditData('edit_printer',printerId).then((result)=> {
            console.log(result);
            
            let editResponse = result;
            
            
            this.setState({editData:editResponse.response.data[0]});
            this.setState({id:this.state.editData.id});
            //console.log("state",this.state.id);
            $("#name").val(this.state.editData.name);
            $("#business_name").val(this.state.editData.business_name);
            $("#address").val(this.state.editData.address);
            $("#contact").val(this.state.editData.contact);
            $("#sst_num").val(this.state.editData.sst_num);
            if(this.state.editData.cash_drawer_conn==="1"){
                $("#cash_drawer_conn").attr('checked','checked');
            }else{
                $("#cash_drawer_conn").prop('');
            }
            
        });
    }
    removeImage(){
        $("#logo").val("");
        this.setState({
            logo:''
        });
        $("#remove_image").hide();
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onCheckedCash(e){
        let value = e.target.type==='checkbox' ? e.target.checked : e.target.value;
        if(value===true){
            
            this.setState({cash_drawer_conn:!this.state.cash_drawer_conn});
        }else{
            
            this.setState({cash_drawer_conn:!this.state.cash_drawer_conn});
        }
    }
    render() {
        
        
        if(this.state.sResult==='1'){
            window.location.reload();
        }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Printers
                    </h1>
                    <span style={{color:"green"}}>{this.state.success}</span>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <form method="" className="form-horizontal" onSubmit={this.printerSave}>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Name</label>
                                            <div className="col-md-5">
                                                <input type="text" id="name" className="form-control input-sm" name="name" onChange={this.onChange} placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Layout Type</label>
                                            <div className="col-md-5">
                                                <select className="form-control input-sm" name="layout" onChange={this.onChange}>
                                                    <option value='' disabled selected>Select</option>
                                                    <option selected={this.state.editData.layout==='Kitchen' ? 'selected' : ''} value="Kitchen">Kitchen</option>
                                                    <option selected={this.state.editData.layout==='Bar' ? 'selected' : ''} value="Bar">Bar</option>
                                                    <option selected={this.state.editData.layout==='Kitchen & Bar' ? 'selected' : ''} value="Kitchen & Bar">Kitchen & Bar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Model</label>
                                            <div className="col-md-5">
                                                <select className="form-control input-sm" name="model" onChange={this.onChange}>
                                                    <option value='' disabled selected>Select</option>
                                                    <option selected={this.state.editData.model==='Model 1' ? 'selected' : ''} value="Model 1">Model 1</option>
                                                    <option selected={this.state.editData.model==='Model 2' ? 'selected' : ''} value="Model 2">Model 2</option>
                                                    <option selected={this.state.editData.model==='Model 3' ? 'selected' : ''} value="Model 3">Model 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Cash Drawer Connection</label>
                                            <div className="col-md-5">
                                                <input type="checkbox" id="cash_drawer_conn" name="cash_drawer_conn" onChange={this.onCheckedCash} />
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Logo</label>
                                            {<img src={this.state.editData.logo ? this.state.editData.logo : ''} alt="Logo" style={{width:50}} />}
                                            <div className="col-md-5">
                                                <input type="file" name="logo" id="logo" onChange={this.onLogo} accept="image/x-png,image/gif,image/jpeg" />
                                            </div>
                                            <span id="remove_image" onClick={this.removeImage} style={{cursor: 'pointer',display:'none'}}><i className="fa fa-remove"></i></span>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Business Name</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control input-sm" id="business_name" name="business_name" onChange={this.onChange} placeholder="Business Name"/>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Address</label>
                                            <div className="col-md-5">
                                                <textarea rows="3" className="form-control input-sm" name="address" id="address" onChange={this.onChange} placeholder="Address"></textarea>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">Contact Number</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control input-sm" name="contact" id="contact" onChange={this.onChange} placeholder="Contact Number"/>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label">SST Number</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control input-sm" id="sst_num" name="sst_num" onChange={this.onChange} placeholder="SST Number"/>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-3 control-label"></label>
                                            <div className="col-md-2">
                                                <button type="submit" className="btn btn-primary btn-block">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <h4>Printers Listing</h4>
                            <span style={{color:'red'}}>{this.state.deleteMsgStatus}</span>
                            <div className="thumbnail">
                                <table className="table table-striped" style={{marginBottom: '0px'}}>
                                    <thead>
                                        <tr className="bg-info">
                                            <th>Name</th>
                                            <th>Layout Type</th>
                                            <th>Model</th>
                                            <th>Cash Drawer Connection</th>
                                            <th>Logo</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.allData.map((printerData)=>
                                        <tr key={printerData.id}>
                                        <td>{printerData.name}</td>
                                        <td>{printerData.layout}</td>
                                        <td>{printerData.model}</td>
                                        <td>{printerData.cash_drawer_conn===1 ? <i className="fa fa-check text-success"></i> : <i className="fa fa-close" style={{color:'red'}}></i> }</td>
                                        <td><img src={printerData.logo} style={{width:'2em'}} alt="" /></td>
                                        <td><a href="#" className="label label-success" style={{fontSize: '12px'}}>Online</a></td>
                                        <td>
                                            <button className="btn btn-primary btn-xs" onClick={this.editPrinter.bind(this,printerData.id)}>Edit</button> &nbsp;
                                            <button className="btn btn-danger btn-xs" onClick={this.deletePrinter.bind(this,printerData.id)}>Delete</button>
                                        </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Printer;