import React from 'react';
import {GetData} from '../restaurant/services/postData';
import Modal from "react-responsive-modal";

class FlaggedConsumer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flaggedConsumerData:[],
            personProfileToggle:false,
            personProfileList:[]
        }
    }

    componentDidMount(){
        GetData('flaggedConsumer').then((result)=> {
            this.setState({
                flaggedConsumerData:result.data,
            })
        });
    }

    profileToggle = (item) => {
        this.setState({
            personProfileToggle:!this.state.personProfileToggle,
            personProfileList:item
        })
    }

    onCloseModal = () => {
        this.setState({personProfileToggle:!this.state.personProfileToggle})
    }

    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Flagged Consumer
                            <span class="pull-right">
                                <input type="text" value="" class="form-control input-sm" placeholder="Name" style={{width: "170px",display:" inline"}}/>
                                <strong style={{font_size: "12px"}}>OR</strong>
                                <input type="text" value="" class="form-control input-sm" placeholder="Email" style={{width: "170px",display:" inline"}}/>
                                <input type="submit" value="Search" class="btn btn-primary btn-sm" style={{margin_top: "2px"}}/>
                            </span>
                            <div class="clearfix"></div>
                        </h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Full Name</th>
                                                    <th>Contact Details</th>
                                                    <th>Reason</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.flaggedConsumerData.map((item,key) => {
                                                    return (
                                                        <tr>
                                                            <td>{key=key+1}</td>
                                                            <td>{item.first_name}</td>
                                                            <td>
                                                                {item.email}<br/>
                                                                {item.phone}
                                                            </td>
                                                            <td>Doesn't paid bill.</td>
                                                            <td>
                                                                <a href="#" class="btn btn-primary btn-xs">Delete</a> &nbsp;
                                                                <button class="btn btn-primary btn-xs" onClick={() => this.profileToggle(item)}>Personal Profile</button> &nbsp;
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Modal open={this.state.personProfileToggle} onClose={() => this.onCloseModal()}>
                    {/* <div class="modal fade" id="personal-profile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{z_index: "10000"}}> */}
                        <div class="modal-dialog">
                            <div class="modal-content" style={{border: "2px"}}>
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onCloseModal()}><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title"><strong>Personal Profile</strong></h4>
                                </div>
                                <div class="modal-body">
                                    <div class="media">
                                        <div class="media-left">
                                            <img class="media-object thumbnail" src="images/default-avatar.png" alt="" style={{margin_bottom: "0px"}}/>
                                        </div>
                                        <div class="media-body" style={{line_height: "28px"}}>
                                            <h4 class="media-heading">{this.state.personProfileList.first_name}</h4>
                                            <i class="fa fa-envelope"></i> <strong>Email:</strong>{this.state.personProfileList.email}<br/>
                                            <i class="fa fa-phone"></i> <strong>Contact Number:</strong>{this.state.personProfileList.phone}<br/>
                                            <i class="fa fa-birthday-cake"></i> <strong>Age:</strong>{this.state.personProfileList.age}Years<br/>
                                            <i class="fa fa-intersex"></i> <strong>Gender:</strong> {this.state.personProfileList.gender}<br/>
                                            <i class="fa fa-file-text"></i> <strong>IC:</strong> <a href="#">View</a><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal>
            </div>
        )
    }
}
export default FlaggedConsumer;