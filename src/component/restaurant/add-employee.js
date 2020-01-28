import React, { Component } from 'react';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                <form action="#" className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Full  Name</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control input-sm" placeholder="Full Name"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Email Id</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control input-sm" placeholder="Email Id"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Contact Number</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control input-sm" placeholder="Contact Number"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Pin</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control input-sm" placeholder="Pin"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group">
                                        <label className="col-md-2 control-label">Employee Type</label>
                                        <div className="col-md-4">
                                            <select className="form-control input-sm">
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
                                            <select className="form-control input-sm">
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