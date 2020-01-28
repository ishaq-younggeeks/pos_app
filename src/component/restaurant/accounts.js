import React, { Component } from 'react';

class Account extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Accounts
                    </h1>
                </section>
                <section className="content">

                    <div className="row">
                        <div>
                            <div className="col-md-6">
                                <h4>
                                    <strong>Income List</strong> &nbsp;
                                    <a href="#" className="btn btn-warning btn-xs">Export To Excel</a>
                                </h4>
                            </div>
                            <div className="col-md-6">
                                <div className="pull-right">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#add-income" className="btn btn-primary btn-sm">Add Income</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#add-expense" className="btn btn-primary btn-sm">Add Expense</a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Note</th>
                                                <th>Date</th>
                                                <th>Price (Excluding GST)</th>
                                                <th>GST</th>
                                                <th>Service Charge</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dal</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 5000</td>
                                                <td>RM 500</td>
                                                <td>RM 50</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dal</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 4000</td>
                                                <td>RM 400</td>
                                                <td>RM 40</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dal</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 3500</td>
                                                <td>RM 350</td>
                                                <td>RM 35</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dal</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 3000</td>
                                                <td>RM 300</td>
                                                <td>RM 30</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr style={{background: '#167aeb',color: '#fff',fontSize: '15px'}}>
                                                <td colSpan="7"><strong>Total Overall Income:</strong> RM 1000000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <h4>
                                <strong>Expenditure List</strong> &nbsp;
                                <a href="#" className="btn btn-warning btn-xs">Export To Excel</a>
                            </h4>
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Note</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item 1</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 5000</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Item 2</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 4000</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Item 3</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 3500</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Item 4</td>
                                                <td>lorem ipsum dolor amet lorem ipsum dolor</td>
                                                <td>10:30 AM | 7 Mar, 2018</td>
                                                <td>RM 3000</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                </td>
                                            </tr>
                                            <tr style={{background: '#eb9316',color: '#fff',fontSize: '15px'}}>
                                                <td colSpan="7"><strong>Total Overall Expense:</strong> RM 10000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
 
export default Account;