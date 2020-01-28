import React from 'react'

class RestaurantList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("fhskdhkdshkfhskhfdk")
        return (
            <div>
                <h1>Hello world</h1>
                <div className="modal fade" id="rest-list" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: "10000"}}>
                    <div className="modal-dialog">
                        <div className="modal-content" style={{border: "2px #e2a062 solid"}}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title"><strong>Restaurant List</strong></h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control input-sm" placeholder="Search Restaurant"/>
                                        <span className="input-group-addon" style={{background: "none" ,padding: '0px' ,border: '0px' ,paddingLeft: "5px"}}><button className="btn btn-primary btn-sm"><i className="fa fa-search"></i> Search</button></span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="thumbnail" style={{marginBottom: "0px"}}>
                                    <table className="table table-striped" style={{marginBottom:"0px"}}>
                                        <thead>
                                            <tr className="bg-warning">
                                                <th>#</th>
                                                <th>Restaurant Name</th>
                                                <th>Added By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>McDonald</td>
                                                <td>Restaurant</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>McDonald</td>
                                                <td>Restaurant</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantList;