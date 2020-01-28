import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import { EditData, PostData } from "./services/postData.js";

class EditProduct extends Component {
    state = {
        productImage: [],
        prod_from_time: '',
        prod_to_time: '',
        from_format: '',
        to_format: '',
        productImageError: '',
        // add_category: add_category,
        // add_modifier: add_modifier,
        FromValues: [],
        ToValues: [],
        FromFormat: [],
        ToFormat: [],
        redirect: false,
        id: this.props.match.params.id
    }

    componentWillMount() {
        let userId = localStorage.getItem("userId");
        this.setState({ user_id: userId });
    }
    componentDidMount() {
        EditData("edit-product", this.state.id).then(res => console.log(res)).catch(err => console.log(err));
    }
    productSave(event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.name) {
            PostData('add-product', this.state).then((res) => {
                console.log(res);
                if (res.response.result === 1) {
                    this.setState({
                        redirect: !this.state.redirect
                    })
                }

            });
        }
    }

    onChange(e) {
        const checkedfeature = [];
        // const checkedModifier = [];
        const checkedEating = [];
        let values;
        if (e.target.type !== 'checkbox') {
            values = e.target.value;
        } else if (e.target.name === 'product_feature') {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedfeature.push(checkeds[i].value);
                }
            }
            values = checkedfeature.splice(1, 3);


        } else if (e.target.name === 'eating_opt') {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedEating.push(checkeds[i].value);
                }
            }
            values = checkedEating;
        }
        this.setState({ [e.target.name]: values })
    }
    createFrom() {
        return this.state.FromValues.map((el, i) =>
            <>
                <input type="text" value={el || ''} style={{ width: '37%', float: 'left' }} className="form-control input-sm" placeholder="Hour" onChange={this.handleChange.bind(this, i)} />
                <select onChange={this.handleChange1.bind(this, i)} style={{ width: '38%', float: 'left' }} className="form-control input-sm" ><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>
            </>
        )
    }
    createTo() {
        return this.state.ToValues.map((el, i) =>
            <>
                <input type="text" value={el || ''} style={{ width: '38%', float: 'left', marginLeft: '10%', marginLeft: '10%' }} className="form-control input-sm" placeholder="Hour" onChange={this.handleChange2.bind(this, i)} />
                <select onChange={this.handleChange3.bind(this, i)} style={{ width: '37%', float: 'left' }} className="form-control input-sm" ><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>
                <span style={{ marginRight: '-25px', float: 'right', marginTop: '5px' }} onClick={this.RemoveClick.bind(this, i)}><i className="fa fa-trash"></i></span>
            </>
        )
    }
    /*Add Product Time */
    productImage = event => {
        if (event.target.files && event.target.files[0]) {
            let files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                let reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = () => {
                    this.setState({
                        productImage: reader.result
                    });
                }
            }
        }
    }
    remove_product() {
        $("#productImage").val("");
        this.setState({
            file: '',
            certi_image: '',
            showCertiImage: ''
        });
        $("#remove_product_image").hide();
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect exact to='/' />)
        }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Add Product
                    <a href="product-list" className="btn btn-warning pull-right"><i className="fa fa-angle-left"></i> Back</a>
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br />
                                <div className="col-md-12">
                                    <form className="form-horizontal" onSubmit={this.productSave}>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Product  Name</label>
                                            <div className="col-md-5">
                                                <input type="text" onChange={this.onChange} className="form-control input-sm" name="name" placeholder="Product Name" />
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Eating Options</label>
                                            <div className="col-md-5">
                                                <label className="radio-inline">
                                                    <input type="radio" name="eating_opt" value="Dine-In" onChange={this.onChange} /> Dine-In
                                            </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="eating_opt" value="Take Away" onChange={this.onChange} /> Take Away
                                            </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="eating_opt" value="Delivery" onChange={this.onChange} /> Delivery
                                            </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="eating_opt" value="Drive Through" onChange={this.onChange} /> Drive Through
                                            </label>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Product Feature</label>
                                            <div className="col-md-5">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="product_feature" value="Vegetarian" onChange={this.onChange} /> Vegetarian
                                                </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="product_feature" value="Vegetarian Friendly" onChange={this.onChange} /> Vegetarian Friendly
                                                </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="product_feature" value="This product only suitable for 21+" onChange={this.onChange} /> This product only suitable for 21+
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Description</label>
                                            <div className="col-md-5">
                                                <textarea rows="3" className="form-control input-sm" onChange={this.onChange} name="description" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Category</label>
                                            <div className="padnoneright" style={{ float: 'left' }}>
                                                <div className="dropdown-mul-2">
                                                    <select style={{ display: 'none' }} name="" id="mul-2" multiple placeholder="Select">
                                                        <option selected disabled>Select</option>
                                                        <option value="2">THOSAI</option>
                                                        <option value="3">DRINKS</option>
                                                        <option value="4">NOODLES</option>
                                                    </select>
                                                </div>
                                                {/* <TodoList items={this.state.add_category} removeItem={this.removeItem} /> */}
                                            </div>
                                            <div className="col-md-2">
                                                <a href="!#" data-toggle="modal" data-target="#add-cat" className="btn btn-primary btn-sm btn-block">+ Add Category</a>
                                                <div className="modal fade" id="add-cat" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                                <h4 className="modal-title"><strong>Add Category</strong></h4>
                                                            </div>
                                                            <form ref="categoryForm" action="#" method="post" className="form-horizontal">
                                                                <div className="modal-body">
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 control-label">Category:</label>
                                                                        <div className="col-sm-5">
                                                                            {/* <input type="text" className="form-control input-sm" ref="categoryName" id="categoryName" onChange={this.categoryName} placeholder="Category" name="category" /> */}
                                                                            <input type="text" className="form-control input-sm" ref="categoryName" id="categoryName" placeholder="Category" name="category" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 control-label"></label>
                                                                        <div className="col-sm-5">
                                                                            {/* <button type="button" onClick={this.categorySave.bind(this)} className="btn btn-primary btn-sm">Submit</button> */}
                                                                            <button type="button" className="btn btn-primary btn-sm">Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="modal-footer" style={{ textAlign: 'left' }}>
                                                                <div className="thumbnail btm-zero">
                                                                    <table className="table table-striped btm-zero">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Category Name</th>
                                                                                <th>Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        {/* <TodoList items={this.state.add_category} removeItem={this.removeItem} /> */}
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Price (Excluding SST)</label>
                                            <div className="col-md-5">
                                                <input type="text" name="price" onChange={this.onChange} className="form-control input-sm" placeholder="Price" />
                                                <small>
                                                    <i>Note: SST and service charge will automatically be added to the Consumer and POS</i>
                                                </small>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6 rightborder">
                                                    <label className="col-md-4 control-label">Normal Modifiers</label>
                                                    <div className="col-md-8">
                                                        <table className="table table-condensed tb5">
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Add-Ons</th>
                                                                    <th>Price(Excluding SST)</th>
                                                                </tr>
                                                            </thead>
                                                            {/* <ModifierList items={this.state.add_modifier} removeModifier={this.removeModifier} /> */}

                                                        </table>
                                                        <div>
                                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#addmodifiernormal">+ Add Modifiers</button>
                                                            <div className="modal fade" id="addmodifiernormal" role="dialog">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                            <h4 className="modal-title">Add Modifier</h4>
                                                                        </div>
                                                                        <form method="" ref="modifierForm" className="form-horizontal">
                                                                            <div className="modal-body">
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label">Add-Ons:</label>
                                                                                    <div className="col-sm-5">
                                                                                        <input type="text" className="form-control input-sm" ref="modifierName" placeholder="Add-Ons" onChange={this.modifierName} name="modifierName" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label">Price:</label>
                                                                                    <div className="col-sm-5">
                                                                                        <input type="text" className="form-control input-sm" ref="modifierPrice" onChange={this.modifierPrice} placeholder="Price" name="modifierPrice" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label"></label>
                                                                                    <div className="col-sm-5">
                                                                                        <button type="button" onClick={this.modifierSave} className="btn btn-primary btn-sm">Submit</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="col-md-4" >
                                                        <label className="control-label">Group Modifiers</label>
                                                        <div>
                                                            <a href="!#" className="btn btn-primary btn-sm grpbtn">+ Add Group</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" className="namegroup" placeholder="Name Group" />
                                                        <label >Pick
                                        <select className="namegroup2">
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                            </select></label>
                                                        <table className="table table-condensed">
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Add-Ons</th>
                                                                    <th>Price(Excluding SST)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>Extra Cheese</td>
                                                                    <td>+RM1 <i className="fa fa-close closesection"></i></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <div>
                                                            <button type="button" className="btn btn-primary btn-sm addGroup" data-toggle="modal" data-target="#addgroupmodifier">+ Add Modifiers</button>
                                                            <a href="!#" className="btn btn-primary btn-sm">Delete Group</a>
                                                            <div className="modal fade" id="addgroupmodifier" role="dialog">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                            <h4 className="modal-title">Add Modifier</h4>
                                                                        </div>
                                                                        <form action="#" method="post" className="form-horizontal">
                                                                            <div className="modal-body">
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label">Add-Ons:</label>
                                                                                    <div className="col-sm-5">
                                                                                        <input type="text" className="form-control input-sm" id="" placeholder="Add-Ons" name="" value="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label">Price:</label>
                                                                                    <div className="col-sm-5">
                                                                                        <input type="text" className="form-control input-sm" id="" placeholder="Price" name="" value="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="col-sm-4 control-label"></label>
                                                                                    <div className="col-sm-5">
                                                                                        <button type="button" name="" className="btn btn-primary btn-sm">Submit</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Counter</label>
                                            <div className="col-md-5">
                                                <label className="radio-inline">
                                                    <input type="radio" name="counter" value="Food" onChange={this.onChange} /> Food
                                            </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="counter" value="Drink" onChange={this.onChange} /> Drink
                                            </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Status</label>
                                            <div className="col-md-5">
                                                <select className="form-control input-sm" name="status" onChange={this.onChange}>
                                                    <option selected disbaled>Select</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Suspended">Suspended</option>
                                                    <option value="Not Available">Not Available</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Product Timings</label>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-9 padnoneright">
                                                        <div className="input-group input-group-sm" style={{ width: '100%', float: 'left' }}>
                                                            <span className="input-group-addon">From</span>
                                                            <input type="text" style={{ width: '22%', float: 'left' }} name="prod_from_time" className="form-control" placeholder="Hour" onChange={this.onChange} />
                                                            <select name="from_format" style={{ width: '23%', float: 'left' }} onChange={this.onChange} className="form-control input-sm"><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>
                                                            <span className="input-group-addon" style={{ border: '0px', width: '10%', float: 'left', fontSize: '12px' }}>To</span>
                                                            <input type="text" style={{ width: '23%', float: 'left' }} name="prod_to_time" className="form-control" placeholder="Hour" onChange={this.onChange} />
                                                            <select name="to_format" style={{ width: '22%', float: 'left' }} onChange={this.onChange} className="form-control input-sm"><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>
                                                        </div>
                                                        <div>
                                                            <table style={{ width: '45%', float: 'left', marginLeft: '49px' }}>
                                                                {this.createFrom()}
                                                            </table>
                                                            <table style={{ width: '45%', float: 'left', marginLeft: '-26px' }}>
                                                                {this.createTo()}
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <span onClick={this.productTimeClone} className="btn btn-warning btn-sm btn-block">+ Add More</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Picture <span className="text-danger">*</span></label>
                                            <div className="col-md-5">
                                                <input type="file" name="image[]" id="productImage" onChange={this.productImage.bind(this)} accept="image/x-png,image/gif,image/jpeg" multiple />
                                            </div>
                                            {/*<span id="remove_product_image" onClick={this.remove_product.bind(this)} style={removeImage}><i className="fa fa-remove"></i></span>*/}
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label">Tags</label>
                                            <div className="col-md-5">
                                                <textarea rows="3" name="tags" onChange={this.onChange} className="form-control input-sm" placeholder="Tags"></textarea>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="form-group">
                                            <label className="col-md-2 control-label"></label>
                                            <div className="col-md-2">
                                                <button type="submit" className="btn btn-primary btn-block">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div><br />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }

}



export default EditProduct;