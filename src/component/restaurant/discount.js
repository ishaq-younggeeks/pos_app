import React, { Component } from 'react';
import $ from "jquery";

class Discount extends Component {
    componentDidMount = () => {
        $('input[type="radio"]').on('click',function(){
            var inputValue = $(this).attr("value");
            var targetbox = $("." + inputValue);
            $(".box-new").not(targetbox).hide();
            $(targetbox).show();
        });
    }

    render() {
        
        const boxNew = {
                display: 'none'
            }
        const red = {
                backgroundColor: 'none'
            }
        const green = {
                backgroundColor: 'none'
            }
        
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Discount
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>

                                <div className="col-md-6" style={{borderRight: '1px #ddd dashed'}}>
                                    <h4 style={{marginTop: '0px'}}>Offpeak Discount</h4>
                                    <hr style={{borderTop: '1px #ddd solid',margin: '0px'}}/>
                                    <div className="clearfix"></div><br/>
                                    <div className="form-group">
                                        <label>% Discount</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="% Discount"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Timings</label>
                                        <div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-addon">From</span>
                                                <input type="text" className="form-control" placeholder="Hour"/>
                                                <span className="input-group-addon" style={{borderLeft:'0px',borderRight: '0px'}}>To</span>
                                                <input type="text" className="form-control" placeholder="Hour"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Select Day</label>
                                        <div>
                                            <select className="form-control">
                                                <option>Select Day</option>
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Products</label>
                                        <div>
                                            <div className="form-control" style={{minHeight: '110px',overflowY: 'scroll'}}>
                                                <div className="col-md-12">
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> All
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 1
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 2
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 3
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 4
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 5
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 6
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 5
                                                    </label>
                                                    <label className="checkbox">
                                                        <input type="checkbox"/> Product 6
                                                    </label>
                                                </div>
                                                <div className="clearfix"></div><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 style={{marginTop: '0px'}}>Loyalty Discount</h4>
                                    <hr style={{borderTop: '1px #ddd solid',margin: '0px'}}/>
                                    <div className="clearfix"></div><br/>
                                    <div className="form-group">
                                        <label>Amount to be purchased until loyalty discount is awarded</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Enter amount"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>How long do you want these discounts to be valid for?</label>
                                        <div>
                                            <input type="text" className="form-control input-sm" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div>
                                        <p><strong>Would you like to give</strong></p>
                                        <div className="styled-input-single" style={{display: 'inline-block'}}>
                                            <input type="radio" name="accept" id="yes" value="red"  onChange='handleClick()'/>
                                            <label for="yes">% Discount</label>
                                        </div>
                                        <div className="styled-input-single" style={{display: 'inline-block',marginLeft: '25px'}}>
                                            <input type="radio" name="accept" id="no" value="green" onChange='handleClick()' />
                                            <label for="no">Loyalty Voucher</label>
                                        </div>
                                    </div>

                                    <div className="red box-new" style={{...boxNew, ...red}}>
                                        <div>
                                            <div className="form-group">
                                                <label>% Discount</label>
                                                <div>
                                                    <input type="text" className="form-control input-sm" placeholder="% Discount"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Maximum Discount (RM)</label>
                                                <div>
                                                    <input type="text" className="form-control input-sm" placeholder="Maximum Discount (RM)"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="green box-new" style={{...boxNew, ...green}}>
                                        <div>
                                            <div className="form-group">
                                                <label>Loyalty Voucher (RM)</label>
                                                <div>
                                                    <input type="text" className="form-control input-sm" placeholder="Loyalty Voucher (RM)"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Minimum Purchase (RM)</label>
                                                <div>
                                                    <input type="text" className="form-control input-sm" placeholder="Minimum Purchase (RM)"/>
                                                </div>
                                            </div>                                            
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="clearfix"></div><br/>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <h4><strong>Listing</strong></h4>
                            <div className="clearfix"></div>
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Discount Name</th>
                                                <th>% Discount</th>
                                                <th>Dates</th>
                                                <th>Timings</th>
                                                <th>View Product</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Loyalty Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>-</td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Offpeak Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>
                                                    <a href="#">View</a>
                                                </td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Loyalty Discount</td>
                                                <td>35%</td>
                                                <td>15 Jan 2018 to 19 Jan 2018</td>
                                                <td>10am to 12pm</td>
                                                <td>-</td>
                                                <td>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-pencil text-primary"></i></a> &nbsp; | &nbsp;
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-times text-danger"></i></a>
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
        );
    }
}
 
export default Discount;