import React from 'react';
import Modal from "react-responsive-modal";

class PersonalProfileModal extends React.Component {
    constructor(props) {
        
        super(props)
    }
    render() {
        
        return (
            <div>
                <h1>Hello</h1>
                <Modal>
                    <div className="modal fade" id="personal-profile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: "10000"}}>
                        <div className="modal-dialog">
                            <div className="modal-content" >
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Personal Profile</strong></h4>
                                </div>
                                <div>
                                    <div className="modal-body">
                                        <div className="media">
                                            <div className="media-left">
                                                <img className="media-object thumbnail" src="images/default-avatar.png" alt="" style={{marginBottom: "0px"}}/>
                                            </div>
                                            <div className="media-body" style={{line_height: "28px"}}>
                                                <h4 className="media-heading">{this.props.item.first_name}</h4>
                                                <i className="fa fa-envelope"></i> <strong>Email:</strong>{this.props.item.email}<br/>
                                                <i className="fa fa-phone"></i> <strong>Contact Number:</strong>{this.props.item.phone}<br/>
                                                <i className="fa fa-birthday-cake"></i> <strong>Age:</strong>{this.props.item.age}<br/>
                                                <i className="fa fa-intersex"></i> <strong>Gender:</strong>{this.props.item.gender}<br/>
                                                {/* <i className="fa fa-file-text"></i> <strong>IC:</strong> <a href="#">{this.props.item.email}</a><br/> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default PersonalProfileModal;