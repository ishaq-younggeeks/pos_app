import React from 'react'
import Modal from "react-responsive-modal";

class AddModalCategory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <div>
                <h1>Hello world</h1>
                <Modal>
                {/* <div class="modal fade" id="add-cat" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> */}
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                {/* <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                                <h4 class="modal-title"><strong>Add Category</strong></h4>
                            </div>
                            <form action="#" method="post" class="form-horizontal">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label">Category:</label>
                                        <div class="col-sm-5">
                                            <input type="text" class="form-control input-sm" id="" placeholder="Category" name="" value=""/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-4 control-label"></label>
                                        <div class="col-sm-5">
                                            <button type="button" name="" class="btn btn-primary btn-sm">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="modal-footer" style={{text_align: "left"}}>
                                <div class="thumbnail btm-zero">
                                    <table class="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Category Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Drink</td>
                                                <td><a  class="btn btn-danger btn-xs"><i class="fa fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Drink</td>
                                                <td><a  class="btn btn-danger btn-xs"><i class="fa fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Drink</td>
                                                <td><a  class="btn btn-danger btn-xs"><i class="fa fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Drink</td>
                                                <td><a  class="btn btn-danger btn-xs"><i class="fa fa-times"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default AddModalCategory;