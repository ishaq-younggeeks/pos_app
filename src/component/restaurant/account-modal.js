import React, { Component } from 'react';

class AccountModal extends Component {
    render() { 
        return (
            <>
            <div className="modal fade" id="add-income" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Add Income</strong></h4>
                    </div>
                    <form action="#" method="">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Item Name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Note</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Note"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Date"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Price (Excluding GST)</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Price (Excluding GST)"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>GST</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="GST"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Service Charge</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Service Charge"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center'}}>
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="modal fade" id="add-expense" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Add Expense</strong></h4>
                    </div>
                    <form action="#" method="">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Item Name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Note</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Note"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Date"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Price (Excluding GST)"/>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'center'}}>
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        );
    }
}
 
export default AccountModal;