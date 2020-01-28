import React from 'react';

class EmailTemplate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Email Templates</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" method="" class="form-horizontal">
                                    <div class="form-group">
                                            <label class="col-sm-3 control-label">Title</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control input-sm" placeholder="Title"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Description</label>
                                            <div class="col-sm-8">
                                                <textarea cols="80" id="editor1" name="editor1" rows="4"></textarea>
                                                {/* <script type="text/javascript">
                                                    CKEDITOR.replace( 'editor1', {
                                                        fullPage: true,
                                                        extraPlugins: 'docprops',
                                                        // Disable content filtering because if you use full page mode, you probably
                                                        // want to  freely enter any HTML content in source mode without any limitations.
                                                        allowedContent: true,
                                                        height: 150
                                                    } );
                                                </script> */}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label"></label>
                                            <div class="col-sm-8">
                                                <input type="submit" value="Submit" class="btn btn-primary"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Forgot Password</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Registration</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Confirmed Order</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Report Update</td>
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
export default EmailTemplate;