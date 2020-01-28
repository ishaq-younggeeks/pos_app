import React from 'react'

class PrinterDriverManagement extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Printer Driver Management</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" method="" class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Printer Model Name</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control input-sm" placeholder="Printer Model Name"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Upload Driver</label>
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
                                <select class="form-control input-sm pull-right" style={{width: "150px",margin_bottom: "10px"}}>
                                    <option>Sort By</option>
                                    <option>Alphabetical</option>
                                    <option>Date Added</option>
                                </select>
                                <div class="clearfix"></div>
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped" style={{margin_bottom: "0px"}}>
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Printer Model Name</th>
                                                    <th>Driver Upload</th>
                                                    <th>Date/Time</th>
                                                    <th width="180">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Epson Printer</td>
                                                    <td>Yes</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Epson Printer</td>
                                                    <td>Yes</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Epson Printer</td>
                                                    <td>Yes</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Epson Printer</td>
                                                    <td>No</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Epson Printer</td>
                                                    <td>No</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Epson Printer</td>
                                                    <td>Yes</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
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
export default PrinterDriverManagement;