import React, { Component } from 'react';
import $ from 'jquery';
import { PostData, GetData, DeleteData } from './services/postData';
import Modal from 'react-awesome-modal';
import moment from 'moment';
import axios from 'axios'
import {Config} from '../../config/Config'

class Promotion extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id:'',
            success:'',
            image:'',
            allData:[],
            ImageError:'',
            showLogoImage:'',
            eating_opt:'',
            sResult:'',
            timing_to:'',
            timing_from:'',
            eating_opt_arr : {
                "delivery":"Delivery","dine in":"Dine-in","take away":"Take Away","drive throughout":"Drive Throughout"
            },
            editingFields:"",
            editData:[],
            name:'',
            description:'',
            toggle:false,
            toggleData:'',
            editId:'',
            id:0,
            editName:'',
            editDescriptiion:'',
            editPrice:'',
            editTimingFrom:'',
            editTimingTo:'',
            editDateFrom:'',
            myToggle:0,
            editDateTo:'',
            editEatingOpt:[],
            price:'',
            date_from:'',
            date_to:'',
            defaultTimingTo:'',
            defaultTimingFrom:'' ,
            check:'1',
            checked1:true,
            checked2:true,
            checked3:true,
            checked4:true,
        }
        this.onChange = this.onChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.onTimingFrom = this.onTimingFrom.bind(this);
        this.onTimingTo = this.onTimingTo.bind(this);        
    }

    componentWillMount(){
        let userId = localStorage.getItem("userId");
        this.setState({user_id:userId});
    }

    componentDidMount(){
<<<<<<< HEAD
        GetData('all-promo').then((result) => {            
=======
        GetData('all-promo').then((result) => {
            
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
            let responseData = result;
            this.setState({allData:responseData.data});
        })    
    }

    onLogo = event => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
<<<<<<< HEAD
                   
=======
            
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
            if(file.size < 307200){
                $("#remove_image").show();
                this.setState({showLogoImage:URL.createObjectURL(event.target.files[0])});
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({ image: reader.result });
                }
            } else {
<<<<<<< HEAD
                this.setState({ImageError:'File is too big'})               
=======
                this.setState({LogoImageError:'File is too big'})
                
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
            }
        }
    }

    removeImage(){
        $("#promoImage").val("");
        this.setState({
            image: '',
            showLogoImage:''
        });
        $("#remove_image").hide();
    }

    formSubmit(event,id){
        (event).preventDefault();
        let data;
        if(id < this.state.editId) {   
            data = {
                user_id:this.state.user_id,
                name:this.state.name||this.state.editName,
                id:this.state.editId,
                description:this.state.description||this.state.editDescriptiion,
                price:this.state.price||this.state.editPrice,
                timing_from:this.state.timing_from||this.state.defaultTimingFrom,
                timing_to:this.state.timing_to||this.state.defaultTimingTo,
                date_from:this.state.date_from||this.state.editDateFrom,
                date_to:this.state.date_to||this.state.editDateTo,
                eating_opt:this.state.eatingOpt||this.state.editEatingOpt ,
                image:this.state.image||this.state.showLogoImage
            }
<<<<<<< HEAD
            if(this.state.eating_opt) {
                data.eating_opt=JSON.stringify(Object.assign({}, this.state.eating_opt)); 
            } else {
                data.eating_opt=JSON.stringify(Object.assign({}, this.state.editEatingOpt)); 
              } 
        } else {            
            data = {
                user_id:this.state.user_id,
                name:this.state.name,
                id:this.state.editId,
                description:this.state.description,
                price:this.state.price,
                timing_from:this.state.timing_from,
                timing_to:this.state.timing_to,
                date_from:this.state.date_from,
                date_to:this.state.date_to,
                eating_opt:this.state.eating_opt,
                image:this.state.image
            }              
          }                 
        let BaseUrl = `${Config.url}`
        axios.post(BaseUrl + 'add-promotion', data)
            .then((response) => {  
                this.setState({success:1})            
        }) 
        .catch(error => {
            console.log(error);
        }); 
        
    }  
    uncheck(){
        
    }  
