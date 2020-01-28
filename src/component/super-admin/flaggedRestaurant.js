import React from 'react';

class FlaggedRestaurant extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Flagged Restaurant
                            <select class="form-control input-sm pull-right" style={{width: "120px",display: "inline-block"}}>
                                <option>Sort By</option>
                                <option>Highest</option>
                                <option>Lowest</option>
                                <option>Most Recent</option>
                            </select>
                            <div class="clearfix"></div>
                        </h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Restaurant Name</th>
                                                    <th>Email</th>
                                                    <th>Contact Number</th>
                                                    <th>Declined Order Amount</th>
                                                    <th>Online Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>royal.cafe@gmail.com</td>
                                                    <td>+60122299761</td>
                                                    <td>10</td>
                                                    <td>1 day ago</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>royal.cafe@gmail.com</td>
                                                    <td>+60122299761</td>
                                                    <td>5</td>
                                                    <td>1 day ago</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>royal.cafe@gmail.com</td>
                                                    <td>+60122299761</td>
                                                    <td>33</td>
                                                    <td>10 days ago</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Royal Cafe Multi Cuisine</td>
                                                    <td>royal.cafe@gmail.com</td>
                                                    <td>+60122299761</td>
                                                    <td>15</td>
                                                    <td>3 weeks ago</td>
                                                    <td>
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
export default FlaggedRestaurant