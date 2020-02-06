    import React, { Component } from 'react';

    class ManageTableModal extends Component {
        render() { 
            return (
                <div className="modal fade" id="manage-table" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title"><strong>Manage Floor</strong></h4>
                        </div>
                        <div className="modal-body">
                            <form action="#" method="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Floor Name / Number</label>
                                            <div>
                                                <input type="text" className="form-control input-sm" placeholder="Table Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Number of Tables</label>
                                            <div>
                                                <input type="text" className="form-control input-sm" placeholder="Number of Tables"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Number of POS per Floor</label>
                                            <div>
                                                <input type="text" className="form-control input-sm" placeholder="Number of POS per Floor"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label></label>
                                            <div>
                                                <label className="checkbox-inline">
                                                    <input type="checkbox"/> POS
                                                </label>
                                                <label className="checkbox-inline">
                                                    <input type="checkbox"/> Bar
                                                </label>
                                                <label className="checkbox-inline">
                                                    <input type="checkbox"/> Kitchen
                                                </label>
                                                <label className="checkbox-inline">
                                                    <input type="checkbox"/> Drink
                                                </label>
                                                <label className="checkbox-inline" style={{marginLeft: '0px'}}>
                                                    <input type="checkbox"/> Take Away
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer" style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                </div>
                            </form>
                            <div className="table-responsive thumbnail" style={{marginbottom: '0px'}}>
                                <table className="table table-condensed table-striped" style={{marginbottom: '0px'}}>
                                    <thead>
                                        <tr>
                                            <th>Floor Name / Number</th>
                                            <th>Number of Tables</th>
                                            <th>Number of POS per Floor</th>
                                            <th></th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Floor 1</td>
                                            <td>20</td>
                                            <td>2</td>
                                            <td>
                                                <i className="fa fa-check text-success"></i> POS<br/>
                                                <i className="fa fa-check text-success"></i> Bar<br/>
                                                <i className="fa fa-check text-success"></i> Kitchen<br/>
                                                <i className="fa fa-check text-success"></i> Take Away<br/>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Floor 2</td>
                                            <td>20</td>
                                            <td>2</td>
                                            <td>
                                                <i className="fa fa-check text-success"></i> POS<br/>
                                                <i className="fa fa-check text-success"></i> Bar<br/>
                                                <i className="fa fa-check text-success"></i> Kitchen<br/>
                                                <i className="fa fa-times text-danger"></i> Take Away<br/>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Floor 3</td>
                                            <td>20</td>
                                            <td>2</td>
                                            <td>
                                                <i className="fa fa-check text-success"></i> POS<br/>
                                                <i className="fa fa-check text-success"></i> Bar<br/>
                                                <i className="fa fa-times text-danger"></i> Kitchen<br/>
                                                <i className="fa fa-check text-success"></i> Take Away<br/>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer" style={{textAlign: 'center'}}>
                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                            </div>                        
                        <div className="table-responsive thumbnail" style={{marginbottom: '0px'}}>
                            <table className="table table-condensed table-striped" style={{marginbottom: '0px'}}>
                                <thead>
                                    <tr>
                                        <th>Floor Name / Number</th>
                                        <th>Number of Tables</th>
                                        <th>Number of POS per Floor</th>
                                        <th></th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Floor 1</td>
                                        <td>20</td>
                                        <td>2</td>
                                        <td>
                                            <i className="fa fa-check text-success"></i> POS<br/>
                                            <i className="fa fa-check text-success"></i> Bar<br/>
                                            <i className="fa fa-check text-success"></i> Kitchen<br/>
                                            <i className="fa fa-check text-success"></i> Take Away<br/>
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Floor 2</td>
                                        <td>20</td>
                                        <td>2</td>
                                        <td>
                                            <i className="fa fa-check text-success"></i> POS<br/>
                                            <i className="fa fa-check text-success"></i> Bar<br/>
                                            <i className="fa fa-check text-success"></i> Kitchen<br/>
                                            <i className="fa fa-times text-danger"></i> Take Away<br/>
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Floor 3</td>
                                        <td>20</td>
                                        <td>2</td>
                                        <td>
                                            <i className="fa fa-check text-success"></i> POS<br/>
                                            <i className="fa fa-check text-success"></i> Bar<br/>
                                            <i className="fa fa-times text-danger"></i> Kitchen<br/>
                                            <i className="fa fa-check text-success"></i> Take Away<br/>
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-times"></i></a>
                                        </td>
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
    
    export default ManageTableModal;