import React, { Component } from "react";
import { PostData, GetData } from "./services/postData";
import Config from '../../config/Config'

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:'',
      ingredient_name:'',
      current_stock:'',
      stock_status:'1',
      success: "",
      sResult: "",
      allData: [],
      updateBy: ""
    }
  }
  componentDidMount() {
    let user_id = localStorage.getItem("userId");
    this.setState({ user_id});
    this.initialState = this.state;
    console.log("get user name",localStorage.getItem("username"));
    GetData('all-inven').then((result)=> {
      let data = result.response.msg1
         this.setState({allData:data});
         console.log(this.state.allData);
    });   
  }

  inventorySave = (event) => {
    event.preventDefault();
    if(this.state.name){
        console.log("sending data",this.state);
        PostData('add_inventory1',this.state).then((result)=>{

            console.log(result);
            let responseJson = result;
            console.log(responseJson);
            GetData('all-inven').then((result)=> {
                let responseData = result;
                let data = responseData[1].data;
                this.setState({allData:data});
                console.log("get data",this.state.allData);
            });
            this.setState({success:`${responseJson.response.msg.name} added succesfully`});
            this.setState({sResult:responseJson.response.result});  
            this.refs.form.reset();
            setTimeout(()=>this.setState(()=>this.initialState),1000);
            console.log("running",this.state.model);
            //window.history.push('/restaurant/printers');
        });
    }
    //
}
  onChange  = (e) => {
    const checkedArr = [];
    let values;
    if (e.target.type !== "checkbox") {
      values = e.target.value;
    } else if (e.target.name === "stock_status") {
      const checkeds = document.getElementsByTagName("input");
      for (let i = 0; i < checkeds.length; i++) {
        if (checkeds[i].checked) {
          checkedArr.push(checkeds[i].value);
        }
      }
      values = checkedArr;
    }
    this.setState({ [e.target.name]: values });
  }
  
  render() {
    if (this.state.sResult === "1") {
      window.location.reload();
    }
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Inventory</h1>
          <span>{this.state.success}</span>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="thumbnail">
                <div className="clearfix"></div>
                <br />
                <div className="col-md-12">
                  <form className="form-horizontal" onSubmit={this.inventorySave} data-toggle="validator" novalidate="true">
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Name of Stock / Ingredient
                      </label>
                      <div className="col-md-4">
                        <input type="text" name="ingredient_name" data-error="Please enter your Floor Name/Number."onChange={this.onChange} className="form-control input-sm" placeholder="Name of Stock / Ingredient" required/>
                      </div>
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Current Stock
                      </label>
                      <div className="col-md-4">
                        <input type="number" name="current_stock" onChange={this.onChange} className="form-control input-sm" placeholder="Quantity" required />
                      </div>
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label hidden-xs"></label>
                      <div className="col-md-4">
                        <label className="radio-inline" style={{ fontSize: "12px" }}>
                          <input type="radio" name="stock_status" value="1" onChange={this.onChange} />{" "}
                          Stock In (+stock)
                        </label>
                        <label className="radio-inline" style={{ fontSize: "12px" }} >
                          <input type="radio" name="stock_status" value="0" onChange={this.onChange} required />{" "}
                          Stock Out (-stock)
                        </label>
                      </div>
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                      <div className="col-md-1">
                        <button type="submit" className="btn btn-primary btn-block" >{/* onClick={this.inventorySave}*/}
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="col-md-12">
              <h4>
                <strong>Inventory List</strong>
              </h4>
              <div className="thumbnail hidden-xs hidden-sm">
                <div className="table-responsive">
                  <table className="table table-striped btm-zero">
                    <thead>
                      <tr>
                        <th>Name of Stock / Ingredient</th>
                        <th>Current Stock</th>
                        <th>Last Modified</th>
                        <th>Updated By</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.allData.map(invenData => (
                        <tr key={invenData.id}>
                          <td>{invenData.ingredient_name}</td>
                          <td>{invenData.current_stock}</td>
                          <td>10:30 AM | {invenData.created_at}</td>
                          <td>{localStorage.getItem("username")}</td>
                          <td>
                            <a href="!#" className="btn btn-primary btn-xs">
                              Edit
                            </a>{" "}
                            &nbsp;
                            <a href="!#" className="btn btn-danger btn-xs">
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="thumbnail visible-xs visible-sm">
                <table className="table table-striped btm-zero">
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: "22px" }}>
                        <strong>Name of Stock / Ingredient:</strong> Ingredient
                        1<br />
                        <strong>Current Stock:</strong> 23
                        <br />
                        <strong>Last Modified:</strong> 10:30 AM | 7 Mar, 2018
                        <br />
                        <strong>Updated By:</strong>{localStorage.getItem("username")}
                        <br />
                        <a href="!#" className="btn btn-primary btn-xs">
                          Edit
                        </a>{" "}
                        &nbsp;
                        <a href="!#" className="btn btn-danger btn-xs">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ lineHeight: "22px" }}>
                        <strong>Name of Stock / Ingredient:</strong> Ingredient
                        2<br />
                        <strong>Current Stock:</strong> 24
                        <br />
                        <strong>Last Modified:</strong> 11:00 AM | 8 Mar, 2018
                        <br />
                        <strong>Updated By:</strong> Nitin
                        <br />
                        <a href="!#" className="btn btn-primary btn-xs">
                          Edit
                        </a>{" "}
                        &nbsp;
                        <a href="!#" className="btn btn-danger btn-xs">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ lineHeight: "22px" }}>
                        <strong>Name of Stock / Ingredient:</strong> Ingredient
                        3<br />
                        <strong>Current Stock:</strong> 28
                        <br />
                        <strong>Last Modified:</strong> 11:30 AM | 9 Mar, 2018
                        <br />
                        <strong>Updated By:</strong>{localStorage.getItem("username")}
                        <br />
                        <a href="!#" className="btn btn-primary btn-xs">
                          Edit
                        </a>{" "}
                        &nbsp;
                        <a href="!#" className="btn btn-danger btn-xs">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Inventory;
