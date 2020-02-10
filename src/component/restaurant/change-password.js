import React, { Component } from 'react';
import Config from '../../config/Config';
import axios from 'axios'


class ChangePassword extends Component {
   constructor(props){
       super(props)
       this.state={
           pin:'',
           confirmpin:'',
           emp_id:''

       }
   }

onChange = (e) =>{
    this.setState({[e.target.name]:e.tagret.value})
}  
onSubmit = () => {
    axios.post(`${Config}change-pin1`,this.state)
    console.log("hitting");
  }
    render() { 
        return (
            <div className="modal fade" id="change-pwd" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"><strong>Change Password</strong></h4>
                    </div>
                    <form action="#" method="" onSubmit={this.onSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>New Pin</label>
                                <div>
                                    <input type="text" className="form-control input-sm" placeholder="Enter New Pin"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Confirm Pin</label>
                                <div>
                                    <input type="text" className="form-control input-sm" name="confirmpin" placeholder="Enter Confirm Pin" onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{textAlign: 'left'}}>
                            <button type="submit" className="btn btn-primary btn-sm">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ChangePassword;