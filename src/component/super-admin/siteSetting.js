import React from 'react';

class SiteSetting extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>Site Settings</h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                            <form action="#" method="" className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <img src="images/logo.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Upload Logo</label>
                                                    <div className="col-sm-5" style={{padding_top: "7px;"}}>
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <input type="submit" value="Submit" className="btn btn-primary"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                            <form action="#" method="" className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <img src="images/logo.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Upload Favicon</label>
                                                    <div className="col-sm-5" style={{padding_top: "7px;"}}>
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <input type="submit" value="Submit" className="btn btn-primary"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Merchant App</h4>
                                        <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                            <form action="#" method="" className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <img src="images/logo.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Upload Logo</label>
                                                    <div className="col-sm-5" style={{padding_top: "7px;"}}>
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Name</label>
                                                    <div className="col-sm-5">
                                                        <input type="text" className="form-control input-sm" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <input type="submit" value="Submit" className="btn btn-primary"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Consumer App</h4>
                                        <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                            <form action="#" method="" className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <img src="images/logo.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Upload Logo</label>
                                                    <div className="col-sm-5" style={{padding_top: "7px;"}}>
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">Name</label>
                                                    <div className="col-sm-5">
                                                        <input type="text" className="form-control input-sm" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label"></label>
                                                    <div className="col-sm-5">
                                                        <input type="submit" value="Submit" className="btn btn-primary"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
export default SiteSetting;