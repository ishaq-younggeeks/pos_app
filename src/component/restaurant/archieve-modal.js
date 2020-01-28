import React, { Component } from 'react';

class ArchieveModal extends Component {
    render() { 
        return (
            <div className="modal fade" id="archieve" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title"><strong>October 2018</strong></h4>
                    </div>
                    <div className="modal-body">
                        <p>
                            Send monthly report to
                        </p>
                        <div className="styled-input-single" style={{display: 'inline-block'}}>
                            <input type="radio" name="accept" id="report-email" value="email"/>
                            <label >Email</label>
                        </div>
                        <div className="styled-input-single" style={{display: 'inline-block',marginLeft: '25px'}}>
                            <input type="radio" name="accept" id="report-download" value="download"/>
                            <label>Download</label>
                        </div>
                    </div>
                    <div className="modal-footer" style={{textAlign: 'center'}}>
                        <input type="submit" value="Submit" className="btn btn-primary btn-sm"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ArchieveModal;