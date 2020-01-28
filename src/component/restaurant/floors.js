import React, { Component } from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import FloorLayout from './floor-layout'
import Modal from "react-responsive-modal";
import { PostData, GetData, EditData } from './services/postData.js';
import axios from 'axios'
import {Config} from '../../config/Config'

class Floor extends Component {
  state = {
    floor: "",
    numberOfTables: "",
    numberOfPos: "",
    POS: false,
    Bar: false,
    Kitchen: false,
    Drink: false,
    //redirect: true,
    floorData: [],
    floorLayoutData: {},
    isToggleOn:false,
    previewData : [],
    floorId : '',
    floorLayData : [],
    floorModalData:[],
    isModalOpen:false,
    isChecked:false,
    deleteMsgStatus:'',
    editId:'',
    id:0,
    floorNameChecked:'',
    noOfTableChecked:'',
    kitchenChecked:'',
    floorTable:''
  };


  componentDidMount() {
    let userId = localStorage.getItem("userId");
    /*if (!userId) {
      this.setState({
        redirect: false
      })
    }*/
    axios.post("http://posapp.younggeeks.net/posApi/api/all-floor")
      .then(res => {
        this.setState({
          floorData: res.data.data
        }, () => {
        })
      }).catch(err => console.log(err));
  }


  toggleChangePOS = () => {
    this.setState(prevState => ({
      POS: !prevState.POS
    }));
  };

  toggleChangeBar = () => {
    this.setState(prevState => ({
      Bar: !prevState.Bar
    }));
  };

  toggleChangeKitchen = () => {
    this.setState(prevState => ({
      Kitchen: !prevState.Kitchen
    }));
  };

  toggleChangeDrink = () => {
    this.setState(prevState => ({
      Drink: !prevState.Drink
    }));
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e,id) => {
    e.preventDefault();
    let arr = [];
    for (let key in this.state) {
      console.log(key)
      if (this.state[key] === true) {
        arr.push(key);
      }
    }
    console.log(arr)
    let user_id = parseInt(localStorage.getItem('userId'))
    if(id<=this.state.editId) {
      var data = {
        id:this.state.editId,
        user_id:user_id,
        floor_name:this.state.floor,
        num_table:this.state.numberOfTables,
        pos_num:this.state.numberOfPos,
        floor_type:arr.toString()
      }
    } else {
        var data = {
          user_id,
          floor_name: this.state.floor,
          num_table: this.state.numberOfTables,
          pos_num: this.state.numberOfPos,
          floor_type: arr.toString()
        };
        this.setState({
          floorLayoutData:data
        })
      }
    axios.post("http://posapp.younggeeks.net/posApi/api/add_floor", data).then((res) => {
      console.log(res)
      window.location.reload();
      this.setState({
        addFloorData:res.data.success.result
      })
    })
  };

  toggle = () => {
      this.setState(prevState => ({
      isToggleOn:!prevState.isToggleOn
    }))
  }

  // previewData = (myId) => {        
  //   let prevData;
  //   this.state.floorData.forEach((item) => {
  //     if(item.id === myId) {
  //         prevData = item
  //     }
  //     this.setState({floorLayData : prevData})
  //   })
  //   this.toggle()
  // }

  previewData = (myId) => {
    const type = "get_floor_detail";
    const id = myId
    let BaseUrl = `http://posapp.younggeeks.net/posApi/api/${type}/${id}`
    axios({
      method:'post',
      url:BaseUrl,
    }) .then(response => {
      let responseData = response.data.data[0]
      if(myId === response.data.data[0].id) {
        this.setState({floorLayData : responseData})
      }
    }) .catch(error => {
      console.log(error)
    })
    return this.toggle()
  }

