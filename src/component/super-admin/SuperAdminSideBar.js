import React, { Component } from 'react';
import { NavLink,Redirect } from 'react-router-dom';

class SuperAdminSideBar extends Component {
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
        if(this.state.redirect===false){
            return(<Redirect exact to='/' />);
        }
        return(
            <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active">
                        <NavLink to="/super-admin" exact>
                            <i className="fa fa-users"></i> <span>Manage Employees</span>
                        </NavLink>
                    </li>
                    {/* <li><NavLink to="/restaurant/messages" exact><i className="fa fa-bell"></i> <span>Notifications <i className="label label-primary">10</i></span></NavLink></li> */}
                    <li className="treeview active">
                        <a href="javascript:void(0);">
                            <i className="fa fa-bell"></i> <span>Notifcations</span> <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu">
                            <li className="active"><NavLink to ="/super-admin/restaurant-announcements">Announcements for Restaurants</NavLink></li>
                            <li><NavLink to ="/super-admin/consumer-notifications">Notifications for Consumers</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/restaurant/reports" exact><i className="fa fa-question-circle"></i> <span>Help <i className="label label-primary">3</i></span></NavLink></li>
                    <li><NavLink to="/super-admin/all-reports" exact><i className="fa fa-file-text"></i> <span>Reports</span></NavLink></li>
                    <li>
                        <NavLink to="/super-admin/consumer" exact>
                            <i className="fa fa-users"></i> <span>Consumer</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/super-admin/restaurant" exact>
                            <i className="fa fa-cutlery"></i> <span>Restaurant</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/super-admin/site-settings" exact><i className="fa fa-cog"></i> <span>Site Settings</span></NavLink></li>
                    <li><NavLink to="/super-admin/social-settings" exact><i className="fa fa-cog"></i> <span>Social Settings</span></NavLink></li>
                    <li>
                        <NavLink to="/super-admin/consumer-banner-management" exact>
                            <i className="fa fa-cog"></i> <span>Banner Management</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/super-admin/cuisine-management" exact>
                            <i className="fa fa-cog"></i> <span>Cuisine Management</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/super-admin/comission" exact><i className="fa fa-money"></i> <span>Commission</span></NavLink></li>
                    <li><NavLink to="/super-admin/subscription" exact><i className="fa fa-envelope"></i> <span>Subscription</span></NavLink></li>
                    <li>
                        <NavLink to="/super-admin/product-template" exact>
                            <i className="fa fa-file-text"></i> <span>Product Template</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurant/floors" exact>
                            <i className="fa fa-database"></i> <span>payment</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/discount" exact><i className="fa fa-gift"></i> <span>Statistic</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/printers" exact>
                            <i className="fa fa-print"></i> <span>Revenue</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/super-admin/did-you-know" exact><i className="fa fa-list"></i> <span>Did You Know?</span></NavLink></li>
                    <li>
                        <NavLink to="/super-admin/printer-driver-management" exact>
                            <i className="fa fa-list-alt"></i> <span>Printer Driver Management</span>
                        </NavLink>
                    </li>
                    <li><NavLink exact to="/super-admin/sst-charge"><i className="fa fa-list"></i> SST Charge</NavLink></li>
                    <li><NavLink exact to="/restaurant/admin-info"><i className="fa fa-list"></i> Popular Restaurant</NavLink></li>
                    <li><NavLink exact to="/super-admin/new-restaurant"><i className="fa fa-list"></i> New Restaurant</NavLink></li>
                    <li><NavLink exact to='/super-admin/manage-ic-consumers'><i className="fa fa-list"></i> Manage IC for Consumer</NavLink></li>
                    <li><NavLink exact to="/restaurant/admin-info"><i className="fa fa-list"></i> Receipt Template</NavLink></li>
                    <li><NavLink exact to="/super-admin/email-templates"><i className="fa fa-list"></i>Email Templates</NavLink></li>
                    <li><NavLink exact to="/super-admin/consumer-feedback"><i className="fa fa-list"></i> FeedBack</NavLink></li>
                    <li><NavLink exact to='/super-admin/flagged-restaurant'><i className="fa fa-list"></i> Flaged Restaurant</NavLink></li>
                    <li><NavLink exact to='/super-admin/flagged-consumer'><i className="fa fa-list"></i> Flaged Consumers</NavLink></li>
                    <li><NavLink exact to="/restaurant/admin-info"><i className="fa fa-list"></i> Delivery</NavLink></li>
                    <li><NavLink exact to="/super-admin/donation"><i className="fa fa-list"></i> Donation</NavLink></li>


                    {/*<li className="treeview">
                        <a id="info" href="javascript:void(0);">
                            <i className="fa fa-cogs"></i> <span>Information</span> <i className="fa fa-angle-left pull-right"></i>
                        </a>
                        <ul className="treeview-menu" id="treeview-menu">
                            <li><a href="/restaurant/company-info"><i className="fa fa-list"></i> Company Information</a></li>
                            <li><a href="/restaurant/admin-info"><i className="fa fa-list"></i> Admin Information</a></li>
                        </ul>
                    </li>*/}
                </ul>
            </section>
        </aside>
        );
    }
}

export default SuperAdminSideBar;