import React from 'react';
import './Modals/switch.css'


class Donation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked:true
        }
    }

    componentWillMount() {
        this.setState(prevState => ({
            isChecked : !prevState.isChecked 
        }))
    }

    handleChecked = () => {
        this.setState(prevState => ({
           isChecked : !prevState.isChecked 
        }))
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 style={{margin: "0px"}}>Donation</h1>
                            </div>
                            <div className="col-md-4 text-center">
                                <h4>Total Donation Amount: RM5000</h4>
                            </div>
                            <div className="col-md-5 text-center">
                                <h4>Current Donation Amount: RM500 <a href="#"><i className="fa fa-refresh"></i></a></h4>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" method="" className="form-horizontal">
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Status</label>
                                            <div className="col-sm-7">
                                                <label className="switch switch-green">
                                                    <input type="checkbox" className="switch-input"  onChange={() => this.handleChecked()}/>
                                                    <span className="switch-label" isChecked={this.state.isChecked}></span>
                                                    <span className="switch-handle"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Name of Promotion</label>
                                            <div className="col-sm-7">
                                                <input type="text" className="form-control input-sm" placeholder="Name of Promotion"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Message</label>
                                            <div className="col-sm-7">
                                                <div className="count-group">
                                                    <textarea maxlength="140" name="" id="" cols="" rows="" className="form-control input-sm" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">More Info</label>
                                            <div className="col-sm-7">
                                                <textarea cols="80" id="editor1" name="editor1" rows="4"></textarea>
                                                {/* <script type="text/javascript">
                                                    CKEDITOR.replace( 'editor1', {
                                                        fullPage: true,
                                                        extraPlugins: 'docprops',
                                                        // Disable content filtering because if you use full page mode, you probably
                                                        // want to  freely enter any HTML content in source mode without any limitations.
                                                        allowedContent: true,
                                                        height: 150
                                                    } );
                                                </script> */}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Amount</label>
                                            <div className="col-sm-7">
                                                <input type="text" className="form-control input-sm" placeholder="Amount"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label"></label>
                                            <div className="col-sm-7">
                                                <input type="submit" value="Submit" className="btn btn-primary"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
export default Donation;