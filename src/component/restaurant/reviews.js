import React, { Component } from 'react';

class Review extends Component {
    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Reviews
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br/>
                                <div className="col-md-3">
                                    <a href="restaurant-reviews">
                                        <div className="alert alert-info text-center" style={{color: '#31708f',fontSize: '16px'}}>
                                            <h1 style={{marginBottom: '20px'}}>15</h1>
                                            <strong>Restaurant Reviews</strong>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="user-reviews">
                                        <div className="alert alert-info text-center" style={{color: '#31708f',fontSize: '16px'}}>
                                            <h1 style={{marginBottom: '20px'}}>15</h1>
                                            <strong>User Reviews</strong>
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
 
export default Review;