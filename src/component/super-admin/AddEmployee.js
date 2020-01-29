import React from 'react'
import axios from 'axios';
import $ from 'jquery';
import {Config} from './../../config/Config'
class AddEmployee extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        fullName : '',
        emailId : '',
        contactNo : '',
        selected : '',
        status : '',
        empData : [],
        myStatus : '',
        id:'',
        employeeType:'',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmitHandler = (e) => {
       e.preventDefault();
       if(this.state.fullName) {
        let user_id = localStorage.getItem("userId");
            let addData = {
                admin_id : user_id,
                name : this.state.fullName,
                email : this.state.emailId,
                contact : this.state.contactNo,
                emp_type : this.state.selected,
                status : this.state.status
            }
            console.log(addData)
            const type = "add-superemp"
            let BaseUrl = `${Config.url}${type}`;
            axios({
            method:'post',
            url:BaseUrl,
            data:addData
            }) .then (response => {
                console.log(response)
            this.setState({empData:response.data})
            }) .catch (error => {
            console.log(error)
            })
        }
    }

    componentWillMount() {
        // let data = this.props.editData
        // let editResponse = this.props.editRes;
        if(this.props.editData.status === 200) {
            this.setState({fullName:this.props.editData.data.response.data.name})
            this.setState({emailId:this.props.editData.data.response.data.email})
            this.setState({contactNo:this.props.editData.data.response.data.contact})
            this.setState({selected:this.props.editData.data.response.data.emp_type})
            this.setState({status:this.props.editData.data.response.data.status})
        }

    }

  render() {
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    Add Employee
                    <button class="btn btn-warning pull-right" onClick = {() => {this.props.toggle()}}>Employees List</button>
                </h1>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="clearfix"></div><br/>
                            <form onSubmit = {(e) => this.onSubmitHandler(e)} class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-md-2 control-label">Full  Name</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control input-sm"  placeholder="Full Name" name ="fullName" defaultValue={this.state.fullName} onChange={(e) => this.handleChange(e)}/>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">Email Id</label>
                                    <div class="col-md-4">
                                        <input type="email" class="form-control input-sm" placeholder="Email Id" name="emailId"  defaultValue={this.state.emailId} onChange={(e) => this.handleChange(e)}/>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">Contact Number</label>
                                    <div class="col-md-4">
                                        <input type="number" class="form-control input-sm" placeholder="Contact Number" name="contactNo" defaultValue={this.state.contactNo} onChange = {(e) => this.handleChange(e)}/>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">Employee Type</label>
                                    <div class="col-md-4">
                                        <select class="form-control input-sm"  name= "selected" defaultValue={this.state.selected} onChange = {(e) => this.handleChange(e)}>
                                            <option>Select</option>
                                            <option>Super Admin</option>
                                            <option>Customer Service</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">Status</label>
                                    <div class="col-md-4">
                                        <select class="form-control input-sm"  name="status" defaultValue={this.state.status} onChange={(e) => {this.handleChange(e)}}>
                                            <option>Select</option>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label"></label>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary btn-block">Add</button>
                                    </div>
                                </div>
                            </form>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default AddEmployee