import React from 'react';
import Modal from 'react-responsive-modal';

class Subscription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFixedAmountToggleOn:false
        }
    }

    fixedAmountToggle = () => {
        this.setState(prevState => ({
            isFixedAmountToggleOn:!prevState.isFixedAmountToggleOn
        }))
    }

    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Subscription
                            <span class="pull-right">
                                <button class="btn btn-primary btn-sm" onClick = { () => this.fixedAmountToggle()}>Fix Amount</button>
                                <select class="form-control input-sm" style={{width: "150px",display:"inline"}}>
                                    <option>Sort By</option>
                                    <option>Recently Added</option>
                                    <option>Alphabetical</option>
                                </select>
                            </span>
                            <div class="clearfix"></div>
                        </h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th><input type="checkbox"/></th>
                                                    <th>#</th>
                                                    <th>Restaurant Name</th>
                                                    <th>Fixed Amount</th>
                                                    <th width="25%">Address</th>
                                                    <th>Date Joined</th>
                                                    <th>Undo</th>
                                                    <th width="10%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="checkbox"/></td>
                                                    <td>1</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>RM 5</td>
                                                    <td>3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf Road, Hazratganj, Lucknow, Uttar Pradesh 226001</td>
                                                    <td>05 July, 2017 | 10:00 AM</td>
                                                    <td>
                                                        <input type="submit" name="" value="Undo" class="btn btn-primary btn-xs"/><br/>
                                                        05 July, 2018 | 07:00 AM
                                                    </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox"/></td>
                                                    <td>2</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>RM 5</td>
                                                    <td>3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf Road, Hazratganj, Lucknow, Uttar Pradesh 226001</td>
                                                    <td>05 July, 2017 | 10:00 AM</td>
                                                    <td>
                                                        <input type="submit" name="" value="Undo" class="btn btn-primary btn-xs"/><br/>
                                                        05 July, 2018 | 07:00 AM
                                                    </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox"/></td>
                                                    <td>3</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>RM 5</td>
                                                    <td>3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf Road, Hazratganj, Lucknow, Uttar Pradesh 226001</td>
                                                    <td>05 July, 2017 | 10:00 AM</td>
                                                    <td>
                                                        <input type="submit" name="" value="Undo" class="btn btn-primary btn-xs"/><br/>
                                                        05 July, 2018 | 07:00 AM
                                                    </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox"/></td>
                                                    <td>4</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>RM 5</td>
                                                    <td>3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf Road, Hazratganj, Lucknow, Uttar Pradesh 226001</td>
                                                    <td>05 July, 2017 | 10:00 AM</td>
                                                    <td>
                                                        <input type="submit" name="" value="Undo" class="btn btn-primary btn-xs"/><br/>
                                                        05 July, 2018 | 07:00 AM
                                                    </td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox"/></td>
                                                    <td>5</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>RM 5</td>
                                                    <td>3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf Road, Hazratganj, Lucknow, Uttar Pradesh 226001</td>
                                                    <td>05 July, 2017 | 10:00 AM</td>
                                                    <td>
                                                        <input type="submit" name="" value="Undo" class="btn btn-primary btn-xs"/><br/>
                                                        05 July, 2018 | 07:00 AM
                                                    </td>
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
                <Modal open={this.state.isFixedAmountToggleOn} onClose={() => this.fixedAmountToggle()}>
                    {/* <div class="modal fade" id="fix-amount" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 10000;"> */}
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content" style={{border: "2px #e2a062"}}>
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => this.fixedAmountToggle()}><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title"><strong>Fix Amount</strong></h4>
                                </div>
                                <form action="#" method="">
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label>Fix Amount</label>
                                            <div>
                                                <input type="text" name="" class="form-control input-sm"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer" style={{text_align: "left"}}>
                                        <input type="submit" name="" value="Apply to All" class="btn btn-primary btn-sm"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal>
            </div>
        )
    }
}
export default Subscription;