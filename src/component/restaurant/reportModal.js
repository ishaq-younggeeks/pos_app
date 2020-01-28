import React, { Component } from "react";

class ReportModal extends Component {
    render(){
        return(
            <>
            <div className="modal fade" id="response" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">
                            <img src={process.env.PUBLIC_URL+"/restaurant/images/mcd.png"} alt="" width="40" style={{borderRadius: '4px'}}/>
                            <strong>McDonalds</strong>
                        </h4>
                    </div>
                    <div className="modal-body" style={{fontSize: '13px'}}>
                        <div className="clearFix"></div>
                        <table className="table table-condensed">
                        <tbody>
                            <tr>
                                <td style={{borderTop: '0px'}}>
                                    <p style={{marginBottom: '0px'}}>
                                        Restaurant was not very neat and clean. Not happy with serving timings. They took a long time to
                                        serve one order. Waiter behaviour was not humble.
                                    </p>
                                </td>
                                <td style={{borderTop: '0px',verticalAlign: 'middle'}}>
                                    <a href="#"><img src={process.env.PUBLIC_URL+"/restaurant/images/attach.png"} alt=""/></a>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{textAlign: 'right',borderTop: '1px #000 solid'}}>
                                    Submitted at 7:49 p.m. 12th January 2019
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="clearFix"></div>
                            <div style={{background: '#000',padding: '10px',color: '#fff'}}>
                            Dear Deepak, we'd like o sincerely apologise for the horrible service that you have received. Please be
                            ensured that the waiter has been suspended and the restaurant has been scgheduled for thorough cleaning
                            immediately. We'd like to thank you for alerting us to  this issue and we will work to ammend this issue
                            to the best we can. We hope you will continue to be a regular patron of our restaurant.
                            <hr style={{borderTop: '1px #fff solid',margin: '5px 0px'}}/>
                            Restaurant reported at 9:00 a.m. 13th January 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="view-order" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Receipt</strong></h4>
                    </div>
                    <div className="modal-body">
                        <div className="thumbnail" style={{background: '#1c1a22',color: '#fff',marginBottom: '10px'}}>
                            <div className="text-center" style={{color: '#fff'}}>
                                t-1
                                <small className="pull-right">
                                    15/02/18<br/>
                                    14:26
                                </small>
                            </div>
                            <div className="clearFix"></div>
                            <hr style={{marginTop: '5px',marginBottom: '0px'}}/>
                            <div className="clearFix"></div>
                            <table className="table" style={{marginBottom: '0px'}}>
                                <thead>
                                    <tr style={{color: '#fff'}}>
                                        <th width="50%">NAME</th>
                                        <th width="18%">QTY</th>
                                        <th width="20%">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="3" style={{padding: '0px'}}>
                                            <div style={{height: '150px',overflowY: 'scroll'}}>
                                                <table className="table" style={{marginBottom: '0px',background: 'none'}}>
                                                    <tbody>
                                                    <tr>
                                                        <td width="60%">house iced tea</td>
                                                        <td width="20%">3</td>
                                                        <td width="20%">
                                                            12.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>house lemonade</td>
                                                        <td>1</td>
                                                        <td>
                                                            4.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perrier</td>
                                                        <td>1</td>
                                                        <td>
                                                            3.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calamari</td>
                                                        <td>1</td>
                                                        <td>
                                                            13.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>house lemonade</td>
                                                        <td>1</td>
                                                        <td>
                                                            4.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perrier</td>
                                                        <td>1</td>
                                                        <td>
                                                            3.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calamari</td>
                                                        <td>1</td>
                                                        <td>
                                                            13.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>house lemonade</td>
                                                        <td>1</td>
                                                        <td>
                                                            4.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perrier</td>
                                                        <td>1</td>
                                                        <td>
                                                            3.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calamari</td>
                                                        <td>1</td>
                                                        <td>
                                                            13.00
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" align="right">
                                            <small>Total Due:</small><br/>
                                            0.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="response-consumer" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">
                            <strong>Response</strong>
                        </h4>
                    </div>
                    <div className="modal-body" style={{fontSize: '13px',padding:'38px'}}>
                        <div className="form-group">
                            <textarea cols="4" rows="5" className="form-control input-sm" placeholder="Write your response here..."></textarea>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary pull-right"/>
                        <div className="clearFix"></div>
                    </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="refund" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">
                            <strong>Refund</strong>
                        </h4>
                    </div>
                    <div className="modal-body" style={{fontSize: '13px'}}>
                        <div className="form-group">
                            <label>Submit a Response</label>
                            <div>
                                <textarea cols="4" className="form-control input-sm" placeholder="Write your response here..."></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>State amount you'd like to refund</label>
                            <div>
                                <input type="text" className="form-control input-sm" placeholder="Enter Amount"/>
                            </div>
                        </div>                        
                        <div className="clearFix"></div>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </div>
            </div>
            </div>
            

            </>
        );
    }
}

export default ReportModal;