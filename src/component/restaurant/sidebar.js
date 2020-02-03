import React, { Component } from 'react';
import { NavLink,Redirect } from 'react-router-dom';

class Sidebar extends Component {
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
                        <NavLink to="/restaurant" exact>
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/messages" exact><i className="fa fa-list"></i> <span>Messages <i className="label label-primary">10</i></span></NavLink></li>
                    <li><NavLink to="/restaurant/reports" exact><i className="fa fa-list"></i> <span>Reports <i className="label label-primary">3</i></span></NavLink></li>
                    <li><NavLink to="/restaurant/promotions" exact><i className="fa fa-tag"></i> <span>Promotions</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/payment" exact>
                            <i className="fa fa-dollar"></i> <span>Payment</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurant/statistics-reports" exact>
                            <i className="fa fa-file-text"></i> <span>Statistics</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/inventory" exact><i className="fa fa-pencil"></i> <span>Inventory</span></NavLink></li>
                    <li><NavLink to="/restaurant/accounts" exact><i className="fa fa-calculator"></i> <span>Accounts</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/table-reservation" exact>
                            <i className="fa fa-database"></i> <span>Table Reservation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurant/devices" exact>
                            <i className="fa fa-plug"></i> <span>Devices</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/employees-list" exact><i className="fa fa-users"></i> <span>Employees</span></NavLink></li>
                    <li><NavLink to="/restaurant/product-list" exact><i className="fa fa-list"></i> <span>Products</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/archive" exact>
                            <i className="fa fa-database"></i> <span>Archive</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurant/floors" exact>
                            <i className="fa fa-database"></i> <span>Floors</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/discount" exact><i className="fa fa-gift"></i> <span>Discount</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/printers" exact>
                            <i className="fa fa-print"></i> <span>Printers</span>
                        </NavLink>
                    </li>
                    <li><NavLink to="/restaurant/reviews" exact><i className="fa fa-list"></i> <span>Reviews</span></NavLink></li>
                    <li>
                        <NavLink to="/restaurant/business-information" exact>
                            <i className="fa fa-list-alt"></i> <span>Business Information</span>
                        </NavLink>
                    </li>
                    <li><NavLink exact to="/restaurant/company-info"><i className="fa fa-list"></i> Company Information</NavLink></li>
                    <li><NavLink exact to="/restaurant/admin-info"><i className="fa fa-list"></i> Admin Information</NavLink></li>

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

export default Sidebar;