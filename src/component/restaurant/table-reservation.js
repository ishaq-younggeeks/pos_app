import React, { Component } from 'react';

class TableReservation extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Table Reservation
                        <div className="pull-right">
                            <input type="text" className="form-control input-sm" placeholder="Date" style={{display: 'inline',width: '110px'}}/>
                            <input type="text" className="form-control input-sm" placeholder="Time" style={{display: 'inline',width: '110px'}}/>
                            <input type="submit" value="Filter" className="btn btn-primary btn-sm" style={{margintop: '5px'}}/>
                        </div>
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
                                            <tr className="bg-info">
                                                <th>Name</th>
                                                <th>Contact Number</th>
                                                <th>Number of Pax</th>
                                                <th>Notes</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-success">Accepted</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-danger">Declined</span>
                                                    <p>Was busy in meeting and some other important work.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-danger">Declined</span>
                                                    <p>Was busy in meeting and some other important work.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-success">Accepted</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-success">Accepted</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rajesh Gupta</td>
                                                <td>+60122299761</td>
                                                <td>12</td>
                                                <td>Table reserved for 10 peoples for today at 7 pm.</td>
                                                <td>05-Nov-2018 | 03:10 PM</td>
                                                <td>
                                                    <span className="text-success">Accepted</span>
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
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-success">Accepted</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-danger">Declined</span><br/> Was busy in meeting and some other important work.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-danger">Declined</span><br/> Was busy in meeting and some other important work.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-success">Accepted</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-success">Accepted</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{lineheight: '20px'}}>
                                            <strong>Name:</strong> Rajesh Gupta<br/>
                                            <strong>Contact Number:</strong> +60122299761<br/>
                                            <strong>No. of Pax:</strong> 12<br/>
                                            <strong>Notes:</strong> Table reserved for 10 peoples for today at 7 pm.<br/>
                                            <strong>Date:</strong> 05-Nov-2018 | 03:10 PM<br/>
                                            <strong>Status:</strong> <span className="text-success">Accepted</span><br/>
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
 
export default TableReservation;