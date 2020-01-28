import React, { Component } from 'react';

class RestaurantReview extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Restaurant Reviews
                        <a href="user-reviews" className="btn btn-primary btn-sm pull-right">User Reviews</a>
                    </h1>
                    <small>Made by the Consumer towards the Restaurant</small>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail hidden-xs hidden-sm">
                                <div className="clearfix"></div>
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Rating</th>
                                                <th>Comment</th>
                                                <th>Date & Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </td>
                                                <td>Very Good. Neat and clean restaurant. Highly recommended!</td>
                                                <td>05 July, 2018 | 10:00 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="thumbnail visible-xs visible-sm">
                                <div className="clearfix"></div>
                                <table className="table table-striped btm-zero">
                                    <tbody>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong> 
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineHeight: '22px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Rating:</strong>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <br/>
                                            <strong>Comment:</strong> Very Good. Neat and clean restaurant. Highly recommended!<br/>
                                            <strong>Date & Time:</strong> 05 July, 2018 | 10:00 AM<br/>
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

export default RestaurantReview;