  onOpenModal = (data) => {
    this.setState({isModalOpen: true });
    this.setState({floor:data.floor_name})
    this.setState({numberOfTables:data.num_table})
    this.setState({numberOfPos:data.pos_num})
    this.setState({editId:data.id})
    this.setState({floorNameChecked:data.floor_type.indexOf("POS")})
    this.setState({noOfTableChecked:data.floor_type.indexOf("Bar")})
    this.setState({kitchenChecked:data.floor_type.indexOf('Kitchen')})
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  deleteFloor = (myId) => {
    let myData = {
      id:myId
    }
    const type = "delete-floor"
    let BaseUrl = `${Config.url}${type}`
    axios({
      method:'post',
      url:BaseUrl,
      data:myData
    }).then(response => {
        if(response.status === 200) {
          window.location.reload();
        }
    }).catch(err => {
      console.log(err)
    })
  }

  edit = (item) => {
    this.setState({editId:item.id})
    this.setState({addcausine:item.cuisine_name})
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        {this.state.isToggleOn === false ? 
        <div className="content-wrapper" >
          <section className="content-header">
            <h1>Floors</h1>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="thumbnail">
                  <div className="clearfix"></div>
                  <br />
                  <div className="col-md-12">
                    <form
                      onSubmit={(e) => this.onSubmitHandler(e,this.state.id)}
                      className="form-horizontal"
                    >
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Floor Name / Number
                        </label>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control input-sm"
                            placeholder="Floor Name / Number"
                            name="floor"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Number of Tables
                        </label>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control input-sm"
                            placeholder="Number of Table"
                            name="numberOfTables"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Number of POS per Floor
                        </label>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control input-sm"
                            placeholder="Number of POS per Floor"
                            name="numberOfPos"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">&nbsp;</label>
                        <div className="col-md-5">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              name="product_feature"
                              value="Pos"
                              checked={this.state.isPOS}
                              onChange={this.onChangeHandler}
                            />
                            POS
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              name="product_feature"
                              value="Bar"
                              checked={this.state.isBar}
                              onChange={this.onChangeHandler}
                            />
                            Bar
                          </label>
                          <label
                            className="checkbox-inline"
                            style={{ marginRight: "10px" }}
                          >
                            <input
                              type="checkbox"
                              name="product_feature"
                              value="Kitchen"
                              checked={this.state.isKitchen}
                              onChange={this.onChangeHandler}
                            />
                            Kitchen
                          </label>
                          <br className="visible-xs" />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="form-group">
                      {/* <a href="floor-layout" className="btn btn-primary btn-xs">Preview</a> */}
                      <button type="submit" className="btn btn-primary" onClick = {()=>this.previewData()}>Preview</button>
                        <label className="col-md-3 control-label"></label>
                        <div className="col-md-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Create Floor
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="clearfix"></div>
                  <br />
                </div>
              </div>

              <div className="col-md-12">
                <h4>
                  <strong>Floors List</strong>
                </h4>
                {/* <div className="thumbnail hidden-xs hidden-sm"> */}
                <div className="thumbnail">
                  <div className="table-responsive">
                    <table className="table table-striped btm-zero">
                      <thead>
                        <tr>
                          <th>Floor Name / Number</th>
                          <th>Number of Tables</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.floorData.map((floor) => (
                          <tr key={floor.id}>
                            <td>{floor.floor_name}</td>
                            <td>{floor.num_table}</td>
                            <td style={{ lineHeight: "20px" }}>
                              <br />
                              <button className="btn btn-primary btn-xs" onClick = {() => this.onOpenModal(floor)}>Manage Floor</button>
                              <button className="btn btn-primary btn-xs" onClick = {() => this.previewData(floor.id)}>Preview</button>
                            </td>
                          </tr>
                        )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div > :
          <FloorLayout 
            toggle = {this.toggle}
            floorData = {this.state.floorData}
            floorLayoutData = {this.state.floorLayoutData}
            floorLayData = {this.state.floorLayData}
          />} 
            <Modal open={isModalOpen} onClose={() => this.onCloseModal()}>
            {/* <div class="modal fade" role="dialog" aria-labelledby="myModalLabel"   style={{z_Index: "10000"}}> */}
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 className="modal-title"><strong>Manage Floor</strong></h4>
                          </div>
                          <div className="modal-body">
                              <form action="#" method="">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label>Floor Name / Number</label>
                                              <div>
                                                <input type="text" classNameName="form-control input-sm" placeholder="Floor Name / Number" name="floor" defaultValue={this.state.floor} onChange={this.onChangeHandler}/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label>Number of Tables</label>
                                              <div>
                                                <input type="text" classNameName="form-control input-sm" placeholder="Number of Table" name="numberOfTables" defaultValue={this.state.numberOfTables} onChange={this.onChangeHandler}/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label>Number of POS per Floor</label>
                                              <div>
                                                <input type="text" classNameName="form-control input-sm" placeholder="Number of POS per Floor" name="numberOfPos" defaultValue={this.state.numberOfPos} onChange={this.onChangeHandler}/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <label></label>
                                              <div>
                                                  <label className="checkbox-inline">
                                                    {this.state.floorNameChecked === 0 ? <input type="checkbox" defaultChecked onChange={this.toggleChangePOS}/>:<input type="checkbox" checked={this.state.isPOS} onChange={this.toggleChangePOS}/> }POS
                                                  </label>
                                                  <label classNameName="checkbox-inline">
                                                    {this.state.noOfTableChecked === 0 || this.state.noOfTableChecked === 4 ? <input type="checkbox" defaultChecked onChange={this.toggleChangeBar}/> :<input type="checkbox" checked={this.state.isBar} onChange={this.toggleChangeBar}/>}Bar
                                                  </label>
                                                  <label
                                                    classNameName="checkbox-inline"
                                                    style={{ marginRight: "10px" }}
                                                    >
                                                    {this.state.kitchenChecked === 0 || this.state.kitchenChecked === 4 || this.state.kitchenChecked === 8 ?<input type="checkbox" defaultChecked onChange={this.isKitchen}/>:<input type="checkbox" checked={this.state.isKitchen} onChange={this.toggleChangeKitchen}/>}Kitchen
                                                  </label>
                                                  {/* <label className="checkbox-inline">
                                                      <input type="checkbox"/> Drink
                                                  </label> */}
                                                  {/* <label className="checkbox-inline" style={{margin_left: "0px"}}>
                                                      <input type="checkbox"/> Take Away
                                                  </label> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="modal-footer" style={{text_align: "center"}}>
                                      <button type="submit" className="btn btn-primary btn-sm" onClick={(e) => {this.onSubmitHandler(e,this.state.editId)}}>Save</button>
                                  </div>
                              </form>
                              <div className="table-responsive thumbnail" style={{margin_bottom: "0px"}}>
                                  <table className="table table-condensed table-striped" style={{margin_bottom: "0px"}}>
                                      <thead>
                                          <tr>
                                              <th>Floor Name / Number</th>
                                              <th>Number of Tables</th>
                                              <th>Number of POS per Floor</th>
                                              <th></th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {this.state.floorData.map((item) => {
                                            return (
                                              <tr key = {item.id}>
                                                <td>{item.floor_name}</td>
                                                <td>{item.num_table}</td>
                                                <td>{item.pos_num}</td>
                                                <td>
                                                    {item.floor_type.indexOf("POS") === 0 ? <i className="fa fa-check text-success"></i>:<i className="fa fa-times text-danger"></i>}POS<br/>
                                                    {item.floor_type.indexOf("Bar") === 0 || item.floor_type.indexOf("Bar") === 4 ? <i className="fa fa-check text-success"></i>:<i className="fa fa-times text-danger"></i>}Bar<br/>
                                                    {item.floor_type.indexOf("Kitchen") === 0 || item.floor_type.indexOf("Kitchen") === 4 || item.floor_type.indexOf("Kitchen") === 8 ? <i className="fa fa-check text-success"></i>:<i className="fa fa-times text-danger"></i>}Kitchen<br/>
                                                    {/* {item.floor_type.indexOf("Drink") === 0 || item.floor_type.indexOf("Drink") === 4 || item.floor_type.indexOf("Drink") === 8 || item.floor_type.indexOf("Drink") === 16 ? <i className="fa fa-check text-success"></i>:<i className="fa fa-times text-danger"></i>}Drink<br/> */}
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-xs" onClick={() => this.deleteFloor(item.id)}><i className="fa fa-times"></i></button>
                                                </td>
                                              </tr>
                                            )
                                          })}
                                        </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              {/* </div> */}
          </Modal>
      </div>
    );
  }
}

export default Floor;
