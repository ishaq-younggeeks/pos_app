import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from "jquery";
import { PostData, GetData, EditData } from './services/postData.js';
import axios from 'axios'
import Config from './../../config/Config';
import { Link,Route } from "react-router-dom";

var category = [];
var add_modifier = [];
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            eating_opt:'',
            product_feature:[],
            description:'',
            price:'',
            banner: [],
            fromtime: '',
            totime: '',
            from_format: '',
            to_format: '',
            bannerError: '',
            category: [],
            add_modifier: add_modifier,
            FromValues: [],
            ToValues: [],
            FromFormat: [],
            ToFormat: [],
            redirect: false,
            status:'',
            counter:'',
            product_name:'',
            tags:'',
            modifier:'',
            id:0
        }
        this.onChange = this.onChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.modifierSave = this.modifierSave.bind(this);
        this.removeModifier = this.removeModifier.bind(this);
        this.productTimeClone = this.productTimeClone.bind(this);
    }
    componentWillMount() {
        let userId = localStorage.getItem("userId");
        this.setState({ user_id: userId });
        //let u = this.state.user_id
        
    }
    componentDidMount() {
        //console.clear();
        console.log("window location path",window.location.pathname);
        localStorage.setItem("hist",window.location.pathname);
        console.log("window.location.pathname",localStorage.getItem("hist"));
    }
    productSave(event) {
        event.preventDefault(); 
        let user_id = localStorage.getItem("userId");
      //  let feature =this.state.product_feature;       
       // let arr = feature.toString();  
       // let category =this.state.category;   
       // let arr2 = JSON.stringify(category);  
        
     
        let data = {
            name:this.state.name,
            user_id,
            eating_opt:this.state.eating_opt,
            product_feature:`${this.state.product_feature}`,
            description:this.state.description,
            category:`${this.state.category}`,
            price:this.state.price,
            counter:this.state.counter,
            status:this.state.status,
            tags:this.state.tags,
            //fromtime:this.state.fromtime+' '+this.state.from_format,
            fromtime:this.state.fromtime,
            //totime:this.state.totime+' '+this.state.to_format,
            totime:this.state.totime,
            //addOns:['Extra Cheese1'],
            //addOnsPrice:['50'],
            banner:this.state.banner,
            modifier:'some data',
            id:this.state.id
        }
        console.log("data sending",data);
        let myJSON = JSON.stringify(data);
       // console.log("dataa",myJSON);
        axios.post(`${Config.url}add-product1`, data)
        .then((response) => {console.log(response)
            //window.location.reload(false);
            //Perform action based on response
            this.setState({redirect:true});
        }) 
        .catch(error => {
        
        //Perform action based on error
        });
        // if (this.state.name) {
        //     PostData('add-product', this.state).then((res) => {
        //         //let responseJson = result;
        //         //this.setState({success:responseJson.response.msg});
        //         // if(res.response.result===1){
        //         //     this.setState({redirect:true});
        //         //}
        //         
        //         
        //         if (res.response === 1) {
        //             this.setState({
        //                 redirect: !this.state.redirect
        //             })
        //         } 
        //     });
        // }


    } 
    /*Add Category */
    categorySave(event) {
        event.preventDefault();
        var newCategory = this.refs.categoryName.value;
        if (newCategory) {
            this.addItem({ newCategory });
            this.refs.categoryForm.reset();
        }
    }
    removeItem(itemIndex) {
        category.splice(itemIndex, 1);
        this.setState({ category: category });
    }
    addItem(todoItem) {
        category.unshift({
            index: category.length + 1,
            value: todoItem.newCategory,
            done: false
        });
        this.setState({ category: category });
    }
    /*Add Category */
    /*Add Modifier */
    modifierSave(event) {
        event.preventDefault();
        var newModifierName = this.refs.modifierName.value;
        var newModifierPrice = this.refs.modifierPrice.value;
        if (newModifierName && newModifierPrice) {
            this.addModifier(newModifierName, newModifierPrice);
            this.refs.modifierForm.reset();
        }
    }
    removeModifier(itemIndex) {
        //alert(itemIndex);
        add_modifier.splice(itemIndex, 1);
        this.setState({ add_modifier: add_modifier });
        //
    }
    addModifier(modifierItem, modifierPrice) {
        // console.clear();
        add_modifier.unshift({
            index: add_modifier.length + 1,
            value: [modifierItem, modifierPrice],
            done: false
        });
        this.setState({ add_modifier: add_modifier });
        
    }
    /*Add Modifier */
    /*Add Product Time */
    createFrom() {
        return this.state.FromValues.map((el, i) =>
            <>
                <input type="text" value={el || ''} style={{ width: '37%', float: 'left' }} className="form-control input-sm" placeholder="Hour" onChange={this.handleChange.bind(this, i)} />
                <select onChange={this.handleChange1.bind(this, i)} style={{ width: '38%', float: 'left' }} className="form-control input-sm" >
                    <option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option>
                </select>
            </>
        )
    }
    createTo() {
        return this.state.ToValues.map((el, i) =>
            <>
               <input type="text" value={el || ''} style={{ width:'38%', float:'left', marginLeft:'10%'}} className="form-control input-sm" placeholder="Hour" onChange={this.handleChange2.bind(this, i)} />
               <select onChange={this.handleChange3.bind(this, i)} style={{ width: '37%', float: 'left' }} className="form-control input-sm" >
                   <option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option>
                </select>
               <span style={{ marginRight: '-25px', float: 'right', marginTop: '5px' }} onClick={this.RemoveClick.bind(this, i)}><i className="fa fa-trash"></i></span>
            </>
        )
    }
    RemoveClick(i) {
        let FromValues = [...this.state.FromValues];
        let ToValues = [...this.state.ToValues];
        let FromFormat = [...this.state.FromFormat];
        let ToFormat = [...this.state.ToFormat];

        FromValues.splice(i, 1);
        ToValues.splice(i, 1);
        FromFormat.splice(i, 1);
        ToFormat.splice(i, 1);

        this.setState({ FromValues });
        this.setState({ ToValues });
        this.setState({ FromFormat });
        this.setState({ ToFormat });
    }

    handleChange(i, event) {
        let FromValues = [...this.state.FromValues];
        FromValues[i] = event.target.value;
        this.setState({ FromValues });
    }
    handleChange1(i, event) {
        let FromFormat = [...this.state.FromFormat];
        FromFormat[i] = event.target.value;
        this.setState({ FromFormat });
    }
    handleChange2(i, event) {
        let ToValues = [...this.state.ToValues];
        ToValues[i] = event.target.value;
        this.setState({ ToValues });
    }
    handleChange3(i, event) {
        let ToFormat = [...this.state.ToFormat];
        ToFormat[i] = event.target.value;
        this.setState({ ToFormat });
    }

    productTimeClone() {
        this.setState(prevState => ({ FromValues: [...prevState.FromValues, ''] }))
        this.setState(prevState => ({ ToValues: [...prevState.ToValues, ''] }))
        this.setState(prevState => ({ FromFormat: [...prevState.FromFormat, ''] }))
        this.setState(prevState => ({ ToFormat: [...prevState.ToFormat, ''] }))
    }
    /*Add Product Time */
    banner = event => {
        if (event.target.files && event.target.files[0]) {
            let files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                let reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = () => {
                    this.setState({
                        banner: reader.result
                    }); 
                }
            }
        }
    }
    remove_product() {
        $("#banner").val("");
        this.setState({
            file: '',
            certi_image: '',
            showCertiImage: ''
        });
        $("#remove_product_image").hide();
    }
    onChange(e) {
        const checkedfeature = [];
        const checkedModifier = [];
        const checkedEating = [];
        let values;
        if (e.target.type !== 'checkbox') {
            values = e.target.value;
        } else if (e.target.name === 'product_feature') {
            const checkeds = document.getElementsByName('product_feature');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedfeature.push(checkeds[i].value);
                }
            }
            values = checkedfeature.splice(0, 3);

        }/*else if(e.target.name === 'normal-modifier') {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedModifier.push(checkeds[i].value);
                }
            }
            values = checkedModifier;
        }*/else if (e.target.name === 'eating_opt') {
            const checkeds = document.getElementsByTagName('input');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedEating.push(checkeds[i].value);
                }
            }
            
            values = checkedEating;
        }
        else if (e.target.type === 'time') {
            console.log("hitting")
            var times = {}, re = /^\d+(?=:)/;

            for (let i = 13, n = 1; i < 24; i++, n++) {
                times[i] = n < 10 ? "0" + n : n
                }

                
                var time = e.traget.value
                , value = time.value
                , match = value.match(re)[0];
                let new_time=
                (match && match >= 13 ? value.replace(re, times[match]) : value)
                + (time.valueAsDate.getTime() < 43200000 ? " AM" : " PM")
                values=new_time;
                console.log("hitting",values)
        }
        this.setState({ [e.target.name]: values })
        console.log("values data",this.state);
    }
    renderPage () {
        return (
          <Component {...this.props} />
        )
      }
    render() {

        // if(this.state.redirect===true){
        //     return (<Route render={() => <Redirect push to="product-list" />} />)
        // }
        // if (this.state.redirect) {
        //     return (<Redirect exact to='product-list' />)
        // }
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Add Product
                        <Link to="product-list" className="btn btn-warning pull-right"><i className="fa fa-angle-left"></i> Back</Link>
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="clearfix"></div><br />
                                <div className="col-md-12">
                                    <form action="#" className="form-horizontal" onSubmit={this.productSave.bind(this)}>
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
                                                <TodoList items={this.state.category} removeItem={this.removeItem} />
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
                                                                            <input type="text" className="form-control input-sm" ref="categoryName" id="categoryName" onChange={this.categoryName} placeholder="Category" name="category" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 control-label"></label>
                                                                        <div className="col-sm-5">
                                                                            <button type="button" onClick={this.categorySave.bind(this)} className="btn btn-primary btn-sm">Submit</button>
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
                                                                        <TodoList items={this.state.category} removeItem={this.removeItem} />
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
                                                            <ModifierList items={this.state.add_modifier} removeModifier={this.removeModifier} />
                                                            {/*<tbody>
                                                        <tr>
                                                            <td><input type="checkbox" name="normal-modifier" value="Extra Cheese" onChange={this.onChange} /></td>
                                                            <td>Extra Cheese</td>
                                                            <td>+RM1 <i className="fa fa-close closesection"></i></td>
															
                                                        </tr>
                                                    </tbody>*/}
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
                                                    <option value="0">Active</option>
                                                    <option value="1">Suspended</option>
                                                    <option value="2">Not Available</option>
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
                                                            <input type="time" style={{ width: '45%', float: 'left' }} name="fromtime" className="form-control without_ampm" placeholder="Hour" onChange={this.onChange} />
                                                {/*<select name="from_format" style={{ width: '13%', float: 'left' }} onChange={this.onChange} className="form-control input-sm"><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>*/}
                                                            <span className="input-group-addon" style={{ border: '0px', width: '10%', float: 'left', fontSize: '12px' }}>To</span>
                                                            <input type="time" style={{ width: '45%', float: 'left' }} name="totime" className="form-control" placeholder="Hour" onChange={this.onChange} />
                                                            {/*<select name="to_format" style={{ width: '22%', float: 'left' }} onChange={this.onChange} className="form-control input-sm"><option selected disabled value=""></option><option value="AM">AM</option><option value="PM">PM</option></select>*/}
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
                                                <input type="file" name="image[]" id="banner" onChange={this.banner.bind(this)} accept="image/x-png,image/gif,image/jpeg" multiple />
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
        );
    }
}

class TodoList extends Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} />
            );
        });
        return (
            <tbody>{items}</tbody>
        );
    }
}

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
    }
    onClickClose() {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.value}</td>
                <td><button type="button" className="btn btn-danger btn-xs" onClick={this.onClickClose}>&times;</button></td>
            </tr>
        );
    }
}

/* Add Modifier  */
class ModifierList extends Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <ModifierListItem key={index} item={item} index={index} removeModifier={this.props.removeModifier} />
            );
        });
        return (
            <tbody>{items}</tbody>
        );
    }
}

class ModifierListItem extends Component {
    constructor(props) {
        super(props);
        this.onModifierClose = this.onModifierClose.bind(this);
    }
    onModifierClose() {
        var index = parseInt(index);
        this.props.removeModifier(index);
    }
    render() {
        return (
            <tr key={this.props.item.index}>
                <td>{/*<input type="checkbox" name="normal-modifier" value={this.props.item.index} onChange={this.onChange} />*/}</td>
                {this.props.item.value.map((modval) =>
                    <td>{modval}</td>
                )}
                <td><i className="fa fa-close closesection" onClick={this.onModifierClose}></i></td>
            </tr>
        );
    }
}
/* Add Modifier  */

export default AddProduct;
