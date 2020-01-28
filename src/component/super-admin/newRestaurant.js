import React from 'react';

class NewRestaurant extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            New Restaurants &nbsp; &nbsp;
                            <span>
                                <select class="form-control input-sm" style={{width: "120px",display: "inline-block"}}>
                                    <option>Slider Option</option>
                                    <option>Automatic</option>
                                    <option>Manual</option>
                                </select>
                            </span>
                            <span class="pull-right">
                                <input type="text" name="" class="form-control input-sm" placeholder="Search Restaurant" style={{display:"inline",width:"200px"}}/>
                                <button type="submit" class="btn btn-primary btn-sm" style={{margin_top: "5px"}}>Submit</button>
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
                                                    <th>Restaurant Name</th>
                                                    <th>Contact Number</th>
                                                    <th>Date Added</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>+60122299761</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td><span class="label label-info" style={{font_size: "12px"}}>Active</span></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn On</a>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn Off</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>+60122299761</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td><span class="label label-info" style={{font_size: "12px"}}>Active</span></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn On</a>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn Off</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>+60122299761</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td><span class="label label-info" style={{font_size: "12px"}}>Active</span></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn On</a>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn Off</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>+60122299761</td>
                                                    <td>05 July, 2018 | 10:00 AM</td>
                                                    <td><span class="label label-info" style={{font_size: "12px"}}>Active</span></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn On</a>
                                                        <a href="#" class="btn btn-primary btn-xs">Turn Off</a>
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
export default NewRestaurant;