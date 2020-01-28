import React from 'react';

class SocialSetting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Social Settings</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" method="" class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Title</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control input-sm" placeholder="Title"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Upload Icon</label>
                                            <div class="col-sm-5">
                                                <input type="file"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Add Link</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control input-sm" placeholder="Add Link"/>
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
                                                    <th>Title</th>
                                                    <th>Icon</th>
                                                    <th>Link</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Facebook</td>
                                                    <td><img src="images/fb.png" alt=""/></td>
                                                    <td>www.facebook.com/arqa</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Youtube</td>
                                                    <td><img src="images/you.png" alt=""/></td>
                                                    <td>www.youtube.com/arqa</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Twitter</td>
                                                    <td><img src="images/twit.png" alt=""/></td>
                                                    <td>www.twitter.com/arqa</td>
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
export default SocialSetting;