=======
            
            PostData('add-promotion',data).then((result) => {
                
                let responseJson = result;
                this.setState({success:responseJson.response.msg});
                this.setState({sResult:responseJson.response.result});
            });
        } else {
            
            PostData('add-promotion',this.state).then((result) => {
                
                
                let responseJson = result;
                this.setState({success:responseJson.response.msg});
                this.setState({sResult:responseJson.response.result});
            });
        }
    }

>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
    onChange(e){
        const checkedArr = [];
        let values;
        if (e.target.type !== 'checkbox') { values = e.target.value; } 
        else if(e.target.name === 'eating_opt') {
            const checkeds = document.getElementsByName('eating_opt');
                for (let i = 0; i < checkeds.length; i++) {
                    if (checkeds[i].checked==true) { 
                        checkedArr.push(checkeds[i].value);               
                    }
                }                    
            values = checkedArr;                
        } 
        this.setState({
            check:'2',
            [e.target.name]:values,
        });
    }

    onTimingFrom = () => {
        var inputEle = document.getElementById('timing_from');
        var timeSplit = inputEle.value.split(':'),
            hours,
            minutes,
            meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (hours > 12) {
            meridian = 'PM';
            hours -= 12;
        } else if (hours < 12) {
            meridian = 'AM';
            if (hours == 0) {
            hours = 12;
            }
        } else {
            meridian = 'PM';
        }
        var timing_from = hours + ':' + minutes + ' ' + meridian;
        this.setState({timing_from:timing_from});
    }

    onTimingTo = () => {
        var inputEle = document.getElementById('timing_to');
        var timeSplit = inputEle.value.split(':'),
            hours,
            minutes,
            meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (hours > 12) {
            meridian = 'PM';
            hours -= 12;
        } else if (hours < 12) {    
            meridian = 'AM';
            if (hours == 0) {
            hours = 12;
            }
        } else {
            meridian = 'PM';
        }
        var timing_to = hours + ':' + minutes + ' ' + meridian;
        this.setState({timing_to:timing_to});
    }

    deletePromo(promoId){
        if (window.confirm("Delete the item?")) {
            DeleteData('delete-prom',promoId).then((result) => {
                let deleteResponse = result;
<<<<<<< HEAD
                this.setState({deleteMsgStatus:deleteResponse.response.msg});
                if(deleteResponse.response.result==1){ window.location.reload(); }                
=======
                
                this.setState({deleteMsgStatus:deleteResponse.response.msg});
                if(deleteResponse.response.result==1){
                    window.location.reload();
                }
                
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
            });
        }
    }

    edit = (item) => {
<<<<<<< HEAD
        const checkeds = document.getElementsByName('eating_opt'); 
        for (let i = 0; i < checkeds.length; i++) {
            checkeds[i].defaultChecked = false;                 
        }           
=======
        
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
        this.setState({myToggle:this.state.myToggle + 1})
        this.setState({editId:item.id})
        this.setState({editName:item.name})
        this.setState({editDescriptiion:item.description})
        this.setState({editPrice:item.price})
        let timeFrom = moment(item.timing_from,'hh:mm A').format('HH:mm');
        this.setState({editTimingFrom:timeFrom,defaultTimingFrom:item.timing_from})
        let timeTo = moment(item.timing_to,'hh:mm A').format('HH:mm');        
        this.setState({editTimingTo:timeTo,defaultTimingTo:item.timing_to})       
        let dateFrom = moment(item.date_from).format('YYYY-MM-DD');
        this.setState({editDateFrom:dateFrom})
        let dateTo = moment(item.date_to).format('YYYY-MM-DD');
        this.setState({editDateTo:dateTo})      
        this.setState({showLogoImage:item.image}) 
        this.setState({editEatingOpt:JSON.parse(item.eating_opt)}) 
        let check1= JSON.parse(item.eating_opt);      
        if(this.state.name || this.state.price || this.state.description ||this.state. timing_from||this.state.timing_to ||this.state.date_from||this.state.date_to|| this.state.eating_opt  && this.state.check=='2'){   
            if(check1[0]=='Delivery') { checkeds[0].checked = true; } 
            else { checkeds[0].checked = false; }

            if(check1[0]=='Dine-in'|| check1[1]=='Dine-in') { checkeds[1].checked = true; } 
            else { checkeds[1].checked = false; }

            if(check1[0]=='Take Away'|| check1[1]=='Take Away'|| check1[2]=='Take Away') { checkeds[2].checked = true; } 
            else { checkeds[2].checked = false; } 
        
            if(check1[0]=='Drive Through'|| check1[1]=='Drive Through'|| check1[2]=='Drive Through' || check1[3]=='Drive Through') { checkeds[3].checked = true; } 
            else { checkeds[3].checked = false; } 
        }                
    }      
    istoggleOn(data) {
        this.setState(prevState => ({ toggle: !prevState.toggle, }));
        this.setState({toggleData:data})
    }

    closeModal() {
        this.setState({ toggle : false  });
    }

    render() {
        
<<<<<<< HEAD
        console.log(this.state.image)
=======
>>>>>>> b86564253d17808ac5de17bdf2de77276cb104d7
        if(this.state.sResult==='1'){
            window.location.reload();
        }
        if(this.state.success==1){
            window.location.reload();
        }
        const fileInpuButtonInput = {
            position: 'absolute',
            top: '0px',
            opacity: '0',
            cursor: 'pointer',
            height: '30px',
            left: '14px',
            width: '95%'
        }
        const Edit = {        
            color: '#97C229',
            fontSize: '16px'
        };
        let checkb=this.state.editEatingOpt;
        return (        
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Promotions</h1>
                    <span>{this.state.deleteMsgStatus}</span>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <div className="col-md-12">
                                    <form action="#0" className="form-horizontal" onSubmit={(e) =>this.formSubmit(e,this.state.id)}>
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="name" defaultValue={this.state.editName} onChange={this.onChange} className="form-control input-sm" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Description</label>
                                                    <div className="col-sm-9">
                                                        <input type="text"  name="description" defaultValue={this.state.editDescriptiion} onChange={this.onChange} className="form-control input-sm" placeholder="Description"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Price</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" name="price" defaultValue={this.state.editPrice} onChange={this.onChange}  className="form-control input-sm" placeholder="Price"/>
                                                    </div>
                                                </div>
                                                <div className="form-group" id="refresh">
                                                    <label className="col-sm-3 control-label">Eating Option</label>
                                                    <div className="col-sm-9">
                                                        <label className="checkbox-inline">                                                                                                                    
                                                            { checkb[0]=='Delivery' ?
                                                            <input type="checkbox" value="Delivery" name="eating_opt" defaultChecked={ this.state.checked1 } onClick={this.onChange} />
                                                            :
                                                            <input type="checkbox" value="Delivery" name="eating_opt" onClick={this.onChange} />
                                                            } 
                                                            Delivery
                                                        </label>
                                                        <label className="checkbox-inline">                                                                   
                                                            { this.state.editEatingOpt[0]=='Dine-in'||this.state.editEatingOpt[1]=='Dine-in' ?
                                                            <input type="checkbox" value="Dine-in" name="eating_opt" defaultChecked={ this.state.checked2 } onClick={this.onChange} />
                                                            :
                                                            <input type="checkbox" value="Dine-in" name="eating_opt" onClick={this.onChange} />
                                                            }                                                            
                                                            Dine-in
                                                        </label>
                                                        <label className="checkbox-inline">                    
                                                            { this.state.editEatingOpt[0]=='Take Away'||this.state.editEatingOpt[1]=='Take Away'||this.state.editEatingOpt[2]=='Take Away' ?
                                                            <input type="checkbox" value="Take Away" name="eating_opt" defaultChecked={ this.state.checked3 } onClick={this.onChange} />
                                                            :
                                                            <input type="checkbox" value="Take Away" name="eating_opt" onClick={this.onChange} />
                                                            }                                                            
                                                            Take Away
                                                        </label>
                                                        <label className="checkbox-inline">                    
                                                            { this.state.editEatingOpt[0]=='Drive Through'||this.state.editEatingOpt[1]=='Drive Through'||this.state.editEatingOpt[2]=='Drive Through'||this.state.editEatingOpt[3]=='Drive Through' ?
                                                            <input type="checkbox" value="Drive Through" name="eating_opt" defaultChecked={ this.state.checked4 } onClick={this.onChange} />
                                                            :
                                                            <input type="checkbox" value="Drive Through" name="eating_opt" onClick={this.onChange} />
                                                            }                                                            
                                                            Drive Through
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label" id="image">Upload Picture</label>
                                                    <div className="col-sm-9">
                                                        <span className="btn btn-warning btn-sm btn-block fileinput-button">
                                                            <i className="glyphicon glyphicon-plus"></i>
                                                            <span className="text-white">Add Files</span>
                                                            <input type="file" id="promoImage" name="image" onChange={this.onLogo}  style={fileInpuButtonInput} />
                                                        </span>
                                                        <span> {this.state.ImageError}</span>
                                                        <span id="remove_image" onClick={this.removeImage} style={{cursor: 'pointer',display:'none',float: 'right',margin: '-55px -175px 0px 0px'}}><i className="fa fa-remove"></i></span>
                                                    </div>
                                                    <img src={this.state.showLogoImage} style={{width: '100px',float: 'right',margin: '-15px -158px 0px 0px'}} />
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Timings</label>
                                                    <div className="col-sm-8">
                                                        <div className="input-group input-group-sm">
                                                            <span className="input-group-addon">From</span>
                                                            {this.state.myToggle === 0 ? <input type="time" className="form-control"  name="timing_from"  id="timing_from" onChange={this.onTimingFrom} placeholder="Hour" style={{borderRadius: '0px'}}/>:<input type="time" className="form-control" name="timing_from" id="timing_from" defaultValue={this.state.editTimingFrom} onChange={this.onTimingFrom} placeholder="Hour" style={{borderRadius: '0px'}}/>}
                                                            <span className="input-group-addon" style={{borderLeft:'0px',borderRight: '0px'}}>To</span>
                                                            {this.state.myToggle === 0 ? <input type="time" className="form-control"  name="timing_to" id="timing_to" onChange={this.onTimingTo} placeholder="Hour" style={{borderRadius: '0px'}}/>:<input type="time" className="form-control" name="timing_to" id="timing_to" defaultValue={this.state.editTimingTo} onChange={this.onTimingTo} placeholder="Hour" style={{borderRadius: '0px'}}/>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Date</label>
                                                    <div className="col-sm-8">
                                                        <div className="input-group input-group-sm">
                                                            <span className="input-group-addon">From</span>
                                                            {this.state.myToggle === 0 ? <input type="date" className="form-control" name="date_from" onChange={this.onChange} placeholder="Date" style={{borderRadius: '0px'}}/> : <input type="date" className="form-control" name="date_from" defaultValue = {this.state.editDateFrom} onChange={this.onChange} placeholder="Date" style={{borderRadius: '0px'}}/>}
                                                            <span className="input-group-addon" style={{borderLeft:'0px',borderRight: '0px'}}>To</span>
                                                            {this.state.myToggle === 0 ? <input type="date" className="form-control" name="date_to" onChange={this.onChange} placeholder="Date" style={{borderRadius: '0px'}}/> : <input type="date" className="form-control" name="date_to" defaultValue = {this.state.editDateTo} onChange={this.onChange} placeholder="Date" style={{borderRadius: '0px'}}/>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12 text-center">
                                                <input type="submit" value="Submit" className="btn btn-gray btn-sm"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div><br/>
                            </div>
                            <h4>Listing</h4>
                            <div className="thumbnail">
                                <table className="table table-striped btm-zero">
                                    <thead>
                                        <tr>
                                            <th>Discount Name</th>
                                            <th>Price</th>
                                            <th>Dates</th>
                                            <th>Timings</th>
                                            <th colSpan="4">Eating Option</th>
                                            <th>Action</th>
                                            <th>Edit</th>
                                            <th>Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center">Delivery</td>
                                            <td className="text-center">Dine-In</td>
                                            <td className="text-center">Take Away</td>
                                            <td className="text-center">Drive Through</td>
                                            <td></td>
                                        </tr>
                                        {this.state.allData.map((promoData) =>
                                            <tr key={promoData.id}>
                                                <td>{ promoData.name.length ? promoData.name .charAt(0).toUpperCase() + promoData.name .slice(1) : promoData.name }</td>
                                                <td>RM {promoData.price}</td>
                                                <td>{ promoData.date_from } to { promoData.date_to } </td>
                                                <td>{ promoData.timing_from } to { promoData.timing_to }</td>
                                                <td className="text-center" >{ JSON.stringify(promoData.eating_opt) .includes("Delivery") ? <i className="fa fa-check-circle text-success" style={{color: '#97C229',fontSize: '16px'}}></i> : <i className="fa fa-times text-danger"></i>}</td>
                                                <td className="text-center" >{ JSON.stringify(promoData.eating_opt) .includes("Dine-in") ? <i className="fa fa-check-circle text-success" style={{color: '#97C229',fontSize: '16px'}}></i> : <i className="fa fa-times text-danger"></i>}</td>
                                                <td className="text-center" >{ JSON.stringify(promoData.eating_opt) .includes("Take Away") ? <i className="fa fa-check-circle text-success" style={{color: '#97C229',fontSize: '16px'}}></i> : <i className="fa fa-times text-danger"></i>}</td>
                                                <td className="text-center" >{ JSON.stringify(promoData.eating_opt) .includes("Drive Through") ? <i className="fa fa-check-circle text-success" style={{color: '#97C229',fontSize: '16px'}}></i> : <i className="fa fa-times text-danger"></i>}</td>
                                                <td>
                                                    <button data-toggle="tooltip" style={{background: 'none',border: 'none'}} data-placement="top" onClick={this.deletePromo.bind(this,promoData.pro_id)} title="Delete"><i className="fa fa-trash text-danger"></i></button> &nbsp;
                                                </td>
                                                <td> 
                                                    
                                                  <button className="text-center fa fa-pencil" onClick={() => this.edit(promoData)}></button>
                                                </td>
                                                <td>
                                                    <button className="text-center fa fa-info" onClick={() => this.istoggleOn(promoData)}></button>
                                                    {this.state.toggle === true ?
                                                    <Modal visible={this.state.toggle} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                                        <div style={{padding:'10px'}}>
                                                            <p><b>Name </b>: {this.state.toggleData.name}</p>
                                                            <p><b>Description</b> : {this.state.toggleData.description}</p>
                                                            <p><b>Price </b>: {this.state.toggleData.price}</p>
                                                            <p><b>Eating Option </b>: {this.state.toggleData.eating_opt}</p>
                                                            <p><b>Timing</b> : {this.state.toggleData.timing_from}-{this.state.toggleData.timing_to}</p>
                                                            <p><b>Date</b> : {this.state.toggleData.date_from}-{this.state.toggleData.date_to}</p>
                                                            <img src={this.state.toggleData.image} style={{width:'20%'}}/>
                                                        </div>
                                                    </Modal>: null} 
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
 
export default Promotion;