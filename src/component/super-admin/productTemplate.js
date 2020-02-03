import React from 'react';
import { GetData } from '../restaurant/services/postData'
import moment from 'moment';
import Modal from "react-responsive-modal";

class ProductTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData:[],
            isViewModalOpen:false,
            modalData:[]
        }
    }

    componentDidMount(){
        GetData('getproducttemplate').then((result) => {
            
            this.setState({productData:result.data})
            this.setState({modalData:result.data.view})
        })
    }

    viewModal = () => {
        this.setState({isViewModalOpen:!this.state.isViewModalOpen})
    }

    render() {
        
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Product Template
                            <input type="text" className="form-control input-sm" placeholder="Search a Product" style={{width: "350px",display: "inline-block"}}/>
                            <span className="pull-right">
                                <a className="btn btn-primary btn-sm">Add Variation Template</a>
                                <a className="btn btn-primary btn-sm">Add Product Template</a>
                            </span>
                            <div className="clearfix"></div>
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="thumbnail">
                                    <div className="table-responsive">
                                        <table className="table table-striped btm-zero">
                                            <thead>
                                                <tr className="bg-info">
                                                    <th>Name</th>
                                                    <th>No. of Variations</th>
                                                    <th>Date Created</th>
                                                    <th>Last Updated</th>
                                                    <th>Current in use by Merchants</th>
                                                    <th>No. of Photos</th>
                                                    <th>No. of Descriptions</th>
                                                    <th>Average Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.state.productData.map((item,index) => {
                                                    
                                                    return (
                                                        <div> */}
                                                            <tr>
                                                                <td>{this.state.productData.name}</td>
                                                                <td>{this.state.productData.Variations}</td>
                                                                <td>{moment(this.state.productData.created).format('L')}</td>
                                                                <td>{moment(this.state.productData.last_modify).format('L')}</td>
                                                                <td>{this.state.productData.merchants}</td>
                                                                <td>{this.state.productData.photos}</td>
                                                                <td>{this.state.productData.no_of_descriptions}</td>
                                                                <td>RM{this.state.productData.avg_price}</td>
                                                                <td>
                                                                    <a href="#" className="btn btn-success btn-xs">18+</a> &nbsp;
                                                                    <button className="btn btn-primary btn-xs" onClick={() => this.viewModal()}>View</button> &nbsp;
                                                                    <a href="#" className="btn btn-danger btn-xs">Delete</a> &nbsp;
                                                                    <a href="#" className="btn btn-primary btn-xs">Merge</a>
                                                                </td>
                                                            </tr>
                                                        {/* </div>
                                                    )
                                                })} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Modal open={this.state.isViewModalOpen} onClose={() => this.viewModal()}>
                    {/* <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{z_index: "10000"}}> */}
                        <div class="modal-dialog modal-lg"> 
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true" onClick={() => this.viewModal()}>&times;</button>
                                    <div class="clearfix" style={{height: "10px"}}></div>
                                </div>
                                <div class="modal-body">
                                    <div class="table-responsive">
                                        <table class="table" style={{margin_bottom: "0px"}}>
                                            <tr>
                                                <td style={{border_top: "0px"}}></td>
                                                <td style={{border_top: "0px"}}><span class="label label-success" style={{font_size: "13px"}}>Most Used</span></td>
                                            </tr>
                                        </table>
                                        <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr className="bg-info">
                                                <th style={{textAlign: "center "}}>Number:</th>
                                                <th>Date Created:</th>
                                                <th>Used By:</th>
                                                <th>Created By:</th>
                                                <th>Name:</th>
                                                <th>Tags:</th>
                                                <th>Description:</th>
                                                <th>Photo:</th>
                                                <th>Action:</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                {this.state.modalData.map((item,key) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{key=key+1}</td>
                                                                <td>{moment(item.created_at).format('L')}</td>
                                                                <td><a href="#0">View</a> (27)</td>
                                                                <td><a href="#0">McDonalds</a></td>
                                                                <td>{item.name}</td>
                                                                <td>{item.tags}</td>
                                                                <td>{item.description}</td>
                                                                <td><img src="images/sample-mail-img.jpg" alt=""/></td>
                                                                <td>
                                                                    <a href="#0" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                                    <a href="#0" class="btn btn-danger btn-xs">Delete</a> &nbsp;
                                                                    <a href="#0" class="btn btn-warning btn-xs">Invisible</a>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                         </table>
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
export default ProductTemplate;