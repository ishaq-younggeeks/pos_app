import React, { Component } from 'react';

class MessageModal extends Component {
    render() { 
        return (
            <div className="modal fade" id="order-detail" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title"><strong>Order Detail</strong></h4>
                    </div>
                    <div className="modal-body">
                        <div className="thumbnail" style={{background: '#323232',color: '#fff',padding: '0px',border: '0px',marginBottom: '0px'}}>
                            <table className="table table-condensed btm-zero">
                                <thead>
                                    <tr className="header-red">
                                        <th colSpan="3">Table 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="2" style={{padding: '0px',height: '230px'}}>
                                            <table className="table table-condensed btm-zero" style={{background: '#323232'}}>
                                                <tbody>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>Lauk Ikan & Ayam</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>Extra Vegetables</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>Lunch Drink</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>S101 Butter & Kaya Toast</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>S101 Butter & Kaya Toast</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>S101 Butter & Kaya Toast</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderTop: '0px'}}>S101 Butter & Kaya Toast</td>
                                                    <td style={{borderTop: '0px'}}>1x</td>
                                                    <td style={{borderTop: '0px',textAlign: 'right'}}><button className="btn btn-gray1 btn-xs" style={{width: '70px'}}>Done</button></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" style={{borderTop: '1px #ddd solid',fontSize: '14px'}}><strong>23h 40m</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default MessageModal;