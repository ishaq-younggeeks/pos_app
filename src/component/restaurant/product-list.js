import React, { Component } from "react";
import { GetData, DeleteData } from "./services/postData";
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
  }

  componentDidMount() {
    GetData("all-product").then(res => {
      // 
      console.log("all product list ",res);
      if (res.data) {
        this.setState({
          allData: res.data,
          // productFeature: {
          //   vegetarian: res.data[0].product_feature,
          //   vegetarianFriendly: res.data[0].product_feature,
          //   suitableFor21: res.data[0].product_feature
          // }
        });
        
      } else {
        return null;
      }

    }).catch((err) => console.log(err));
  }

  deleteHandler = () => {

  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Product List
            <Link to="add-product" className="btn btn-warning pull-right">
              <i className="fa fa-plus"></i> Add Product
            </Link>
          </h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="thumbnail">
                <div className="table-responsive">
                  <table className="table table-striped btm-zero table-bordered">
                    <thead>
                      <tr className="bg-warning">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Features</th>
                        <th width="100">Price</th>
                        <th>Tags</th>
                        <th className="text-center" colSpan="4">
                          Options
                        </th>
                        <th>Counter</th>
                        <th width="100">Timing</th>
                        <th>Category</th>
                        <th>Picture</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5"></td>
                        <td className="text-center">
                          <strong>Dine In</strong>
                        </td>
                        <td className="text-center">
                          <strong>Take Away</strong>
                        </td>
                        <td className="text-center">
                          <strong>Delivery</strong>
                        </td>
                        <td className="text-center">
                          <strong>Drive Through</strong>
                        </td>
                        <td colSpan="6"></td>
                      </tr>
                      {this.state.allData.map(promoData => (
                        <tr key={promoData.id}>
                          <td className="text-wrap" style={{width:"10px", wordWrap: "break-word"}}>{promoData.name}</td>
                          <td>{promoData.description}</td>
                          <td>
                            {/* {this.state.productFeature.vegetarian},
                            {this.state.productFeature.vegetarianFriendly},
                            {this.state.productFeature.suitableFor21} */}
                            {promoData.product_feature}
                          </td>
                          <td>RM {promoData.price}</td>
                          <td>{promoData.tags}</td>
                          <td className="text-center">
                            <i className="fa fa-check text-success"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-check text-success"></i>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-times text-danger"></i>
                          </td>
                          <td>Kitchen</td>
                          <td>
                            6am - 12pm
                            <br />
                            4pm - 12am
                          </td>
                          <td>Breakfast Snacks</td>
                          <td>
                            <a href="!#">
                              <i className="fa fa-image"></i>
                            </a>
                          </td>
                          <td className="text-success">Active</td>
                          <td>
                            <Link
                              to={`/restaurant/edit-product/${promoData.id}`}
                              className="btn btn-primary btn-xs" style={{float:'left'}}
                            >
                              Edit
                            </Link>
                            <button className="btn btn-primary btn-xs" onClick={() => {
                              if (window.confirm("Delete the item?")) {
                              DeleteData("delete-product", promoData.id)
                                .then(res => window.location.reload())
                                .catch(err => console.log(err));
                            }}}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
