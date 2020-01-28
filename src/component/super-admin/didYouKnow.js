import React from 'react'

class DidYouKnow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Did You Know?</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail" style={{padding: "15px ,10px, 0px ,10px"}}>
                                    <form action="#" method="" class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Title</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control input-sm" placeholder="Title"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Words</label>
                                            <div class="col-sm-5">
                                                <textarea class="form-control input-sm" placeholder="Words"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Time Limit</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control input-sm" placeholder="Time Limit"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Image</label>
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
                                                    <th>Title</th>
                                                    <th>Words</th>
                                                    <th>Image</th>
                                                    <th width="180">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Best dining value possible to every guest</td>
                                                    <td>Rather than offer a discount to one particular group of guests, we believe our responsibility is to make sure we're providing the best dining value possible to every guest who joins us for lunch or dinner. </td>
                                                    <td>-</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">View</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Best dining value possible to every guest</td>
                                                    <td>Rather than offer a discount to one particular group of guests, we believe our responsibility is to make sure we're providing the best dining value possible to every guest who joins us for lunch or dinner. </td>
                                                    <td>-</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">View</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Best dining value possible to every guest</td>
                                                    <td>Rather than offer a discount to one particular group of guests, we believe our responsibility is to make sure we're providing the best dining value possible to every guest who joins us for lunch or dinner. </td>
                                                    <td>-</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">View</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Best dining value possible to every guest</td>
                                                    <td>Rather than offer a discount to one particular group of guests, we believe our responsibility is to make sure we're providing the best dining value possible to every guest who joins us for lunch or dinner. </td>
                                                    <td>-</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">View</a> &nbsp;
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
export default DidYouKnow;