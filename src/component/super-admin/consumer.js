import React from 'react';
import {GetData} from '../restaurant/services/postData';
// import PersonalProfileModal from '../super-admin/Modals/PersonalProfileModal'
import Modal from "react-responsive-modal";
import moment from 'moment'
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1tZWVzaGt1bWFyIiwiYSI6ImNrMm9qcXkxczBnbWMzbXA1eWY2ZjIxenMifQ.Ao8swUOKC8QRSwgAIOl3EQ';

class Consumer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consumerList:[],
            profileModalOpen:false,
            staticsModalOpen:false,
            data:[],
            ReviewlistOpen:false,
            restaurantData:[],
            starRating:'',
            profileData:[],
            lng: 77.18,
            lat: 28.61,
            zoom: 9.55,
            searchString:[],
            name:''
        }
    }

    componentDidMount(){
        GetData('consumers').then((result)=> {
            this.setState({
                consumerList:result.data,
                searchString:result.data
            })
        });
    }

    personalProfileModal = (item) => {
        console.log("hello world")
        this.setState({ profileModalOpen: !this.state.profileModalOpen });
        this.setState({data:item})
    };

    staticsModal = (item) => {
        console.log("adfsfs",item)
        this.setState({ staticsModalOpen: !this.state.staticsModalOpen });
        this.setState({data:item})
    }

    onCloseModal = () => {
        this.setState({ profileModalOpen: !this.state.profileModalOpen });
    };

    onStaticsClose = () => {
        this.setState({ staticsModalOpen: !this.state.staticsModalOpen });
    };

    ReviewModal = (item) => {
        console.log("hyphen")
        this.setState({ ReviewlistOpen: !this.state.ReviewlistOpen });
        this.setState({restaurantData:item.restaurant_review})
        this.setState({profileData:item.profile_review})
    };

    onReviewClose = () => {
        this.setState({ ReviewlistOpen: !this.state.ReviewlistOpen });
    };

    handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
        },() => {
            this.filterArray()
        })
    }

    filterArray = () => {
        let searchString = this.state.name;
        let responseData = this.state.consumerList;
        console.log(responseData)
        if(searchString.length > 0){
            console.log("true")
        //     // console.log(responseData[i].name);
            responseData = responseData.filter(searchString);
            console.log("helllloooooo",responseData)
        //     this.setState({
        //         responseData
        //     })
        } else {
            console.log("false")
        }
    }

    // mapOpen = () => {
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [this.state.lng, this.state.lat],
    //         zoom: this.state.zoom
    //     });
    //     map.on('move', () => {
    //         this.setState({
    //             lng: map.getCenter().lng.toFixed(4),
    //             lat: map.getCenter().lat.toFixed(4),
    //             zoom: map.getZoom().toFixed(2)
    //         });
    //     });
    //     var geocoder = new MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //         });
    //     map.addControl(geocoder);
    // }
    
    render() {
        console.log(this.state.name)
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Consumers List
                            <span class="pull-right">
                                <input type="text" class="form-control input-sm" placeholder="Name" name ="name"  style={{width: "170px",display:"inline"}} onChange={(e) => this.handleChange(e)}/>
                                <strong style={{font_size: "10px"}}>OR</strong>
                                <input type="text" value="" class="form-control input-sm" placeholder="Email" style={{width: "170px",display:"inline"}}/>
                                <input type="submit" value="Search" class="btn btn-primary btn-sm" style={{margin_top: "2px"}}/>
                            </span>
                        </h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Full Name</th>
                                                    <th>Email</th>
                                                    <th>Contact Number</th>
                                                    <th>Live Location</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {/* {this.state.profileModalOpen ? <PersonalProfileModal item={this.state.data}/>:null} */}
                                                {this.state.consumerList.map((item,key) => {   
                                                    return (
                                                        <tr>
                                                            <td>{key+=1}</td>
                                                            <td>{item.first_name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                            <td><a onClick={() => this.mapOpen()}>View</a></td>
                                                            <td>
                                                                <a href="#0" class="btn btn-primary btn-xs">Delete</a> &nbsp;
                                                                <button class="btn btn-primary btn-xs" onClick={() => this.personalProfileModal(item)}>Personal Profile</button>
                                                                 &nbsp;
                                                                <button class="btn btn-primary btn-xs" onClick={() => this.staticsModal(item)}>Statistics</button> &nbsp;
                                                                <button class="btn btn-primary btn-xs" onClick={() => this.ReviewModal(item)}>Reviews</button>
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
                {/* <div ref={el => this.mapContainer = el} className="mapContainer" id='map' /> */}
                <Modal open={this.state.profileModalOpen} onClose={() => this.onCloseModal()}>
                    {/* <div className="modal fade" id="personal-profile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: "10000"}}> */}
                        <div className="modal-dialog">
                            <div className="modal-content" >
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onCloseModal()}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Personal Profile</strong></h4>
                                </div>
                                <div>
                                    <div className="modal-body">
                                        <div className="media">
                                            <div className="media-left">
                                                <img className="media-object thumbnail" src="images/default-avatar.png" alt="" style={{marginBottom: "0px"}}/>
                                            </div>
                                            <div className="media-body" style={{line_height: "28px"}}>
                                                <h4 className="media-heading">{this.state.data.first_name}</h4>
                                                <i className="fa fa-envelope"></i> <strong>Email:</strong>{this.state.data.email}<br/>
                                                <i className="fa fa-phone"></i> <strong>Contact Number:</strong>{this.state.data.phone}<br/>
                                                <i className="fa fa-birthday-cake"></i> <strong>Age:</strong>{this.state.data.age}<br/>
                                                <i className="fa fa-intersex"></i> <strong>Gender:</strong>{this.state.data.gender}<br/>
                                                {/* <i className="fa fa-file-text"></i> <strong>IC:</strong> <a href="#">{this.props.item.email}</a><br/> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </Modal>
                <Modal open={this.state.staticsModalOpen} onClose={() => this.onStaticsClose()}>
                    {/* <div className="modal fade" id="statistics" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div className="modal-dialog">
                            <div className="modal-content" style={{border: "2px"}}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onStaticsClose()}><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title"><strong>Statistics</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered" style={{margin_bottom: "0px"}}>
                                            <tr>
                                                <td width="230"><strong>Last Active</strong></td>
                                                <td>2 days ago</td>
                                            </tr>
                                            <tr >
                                                <td><strong>Average Order Spend</strong></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Order History</strong></td>
                                                <td><a href="#">View</a></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Favourite Cuisine</strong></td>
                                                <td>Indian, Chinese</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Average $ Spent</strong></td>
                                                <td>RM 500</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Average Time Spent on App</strong></td>
                                                <td>30 min</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Most Used Eating Option Type</strong></td>
                                                <td>Take Away, Delivery</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Payment Methods Currently In Use</strong></td>
                                                <td>Cash</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Most Used Payment Method</strong></td>
                                                <td>Card</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Favourite Restaurant</strong></td>
                                                <td>Royal Cafe Multi Cuisine</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Top 5 periods Most Online</strong></td>
                                                <td style={{line_height: "24px"}}>10:00 AM to 11:00 AM<br/> 4:00 PM to 5:00 PM<br/> 6:00 PM to 7:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Reports</strong></td>
                                                <td><a href="consumer-reports.html">View</a></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Discounts</strong></td>
                                                <td><a href="javascript:void(0);" data-toggle="modal" data-target="#discounts">View</a></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal>
                <Modal open={this.state.ReviewlistOpen} onClose={() => this.onReviewClose()}>
                    {/* <div className="modal fade" id="reviews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div className="modal-dialog">
                            <div className="modal-content" style={{border: "2px"}}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onReviewClose()}><span aria-hidden="true" >&times;</span></button>
                                    <h4 className="modal-title"><strong>Reviews</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <div className="tab-content" style={{height: "400px",overflow_y:" scroll"}}>
                                        <div className="tab-pane active" id="rest-reviews">
                                            <div className="panel panel-info" style={{padding: "4px"}}>
                                                <table className="table table-condensed table-striped mar-btm-zero">
                                                    {this.state.restaurantData.map((item) => {
                                                        return (
                                                            <tr>
                                                            <td style={{border_top: "0px"}}>
                                                                <p style={{margin_bottom: "5px"}}>
                                                                    <strong>{item.title}</strong>
                                                                    <span className="pull-right">
                                                                        <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;
                                                                        <a href="#"><i className="fa fa-trash"></i></a>
                                                                    </span>
                                                                </p>
                                                                <div>
                                                                    <Ratings rating = {item.rating}/>
                                                                    <span className="pull-right" style={{color: "#989898"}}>{moment(item.created_at).format("Do-MMM-YY")}</span>
                                                                </div>
                                                                <p style={{margin_bottom: "5px"}}>
                                                                   {item.comment}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        )
                                                    })}
                                                </table>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="pro-reviews">
                                            <div className="panel panel-info" style={{padding:"4px"}}>
                                                <table className="table table-condensed table-striped mar-btm-zero">
                                                    {this.state.profileData.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td style={{border_top: "0px"}}>
                                                                    <p style={{margin_bottom: "5px"}}>
                                                                        <strong>{item.title}</strong>
                                                                        <span className="pull-right">
                                                                            <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;
                                                                            <a href="#"><i className="fa fa-trash"></i></a>
                                                                        </span>
                                                                    </p>
                                                                    <div>
                                                                        <Ratings rating = {item.rating}/>
                                                                        <span className="pull-right" style={{color: "#989898"}}>{moment(item.created_at).format("Do-MMM-YY")}</span>
                                                                    </div>
                                                                    <p style={{margin_bottom: "5px"}}>
                                                                        {item.comment}  
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div><br/>
                                    <div style={{position: "fixed",bottom: "0px",left: "0px",right: "0px",z_index: "1000"}}>
                                        <div>
                                            <ul className="nav nav-pills nav-justified" role="tablist">
                                                <li className="active text-center" style={{float: "left",width: "49%"}}><a data-toggle="tab" href="#rest-reviews" style={{padding: "6px 15px",border_radius: "0px",margin_bottom: "0px"}}>Restaurant Reviews</a></li>
                                                <li className="text-center" style={{float: "left",width: "50%"}}><a data-toggle="tab" href="#pro-reviews" style={{padding: "6px 15px",border_radius: "0px",margin_bottom: "0px"}}>Profile Reviews</a></li>
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

class Ratings extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            star:this.props.rating
        }
    }
    render() {
        return (
            <div>
                <span class="text-dark-gray">
                    {this.state.star >= 1 ? <i class="fa fa-star text-warning"></i> : <i class="fa fa-star"></i>}
                    {this.state.star >= 2 ? <i class="fa fa-star text-warning"></i> : <i class="fa fa-star"></i>}
                    {this.state.star >= 3 ? <i class="fa fa-star text-warning"></i> : <i class="fa fa-star"></i>}
                    {this.state.star >= 4 ? <i class="fa fa-star text-warning"></i> : <i class="fa fa-star"></i>}
                    {this.state.star >= 5 ? <i class="fa fa-star text-warning"></i> : <i class="fa fa-star"></i>}

                </span>
            </div>
        )
    }
}
export default Consumer;