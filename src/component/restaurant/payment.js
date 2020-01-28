import React, { Component } from 'react';

class Payment extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Payment
                    </h1>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <div className="col-md-4">
                                    <div className="thumbnail">
                                        <div className="small-box bg-aqua">
                                            <div className="inner" style={{padding: '20px'}}>
                                                <div>
                                                    <div className="text-center" style={{fontSize: '24px',fontWeight: 'bold'}}>Cash</div>
                                                </div>
                                                <div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10 text-center" style={{padding: '30px'}}>
                                                        <table className="table table-condensed" style={{marginBottom: '0px'}}>
                                                            <tbody>
                                                            <tr>
                                                                <td width="60" style={{borderTop: '0px'}}>
                                                                    Payment
                                                                </td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>
                                                                    Total Payment
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{borderTop: '0px'}}>RM 125</td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>RM 500 (25%)</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="thumbnail">
                                        <div className="small-box bg-aqua">
                                            <div className="inner" style={{padding: '17px 15px 15px'}}>
                                                <div>
                                                    <div className="text-center" style={{fontSize: '24px',fontWeight: 'bold'}}>Debit / Credit</div>
                                                </div>
                                                <div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10 text-center" style={{padding: '30px'}}>
                                                        <table className="table table-condensed" style={{marginBottom: '0px'}}>
                                                        <tbody>
                                                            <tr>
                                                                <td width="60" style={{borderTop: '0px'}}>
                                                                    Payment
                                                                </td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>
                                                                    Total Payment
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{borderTop: '0px'}}>RM 50</td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>RM 500 (10%)</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="thumbnail" style={{marginBottom: '10px'}}>
                                        <div className="small-box bg-aqua">
                                            <div className="inner" style={{padding: '17px 15px 15px'}}>
                                                <div>
                                                    <div className="text-center" style={{fontSize: '24px',fontWeight: 'bold'}}>Outstanding</div>
                                                </div>
                                                <div>
                                                    <div className="col-md-1"></div>
                                                    <div className="col-md-10 text-center" style={{padding: '30px'}}>
                                                        <table className="table table-condensed" style={{marginBottom: '0px'}}>
                                                        <tbody>
                                                            <tr>
                                                                <td width="60" style={{borderTop: '0px'}}>
                                                                    Payment
                                                                </td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>
                                                                    Total Payment
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{borderTop: '0px'}}>RM 325</td>
                                                                <td style={{borderTop: '0px'}}>/</td>
                                                                <td align="left" style={{borderTop: '0px'}}>RM 500 (65%)</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center"><small><strong>RM500</strong> outstanding balance will be transferred on<br/> <strong>10th of December 2018</strong></small></p>
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
 
export default Payment;