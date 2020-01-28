import React from 'react'; 
import Modal from "react-responsive-modal";

class SuperAdminRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModuleToggleOn:false,
            isReportToggleOn:false,
            isReviewToggleOn:false
        }
    }

    moduleToggle = () => {
        this.setState({isModuleToggleOn:!this.state.isModuleToggleOn})
    }

    reportToggle = () => {
        this.setState({isReportToggleOn:!this.state.isReportToggleOn})
    }

    reviewToggle = () => {
        this.setState({isReviewToggleOn:!this.state.isReviewToggleOn})
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Restaurants List
                            <span className="pull-right">
                                <label>Sort By:</label>
                                <select className="form-control input-sm" style={{display:"inline_block",width:"120px"}}>
                                    <option>Available</option>
                                    <option>Unavailbale</option>
                                </select>
                                <input type="text" name="" className="form-control input-sm" placeholder="Search Restaurant" style={{display:"inline_block",width:"120px"}}/>
                                <button type="submit" className="btn btn-primary btn-sm" style={{margin_top: "5px"}}>Submit</button>
                            </span>
                            <div className="clearfix"></div>
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
                                                    <th>Restaurant Name</th>
                                                    <th>Email</th>
                                                    <th>Contact Number</th>
                                                    <th width="60">Online Status</th>
                                                    <th width="70">% Online Time</th>
                                                    <th width="110">Customer Panel</th>
                                                    <th width="100">Acceptance Rate of Online Orders</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>royal.cafe@gmail.com</td>
                                                    <td>+60122299761</td>
                                                    <td>Active</td>
                                                    <td>15 min</td>
                                                    <td>
                                                        <select className="form-control input-sm">
                                                            <option>Available</option>
                                                        </select>
                                                    </td>
                                                    <td>95%</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary btn-xs">Delete</a> &nbsp;
                                                        <button className="btn btn-primary btn-xs" onClick={() => this.moduleToggle()}>Modules</button> &nbsp;
                                                        <a href="javascript:void(0);" className="btn btn-primary btn-xs">Manage Dashboard</a> &nbsp;
                                                        <button className="btn btn-primary btn-xs" onClick={() => this.reportToggle()}>Reports</button> &nbsp;
                                                        <button className="btn btn-primary btn-xs" onClick={() => this.reviewToggle()}>Reviews</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Modal open={this.state.isModuleToggleOn} onClose={() => this.moduleToggle()}>
                    {/* <div className="modal fade" id="modules" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div className="modal-dialog">
                            <div className="modal-content" style={{border:"2px"}}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.moduleToggle()}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Modules</strong></h4>
                                </div>
                                <div className="modal-body">    
                                    <div className="panel panel-info" style={{padding: "4px",margin_bottom:"0px"}}>
                                        <table className="table table-condensed table-bordered table-striped mar-btm-zero">
                                            <tr>
                                                <td><strong>Kitchen</strong></td>
                                                <td>3 in use</td>
                                                <td><strong>Last Used</strong></td>
                                                <td>10 min ago</td>
                                            </tr>
                                            <tr>
                                                <td><strong>POS</strong></td>
                                                <td>12 in use</td>
                                                <td><strong>Last Used</strong></td>
                                                <td>1 days ago</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Dashboard</strong></td>
                                                <td>1 in use</td>
                                                <td><strong>Last Used</strong></td>
                                                <td>15 days ago</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal>
                <Modal open={this.state.isReportToggleOn} onClose={() => this.reportToggle()}>
                    {/* <div className="modal fade" id="reports" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content" style={{border:"2px"}}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.reportToggle()}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Reports</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <div className="tab-content" style={{height:"400px",overflow_y:"scroll"}}>
                                        <div className="tab-pane active" id="rest-reports">
                                            <div className="panel panel-info" style={{padding:"4px",margin_bottom:"0px"}}>
                                                <div className="table-responsive">
                                                    <table className="table table-striped btm-zero">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Product Issue</th>
                                                                <th>Photo</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Deepak Mishra</td>
                                                                <td>Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.</td>
                                                                <td>-</td>
                                                                <td><span className="label label-warning" style={{font_size: "12px",font_weight:"normal"}}>Active</span></td>
                                                                <td>
                                                                    <a href="#" className="btn btn-primary btn-xs">Cancel Report</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="consumer-reports">
                                            <div className="panel panel-info" style={{padding:"4px",margin_bottom:"0px"}}>
                                                <div className="table-responsive">
                                                    <table className="table table-striped btm-zero">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Product Issue</th>
                                                                <th>Photo</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Deepak Mishra</td>
                                                                <td>Customer was not good. Very rude and arrogant in nature. He doesn't paid his bills and left the restaurant.</td>
                                                                <td>-</td>
                                                                <td><span className="label label-warning" style={{font_size:"12px",font_weight:"normal"}}>Active</span></td>
                                                                <td>
                                                                    <a href="#" className="btn btn-primary btn-xs">Cancel Report</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div><br/><br/>
                                    <div style={{position:"fixed",bottom: "0px",left: "0px",right: "0px",z_index: "1000"}}>
                                        <div>
                                            <ul className="nav nav-pills nav-justified" role="tablist">
                                                <li className="active text-center" style={{float:"left",width:"49%"}}><a data-toggle="tab" href="#rest-reports" style={{padding: "6px 15px",border_radius:"0px",margin_bottom:"0px"}}>Restaurant Reports</a></li>
                                                <li className="text-center" style={{float:"left",width:"50%"}}><a data-toggle="tab" href="#consumer-reports"style={{padding: "6px 15px",border_radius:"0px",margin_bottom:"0px"}}>Consumer Reports</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal>
                <Modal open={this.state.isReviewToggleOn} onClose={() => this.reviewToggle()}>
                    {/* <div className="modal fade" id="reviews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div className="modal-dialog">
                            <div className="modal-content" style={{border: "2px"}}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.reviewToggle()}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Reviews</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <div className="tab-content" style={{height:"400px",overflow_y: "scroll"}}>
                                        <div className="tab-pane active" id="rest-reviews">
                                            <div className="panel panel-info" style={{padding: "4px"}}>
                                                <table className="table table-condensed table-striped mar-btm-zero">
                                                    <tr>
                                                        <td style={{border_top:"0px"}}>
                                                            <p style={{margin_bottom:"5px"}}>
                                                                <strong>Royal Cafe Multi Cusine</strong>
                                                                <span className="pull-right">
                                                                    <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;
                                                                    <a href="#"><i className="fa fa-trash"></i></a>
                                                                </span>
                                                            </p>
                                                            <div>
                                                                <span className="text-dark-gray">
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </span>
                                                                <span className="pull-right" style={{color:"#989898"}}>29-Sep-2018</span>
                                                            </div>
                                                            <p style={{margin_bottom:"5px"}}>
                                                                Neat and Clean restaurant. Very humble and good staff. Very attentive and high attention to priority.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="pro-reviews">
                                            <div className="panel panel-info" style={{padding:"4px"}}>
                                                <table className="table table-condensed table-striped mar-btm-zero">
                                                    <tr>
                                                        <td style={{border_top:"0px"}}>
                                                            <p style={{margin_bottom:"5px"}}>
                                                                <strong>Royal Cafe Multi Cusine</strong>
                                                                <span className="pull-right">
                                                                    <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;
                                                                    <a href="#"><i className="fa fa-trash"></i></a>
                                                                </span>
                                                            </p>
                                                            <div>
                                                                <span className="text-dark-gray">
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star text-warning"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </span>
                                                                <span className="pull-right" style={{color: "#989898"}}>29-Sep-2018</span>
                                                            </div>
                                                            <p style={{margin_bottom:"5px"}}>
                                                                Very rude in nature. Very arrogant.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div><br/>
                                    <div style={{position:"fixed",bottom: "0px",left:" 0px",right: "0px",z_index:"1000"}}>
                                        <div>
                                            <ul className="nav nav-pills nav-justified" role="tablist">
                                                <li className="active text-center" style={{float:"left",width:"49%"}}><a data-toggle="tab" href="#rest-reviews" style={{padding:" 6px 15px",border_radius:" 0px",margin_bottom:"0px"}}>Restaurant Reviews</a></li>
                                                <li className="text-center" style={{float:"left",width:"50%"}}><a data-toggle="tab" href="#pro-reviews" style={{padding:" 6px 15px",border_radius:" 0px",margin_bottom:"0px"}}>Profile Reviews</a></li>
                                            </ul>
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
export default SuperAdminRestaurant;