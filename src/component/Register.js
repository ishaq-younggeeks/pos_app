import React,{Component} from 'react';
import axios from 'axios';
import Modal from "react-responsive-modal";
import { Redirect } from 'react-router-dom';

class Register extends Component{

	constructor() {
		super()
		this.state={
			type:'',
			name:'',
			email:'',
			password:'',
			number:'',
			OpenModal:false,
			otpcheck:'',
			tokencheck:'',
			registered:false,
			otp:'',
			token:''
		}
		this.onChange=this.onChange.bind(this)
		this.onSubmit=this.onSubmit.bind(this)
		this.onCloseModal=this.onCloseModal.bind(this)
		this.otpSubmit=this.otpSubmit.bind(this)
	}



	
	onChange(e) {
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e)	{
		e.preventDefault(this.state.type)

		if(!this.state.number.length===10){
				alert('Number Invalid')
		}else{
			const data ={
				type:this.state.type,
				name:this.state.name,	
				email:this.state.email,
				password:this.state.password,
				number:this.state.number
			}
			axios.post('http://posapp.younggeeks.net/posApi/api/register2',data)
			.then((res)=>{
				this.setState({OpenModal:true});
				const responsedata= res.data.response.data
				this.setState({otp:responsedata.otp});
				this.setState({token:responsedata.remember_token});
				localStorage.setItem('OTPToken',responsedata.remember_token);         
				this.setState({tokencheck:JSON.parse(localStorage.getItem('OTPToken'))});  
			})
			.catch(err=>{
				console.log(err);
			})
		}
		
	}

	otpSubmit(e) {
		e.preventDefault()
		const data ={
			otp:this.state.otpcheck,
			email:this.state.email,
        }
		axios.post('http://posapp.younggeeks.net/posApi/api/otp',data)
	    .then((res)=>{			
			this.setState({registered:true});
	    })
	    .catch(err=>{
		    console.log(err);
	    })
	}

	onCloseModal() {
		this.setState({OpenModal:false});
	}



	render() {
		if(this.state.registered===true){
			return(<Redirect exact to='/' />)
		}
		return(
			<>
			<div className="bg-login" style={{minHeight: '47em'}}>
				<div className="Container">
					<div className="row">						
						<div className="clearfix"></div><br/>
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<div className="text-center">
								<img src={process.env.PUBLIC_URL+"/restaurant/images/logo-big.png"} alt=""/>
							</div>
							<div id="loginPanel">
								<div className="login">
									<form onSubmit={this.onSubmit} name="Register">
										<div className="text-center">
											<h5 className="text-primary"><strong>Register</strong></h5>
											<p><small>Please enter your details to Register</small></p>
											<h6>{this.state.error}</h6>
										</div>										
										<div className="input-group">				
											<span className="input-group-addon"><i className="fa fa-user"></i></span>							
											<input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={this.onChange} required/>
										</div><div className="clearfix"></div><br/>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"></i></span>	
											<input type="email" className="form-control" name="email" placeholder="Enter Your Email" value={this.state.email}
											onChange={this.onChange} required/>
										</div><div className="clearfix"></div><br/>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-phone"></i></span>	
											<input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}" className="form-control" name="number" placeholder="Enter Number (987-1293-321)" value={this.state.number}
											onChange={this.onChange} required/>
										</div><div className="clearfix"></div><br/>
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-lock"></i></span>	
											<input type="password" className="form-control" name="password" placeholder="Enter The password" value={this.state.password}
											onChange={this.onChange} required/>
										</div><div className="clearfix"></div><br/>
										<div className="input-group">
											<h6><b>Register as:</b></h6>
											<input type="radio" name="type" value="user" onChange={this.onChange} required/> User &nbsp;
											<input type="radio" name="type" value="restaurant" onChange={this.onChange} required/> Restaurant
										</div>
										<div className="clearfix"></div><br/>
										<button type="submit" className="btn btn-lg btn-primary btn-block">Register In </button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
            </div>
			<Modal open={this.state.OpenModal}>
				<form onSubmit={this.otpSubmit} style={{width:'25vw'}}>
					<center> <h4>Enter The OTP</h4> </center>
					<div className="form-group">
						<label htmlFor="password">OTP</label>
						<input type="text" className="form-control" name="otpcheck" placeholder="Enter OTP" onChange={this.onChange}/>
                    </div>
					<button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
				</form>
			</Modal>
			</>
        )
	}
}

export default Register