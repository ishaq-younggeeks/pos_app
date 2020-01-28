import React, { Component } from 'react';

class ChangePassword extends Component {
    render() { 
        return (
            <div className="modal fade" id="change-pwd" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Change Password</strong></h4>
                    </div>
                    <form action="#" method="">
                        <div className="modal-body">
                            <div className="form-group">
                                <label>New Pin</label>
                                <div>
                                    <input type="text" className="form-control input-sm" placeholder="Enter New Pin"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Confirm Pin</label>
                                <div>
                                    <input type="text" className="form-control input-sm" placeholder="Enter Confirm Pin"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'left'}}>
                            <button type="submit" className="btn btn-primary btn-sm">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ChangePassword;