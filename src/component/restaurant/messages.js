import React, {Component} from 'react';

class Message extends Component {
   render(){
        const textCenter = {
            background: '#1c1a22',
            color: '#fff',
            padding: '9px 10px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            lineHeight: '40px',
            display: 'inline'
        }
        const textCenter1 = {
            background: '#1c1a22',
            color: '#fff',
            padding: '9px 10px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            lineHeight: '30px',
            fontSize: '20px'
        }
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Messages
                    </h1>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div>
                                <div style={{background: '#323232',color: '#fff',padding: '0px',border: '0px',height: '500px',overflowY: 'scroll',marginBottom: '0px'}}>
                                    <table className="table btm-zero">
                                        <tbody>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger btn-sm">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={{background: '#1c1a22',color: '#fff',padding: '9px 10px',borderRadius: '50%',width: '50px',height: '50px',lineHeight: '30px',fontSize: '20px'}}><i className="fa fa-cutlery"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" width="10%" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Take Away</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={textCenter1}><i className="fa fa-cutlery"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Delivery</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={textCenter1}><i className="fa fa-cutlery"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Dine In</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}} />
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={textCenter1}><i className="fa fa-cutlery"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Drive Through</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={textCenter1}><i className="fa fa-cutlery"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" width="10%" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Take Away</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm"></td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Inquiry</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="6%">
                                                    <img src={process.env.PUBLIC_URL+"/restaurant/images/default-avatar.png"} alt="" width="60" style={{borderRadius: '50%'}}/>
                                                </td>
                                                <td className="td-width-70">
                                                    <a href="messages-detail" style={{color: '#fff'}}>
                                                        <h4><strong>Ummeesh Kumar</strong> &nbsp; <small style={{fontSize: '12px'}}>Wed, Oct 10, 3:34 PM</small></h4>
                                                        <p style={{marginBottom: '0px'}}>What time will my order be ready for pick up?</p>
                                                    </a>
                                                    <div className="clearfix"></div>
                                                    <div className="visible-xs visible-sm">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                            <div className="text-center" style={textCenter}><i className="fa fa-cutlery" style={{fontSize: '15px'}}></i></div>
                                                        </a> &nbsp;
                                                        <button type="button" className="btn btn-danger">Take Away</button>
                                                    </div>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#order-detail">
                                                        <div className="text-center" style={{background: '#1c1a22',color: '#fff',padding: '9px 10px',borderRadius: '50%',width: '50px',height: '50px',lineHeight: '40px'}}><i className="fa fa-cutlery fa-2x"></i></div>
                                                    </a>
                                                </td>
                                                <td className="hidden-xs hidden-sm" align="right">
                                                    <button type="button" className="btn btn-danger btn-lg btn-block">Dine In</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Message;