import React from 'react';
import {GetData} from '../restaurant/services/postData';

class ManageIcForConsumer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consumerList:[]
        }
    }

    componentDidMount(){
        GetData('consumers').then((result)=> {
            this.setState({consumerList:result.data})
        });
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Consumers List
                            <span className="pull-right">
                                <a href="#" className="btn btn-primary btn-sm">View Flagged Consumer</a>
                                <input type="text" value="" className="form-control input-sm" placeholder="Name" style={{width: "170px", display: "inline"}}/>
                                <strong style={{font_size: "12px"}}>OR</strong>
                                <input type="text" value="" className="form-control input-sm" placeholder="Email" style={{width: "170px", display: "inline"}}/>
                                <input type="submit" value="Search" className="btn btn-primary btn-sm" style={{margin_top: "2px"}}/>
                            </span>
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="thumbnail">
                                    <div className="table-responsive">
                                        <table className="table table-striped btm-zero">
                                            <thead>
                                                <tr className="bg-info">
                                                    <th>Full Name</th>
                                                    <th>Contact Details</th>
                                                    <th>Inputed Age</th>
                                                    <th>IC &  Selfie</th>
                                                    <th>IC</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.consumerList.map((item) => {
                                                    return (
                                                        <tr>
                                                            <td>{item.first_name}</td>
                                                            <td>
                                                                {item.email}<br/>
                                                                {item.phone}
                                                            </td>
                                                            <td>{item.age}Y</td>
                                                            <td><a href="#">View</a></td>
                                                            <td><a href="#">View</a></td>
                                                            <td>
                                                                <a href="#" className="btn btn-success btn-xs">Verify</a> &nbsp;
                                                                <a href="#" className="btn btn-danger btn-xs">Decline</a> &nbsp;
                                                                <a href="#" className="btn btn-warning btn-xs">Flagged</a> &nbsp;
                                                                <a href="#" className="btn btn-primary btn-xs">Resend</a>
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
            </div>
        )
    }
}
export default ManageIcForConsumer;