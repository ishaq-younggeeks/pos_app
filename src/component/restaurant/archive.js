import React, { Component } from 'react';

class Archive extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Archive
                        <div className="pull-right">
                            <select className="form-control input-sm" style={{display: 'inline',width: '110px'}}>
                                <option>Select Year</option>
                                <option>2018</option>
                                <option>2019</option>
                            </select>
                            <input type="submit" value="Filter" className="btn btn-primary btn-sm" style={{marginTop: '5px'}} />
                        </div>
                        <div className="clearfix"></div>
                    </h1>
                </section>
                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <div className="col-lg-3 col-xs-12">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#archieve">
                                        <div className="thumbnail">
                                            <div className="small-box bg-aqua">
                                                <div className="inner text-center">
                                                    <h3 style={{marginBottom: '0px'}}>October 2018</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-xs-12">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#archieve">
                                        <div className="thumbnail">
                                            <div className="small-box bg-aqua">
                                                <div className="inner text-center">
                                                    <h3 style={{marginBottom: '0px'}}>November 2018</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-xs-12">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#archieve">
                                        <div className="thumbnail">
                                            <div className="small-box bg-aqua">
                                                <div className="inner text-center">
                                                    <h3 style={{marginBottom: '0px'}}>December 2018</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Archive;