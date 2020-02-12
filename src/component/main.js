import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import { PostData } from './restaurant/services/postData.js';
import ForgotPassword from './forgot/forgotPassword.js';

class MainPage extends Component {	
	constructor(props){
		super(props);
		this.state = {
			name:'',
			password:'',
			redirect:false,
			role:'',
			error:'',
			remeber:false,
			disable:true,
			user:''
		}
		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
		this.remeberMe = this.remeberMe.bind(this);
	}

	componentDidMount(){
		if (localStorage.chkbx && localStorage.chkbx !== '') {
			var username = localStorage.uname;
			var password = localStorage.pwd;
			$('#username').attr("value", username);
			$('#pwd').attr("value", password);
			$("#cbx").attr('checked','checked');
		}
		else{
			$('#username').attr("value", '');
			$('#pwd').attr("value", '');
			localStorage.chkbx = '';
		}
	}


	login(){
		if(localStorage.chkbx==='on'){
			localStorage.uname = $('#username').val();
			localStorage.pwd = $('#pwd').val();
			this.state.name = localStorage.uname;
			this.state.password = localStorage.pwd;			
		}
		if(this.state.name && this.state.password){
			PostData('login', this.state).then((result) => {
				let responseJson = result;
				if(responseJson.response.result===1){
					// this.props.routingPath(true)
					localStorage.setItem('username',responseJson.response.data[0].name);
					localStorage.setItem('userId',responseJson.response.data[0].id);
					localStorage.setItem('userData',responseJson.response);
					localStorage.setItem('access_token',responseJson.response.token);
					localStorage.setItem('user_type',responseJson.response.data[0].user_type)
					this.setState({user:localStorage.getItem('user_type')})
					this.setState({error:''});
					if(responseJson.response.data[0].user_type==="restaurant"){
						this.setState({role:'restaurant'});
					}else if(responseJson.response.data[0].user_type==="superadmin"){
						this.setState({role:'super-admin'});
					}
					this.setState({redirect:true});
					
				}else{
					this.setState({error:'Name or Password mismatched'});					
				}
				
			});
		}
	}
	onChange(e){
		this.setState({[e.target.name]:e.target.value});
		if(e.target.value !== '') {
			this.setState({disable:false})
		} else {
			this.setState({disable:true})
		}
	}
	// remeberMe(){
	//     /*const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
	//     if(value===true){
	//         localStorage.uname = $('#username').val();
	//         localStorage.pwd = $('#pwd').val();
	//         localStorage.chkbx = $('#cbx').val();
	//         this.setState({remeber:true});
	//     }else if(value===false){
	//         localStorage.clear();
	//         this.setState({remeber:false});
	//         window.location.reload();
	//     }*/
		
	//     if($("#cbx"). prop("checked")){
	//         localStorage.uname = $('#username').val();
	//         
	//         localStorage.pwd = $('#pwd').val();
	//         localStorage.chkbx = $('#cbx').val();
	//         this.setState({remeber:true});
	//     }else{
	//         localStorage.clear();
	//         this.setState({remeber:false});
	//         window.location.reload();
	//     }
	// }

	remeberMe() {		
		if(this.state.disable === false && ($("#cbx").prop("checked"))) {
			localStorage.chkbx = $('#cbx').val();
		} else {			
			localStorage.clear();
			// window.location.reload();
		}	
	}
	
	render(){
		
		// if(this.state.redirect){
		//     
		//     return(<Redirect exact to={this.state.role} />)
		// }

		if(this.state.redirect === true && this.state.user === 'restaurant') {
			return(<Redirect exact to="/restaurant"/>)
		} else if(this.state.user === "superadmin") {
			return(<Redirect exact to ="/super-admin"/>)
		}
		return(
			<div className="bg-login" style={{minHeight: '47em'}}>
				<div className="container">
					<div className="row">
						<div className="clearfix"></div><br/>
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<div className="text-center">
								<img src={process.env.PUBLIC_URL+"/restaurant/images/logo-big.png"} alt=""/>
							</div>
							<div id="loginPanel">
							<div className="login">
								<div className="text-center">
									<h5 className="text-primary"><strong>Sign In</strong></h5>
									<p><small>Please enter your details to log in.</small></p>
									<h6>{this.state.error}</h6>
								</div>
								<div className="clearfix"></div><br/>
								<form action="#" method="">
									<div>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"></i></span>
											<input type="text" className="form-control" id="username" name="name" onChange={this.onChange} placeholder="Name" style={{borderLeft: '0px',paddingLeft: '5px'}} autoFocus required />
										</div>
										<div className="clearfix"></div><br/>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-lock"></i></span>
											<input type="password" className="form-control" id="pwd"  name="password" onChange={this.onChange} placeholder="Password" style={{borderLeft: '0px',paddingLeft: '5px'}} required/>
										</div>
										<div className="clearfix"></div><br/>
										<div className="form-group">
											<label htmlFor="cbx" className="label-cbx">
												<input id="cbx"  type="checkbox"  disabled={this.state.disable} onClick={this.remeberMe}/>
												{/* <input id="cbx" type="checkbox" onClick={this.remeberMe} className="invisible"/> */}
												{/* <div className="checkbox" style={{marginTop: '-2px'}}>
													<svg width="20px" height="20px" viewBox="0 0 20 20">
														<path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
														<polyline points="4 11 8 15 16 6"></polyline>
													</svg>
												</div> */}
												<span>Remember Me</span>
											</label>
										</div>
										<div className="clearfix"></div>
										<div className="form-group">
											<button type="button" onClick={this.login} className="btn btn-warning btn-block">Sign In</button>
										</div>
										{/*<div className="alert alert-info" style={{color: '#31708f',marginBottom: '0px',fontSize: '13px'}}>
											<strong>Note:</strong> There is different Login panel for Merchant Admin and Merchant Employee for different security reasons.
										</div>*/}
										
										<div className="clearfix"></div>
									</div>
								</form>
								
								<div className="clearfix"></div>
							</div>
							</div>
							<ForgotPassword />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainPage;