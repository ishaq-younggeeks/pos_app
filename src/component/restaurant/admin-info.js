import React, { Component } from 'react';
import { PostData } from './services/postData.js';
class AdminInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            admin_name:'',
            admin_email:'',
            admin_phone:'',
            user_id:'',
            success:''
        }
        this.adminInfo = this.adminInfo.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        let userId = localStorage.getItem("userId");
            this.setState({user_id:userId});
    }

    adminInfo(event){
        event.preventDefault();
        if(this.state.admin_name && this.state.admin_phone ){
            PostData('add-admin-info',this.state).then((result) =>{
                let responseJson = result;
                this.setState({success:responseJson.response.msg});
            })
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Admin Information</h1>
                </section>
                <span>{this.state.success}</span>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <form method="" onSubmit={this.adminInfo} >
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>ARQA Admin Name</label>
                                        <div>
                                            <input type="text" className="form-control" name="admin_name" onChange={this.onChange} placeholder="ARQA Admin Name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>ARQA Admin Email Address</label>
                                        <div>
                                            <input type="email" className="form-control" name="admin_email" onChange={this.onChange} placeholder="ARQA Admin Email Address" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>ARQA Admin Phone Number</label>
                                        <div>
                                            <input type="tel" className="form-control" name="admin_phone" onChange={this.onChange} pattern="[0-9]{10}" placeholder="ARQA Admin Phone Number" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                                </form>
                                <div className="clearfix"></div><br/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default AdminInfo;