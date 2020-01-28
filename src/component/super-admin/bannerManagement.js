import React from 'react'

class BannerManagement extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Banner Management</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <ul class="nav nav-pills">
                                    <li class="active width1" style={{font_size: "12px"}}><a href="consumer-banner-management.html" style={{padding: "10px"}}>Consumer Banner</a></li>
                                    <li class="width1" style={{font_size: "12px"}}><a href="dashboard-banner-management.html" style={{padding: "10px"}}>Dashboard Banner</a></li>
                                </ul>
                                <div class="clearfix"></div><br/>
                                <div class="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" method="" class="form-horizontal">                                   
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Upload Banner</label>
                                            <div class="col-sm-5">
                                                <input type="file"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label"></label>
                                            <div class="col-sm-5">
                                                <input type="submit" value="Submit" class="btn btn-primary"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped" style={{margin_bottom: "0px"}}>
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Banner Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="images/banner3.jpg" alt="" width="100"/></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td><img src="images/banner3.jpg" alt="" width="100"/></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
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
            </div>
        )
    }
}
export default BannerManagement