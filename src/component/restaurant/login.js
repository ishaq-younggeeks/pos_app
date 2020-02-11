import React, { Component } from 'react';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            name:'',
            password:''
        }
    }
    handleEmail(text){
       this.setState({name:text.target.value})
    }
    handlePassword(text){
        this.setState({password:text.target.value})
     }
    login(){
        /*let obj = {}
        obj.name = this.state.name;
        obj.password = this.state.password;*/

        var payload={
            "name":this.state.name,
            "password":this.state.password
            }

        fetch('http://localhost:3000/api/testData.json',payload
            /*{
                header:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Request-Headers": "GET,POST,OPTIONS,DELETE,PUT",
                    "Access-Control-Allow-Headers": "Accept,Accept-Language,Content-Language,Content-Type"
                },
                method:'POST',
                body:JSON.stringify({obj})
            }*/
        ).then(function(response){
            if(response.status === 200){
                
            }
            else if(response.data.code === 204){
                
                alert("username password do not match")
                }
                else{
                
                alert("Username does not exist");
                }
        })
        .catch(function(error) {
            
        });
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Enter name" onChange={(text)=>{this.handleEmail(text)}} /><br />
                <input type="password" placeholder="Enter password" onChange={(text)=>{this.handlePassword(text)}} /><br />
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;