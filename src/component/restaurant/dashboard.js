import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect:true,
        }
    }
    componentWillMount(){
        let userId = localStorage.getItem("userId");
        if(!userId){
            this.setState({redirect:false});
        }
    }
    render(){
        if(this.state.redirect==false){
            return(<Redirect exact to='/' />);
        }
        const dismissAlert = {
            color: '#31708f',
            marginBottom: '10px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '13px'
        }
        return(
            <>
            <div className="content-wrapper">
            <section className="content-header">
                <h1>Dashboard</h1>
            </section>
            <section className="content">

                <div className="row">
                    <div className="col-lg-12 col-xs-12 pad-left-right-zero">
                        <div className="thumbnail">
                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                              
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active" style={{marginLeft: '0px'}}>
                                        
                                        <img src={process.env.PUBLIC_URL+"/restaurant/images/banner3.jpg"} alt="banner" className="img-height"/>
                                    </div>
                                    <div className="item" style={{marginLeft: '0px'}}>
                                        <img src={process.env.PUBLIC_URL+"/restaurant/images/banner3.jpg"} alt="banner" className="img-height"/>
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <div className="visible-xs">
                            <div className="text-center">
                                <a href="#" onClick={e => e.preventDefault()} data-toggle="modal" data-target="#notifications">
                                    <div style={{textAlign: 'center',margin: '0 auto',fontSize: '30px',lineHeight: '80px',background: '#b9def0',border: '1px #9acfea solid',borderRadius: '50%',color: '#31708f',width: '80px',height: '80px'}}>
                                        <i className="fa fa-bell"></i>
                                    </div>
                                </a>
                                <h5><strong>Notifications</strong><br/> (10)</h5>
                            </div>
                        </div>
                        <div className="hidden-xs">
                            <h4 style={{marginTop: '0px'}}><strong>Notifications</strong> <small>(10)</small></h4>
                            <div className="thumbnail" style={{height: '200px',overflowY: 'scroll',padding: '15px 10px 0px 10px'}}>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <div className="visible-xs">
                            <div className="text-center">
                                <a href="#" data-toggle="modal" data-target="#announcements">
                                    <div style={{textAlign: 'center',margin: '0 auto',fontSize: '30px',lineHeight: '80px',background: '#b9def0',border: '1px #9acfea solid',borderRadius: '50%',color: '#31708f',width: '80px',height: '80px'}}>
                                        <i className="fa fa-bullhorn"></i>
                                    </div>
                                </a>
                                <h5><strong>Announcements</strong><br/> (10)</h5>
                            </div>
                        </div>
                        <div className="hidden-xs">
                            <h4 style={{marginTop: '0px'}}><strong>Announcements</strong> <small>(10)</small></h4>
                            <div className="thumbnail" style={{height: '200px',overflowY: 'scroll',padding: '15px 10px 0px 10px'}}>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                                </div>
                                <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

            </section>
        </div>
        <div className="modal fade" id="notifications" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title"><strong>Notifications</strong></h4>
                </div>
                <div className="modal-body">
                    <div className="thumbnail" style={{marginBottom: '0px',height: '300px',overflowY: 'scroll',padding: '15px 10px 0px 10px'}}>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Mr Reddy has ordered food from Royal Cafe Multi Cuisine Restaurant.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="announcements" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title"><strong>Announcements</strong></h4>
                </div>
                <div className="modal-body">
                    <div className="thumbnail" style={{marginBottom: '0px',height: '300px',overflowY: 'scroll',padding: '15px 10px 0px 10px'}}>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                        </div>
                        <div className="alert alert-info alert-dismissible" role="alert" style={dismissAlert}>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <i className="fa fa-hand-o-right"></i> Restaurants needs to deliver food without any taxes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
        );
    }
}

export default Dashboard;