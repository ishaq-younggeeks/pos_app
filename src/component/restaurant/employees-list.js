import React, { Component } from 'react';

class EmployeesList extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Employees List
                        <a href="add-employee" className="btn btn-warning pull-right"><i className="fa fa-user-plus"></i> Add Employee</a>
                        <div className="clearfix"></div>
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail hidden-xs hidden-sm">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Contact Number</th>
                                                <th>Pin</th>
                                                <th>Employee Type</th>
                                                <th>Clock In / Clock Out</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>aakash.gupta@sritechnocrat.com</td>
                                                <td>+60122299761</td>
                                                <td>1234</td>
                                                <td>Waiter</td>
                                                <td>Clocked In</td>
                                                <td className="text-success">Active</td>
                                                <td>
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                                    <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>aakash.gupta@sritechnocrat.com</td>
                                                <td>+60122299761</td>
                                                <td>2345</td>
                                                <td>Waiter</td>
                                                <td>Clocked In</td>
                                                <td className="text-success">Active</td>
                                                <td>
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                                    <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ajay Singh</td>
                                                <td>aakash.gupta@sritechnocrat.com</td>
                                                <td>+60122299761</td>
                                                <td>1234</td>
                                                <td>Kitchen</td>
                                                <td>Clocked In</td>
                                                <td className="text-success">Active</td>
                                                <td>
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                                    <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>aakash.gupta@sritechnocrat.com</td>
                                                <td>+60122299761</td>
                                                <td>1234</td>
                                                <td>Waiter</td>
                                                <td>Clocked In</td>
                                                <td className="text-success">Active</td>
                                                <td>
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                                    <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="thumbnail visible-xs visible-sm">
                                <table className="table table-striped btm-zero">
                                    <tbody>
                                    <tr>
                                        <td style={{lineHeight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Email:</strong> aakash.gupta@sritechnocrat.com<br/>
                                            <strong>Phone Number:</strong> +60122299761<br/>
                                            <strong>Pin:</strong> 1234<br/>
                                            <strong>Employee Type:</strong> Waiter<br/>
                                            <strong>Clock In / Clock Out:</strong> Clocked In<br/>
                                            <strong>Status:</strong> Active<br/>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                            <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Email:</strong> aakash.gupta@sritechnocrat.com<br/>
                                            <strong>Phone Number:</strong> +60122299761<br/>
                                            <strong>Pin:</strong> 1234<br/>
                                            <strong>Employee Type:</strong> Waiter<br/>
                                            <strong>Clock In / Clock Out:</strong> Clocked In<br/>
                                            <strong>Status:</strong> Active<br/>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                            <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Email:</strong> aakash.gupta@sritechnocrat.com<br/>
                                            <strong>Phone Number:</strong> +60122299761<br/>
                                            <strong>Pin:</strong> 1234<br/>
                                            <strong>Employee Type:</strong> Waiter<br/>
                                            <strong>Clock In / Clock Out:</strong> Clocked In<br/>
                                            <strong>Status:</strong> Active<br/>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                            <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Email:</strong> aakash.gupta@sritechnocrat.com<br/>
                                            <strong>Phone Number:</strong> +60122299761<br/>
                                            <strong>Pin:</strong> 1234<br/>
                                            <strong>Employee Type:</strong> Waiter<br/>
                                            <strong>Clock In / Clock Out:</strong> Clocked In<br/>
                                            <strong>Status:</strong> Active<br/>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                            <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Email:</strong> aakash.gupta@sritechnocrat.com<br/>
                                            <strong>Phone Number:</strong> +60122299761<br/>
                                            <strong>Pin:</strong> 1234<br/>
                                            <strong>Employee Type:</strong> Waiter<br/>
                                            <strong>Clock In / Clock Out:</strong> Clocked In<br/>
                                            <strong>Status:</strong> Active<br/>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#change-pwd" className="btn btn-primary btn-xs">Change Pin</a> &nbsp;
                                            <a href="add-employee" className="btn btn-primary btn-xs">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default EmployeesList;