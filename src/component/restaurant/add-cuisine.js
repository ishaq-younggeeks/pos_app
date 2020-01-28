import React, { Component } from "react";

class AddCuisine extends Component {
    render(){
        return(
            <div className="modal fade" id="add-cuisine" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Add Cuisine</strong></h4>
                    </div>
                    <form action="#" method="post" className="form-horizontal">
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Cuisine:</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control input-sm" id="" placeholder="Cuisine" name="" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label"></label>
                                <div className="col-sm-5">
                                    <button type="button" name="" className="btn btn-primary btn-sm">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer" style={{textAlign: 'left'}}>
                        <div className="thumbnail btm-zero">
                            <table className="table table-striped btm-zero">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cuisine Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cuisine 1</td>
                                        <td><a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Cuisine 2</td>
                                        <td><a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Cuisine 3</td>
                                        <td><a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Cuisine 4</td>
                                        <td><a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddCuisine;