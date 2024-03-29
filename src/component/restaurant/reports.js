import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Report extends Component {
    render() { 
        return (
            <>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Reports
                    </h1>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills">
                                <li className="active width1" style={{fontSize: '12px'}}><Link to="reports" style={{padding: '10px'}}>Consumer Reports</Link></li>
                                <li className="width1" style={{fontSize: '12px'}}><Link to="restaurant-reports" style={{padding: '10px'}}>Restaurant Reports</Link></li>
                            </ul>
                            <div className="clearFix"></div><br/>
                            <p><small>These are the reports which are made by the Consumer towards the Restaurants.</small></p>
                            <div className="thumbnail hidden-xs hidden-sm">
                                <div className="clearFix"></div>
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Product Issue</th>
                                                <th>Photo</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td>-</td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td><Link>View</Link></td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td>-</td>
                                                <td><span className="label label-success" style={{fontSize: '12px',fontWeight: 'normal'}}>Closed</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td><Link>View</Link></td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td><Link>View</Link></td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td>-</td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Deepak Mishra</td>
                                                <td><Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link></td>
                                                <td>-</td>
                                                <td><span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span></td>
                                                <td>
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                                    <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="clearFix"></div>
                            </div>

                            <div className="thumbnail visible-xs visible-sm">
                                <table className="table table-striped btm-zero">
                                    <tbody>
                                    <tr>
                                        <td style={{lineHeight: '24px'}}>
                                            <strong>Name:</strong> Deepak Mishra<br/>
                                            <strong>Product Issue:</strong> <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link><br/>
                                            <strong>Photo:</strong> -<br/>
                                            <strong>Status:</strong> <span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span><br/>
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '24px'}}>
                                            <strong>Name:</strong> Deepak Mishra<br/>
                                            <strong>Product Issue:</strong> <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link><br/>
                                            <strong>Photo:</strong> <Link>View</Link><br/>
                                            <strong>Status:</strong> <span className="label label-warning" style={{fontSize: '12px',fontWeight: 'normal'}}>Active</span><br/>
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{linHeight: '24px'}}>
                                            <strong>Name:</strong> Deepak Mishra<br/>
                                            <strong>Product Issue:</strong> <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response">Quality was not good</Link><br/>
                                            <strong>Photo:</strong> -<br/>
                                            <strong>Status:</strong> <span className="label label-success" style={{fontSize: '12px',fontWeight: 'normal'}}>Closed</span><br/>
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#view-order" className="btn btn-primary btn-xs">View Order</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#refund" className="btn btn-primary btn-xs">Refund Product</Link> &nbsp; &nbsp;
                                            <Link onClick={e => e.preventDefault()} data-toggle="modal" data-target="#response-consumer" className="btn btn-primary btn-xs">Disagree with Consumer</Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            </>
        );
    }
}
 
export default Report;