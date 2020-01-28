import React from 'react';

class Announcement extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>Announcements for Restaurants</h1>
                    </section>
                    <section className="content">
                     <div className="row">
                         <div className="col-md-12 col-xs-12">
                            <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                 <form action="#" method="" className="form-horizontal">
                                     <div className="form-group">
                                         <label className="col-sm-3 control-label">Send To (Optional)</label>
                                         <div className="col-sm-8">
                                             <input type="text" className="form-control input-sm" placeholder="Send To (Optional)"/>
                                         </div>
                                     </div>
                                     <div className="form-group">
                                         <label className="col-sm-3 control-label">Title</label>
                                         <div className="col-sm-8">
                                             <input type="text" className="form-control input-sm" placeholder="Title"/>
                                         </div>
                                     </div>
                                     <div className="form-group">
                                         <label className="col-sm-3 control-label">Description</label>
                                         <div className="col-sm-8">
                                             <textarea cols="80" id="editor1" name="editor1" rows="4"></textarea>
                                             <script type="text/javascript">
                                                CKEDITOR.replace( 'editor1', {
                                                    // fullPage: true,
                                                    // extraPlugins: 'docprops',
                                                    // Disable content filtering because if you use full page mode, you probably
                                                    // want to  freely enter any HTML content in source mode without any limitations.
                                                    // allowedContent: true,
                                                    // height: 150
                                                } );
                                            </script>
                                        </div>
                                     </div>
                                     <div className="form-group">
                                         <label className="col-sm-3 control-label">Link</label>
                                         <div className="col-sm-8">
                                             <input type="text" className="form-control input-sm" placeholder="Link"/>
                                         </div>
                                     </div>
                                     <div className="form-group">
                                         <label className="col-sm-3 control-label"></label>
                                         <div className="col-sm-8">
                                             <input type="submit" value="Submit" className="btn btn-primary"/>
                                         </div>
                                     </div>
                                 </form>
                             </div>
                             <div className="clearfix"></div>
                             <div className="thumbnail">
                                 <div className="table-responsive">
                                     <table className="table table-striped btm-zero">
                                         <thead>
                                             <tr className="bg-info">
                                                 <th>#</th>
                                                 <th>Title</th>
                                                 <th>Description</th>
                                                 <th>Link</th>
                                                 <th>Date</th>
                                                 <th>Action</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                 <td>1</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td><a href="#">http:google.co.in</a></td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>2</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td>-</td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>3</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td>-</td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>4</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td><a href="#">http:google.co.in</a></td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>5</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td>-</td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <td>6</td>
                                                 <td>Delivery Charge</td>
                                                 <td>Please do not charge any delivery charges.</td>
                                                 <td>-</td>
                                                 <td>05 July, 2018 | 10:00 AM</td>
                                                 <td>
                                                     <a href="#" className="btn btn-primary btn-xs">Undo</a> &nbsp;
                                                     <a href="add-employee.html" className="btn btn-primary btn-xs">Delete</a>
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
export default Announcement;