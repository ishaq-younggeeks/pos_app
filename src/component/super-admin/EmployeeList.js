import React, { Component } from 'react';
import AddEmployee from './AddEmployee'
import axios from 'axios'
import Config from './../../config/Config'

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn : false,
            // empData : [],
            empList:[],
            editData:'',
            editRes:'',        
        }
    }

    componentDidMount() {
        axios.get(`${Config.url}all-superemp`)
        .then(response => {
            this.setState({empList:response.data.data})
        }).catch (error => {
            
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            isToggleOn:!prevState.isToggleOn
        })) 
    }

    deleteList = (emp_id) => {
        axios.post(`${Config.url}delete-superemp/${emp_id}`)
        .then(res => {
            
            if(res.status === 200) {
                window.location.reload();
            }
        }).catch(err => {
            
        })
    }

    editList = (emp_id,data,name) => {
        let BaseUrl = `${Config.url}edit-superemp/${emp_id}`;
        axios({
            method:'post',
            url:BaseUrl,
            data:data
        }).then (res => {
            this.setState({editData:res})
            // this.setState({editRes:res})
        }).catch (err => {
            
        })
        this.interval = setTimeout(()=> {
            this.toggle(name);
        },2000)
    }

    render() { 
        return (
            <div>
                {this.state.isToggleOn === false ? 
                <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Employees List
                        <button className="btn btn-warning pull-right fa fa-user-plus"  onClick = {() => this.toggle()}>Add Employee</button>
                        <div className="clearfix"></div>
                    </h1>
                </section>

                <section class="content">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="thumbnail">
                                <div class="table-responsive">
                                    <table class="table table-striped btm-zero">
                                        <thead>
                                            <tr class="bg-info">
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Contact Number</th>
                                                <th>Employee Type</th>
                                                {/* <th>Last Login</th> */}
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        {this.state.empList.map((item) => {
                                            return (
                                                <tbody>
                                                <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.contact}</td>
                                                    <td>{item.emp_type}</td>
                                                    <td class="text-success">{item.status}</td>
                                                    <td>
                                                    <button className="btn btn-primary btn-xs" onClick={() => this.editList(item.emp_id,item)}>Edit</button> &nbsp;
                                                    <button className="btn btn-primary btn-xs" onClick={() => this.deleteList(item.emp_id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                </div> : 
                    <AddEmployee 
                        toggle = {this.toggle}
                        changeButtonToggle = {this.changeButtonToggle}
                        editData = {this.state.editData}
                        editRes = {this.state.editRes}
                    />}
            </div>
        );
    }
}
 
export default EmployeesList;