import React, { Component } from 'react';
import $ from "jquery";
import { PostData } from './services/postData.js';

class CompanyInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id:'',
            company_status:'',
            company_name:'',
            reg_number:'',
            business_entity:[],
            document_image:'',
            documentImageError:'',
            success:'',
            pri_dire_name:'',
            pri_mobile:'',
            pri_email:'',
            pri_card_number:'',
            pri_card_image:'',
            sec_card_image:'',
            sec_dire_name:'',
            sec_mobile:'',
            sec_email:'',
            sec_card_number:'',
            account_number:'',
            busi_acc_number:'',
            busi_bank_name:'',
            debit_holder_name:'',
            debit_card_number:'',
            rev_card_detail:'',
        }
        this.companyInfo = this.companyInfo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onUploadDoc = this.onUploadDoc.bind(this);
        this.onUploadPhoto = this.onUploadPhoto.bind(this);
        this.primaryCompany = this.primaryCompany.bind(this);
        this.onUploadSec = this.onUploadSec.bind(this);
        this.secondaryCompany = this.secondaryCompany.bind(this);
        this.bankInfo = this.bankInfo.bind(this);
    }
    componentDidMount = () => {
        let userId = localStorage.getItem('userId');
        this.setState({user_id:userId});
        
        $('input[type="radio"]').on('click',function(){
            var inputValue = $(this).attr("value");
            var targetbox = $("." + inputValue);
            $(".box-new").not(targetbox).hide();
            $(targetbox).show();
        });
    }
    onUploadDoc = event => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if(file.size < 307200){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({ 
                        document_image: reader.result
                    });
                }
            }else{
                this.setState({documentImageError:'File is too big'})
                console.log("File is too big");
            }
        }
      }

      onUploadPhoto = event => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if(file.size < 307200){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({ 
                        pri_card_image: reader.result
                    });
                }
            }else{
                //this.setState({documentImageError:'File is too big'})
                console.log("File is too big");
            }
        }
      }
      onUploadSec = event => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if(file.size < 307200){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({ 
                        sec_card_image: reader.result
                    });
                }
            }else{
                //this.setState({documentImageError:'File is too big'})
                console.log("File is too big");
            }
        }
      }

    companyInfo(event){
        event.preventDefault();
        PostData('add_company',this.state).then((result)=>{
            let responseJson = result;
            this.setState({success:responseJson.response.msg});
       });
    }
    primaryCompany(event){
        event.preventDefault();
        PostData('add_company',this.state).then((result)=>{
            let responseJson = result;
            this.setState({success:responseJson.response.msg});
       });
    }
    secondaryCompany(event){
        event.preventDefault();
        PostData('add_company',this.state).then((result)=>{
            let responseJson = result;
            this.setState({success:responseJson.response.msg});
       });
    }
    bankInfo(event){
        event.preventDefault();
        PostData('add_company',this.state).then((result)=>{
            let responseJson = result;
            this.setState({success:responseJson.response.msg});
       });
    }

    onChange(e){
        const checkedArr = [];
        let values;
        if (e.target.type !== 'checkbox') {
            values = e.target.value;
            } else if(e.target.name === 'business_entity') {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedArr.push(checkeds[i].value);
                }
            }
            values = checkedArr.splice(1, 3);
            
        }
        this.setState({[e.target.name]:values})
    }
    

    render() {
        const boxNew = {
            display: 'none'
        }
        const yes = {
                backgroundColor: 'none'
            }
        const no = {
                backgroundColor: 'none'
            }
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="clearfix"></div><br/>
                            <div className="thumbnail form-horizontal">
                                <div className="clearfix"></div><br/>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Are you a Registeyes Company?</label>
                                        <div className="col-md-5" style={{paddingTop: '10px'}}>
                                            <div className="styled-input-single" style={{display: 'inline-block'}}>
                                                <input type="radio" name="company_status" onChange={this.onChange} id="yes" value="yes"/>
                                                <label htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="styled-input-single" style={{display: 'inline-block',marginLeft: '25px'}}>
                                                <input type="radio" name="company_status" onChange={this.onChange} id="no" value="no"/>
                                                <label htmlFor="no">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                            <span>{this.state.success}</span>
                            <div className="yes box-new" style={{...boxNew, ...yes}}>
                                <h5><strong>Company Info</strong></h5>
                                <div className="thumbnail">
                                    <div className="clearfix"></div><br/>
                                    <div className="col-md-12">
                                        <form action="#" onSubmit={this.companyInfo} className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Company Name</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control" name="company_name" onChange={this.onChange} placeholder="Company Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Company Registration Number</label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control" name="reg_number" onChange={this.onChange} placeholder="Company Registration Number"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Business Entity</label>
                                                <div className="col-md-5">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Sole Proprietor" onChange={this.onChange} /> Sole Proprietor
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Partnership" onChange={this.onChange}/> Partnership
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Sdn. Bhd. Company" onChange={this.onChange}/> Sdn. Bhd. Company
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Upload Documents</label>
                                                <div className="col-md-5">
                                                    <input type="file" name="document_image"  onChange={this.onUploadDoc} accept="image/x-png,image/gif,image/jpeg" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label"></label>
                                                <div className="col-md-2">
                                                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                                <div>
                                    <div>
                                        <h5 style={{marginTop: '0px'}}><strong>Primary Company Director</strong></h5>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="thumbnail">
                                        <div className="clearfix"></div><br/>
                                        <div className="col-md-12">
                                            <form action="#" onSubmit={this.primaryCompany} className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="pri_dire_name" onChange={this.onChange} className="form-control" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Phone Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="pri_mobile" onChange={this.onChange} placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Email</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="pri_email" onChange={this.onChange}  placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Identity Card Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="pri_card_number" onChange={this.onChange} placeholder="Identity Card Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Upload Photo of Identity Card</label>
                                                    <div className="col-md-5">
                                                        <input type="file" name="pri_card_image"  onChange={this.onUploadPhoto} accept="image/x-png,image/gif,image/jpeg"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label"></label>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5><strong>Secondary Company Director (Optional)</strong></h5>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="thumbnail">
                                        <div className="clearfix"></div><br/>
                                        <div className="col-md-12">
                                            <form action="#" onSubmit={this.secondaryCompany} className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_dire_name" onChange={this.onChange} className="form-control" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Phone Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_mobile" onChange={this.onChange} className="form-control" placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Email</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_email" onChange={this.onChange} className="form-control" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Identity Card Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_card_number" onChange={this.onChange} className="form-control" placeholder="Identity Card Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Upload Photo of Identity Card</label>
                                                    <div className="col-md-5">
                                                        <input type="file" name="sec_card_image" onChange={this.onUploadSec} accept="image/x-png,image/gif,image/jpeg"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label"></label>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5><strong>Banking Info</strong> (To be connected to Payment Gateway)</h5>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="thumbnail">
                                        <div className="clearfix"></div><br/>
                                        <div className="col-md-12">
                                            <form action="#" onSubmit={this.bankInfo} className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Business Bank Account Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="account_number" onChange={this.onChange} className="form-control" placeholder="Business Bank Account Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Business Bank Account No.</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="busi_acc_number" onChange={this.onChange} placeholder="Business Bank Account No."/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Business Bank Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="busi_bank_name" onChange={this.onChange} placeholder="Business Bank Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Debit Card Holder Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="debit_holder_name" onChange={this.onChange} placeholder="Debit Card Holder Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Debit Card Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="debit_card_number" onChange={this.onChange} placeholder="Debit Card Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Debit Card Reverse Card Number Details</label>
                                                    <div className="col-md-5">
                                                        <input type="text" className="form-control" name="rev_card_detail" onChange={this.onChange} placeholder="Debit Card Reverse Card Number Details"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label"></label>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="no box-new" style={{...boxNew, ...no}}>
                                <h5><strong>Business Owner</strong></h5>
                                <div className="thumbnail">
                                    <div className="clearfix"></div><br/>
                                    <div className="col-md-12">
                                        <form action="#" onSubmit={this.companyInfo} className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Business Owner Name</label>
                                                <div className="col-md-5">
                                                    <input type="text" name="company_name" onChange={this.onChange}  className="form-control" placeholder="Business Owner Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Business Registration Number</label>
                                                <div className="col-md-5">
                                                    <input type="text" name="reg_number" onChange={this.onChange} className="form-control" placeholder="Business Registration Number"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Business Entity</label>
                                                <div className="col-md-5">
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Sole Proprietor" onChange={this.onChange}/> Sole Proprietor
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Partnership" onChange={this.onChange}/> Partnership
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" name="business_entity" id="business_entity" value="Sdn. Bhd. Company" onChange={this.onChange}/> Sdn. Bhd. Company
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Upload Documents</label>
                                                <div className="col-md-5">
                                                    <input type="file"  name="document_image"  onChange={this.onUploadDoc} accept="image/x-png,image/gif,image/jpeg" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label"></label>
                                                <div className="col-md-2">
                                                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                                <div>
                                    <div>
                                        <h5 style={{marginTop: '0px'}}><strong>Primary Business Owner</strong></h5>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="thumbnail">
                                        <div className="clearfix"></div><br/>
                                        <div className="col-md-12">
                                            <form action="#" onSubmit={this.primaryCompany} className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="pri_dire_name" onChange={this.onChange} className="form-control" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Phone Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="pri_mobile" onChange={this.onChange} className="form-control" placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Email</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="pri_email" onChange={this.onChange} className="form-control" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Identity Card Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="pri_card_number" onChange={this.onChange}  className="form-control" placeholder="Identity Card Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Upload Photo of Identity Card</label>
                                                    <div className="col-md-5">
                                                        <input type="file" name="pri_card_image"  onChange={this.onUploadPhoto} accept="image/x-png,image/gif,image/jpeg"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label"></label>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h5><strong>Secondary Business Owner (Optional)</strong></h5>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="thumbnail">
                                        <div className="clearfix"></div><br/>
                                        <div className="col-md-12">
                                            <form action="#" onSubmit={this.secondaryCompany} className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Name</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_dire_name" onChange={this.onChange} className="form-control" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Phone Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_mobile" onChange={this.onChange} className="form-control" placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Email</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_email" onChange={this.onChange} className="form-control" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Identity Card Number</label>
                                                    <div className="col-md-5">
                                                        <input type="text" name="sec_card_number" onChange={this.onChange} className="form-control" placeholder="Identity Card Number"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label">Upload Photo of Identity Card</label>
                                                    <div className="col-md-5">
                                                        <input type="file" name="sec_card_image" onChange={this.onUploadSec} accept="image/x-png,image/gif,image/jpeg"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="form-group">
                                                    <label className="col-md-4 control-label"></label>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default CompanyInfo;