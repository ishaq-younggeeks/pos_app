import React, { Component } from 'react';

class RestaurantReport extends Component {
    render() {
        const activeWarning = {
            fontSize: '12px',
            fontWeight: 'normal'
        }
        return (
            <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    Reports
                </h1>
            </section>
            <section class="content">

                <div class="row">
                    <div class="col-md-12">
                        <ul class="nav nav-pills">
                            <li class="width1" style={{fontSize: '12px'}}><a href="/restaurant/reports" style={{padding: '10px'}}>Consumer Reports</a></li>
                            <li class="active width1" style={{fontSize: '12px'}}><a href="/restaurant/restaurant-reports" style={{padding: '10px'}}>Restaurant Reports</a></li>
                        </ul>
                        <div class="clearfix"></div><br/>
                        <p><small>These are the reports which are made by the Restaurant towards the Consumer.</small></p>
                        <div class="thumbnail hidden-xs hidden-sm">
                            <div class="clearfix"></div>
                            <div class="table-responsive">
                                <table class="table table-striped btm-zero">
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
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td><a href="#">View</a></td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td><a href="#">View</a></td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td><a href="#">View</a></td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Deepak Mishra</td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                                    Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                                </a>
                                            </td>
                                            <td>-</td>
                                            <td><span class="label label-warning" style={activeWarning}>Active</span></td>
                                            <td>
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                                <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="thumbnail visible-xs visible-sm">
                            <table class="table table-striped btm-zero">
                                <tbody>
                                <tr>
                                    <td style={{lineHeight: '24px'}}>
                                        <strong>Name:</strong> Deepak Mishra<br/>
                                        <strong>Product Issue:</strong>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                            Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                        </a><br/>
                                        <strong>Photo:</strong> -<br/>
                                        <strong>Status:</strong> <span class="label label-warning" style={activeWarning}>Active</span><br/>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                        <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{lineHeight: '24px'}}>
                                        <strong>Name:</strong> Deepak Mishra<br/>
                                        <strong>Product Issue:</strong>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                            Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                        </a><br/>
                                        <strong>Photo:</strong> <a href="#">View</a><br/>
                                        <strong>Status:</strong> <span class="label label-warning" style={activeWarning}>Active</span><br/>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                        <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{lineHeight: '24px'}}>
                                        <strong>Name:</strong> Deepak Mishra<br/>
                                        <strong>Product Issue:</strong>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#response">
                                            Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.
                                        </a><br/>
                                        <strong>Photo:</strong> -<br/>
                                        <strong>Status:</strong> <span class="label label-warning" style={activeWarning}>Active</span><br/>
                                        <a href="javascript:void(0)" data-toggle="modal" data-target="#view-order" class="btn btn-primary btn-xs">View Order</a> &nbsp; &nbsp;
                                        <a href="#" class="btn btn-primary btn-xs">Cancel Report</a>
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
 
export default RestaurantReport;