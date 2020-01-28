import React from 'react' 

class ActiveReport extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section class="content-header">
            <h1>
                Reports
                <div class="clearfix"></div>
            </h1>
          </section>
          <section class="content">
            <div class="row">
              <div class="col-md-12">
                <ul class="nav nav-pills">
                    <li class="active width1" style={{font_size: "12px"}}><a href="active-reports.html" style={{padding: "10px;"}}>Active Reports</a></li>
                    <li class="width1" style={{font_size: "12px"}}><a href="all-reports.html" style={{padding: "10px;"}}>All Reports</a></li>
                </ul>
                <div class="clearfix"></div><br/>
                <div class="thumbnail hidden-xs hidden-sm">
                    <div class="table-responsive">
                      <table class="table table-striped btm-zero">
                          <thead>
                              <tr class="bg-info">
                                  <th>Report Number</th>
                                  <th>Reported By</th>
                                  <th>Reported About</th>
                                  <th>Date/Time</th>
                                  <th>Status</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>0123456789</td>
                                  <td><a href="javascript:void(0);" data-toggle="modal" data-target="#message">Rajesh Gupta</a><br/> (Consumer)</td>
                                  <td><a href="javascript:void(0)" data-toggle="modal" data-target="#response">McDonalds</a></td>
                                  <td>05 July, 2018 | 10:00 AM</td>
                                  <td class="text-success">Active</td>
                                  <td>
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#refund" class="btn btn-primary btn-xs">Refund</a> &nbsp;
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#response-consumer" class="btn btn-primary btn-xs">Disagree</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>0123456789</td>
                                  <td><a href="javascript:void(0);" data-toggle="modal" data-target="#message">Rajesh Gupta</a><br/> (Consumer)</td>
                                  <td><a href="javascript:void(0)" data-toggle="modal" data-target="#response">McDonalds</a></td>
                                  <td>05 July, 2018 | 10:00 AM</td>
                                  <td class="text-success">Active</td>
                                  <td>
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#refund" class="btn btn-primary btn-xs">Refund</a> &nbsp;
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#response-consumer" class="btn btn-primary btn-xs">Disagree</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>0123456789</td>
                                  <td><a href="javascript:void(0);" data-toggle="modal" data-target="#message">Rajesh Gupta</a><br/> (Consumer)</td>
                                  <td><a href="javascript:void(0)" data-toggle="modal" data-target="#response">McDonalds</a></td>
                                  <td>05 July, 2018 | 10:00 AM</td>
                                  <td class="text-success">Active</td>
                                  <td>
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#refund" class="btn btn-primary btn-xs">Refund</a> &nbsp;
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#response-consumer" class="btn btn-primary btn-xs">Disagree</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>0123456789</td>
                                  <td><a href="javascript:void(0);" data-toggle="modal" data-target="#message">Rajesh Gupta</a><br/> (Consumer)</td>
                                  <td><a href="javascript:void(0)" data-toggle="modal" data-target="#response">McDonalds</a></td>
                                  <td>05 July, 2018 | 10:00 AM</td>
                                  <td class="text-success">Active</td>
                                  <td>
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#refund" class="btn btn-primary btn-xs">Refund</a> &nbsp;
                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#response-consumer" class="btn btn-primary btn-xs">Disagree</a>
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
export default ActiveReport;