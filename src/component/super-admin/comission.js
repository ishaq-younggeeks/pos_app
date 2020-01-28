import React from 'react';

class Comission extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Comission</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Restaurant Name</th>
                                                    <th colspan="10">Comission</th>
                                                    <th>Available on Consumer App</th>
                                                    <th>Last Updated</th>
                                                    <th>Action</th>
                                                </tr>

                                                <tr class="bg-warning">
                                                    <th></th>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th width="100">Price (+GST)</th>
                                                    <th class="text-center" colspan="4">Comission <a href="#"><i class="fa fa-pencil pull-right"></i></a></th>
                                                    <th class="text-center" colspan="4">Surcharge <a href="#"><i class="fa fa-pencil pull-right"></i></a></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>Dine In</th>
                                                    <th>Take Away</th>
                                                    <th>Delivery</th>
                                                    <th>Drive Through</th>
                                                    <th>Dine In</th>
                                                    <th>Take Away</th>
                                                    <th>Delivery</th>
                                                    <th>Drive Through</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>Masala Dosa</td>
                                                    <td>RM 2</td>
                                                    <td>RM 0.1</td>
                                                    <td>RM 5</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>RM 1.00</td>
                                                    <td>7%</td>
                                                    <td>Active</td>
                                                    <td>05 July, 2018 | 07:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Edit</a>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>Masala Dosa</td>
                                                    <td>RM 2</td>
                                                    <td>RM 2</td>
                                                    <td>10%</td>
                                                    <td>2%</td>
                                                    <td>RM 0.50</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>Active</td>
                                                    <td>05 July, 2018 | 07:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Edit</a>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Royal Cafe Multi Cuisine Restaurant</td>
                                                    <td>Diet Coke</td>
                                                    <td>RM 2</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>RM 2</td>
                                                    <td>10%</td>
                                                    <td>2%</td>
                                                    <td>RM 0.50</td>
                                                    <td>Inactive</td>
                                                    <td>05 July, 2018 | 07:00 AM</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Edit</a>
                                                        <a href="#" class="btn btn-primary btn-xs btn-block">Delete</a>
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
export default Comission;