import React, { Component } from 'react';

class Devices extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Devices
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div>
                                <table className="table table-striped" style={{marginBottom: '0px'}}>
                                    <thead>
                                        <tr className="bg-info">
                                            <th>Name</th>
                                            <th>Last Employee</th>
                                            <th>Last Logged-on</th>
                                            <th>App</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> iPad</td>
                                            <td>Raman Singh</td>
                                            <td>Few minutes ago</td>
                                            <td>Kitchen</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> iPad</td>
                                            <td>Sanjay</td>
                                            <td>1 month ago</td>
                                            <td>Admin</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> iPad</td>
                                            <td>Deepak</td>
                                            <td>Active</td>
                                            <td>POS</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> iPad</td>
                                            <td>Roopam</td>
                                            <td>Active</td>
                                            <td>Kitchen</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> Bob</td>
                                            <td>Rohan</td>
                                            <td>3 days ago</td>
                                            <td>Kitchen</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-mobile"></i> iPad</td>
                                            <td>Dipti</td>
                                            <td>10 hours ago</td>
                                            <td>POS</td>
                                            <td>
                                                <a href="#"><i className="fa fa-pencil"></i></a> &nbsp;|&nbsp;
                                                <a href="#"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Devices;