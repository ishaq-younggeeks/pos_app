import React, { Component } from 'react';
import axios from 'axios'
import Config from './../../config/Config';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id:localStorage.getItem("userId"),
            name:'',
            email:'',
            contact:'',
            pin:'',
            emp_type:'',
            status:'',
            admin_id:5,
            emp_id:''
         }
    }

    onChange = (e) => {
            let values;
            values=e.target.value;
            this.setState({ [e.target.name]: values })
            console.log(this.state);


    }

    productSave=(event) =>  {
        event.preventDefault(); 
        console.log("state is",this.state);
        axios.post(`${Config.url}add_emp`, this.state)
        .then((response) => {console.log(response)
            console.log("sent",response)
            this.setState({redirect:true});
        }) 
        .catch(error => (console.log(error)))
      

    } 

    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Add Employee
                        <a href="employees-list" className="btn btn-warning pull-right">Employees List</a>
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <form action="#" className="form-horizontal" onSubmit={this.productSave}>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Full  Name</label>
                                        <div className="col-md-4">
                                            <input type="text" name="name"  onChange={this.onChange} className="form-control input-sm" placeholder="Full Name" required/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Email Id</label>
                                        <div className="col-md-4">
                                            <input type="text" name="email" onChange={this.onChange} className="form-control input-sm" placeholder="Email Id"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Contact Number</label>
                                        <div className="col-md-4">
                                            <input type="text" name="contact" onChange={this.onChange} className="form-control input-sm" placeholder="Contact Number"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Pin</label>
                                        <div className="col-md-4">
                                            <input type="text" name="pin" onChange={this.onChange} className="form-control input-sm" placeholder="Pin"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Employee Type</label>
                                        <div className="col-md-4">
                                            <select className="form-control input-sm" name="emp_type" onChange={this.onChange}>
                                                <option>Select</option>
                                                <option>Kitchen</option>
                                                <option>Waiter</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Status</label>
                                        <div className="col-md-4">
                                            <select className="form-control input-sm" name="status" onChange={this.onChange}>
                                                <option>Select</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label"></label>
                                        <div className="col-md-2">
                                            <button type="submit" onclick="window.location.href='product-list'" className="btn btn-primary btn-block">Add</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="clearfix"></div><br/>
                                <div className="col-md-12">
                                    <div className="alert alert-info" style={{color: '#31708f',fontSize: '13px'}}>
                                        <strong>Note:</strong>
                                        According to our understading, Employees added from here are of Kitchen and Waiter type. They can operate according to the documemt "Kitchen Perspective.pdf" i.e. <a href="https://drive.google.com/file/d/1AtibqJOxOzuqS17VYN8JZK6_MQDJhWGR/view" target="_blank" style={{color: '#31708f'}}>https://drive.google.com/file/d/1AtibqJOxOzuqS17VYN8JZK6_MQDJhWGR/view</a>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default AddEmployee;