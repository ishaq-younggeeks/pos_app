import React, { Component } from 'react';
import $ from 'jquery';
import { PostData } from '../restaurant/services/postData.js';
class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:'',
            email:'',
            emailMsg:'',
            emailResult:'',
            otpMsg:'',
            otp:'',
            otpResult:'',
            successMsg:'',
            matchingFailMsg:'',
            successResult:'',
            otpdisabled: true,
            disabled: true,
        }
        this.onEmail = this.onEmail.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);
        this.onBlurOtp = this.onBlurOtp.bind(this);
        this.onOtp = this.onOtp.bind(this);
        this.resetPassword= this.resetPassword.bind(this);
    }
    forgotForm(){
        $("#loginPanel").hide();
        $("#forgotForm").hide();
        $("#ForgotPanel").show();
    }
    lognForm(){
        $("#loginPanel").show();
        $("#forgotForm").show();
        $("#ForgotPanel").hide();
    }
    onEmail(e){
        this.setState({email:e.target.value});
    }
    onOtp(e){
        this.setState({otp:e.target.value});
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onBlurEmail(e){
        if(this.state.email){
            PostData('send-otp', this.state).then((result) => {
                let responseJson = result;
                
                
                this.setState({emailMsg:responseJson.response.msg});
                this.setState({emailResult:responseJson.response.result});
                if(this.state.emailResult==='1'){
                    this.setState( {otpdisabled: !this.state.otpdisabled} );
                }
            });
        }
      }
      onBlurOtp(e){
        if(this.state.otp){
            PostData('confirm-otp', this.state).then((result) => {
                let responseJson = result;
                
                this.setState({otpMsg:responseJson.response.msg});
                this.setState({otpResult:responseJson.response.result});
                if(this.state.otpResult==='1'){
                    this.setState( {disabled: !this.state.disabled} );
                }
            });
        }
      }
      resetPassword(e){
        if(this.state.password && this.state.conf_password){
            PostData('change-pass', this.state).then((result) => {
                let responseJson = result;
                
                this.setState({successMsg:responseJson.response.msg});
                this.setState({successResult:responseJson.response.result});
                if(this.state.successResult==='1'){
                    this.setState( {disabled: !this.state.disabled} );
                    this.setState( {otpdisabled: !this.state.otpdisabled} );
                }
            });
        }else{
            this.setState({matchingFailMsg:"Password doen\'t match"});
        }
      }
    render(){
        return(
            <>
            <p id="forgotForm" onClick={this.forgotForm} style={{float: 'right',color: '#2196f3',marginTop: '-2em',marginRight: '1em',cursor: 'pointer'}}>Forgot Password</p>
            <div id="ForgotPanel" style={{display:'none'}}>
                <div className="login">
                            <div className="text-center">
                                <h5>{this.state.error}</h5>
                                <h5 className="text-primary"><strong>Reset Password</strong></h5>
                                <p><small>Please enter your details to log in.</small></p>
                            </div>
                            <div className="clearfix"></div><br/>
                            <form action="#" method="">
                                <div>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" id="email" onBlur={this.onBlurEmail} name="email" onChange={this.onEmail} placeholder="Enter your registerd email" style={{borderLeft: '0px',paddingLeft: '5px'}} required />
                                    </div>
                                    <span>{this.state.emailMsg}</span>
                                    <div className="clearfix"></div><br/>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-key"></i></span>
                                        <input type="text" className="form-control" id="otp"  name="otp" onBlur={this.onBlurOtp} onChange={this.onOtp} disabled = {(this.state.otpdisabled)? "disabled" : ""} placeholder="OTP" style={{borderLeft: '0px',paddingLeft: '5px'}} required/>
                                    </div>
                                    <span>{this.state.otpMsg}</span>
                                    <div className="clearfix"></div><br/>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input type="password" className="form-control" id="password"  name="password" onChange={this.onChange}  disabled = {(this.state.disabled)? "disabled" : ""} placeholder="New Password" style={{borderLeft: '0px',paddingLeft: '5px'}} required/>
                                    </div>
                                    <div className="clearfix"></div><br/>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input type="password" className="form-control" id="conf_password" disabled = {(this.state.disabled)? "disabled" : ""} name="conf_password" onChange={this.onChange} placeholder="Confirm Password" style={{borderLeft: '0px',paddingLeft: '5px'}} required/>
                                    </div>
                                    <span>{this.state.matchingFailMsg}</span>
                                    <div className="clearfix"></div><br/>
                                    <div className="form-group">
                                        <button type="button" onClick={this.resetPassword} className="btn btn-warning btn-block"  disabled = {(this.state.disabled)? "disabled" : ""}>Reset Password</button>
                                    </div>
                                    <span>{this.state.successMsg}</span>
                                    <div className="clearfix"></div><br/>
                                </div>
                            </form>
                            <p id="LogiForm" onClick={this.lognForm} style={{float: 'right',color: '#2196f3',marginTop: '-1.5em',marginRight: '1em',cursor: 'pointer'}}>Login Form</p>
                            <div className="clearfix"></div>
                        </div>
            </div>
            </>
        );
    }
}

export default ForgotPassword;