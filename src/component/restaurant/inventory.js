import React, { Component } from "react";
import { PostData, GetData } from "./services/postData";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: "",
      sResult: "",
      allData: [],
      updateBy: ""
    };
    this.inventorySubmit = this.inventorySubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    let userId = localStorage.getItem("userId");
    this.setState({ user_id: userId });
    GetData("all-inven").then(result => {
      let responseData = result;
      
      let data = responseData.data;
      
      this.setState({ allData: data });
      
      //EditData('',this.state.allData.id)
    });
  }
  onChange(e) {
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
  inventorySubmit(event) {
    event.preventDefault();
    if (this.state.ingredient_name) {
      PostData("add-inventory", this.state).then(result => {
        let responseJson = result;
        this.setState({ success: responseJson.response.msg });
        this.setState({ sResult: responseJson.response.result });
      });
    }
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
                  <form
                    action="!#"
                    className="form-horizontal"
                    onSubmit={this.inventorySubmit}
                  >
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Name of Stock / Ingredient
                      </label>
                      <div className="col-md-4">
                        <input
                          type="text"
                          name="ingredient_name"
                          onChange={this.onChange}
                          className="form-control input-sm"
                          placeholder="Name of Stock / Ingredient"
                        />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Current Stock
                      </label>
                      <div className="col-md-4">
                        <input
                          type="text"
                          name="current_stock"
                          onChange={this.onChange}
                          className="form-control input-sm"
                          placeholder="Quantity"
                        />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label hidden-xs"></label>
                      <div className="col-md-4">
                        <label
                          className="radio-inline"
                          style={{ fontSize: "12px" }}
                        >
                          <input
                            type="radio"
                            name="stock_status"
                            value="1"
                            onChange={this.onChange}
                          />{" "}
                          Stock In (+stock)
                        </label>
                        <label
                          className="radio-inline"
                          style={{ fontSize: "12px" }}
                        >
                          <input
                            type="radio"
                            name="stock_status"
                            value="0"
                            onChange={this.onChange}
                          />{" "}
                          Stock Out (-stock)
                        </label>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                      <div className="col-md-1">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
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
                          <td>Rajendra</td>
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
                        <strong>Updated By:</strong> Rajendra
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
                        <strong>Updated By:</strong> Rajendra
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
