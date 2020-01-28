import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            uName:''
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("userData")){
            let myItem = localStorage.getItem("username");
            this.setState({uName:myItem});
            //console.log("call user feed");
        }else{
            this.setState({redirect:true});
        }
    }

    logout(){
        localStorage.setItem('userData','');
        let keysToRemove = ['username','userId','userData','access_token',"chkbx","user_type"];
        keysToRemove.forEach(k =>
            localStorage.removeItem(k));
        this.setState({redirect:true});
        //window.location.reload(true);
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render(){
        if(this.state.redirect){
            return(<Redirect exact to={"/"} />);
        }
        return(
            <header className="main-header">
                <a href="dashboard" className="logo hidden-xs">
                    <span className="logo-mini" style={{fontSize: '13px'}}><b>ARQA</b></span>
                    <span className="logo-lg"><img src={process.env.PUBLIC_URL+"/restaurant/images/logo.png"} alt="Logo"/></span>
                </a>

                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="row">
                        <div className="col-md-8 col-xs-6 padnoneright padnoneleft1">
                            <div className="logo-mini text-center hidden-xs" style={{color: '#fff'}}>
                                <img src={process.env.PUBLIC_URL+"/restaurant/images/logo1.png"} alt="Logo" height="50"/>
                            </div>
                            <div className="logo-mini visible-xs" style={{fontSize: '18px',display: 'inline-table',color: '#fff',paddingTop: '12px',paddingLeft: '5px'}}><b className="">ARQA</b></div>
                        </div>
                        <div className="col-md-3 col-xs-4 padnoneright">
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} className="user-image" alt="Image"/>
                                            <span className="hidden-xs">Welcome, {this.Capitalize(this.state.uName)}</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="user-footer">
                                                <a href="merchant.html">Home</a>
                                                <a href="#">Help</a>
                                                <a href="" onClick={this.logout}>Sign out</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;