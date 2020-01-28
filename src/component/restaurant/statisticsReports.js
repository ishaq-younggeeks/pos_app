import React, { Component } from 'react';

class StatisticReport extends Component {
    render() { 
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>Statistics Reports</h1>
                </section>
                <section class="content">

                    <div class="row">
                        <div class="col-lg-3 col-xs-12">
                            <a href="employees-list">
                                <div class="thumbnail">
                                    <div class="small-box bg-aqua">
                                        <div class="inner">
                                            <h3>Employee</h3>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-users"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-xs-12">
                            <a href="employees-list">
                                <div class="thumbnail">
                                    <div class="small-box bg-aqua">
                                        <div class="inner">
                                            <h3>Products</h3>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-database"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-xs-12">
                            <a href="employees-list">
                                <div class="thumbnail">
                                    <div class="small-box bg-aqua">
                                        <div class="inner">
                                            <h3>Revenue</h3>
                                        </div>
                                        <div class="icon">
                                            <i class="fa fa-dollar"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                </section>
            </div>
        );
    }
}
 
export default StatisticReport;