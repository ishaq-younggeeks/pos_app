import React,{Component} from 'react';
import axios from 'axios';
import Modal from "react-responsive-modal";
import { Redirect } from 'react-router-dom';

class Register extends Component{

	constructor() {
		super()
		this.state={
			type:'restaurant',
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
		e.preventDefault()
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
		// register(user).then(res=>{
		// 		this.props.history.push('/login')
		// })
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
			<div className="conatainer">
				<div className="row">
					<div className="col-md-3 mt-5 mx-auto">
					</div>
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal"> Please Register</h1>
							<div className="form-group">
								<label htmlFor="first_name"> Name</label>
							    <input type="text" className="form-control" name="name" placeholder="Enter your Name" 	onChange={this.onChange}/>
               	    	    </div>
               	            <div className="form-group">
								<label htmlFor="email">Email Address</label>
								<input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email}
								onChange={this.onChange}/>
               	            </div>
							<div className="form-group">
								<label htmlFor="email">Your Number</label>
								<input type="number" className="form-control" name="number" placeholder="Enter number" value={this.state.number}
								onChange={this.onChange}/>
               	            </div>
                            <div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password}
							    onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Register In </button>
            	        </form>
                    </div>
					<div className="col-md-3 mt-5 mx-auto">
					</div>
                </div>
            </div>
			<Modal open={this.state.OpenModal} onClose={this.onCloseModal}>
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