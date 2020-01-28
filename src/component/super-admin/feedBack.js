import React from 'react';

class FeedBack extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Consumer Feedback
                            <select class="form-control input-sm pull-right" style={{width: "120px",display:"inline-block"}}>
                                <option>Sort By</option>
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
                                        <table class="table btm-zero">
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th width="150">Consumer Name</th>
                                                    <th>Contact Details</th>
                                                    <th>Details</th>
                                                    <th>Screenshot</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-success">
                                                    <td>1</td>
                                                    <td>Gaurav Srivastava</td>
                                                    <td>
                                                        gaurav.srivastava05@gmail.com<br/>
                                                        +60122299761
                                                    </td>
                                                    <td>
                                                        Restaurant was not very neat and clean. Not happy with serving timings. They took a long time to serve one order. Waiter behaviour was not humble.
                                                    </td>
                                                    <td>
                                                        <a href="#">View</a>
                                                    </td>
                                                </tr>
                                                <tr class="bg-success">
                                                    <td>2</td>
                                                    <td>Gaurav Srivastava</td>
                                                    <td>
                                                        gaurav.srivastava05@gmail.com<br/>
                                                        +60122299761
                                                    </td>
                                                    <td>
                                                        Restaurant was not very neat and clean. Not happy with serving timings. They took a long time to serve one order. Waiter behaviour was not humble.
                                                    </td>
                                                    <td>
                                                        <a href="#">View</a>
                                                    </td>
                                                </tr>
                                                <tr class="bg-danger">
                                                    <td>3</td>
                                                    <td>Gaurav Srivastava</td>
                                                    <td>
                                                        gaurav.srivastava05@gmail.com<br/>
                                                        +60122299761
                                                    </td>
                                                    <td>
                                                        Restaurant was not very neat and clean. Not happy with serving timings. They took a long time to serve one order. Waiter behaviour was not humble.
                                                    </td>
                                                    <td>
                                                        <a href="#">View</a>
                                                    </td>
                                                </tr>
                                                <tr class="bg-danger">
                                                    <td>4</td>
                                                    <td>Gaurav Srivastava</td>
                                                    <td>
                                                        gaurav.srivastava05@gmail.com<br/>
                                                        +60122299761
                                                    </td>
                                                    <td>
                                                        Restaurant was not very neat and clean. Not happy with serving timings. They took a long time to serve one order. Waiter behaviour was not humble.
                                                    </td>
                                                    <td>
                                                        <a href="#">View</a>
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
export default FeedBack;