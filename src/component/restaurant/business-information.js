import React, { Component } from "react";
import $ from "jquery";
import { PostData, GetData, EditData } from "./services/postData.js";
import axios from "axios";
import { Redirect } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import Config from './../../config/Config';

var add_cuisine = [];
mapboxgl.accessToken = 'pk.eyJ1IjoidW1tZWVzaGt1bWFyIiwiYSI6ImNrMm9qcXkxczBnbWMzbXA1eWY2ZjIxenMifQ.Ao8swUOKC8QRSwgAIOl3EQ';
class BusinessInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.18,
      lat: 28.61,
      zoom: 9.55,
      restro_name: "",
      restro_desc: "",
      cost_product: "",
      restro_add: "",
      halal_status: "",
      certi_image: "",
      showCertiImage: "",
      showVenueImage: "",
      showCleenlessImage: "",
      showLogoImage: "",
      certImageError: "",
      veg_status: "",
      sst_status: "",
      sst_number: "",
      charge_cust: "",
      charge_percentage: "",
      reserve_status: "",
      delivery_status: "",
      cost_delivery: "",
      min_purchase: "",
      min_order: "",
      min_purchase_amount: "",
      cusine_type: "",
      cleenless_rating: "",
      mon_timing_from: "",
      mon_timing_to: "",
      mon_from_format: "",
      mon_to_format: "",
      tues_timing_from: "",
      tues_timing_to: "",
      tues_from_format: "",
      tues_to_format: "",
      wed_timing_from: "",
      wed_timing_to: "",
      wed_from_format: "",
      wed_to_format: "",
      thus_timing_from: "",
      thus_timing_to: "",
      thus_from_format: "",
      thus_to_format: "",
      fri_timing_from: "",
      fri_timing_to: "",
      fri_from_format: "",
      fri_to_format: "",
      sat_timing_from: "",
      sat_timing_to: "",
      sat_from_format: "",
      sat_to_format: "",
      sun_timing_from: "",
      sun_timing_to: "",
      sun_from_format: "",
      sun_to_format: "",
      timing_from: "",
      timing_to: "",
      main_from_format: "",
      main_to_format: "",
      cleenless_image: "",
      cleanImageError: "",
      venue_image: "",
      venueImageError: "",
      restro_image: "",
      restroImageError: "",
      user_id: "",
      add_cuisine: add_cuisine,
      success: "",
      monDisabled: false,
      tueDisabled: false,
      wedDisabled: false,
      thuDisabled: false,
      friDisabled: false,
      satDisabled: false,
      sunDisabled: false,
      monFromValues: [],
      monToValues: [],
      monFromFormat: [],
      monToFormat: [],
      tueFromValues: [],
      tueToValues: [],
      tueFromFormat: [],
      tueToFormat: [],
      wedFromValues: [],
      wedToValues: [],
      wedFromFormat: [],
      wedToFormat: [],
      thuFromValues: [],
      thuToValues: [],
      thuFromFormat: [],
      thuToFormat: [],
      friFromValues: [],
      friToValues: [],
      friFromFormat: [],
      friToFormat: [],
      satFromValues: [],
      satToValues: [],
      satFromFormat: [],
      satToFormat: [],
      sunFromValues: [],
      sunToValues: [],
      sunFromFormat: [],
      sunToFormat: [],
      redirect: true,
      restData: ""
    };
    this.restaurantSave = this.restaurantSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCertiChange = this.onCertiChange.bind(this);
    this.onVenueChange = this.onVenueChange.bind(this);
    this.onCleanlessChange = this.onCleanlessChange.bind(this);
    this.onRestroChange = this.onRestroChange.bind(this);
    this.cuisineSave = this.cuisineSave.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.mondayStatus = this.mondayStatus.bind(this);
    this.tuedayStatus = this.tuedayStatus.bind(this);
    this.wednesdayStatus = this.wednesdayStatus.bind(this);
    this.thursdayStatus = this.thursdayStatus.bind(this);
    this.friStatus = this.friStatus.bind(this);
    this.satStatus = this.satStatus.bind(this);
    this.sundayStatus = this.sundayStatus.bind(this);
    this.remove_certi = this.remove_certi.bind(this);
    this.remove_cleenless = this.remove_cleenless.bind(this);
    this.remove_venue = this.remove_venue.bind(this);
    this.remove_restro = this.remove_restro.bind(this);
    this.monClone = this.monClone.bind(this);
    this.tueClone = this.tueClone.bind(this);
    this.wedClone = this.wedClone.bind(this);
    this.thuClone = this.thuClone.bind(this);
    this.friClone = this.friClone.bind(this);
    this.satClone = this.satClone.bind(this);
    this.sunClone = this.sunClone.bind(this);
  }

  componentDidMount() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      this.setState({ redirect: false });
    }
    this.setState({ user_id: userId });
    EditData("edit-restaurent", userId).then(res => {
      this.setState({
        restro_name: res.response.data[0].restro_name,
        restro_desc: res.response.data[0].restro_desc,
        cost_product: res.response.data[0].cost_product,
        restro_add: res.response.data[0].restro_add,
        halal_status: res.response.data[0].halal_status,
        showCertiImage: res.response.data[0].certi_image,
        showVenueImage: res.response.data[0].venue_image,
        showCleenlessImage: res.response.data[0].cleenless_image,
        showLogoImage: res.response.data[0].restro_image,
        veg_status: res.response.data[0].veg_status,
        sst_status: res.response.data[0].sst_status,
        sst_number: res.response.data[0].sst_number,
        charge_cust: res.response.data[0].charge_cust,
        charge_percentage: res.response.data[0].charge_percentage,
        reserve_status: res.response.data[0].reserve_status,
        delivery_status: res.response.data[0].delivery_status,
        cleenless_rating: res.response.data[0].cleenless_rating,
        mon_timing_from: res.response.data[0].monday.substring(2, 7),
        mon_timing_to: res.response.data[0].monday.substring(12, 17),
        mon_from_format: res.response.data[0].monday.substring(7, 9),
        mon_to_format: res.response.data[0].monday.substring(17, 19),
        tues_timing_from: res.response.data[0].tuesday.substring(2, 7),
        tues_timing_to: res.response.data[0].tuesday.substring(12, 17),
        tues_from_format: res.response.data[0].tuesday.substring(7, 9),
        tues_to_format: res.response.data[0].tuesday.substring(17, 19),
        wed_timing_from: res.response.data[0].wednesday.substring(2, 7),
        wed_timing_to: res.response.data[0].wednesday.substring(12, 17),
        wed_from_format: res.response.data[0].wednesday.substring(7, 9),
        wed_to_format: res.response.data[0].wednesday.substring(17, 19),
        thus_timing_from: res.response.data[0].thursday.substring(2, 7),
        thus_timing_to: res.response.data[0].thursday.substring(12, 17),
        thus_from_format: res.response.data[0].thursday.substring(7, 9),
        thus_to_format: res.response.data[0].thursday.substring(17, 19),
        fri_timing_from: res.response.data[0].friday.substring(2, 7),
        fri_timing_to: res.response.data[0].friday.substring(12, 17),
        fri_from_format: res.response.data[0].friday.substring(7, 9),
        fri_to_format: res.response.data[0].friday.substring(17, 19),
        sat_timing_from: res.response.data[0].saturday.substring(2, 7),
        sat_timing_to: res.response.data[0].saturday.substring(12, 17),
        sat_from_format: res.response.data[0].saturday.substring(7, 9),
        sat_to_format: res.response.data[0].saturday.substring(17, 19),
        sun_timing_from: res.response.data[0].sunday.substring(2, 7),
        sun_timing_to: res.response.data[0].sunday.substring(12, 17),
        sun_from_format: res.response.data[0].sunday.substring(7, 9),
        sun_to_format: res.response.data[0].sunday.substring(17, 19)
      });
      
      
      
    });
  }

  // componentWillMount() {
  //   let userId = localStorage.getItem("userId");
  //   if (!userId) {
  //     this.setState({ redirect: false });
  //   }
  //   this.setState({ user_id: userId });
  //   EditData("edit-restaurent", userId).then(res => {
  //     // let responseBusiness = result;
  //     this.setState({ restData: responseBusiness.response.data[0] });
  //     this.setState({ cost_product: res.response.data[0].cost_product });
  //     this.setState({
  //       restro_name: res.response.data[0].restro_name,
  //       restro_desc: res.response.data[0].restro_desc,
  //       cost_product: res.response.data[0].cost_product,
  //       restro_add: res.response.data[0].restro_add,
  //       halal_status: res.response.data[0].halal_status,
  //       showCertiImage: res.response.data[0].certi_image,
  //       showVenueImage: res.response.data[0].venue_image,
  //       showCleenlessImage: res.response.data[0].cleenless_image,
  //       showLogoImage: res.response.data[0].restro_image,
  //       veg_status: res.response.data[0].veg_status,
  //       sst_status: res.response.data[0].sst_status,
  //       sst_number: res.response.data[0].sst_number,
  //       charge_cust: res.response.data[0].charge_cust,
  //       charge_percentage: res.response.data[0].charge_percentage,
  //       reserve_status: res.response.data[0].reserve_status,
  //       delivery_status: res.response.data[0].delivery_status,
  //       cleenless_rating: res.response.data[0].cleenless_rating,
  //       mon_timing_from: res.response.data[0].monday.substring(2, 7),
  //       mon_timing_to: res.response.data[0].monday.substring(12, 17),
  //       mon_from_format: res.response.data[0].monday.substring(7, 9),
  //       mon_to_format: res.response.data[0].monday.substring(17, 19),
  //       tues_timing_from: res.response.data[0].tuesday.substring(2, 7),
  //       tues_timing_to: res.response.data[0].tuesday.substring(12, 17),
  //       tues_from_format: res.response.data[0].tuesday.substring(7, 9),
  //       tues_to_format: res.response.data[0].tuesday.substring(17, 19),
  //       wed_timing_from: res.response.data[0].wednesday.substring(2, 7),
  //       wed_timing_to: res.response.data[0].wednesday.substring(12, 17),
  //       wed_from_format: res.response.data[0].wednesday.substring(7, 9),
  //       wed_to_format: res.response.data[0].wednesday.substring(17, 19),
  //       thus_timing_from: res.response.data[0].thursday.substring(2, 7),
  //       thus_timing_to: res.response.data[0].thursday.substring(12, 17),
  //       thus_from_format: res.response.data[0].thursday.substring(7, 9),
  //       thus_to_format: res.response.data[0].thursday.substring(17, 19),
  //       fri_timing_from: res.response.data[0].friday.substring(2, 7),
  //       fri_timing_to: res.response.data[0].friday.substring(12, 17),
  //       fri_from_format: res.response.data[0].friday.substring(7, 9),
  //       fri_to_format: res.response.data[0].friday.substring(17, 19),
  //       sat_timing_from: res.response.data[0].saturday.substring(2, 7),
  //       sat_timing_to: res.response.data[0].saturday.substring(12, 17),
  //       sat_from_format: res.response.data[0].saturday.substring(7, 9),
  //       sat_to_format: res.response.data[0].saturday.substring(17, 19),
  //       sun_timing_from: res.response.data[0].sunday.substring(2, 7),
  //       sun_timing_to: res.response.data[0].sunday.substring(12, 17),
  //       sun_from_format: res.response.data[0].sunday.substring(7, 9),
  //       sun_to_format: res.response.data[0].sunday.substring(17, 19)
  //     });
  //     
  //     
  //   });
  // }

  

  cuisineSave(event) {
    event.preventDefault();
    var newCuisine = this.refs.cuisineName.value;
    if (newCuisine) {
      this.addItem({ newCuisine });
      this.refs.cuisineForm.reset();
    }
  }
  removeItem(itemIndex) {
    add_cuisine.splice(itemIndex, 1);
    this.setState({ add_cuisine: add_cuisine });
  }
  addItem(todoItem) {
    add_cuisine.unshift({
      index: add_cuisine.length + 1,
      value: todoItem.newCuisine,
      done: false
    });
    this.setState({ add_cuisine: add_cuisine });
    //
  }
  onCertiChange = event => {
    if (event.target.files && event.target.files[0]) {
      $("#remove_certi_image").show();
      let file = event.target.files[0];
      var FileSize = file.size / 1024 / 1024; // in MB
      if (FileSize <= 15) {
        this.setState({
          showCertiImage: URL.createObjectURL(event.target.files[0])
        });
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            file: file,
            certi_image: reader.result
          });
        };
      } else {
        this.setState({ certImageError: "File is too big" });
        
      }
    }
  };
  onVenueChange = event => {
    if (event.target.files && event.target.files[0]) {
      $("#remove_venue_image").show();
      let file = event.target.files[0];
      var FileSize = file.size / 1024 / 1024;
      if (FileSize <= 15) {
        this.setState({
          showVenueImage: URL.createObjectURL(event.target.files[0])
        });
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            venue_image: reader.result
          });
        };
      } else {
        this.setState({ venueImageError: "File is too big" });
        
      }
    }
  };
  onCleanlessChange = event => {
    if (event.target.files && event.target.files[0]) {
      $("#remove_cleenless_image").show();
      let file = event.target.files[0];
      var FileSize = file.size / 1024 / 1024;
      if (FileSize <= 15) {
        this.setState({
          showCleenlessImage: URL.createObjectURL(event.target.files[0])
        });
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            cleenless_image: reader.result
          });
        };
      } else {
        this.setState({ cleanImageError: "File is too big" });
        
      }
    }
  };
  onRestroChange = event => {
    if (event.target.files && event.target.files[0]) {
      $("#remove_restro_image").show();
      let file = event.target.files[0];
      var FileSize = file.size / 1024 / 1024;
      if (FileSize <= 15) {
        this.setState({
          showLogoImage: URL.createObjectURL(event.target.files[0])
        });
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            restro_image: reader.result
          });
        };
      } else {
        this.setState({ restroImageError: "File is too big" });
        
      }
    }
  };

  restaurantSave(event) {
    event.preventDefault();
    
    axios
      .post(
        `${Config.url}add-restaurent`,
        this.state
      ).then((res)=>console.log(res))
      .catch(err => {
        
      });
    // PostData("add-restaurent", this.state).then(res => res);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCostRadioChange = e => {
    this.setState({ cost_product: e.target.value });
  };

  onAllRadioChange = e => {
    this.setState({
      halal_status: e.target.value
    });
  };

  mondayStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ monDisabled: !this.state.monDisabled });
    } else {
      this.setState({ monDisabled: !this.state.monDisabled });
    }
  }
  tuedayStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ tueDisabled: !this.state.tueDisabled });
    } else {
      this.setState({ tueDisabled: !this.state.tueDisabled });
    }
  }
  wednesdayStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ wedDisabled: !this.state.wedDisabled });
    } else {
      this.setState({ wedDisabled: !this.state.wedDisabled });
    }
  }
  thursdayStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ thuDisabled: !this.state.thuDisabled });
    } else {
      this.setState({ thuDisabled: !this.state.thuDisabled });
    }
  }
  friStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ friDisabled: !this.state.friDisabled });
    } else {
      this.setState({ friDisabled: !this.state.friDisabled });
    }
  }
  satStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ satDisabled: !this.state.satDisabled });
    } else {
      this.setState({ satDisabled: !this.state.satDisabled });
    }
  }
  sundayStatus(e) {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (value === true) {
      this.setState({ sunDisabled: !this.state.sunDisabled });
    } else {
      this.setState({ sunDisabled: !this.state.sunDisabled });
    }
  }
  remove_certi() {
    $("#certi_image").val("");
    this.setState({
      file: "",
      certi_image: "",
      showCertiImage: ""
    });
    $("#remove_certi_image").hide();
  }
  remove_cleenless() {
    $("#cleenless_image").val("");
    this.setState({
      cleenless_image: "",
      showCleenlessImage: ""
    });
    $("#remove_cleenless_image").hide();
  }
  remove_venue() {
    $("#venue_image").val("");
    this.setState({
      venue_image: "",
      showVenueImage: ""
    });
    $("#remove_venue_image").hide();
  }
  remove_restro() {
    $("#restro_image").val("");
    this.setState({
      restro_image: "",
      showLogoImage: ""
    });
    $("#remove_restro_image").hide();
  }
  /* Monday Clone */
  createMonFrom() {
    return this.state.monFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange.bind(this, i)}
        />
        <select
          onChange={this.handleChange1.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createMonTo() {
    return this.state.monToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange2.bind(this, i)}
        />
        <select
          onChange={this.handleChange3.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.monRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  monRemoveClick(i) {
    let monFromValues = [...this.state.monFromValues];
    let monToValues = [...this.state.monToValues];
    let monFromFormat = [...this.state.monFromFormat];
    let monToFormat = [...this.state.monToFormat];

    monFromValues.splice(i, 1);
    monToValues.splice(i, 1);
    monFromFormat.splice(i, 1);
    monToFormat.splice(i, 1);

    this.setState({ monFromValues });
    this.setState({ monToValues });
    this.setState({ monFromFormat });
    this.setState({ monToFormat });
  }
  handleChange(i, event) {
    let monFromValues = [...this.state.monFromValues];
    monFromValues[i] = event.target.value;
    this.setState({ monFromValues });
  }
  handleChange1(i, event) {
    let monFromFormat = [...this.state.monFromFormat];
    monFromFormat[i] = event.target.value;
    this.setState({ monFromFormat });
  }
  handleChange2(i, event) {
    let monToValues = [...this.state.monToValues];
    monToValues[i] = event.target.value;
    this.setState({ monToValues });
  }
  handleChange3(i, event) {
    let monToFormat = [...this.state.monToFormat];
    monToFormat[i] = event.target.value;
    this.setState({ monToFormat });
  }
  monClone() {
    this.setState(prevState => ({
      monFromValues: [...prevState.monFromValues, ""]
    }));
    this.setState(prevState => ({
      monToValues: [...prevState.monToValues, ""]
    }));
    this.setState(prevState => ({
      monFromFormat: [...prevState.monFromFormat, ""]
    }));
    this.setState(prevState => ({
      monToFormat: [...prevState.monToFormat, ""]
    }));
    //
  }
  /* Monday Clone */

  /* Tuesday Clone */
  createTueFrom() {
    return this.state.tueFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange4.bind(this, i)}
        />
        <select
          onChange={this.handleChange5.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createTueTo() {
    return this.state.tueToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange6.bind(this, i)}
        />
        <select
          onChange={this.handleChange7.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.tueRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange4(i, event) {
    let tueFromValues = [...this.state.tueFromValues];
    tueFromValues[i] = event.target.value;
    this.setState({ tueFromValues });
  }
  handleChange5(i, event) {
    let tueFromFormat = [...this.state.tueFromFormat];
    tueFromFormat[i] = event.target.value;
    this.setState({ tueFromFormat });
  }
  handleChange6(i, event) {
    let tueToValues = [...this.state.tueToValues];
    tueToValues[i] = event.target.value;
    this.setState({ tueToValues });
  }
  handleChange7(i, event) {
    let tueToFormat = [...this.state.tueToFormat];
    tueToFormat[i] = event.target.value;
    this.setState({ tueToFormat });
  }
  tueClone() {
    this.setState(prevState => ({
      tueFromValues: [...prevState.tueFromValues, ""]
    }));
    this.setState(prevState => ({
      tueToValues: [...prevState.tueToValues, ""]
    }));
    this.setState(prevState => ({
      tueFromFormat: [...prevState.tueFromFormat, ""]
    }));
    this.setState(prevState => ({
      tueToFormat: [...prevState.tueToFormat, ""]
    }));
    //
  }
  tueRemoveClick(i) {
    let tueFromValues = [...this.state.tueFromValues];
    let tueToValues = [...this.state.tueToValues];
    let tueFromFormat = [...this.state.tueFromFormat];
    let tueToFormat = [...this.state.tueToFormat];

    tueFromValues.splice(i, 1);
    tueToValues.splice(i, 1);
    tueFromFormat.splice(i, 1);
    tueToFormat.splice(i, 1);

    this.setState({ tueFromValues });
    this.setState({ tueToValues });
    this.setState({ tueFromFormat });
    this.setState({ tueToFormat });
  }
  /* Tuesday Clone */

  /* Wednesday Clone */
  createWedFrom() {
    return this.state.wedFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange8.bind(this, i)}
        />
        <select
          onChange={this.handleChange9.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createWedTo() {
    return this.state.wedToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange10.bind(this, i)}
        />
        <select
          onChange={this.handleChange11.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.wedRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange8(i, event) {
    let wedFromValues = [...this.state.wedFromValues];
    wedFromValues[i] = event.target.value;
    this.setState({ wedFromValues });
  }
  handleChange9(i, event) {
    let wedFromFormat = [...this.state.wedFromFormat];
    wedFromFormat[i] = event.target.value;
    this.setState({ wedFromFormat });
  }
  handleChange10(i, event) {
    let wedToValues = [...this.state.wedToValues];
    wedToValues[i] = event.target.value;
    this.setState({ wedToValues });
  }
  handleChange11(i, event) {
    let wedToFormat = [...this.state.wedToFormat];
    wedToFormat[i] = event.target.value;
    this.setState({ wedToFormat });
  }
  wedClone() {
    this.setState(prevState => ({
      wedFromValues: [...prevState.wedFromValues, ""]
    }));
    this.setState(prevState => ({
      wedToValues: [...prevState.wedToValues, ""]
    }));
    this.setState(prevState => ({
      wedFromFormat: [...prevState.wedFromFormat, ""]
    }));
    this.setState(prevState => ({
      wedToFormat: [...prevState.wedToFormat, ""]
    }));
    //
  }
  wedRemoveClick(i) {
    let wedFromValues = [...this.state.wedFromValues];
    let wedToValues = [...this.state.wedToValues];
    let wedFromFormat = [...this.state.wedFromFormat];
    let wedToFormat = [...this.state.wedToFormat];

    wedFromValues.splice(i, 1);
    wedToValues.splice(i, 1);
    wedFromFormat.splice(i, 1);
    wedToFormat.splice(i, 1);

    this.setState({ wedFromValues });
    this.setState({ wedToValues });
    this.setState({ wedFromFormat });
    this.setState({ wedToFormat });
  }
  /* Wednesday Clone */

  /* Thursday Clone */
  createThuFrom() {
    return this.state.thuFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange12.bind(this, i)}
        />
        <select
          onChange={this.handleChange13.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createThuTo() {
    return this.state.thuToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange14.bind(this, i)}
        />
        <select
          onChange={this.handleChange15.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.thuRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange12(i, event) {
    let thuFromValues = [...this.state.thuFromValues];
    thuFromValues[i] = event.target.value;
    this.setState({ thuFromValues });
  }
  handleChange13(i, event) {
    let thuFromFormat = [...this.state.thuFromFormat];
    thuFromFormat[i] = event.target.value;
    this.setState({ thuFromFormat });
  }
  handleChange14(i, event) {
    let thuToValues = [...this.state.thuToValues];
    thuToValues[i] = event.target.value;
    this.setState({ thuToValues });
  }
  handleChange15(i, event) {
    let thuToFormat = [...this.state.thuToFormat];
    thuToFormat[i] = event.target.value;
    this.setState({ thuToFormat });
  }
  thuClone() {
    this.setState(prevState => ({
      thuFromValues: [...prevState.thuFromValues, ""]
    }));
    this.setState(prevState => ({
      thuToValues: [...prevState.thuToValues, ""]
    }));
    this.setState(prevState => ({
      thuFromFormat: [...prevState.thuFromFormat, ""]
    }));
    this.setState(prevState => ({
      thuToFormat: [...prevState.thuToFormat, ""]
    }));
    //
  }
  thuRemoveClick(i) {
    let thuFromValues = [...this.state.thuFromValues];
    let thuToValues = [...this.state.thuToValues];
    let thuFromFormat = [...this.state.thuFromFormat];
    let thuToFormat = [...this.state.thuToFormat];

    thuFromValues.splice(i, 1);
    thuToValues.splice(i, 1);
    thuFromFormat.splice(i, 1);
    thuToFormat.splice(i, 1);

    this.setState({ thuFromValues });
    this.setState({ thuToValues });
    this.setState({ thuFromFormat });
    this.setState({ thuToFormat });
  }
  /* Thursday Clone */
  /* Friday Clone */
  createFriFrom() {
    return this.state.friFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange16.bind(this, i)}
        />
        <select
          onChange={this.handleChange17.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createFriTo() {
    return this.state.friToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange18.bind(this, i)}
        />
        <select
          onChange={this.handleChange19.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.friRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange16(i, event) {
    let friFromValues = [...this.state.friFromValues];
    friFromValues[i] = event.target.value;
    this.setState({ friFromValues });
  }
  handleChange17(i, event) {
    let friFromFormat = [...this.state.friFromFormat];
    friFromFormat[i] = event.target.value;
    this.setState({ friFromFormat });
  }
  handleChange18(i, event) {
    let friToValues = [...this.state.friToValues];
    friToValues[i] = event.target.value;
    this.setState({ friToValues });
  }
  handleChange19(i, event) {
    let friToFormat = [...this.state.friToFormat];
    friToFormat[i] = event.target.value;
    this.setState({ friToFormat });
  }
  friClone() {
    this.setState(prevState => ({
      friFromValues: [...prevState.friFromValues, ""]
    }));
    this.setState(prevState => ({
      friToValues: [...prevState.friToValues, ""]
    }));
    this.setState(prevState => ({
      friFromFormat: [...prevState.friFromFormat, ""]
    }));
    this.setState(prevState => ({
      friToFormat: [...prevState.friToFormat, ""]
    }));
    //
  }
  friRemoveClick(i) {
    let friFromValues = [...this.state.friFromValues];
    let friToValues = [...this.state.friToValues];
    let friFromFormat = [...this.state.friFromFormat];
    let friToFormat = [...this.state.friToFormat];

    friFromValues.splice(i, 1);
    friToValues.splice(i, 1);
    friFromFormat.splice(i, 1);
    friToFormat.splice(i, 1);

    this.setState({ friFromValues });
    this.setState({ friToValues });
    this.setState({ friFromFormat });
    this.setState({ friToFormat });
  }
  /* Friday Clone */

  /* Sat Clone */
  createSatFrom() {
    return this.state.satFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange20.bind(this, i)}
        />
        <select
          onChange={this.handleChange21.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createSatTo() {
    return this.state.satToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange22.bind(this, i)}
        />
        <select
          onChange={this.handleChange23.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.satRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange20(i, event) {
    let satFromValues = [...this.state.satFromValues];
    satFromValues[i] = event.target.value;
    this.setState({ satFromValues });
  }
  handleChange21(i, event) {
    let satFromFormat = [...this.state.satFromFormat];
    satFromFormat[i] = event.target.value;
    this.setState({ satFromFormat });
  }
  handleChange22(i, event) {
    let satToValues = [...this.state.satToValues];
    satToValues[i] = event.target.value;
    this.setState({ satToValues });
  }
  handleChange23(i, event) {
    let satToFormat = [...this.state.satToFormat];
    satToFormat[i] = event.target.value;
    this.setState({ satToFormat });
  }
  satClone() {
    this.setState(prevState => ({
      satFromValues: [...prevState.satFromValues, ""]
    }));
    this.setState(prevState => ({
      satToValues: [...prevState.satToValues, ""]
    }));
    this.setState(prevState => ({
      satFromFormat: [...prevState.satFromFormat, ""]
    }));
    this.setState(prevState => ({
      satToFormat: [...prevState.satToFormat, ""]
    }));
    //
  }
  satRemoveClick(i) {
    let satFromValues = [...this.state.satFromValues];
    let satToValues = [...this.state.satToValues];
    let satFromFormat = [...this.state.satFromFormat];
    let satToFormat = [...this.state.satToFormat];

    satFromValues.splice(i, 1);
    satToValues.splice(i, 1);
    satFromFormat.splice(i, 1);
    satToFormat.splice(i, 1);

    this.setState({ satFromValues });
    this.setState({ satToValues });
    this.setState({ satFromFormat });
    this.setState({ satToFormat });
  }
  /* Sat Clone */
  /* Sat Clone */
  createSunFrom() {
    return this.state.sunFromValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange24.bind(this, i)}
        />
        <select
          onChange={this.handleChange25.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </>
    ));
  }
  createSunTo() {
    return this.state.sunToValues.map((el, i) => (
      <>
        <input
          type="text"
          value={el || ""}
          style={{ width: "45%", float: "left", marginLeft: "10%" }}
          className="form-control input-sm"
          placeholder="Hour"
          onChange={this.handleChange26.bind(this, i)}
        />
        <select
          onChange={this.handleChange27.bind(this, i)}
          style={{ width: "45%", float: "left" }}
          className="form-control input-sm"
        >
          <option selected disabled value=""></option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span
          style={{ marginRight: "-25px", float: "right", marginTop: "5px" }}
          onClick={this.sunRemoveClick.bind(this, i)}
        >
          <i className="fa fa-trash"></i>
        </span>
      </>
    ));
  }
  handleChange24(i, event) {
    let sunFromValues = [...this.state.sunFromValues];
    sunFromValues[i] = event.target.value;
    this.setState({ sunFromValues });
  }
  handleChange25(i, event) {
    let sunFromFormat = [...this.state.sunFromFormat];
    sunFromFormat[i] = event.target.value;
    this.setState({ sunFromFormat });
  }
  handleChange26(i, event) {
    let sunToValues = [...this.state.sunToValues];
    sunToValues[i] = event.target.value;
    this.setState({ sunToValues });
  }
  handleChange27(i, event) {
    let sunToFormat = [...this.state.sunToFormat];
    sunToFormat[i] = event.target.value;
    this.setState({ sunToFormat });
  }
  sunClone() {
    this.setState(prevState => ({
      sunFromValues: [...prevState.sunFromValues, ""]
    }));
    this.setState(prevState => ({
      sunToValues: [...prevState.sunToValues, ""]
    }));
    this.setState(prevState => ({
      sunFromFormat: [...prevState.sunFromFormat, ""]
    }));
    this.setState(prevState => ({
      sunToFormat: [...prevState.sunToFormat, ""]
    }));
    //
  }
  sunRemoveClick(i) {
    let sunFromValues = [...this.state.sunFromValues];
    let sunToValues = [...this.state.sunToValues];
    let sunFromFormat = [...this.state.sunFromFormat];
    let sunToFormat = [...this.state.sunToFormat];

    sunFromValues.splice(i, 1);
    sunToValues.splice(i, 1);
    sunFromFormat.splice(i, 1);
    sunToFormat.splice(i, 1);

    this.setState({ sunFromValues });
    this.setState({ sunToValues });
    this.setState({ sunFromFormat });
    this.setState({ sunToFormat });
  }
  /* Sat Clone */

  componentDidMount = () => {
    $("#show2").on("click", function () {
      $("#div1").show();
    });
    $("#show1").on("click", function () {
      $("#div1").hide();
    });
    $("#show4").on("click", function () {
      $("#div2").show();
    });
    $("#show3").on("click", function () {
      $("#div2").hide();
    });
    $("#show6").on("click", function () {
      $("#div3").show();
    });
    $("#show5").on("click", function () {
      $("#div3").hide();
    });
    $("#show8").on("click", function () {
      $("#div4").show();
    });
    $("#show7").on("click", function () {
      $("#div4").hide();
    });
    $("#disablebutton").click(function () {
      if ($("#freeDelivery").prop("disabled")) {
        $("#freeDelivery").prop("disabled", false);
      } else {
        $("#freeDelivery").prop("disabled", true);
      }
    });
    $("#disablebutton1").click(function () {
      if ($("#minPurchase").prop("disabled")) {
        $("#minPurchase").prop("disabled", false);
      } else {
        $("#minPurchase").prop("disabled", true);
      }
    });
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
      });
      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        });
      map.addControl(geocoder);
  };
  render() {
    if (this.state.redirect === false) {
      return <Redirect exact to="/" />;
    }
    if ($("img#showCertiImage").src !== "undefined") {
      $("img#showCertiImage").css({
        border: "1px solid rgba(32, 77, 116, 0.5)",
        width: "50px",
        padding: "4px",
        boxShadow: "1px 1px 0px 0.6px rgba(32, 77, 116, .5)"
      });
    }
    if ($("img#showCleenlessImage").src !== "undefined") {
      $("img#showCleenlessImage").css({
        border: "1px solid rgba(32, 77, 116, 0.5)",
        width: "50px",
        padding: "4px",
        boxShadow: "1px 1px 0px 0.6px rgba(32, 77, 116, .5)"
      });
    }

    if ($("img#showVenueImage").src !== "undefined") {
      $("img#showVenueImage").css({
        border: "1px solid rgba(32, 77, 116, 0.5)",
        width: "50px",
        padding: "4px",
        boxShadow: "1px 1px 0px 0.6px rgba(32, 77, 116, .5)"
      });
    }
    if ($("img#showLogoImage").src !== "undefined") {
      $("img#showLogoImage").css({
        border: "1px solid rgba(32, 77, 116, 0.5)",
        width: "50px",
        padding: "4px",
        boxShadow: "1px 1px 0px 0.6px rgba(32, 77, 116, .5)"
      });
    }

    const removeImage = {
      float: "right",
      margin: "-3px 27.7em 0 0",
      display: "none"
    };

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Business Information</h1>
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
                    method=""
                    className="form-horizontal"
                    onSubmit={this.restaurantSave}
                  >
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Name of Restaurant
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control input-sm"
                          name="restro_name"
                          onChange={this.onChange}
                          placeholder="Name of Restaurant"
                          defaultValue={this.state.restro_name}
                          required
                        />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Describe Your Business
                      </label>
                      <div className="col-md-5">
                        <textarea
                          rows="3"
                          className="form-control input-sm"
                          name="restro_desc"
                          onChange={this.onChange}
                          placeholder="Describe Your Business"
                          defaultValue={this.state.restro_desc}
                        ></textarea>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Average Cost of Products
                      </label>
                      <div className="col-md-6">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            value="Cheap"
                            name="cost_product"
                            checked={this.state.cost_product === "Cheap"}
                            onChange={this.onCostRadioChange}
                          />
                          $ Cheap
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            value="Affordable"
                            name="cost_product"
                            checked={this.state.cost_product === "Affordable"}
                            onChange={this.onCostRadioChange}
                          />
                          $$ Affordable
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            onChange={this.onCostRadioChange}
                            value="Moderate"
                            name="cost_product"
                            checked={this.state.cost_product === "Moderate"}
                          />
                          $$$ Moderate
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            value="Above Average"
                            onChange={this.onCostRadioChange}
                            name="cost_product"
                            checked={
                              this.state.cost_product === "Above Average"
                            }
                          />
                          $$$$ Above Average
                        </label>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Restaurant Address
                      </label>
                      <div className="col-md-5" id='geocoder'>
                        <textarea
                          rows="4"
                          className="form-control input-sm"
                          name="restro_add"
                          onChange={this.onChange}
                          placeholder="Restaurant Address"
                          defaultValue={this.state.restro_add}
                        ></textarea>
                      </div>
                    </div>
                    {/*<div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                    </div>
                    <div id='geocoder' class='geocoder'></div>*/}
                    <div ref={el => this.mapContainer = el} className="mapContainer" id='map' />
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Are you Halal Certified?
                      </label>

                      <img
                        src={this.state.certi_image}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            name="halal_status"
                            value="1"
                            onChange={this.onAllRadioChange}
                            checked={this.state.halal_status == 1}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="halal_status"
                            value="0"
                            onChange={this.onAllRadioChange}
                            checked={this.state.halal_status == 0}
                          />
                          No
                        </label>
                        <h6>Halal Certificate</h6>
                        <img
                          id="showCertiImage"
                          src={this.state.showCertiImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div id="div1" className="hide1">
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Please upload your Halal Certificate
                        </label>
                        <span>{this.state.certImageError}</span>
                        <img
                          id="showCertiImage"
                          src={this.state.certi_image}
                          alt=""
                        />
                        <div className="col-md-4">
                          <input
                            type="file"
                            id="certi_image"
                            name="certi_image"
                            onChange={this.onCertiChange}
                            accept="image/x-png,image/gif,image/jpeg"
                          />
                        </div>
                        <span
                          id="remove_certi_image"
                          onClick={this.remove_certi}
                          style={removeImage}
                        >
                          <i className="fa fa-remove"></i>
                        </span>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Does your restaurant sell only Vegetarian products?
                      </label>
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            name="veg_status"
                            value="1"
                            onChange={this.onChange}
                            checked={this.state.veg_status == 1}
                          />
                          Yes
                        </label>
                        &nbsp;
                        <label>
                          <input
                            type="radio"
                            name="veg_status"
                            value="0"
                            onChange={this.onChange}
                            checked={this.state.veg_status == 0}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Are you SST Registered?
                      </label>
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            id="show6"
                            name="sst_status"
                            value="1"
                            onChange={this.onChange}
                            checked={this.state.sst_status == 1}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="show5"
                            name="sst_status"
                            value="0"
                            onChange={this.onChange}
                            checked={this.state.sst_status == 0}
                          />
                          No
                        </label>
                        <div id="div3" className="hide1">
                          <input
                            type="text"
                            className="form-control input-sm"
                            name="sst_number"
                            onChange={this.onChange}
                            placeholder="Enter SST Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Do You Charge Your Customers A Service Charge?
                      </label>
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            id="show8"
                            name="charge_cust"
                            value="1"
                            onChange={this.onChange}
                            checked={this.state.charge_cust == 1}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="show7"
                            name="charge_cust"
                            value="0"
                            onChange={this.onChange}
                            checked={this.state.charge_cust == 0}
                          />
                          No
                        </label>
                        <div id="div4" className="hide1">
                          <input
                            type="text"
                            className="form-control input-sm"
                            name="charge_percentage"
                            onChange={this.onChange}
                            placeholder="Percentage Service Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Does Your Business Allow Table Reservations?
                      </label>
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            name="reserve_status"
                            value="1"
                            onChange={this.onChange}
                            checked={this.state.reserve_status == 1}
                          />
                          Yes
                        </label>
                        &nbsp;
                        <label>
                          <input
                            type="radio"
                            name="reserve_status"
                            value="0"
                            onChange={this.onChange}
                            checked={this.state.reserve_status == 0}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Do you offer Delivery?
                      </label>
                      <div className="col-md-5">
                        <label>
                          <input
                            type="radio"
                            id="show4"
                            name="delivery_status"
                            value="1"
                            onChange={this.onChange}
                            checked={this.state.delivery_status == 1}
                          />
                          Yes
                        </label>

                        <label>
                          <input
                            type="radio"
                            id="show3"
                            name="delivery_status"
                            value="0"
                            onChange={this.onChange}
                            checked={this.state.delivery_status == 0}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div id="div2" className="hide1">
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Please indicate the cost of delivery
                        </label>
                        <div className="col-md-5">
                          <div className="input-group input-group-sm">
                            <span
                              className="input-group-addon"
                              style={{ border: "0px" }}
                            >
                              RM
                            </span>
                            <input
                              type="text"
                              className="form-control input-sm"
                              name="cost_delivery"
                              onChange={this.onChange}
                              placeholder="Please indicate the cost of delivery"
                              id="textfieldToClose"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Free Delivery With Min Purchase
                        </label>
                        <div className="col-md-5">
                          <div className="input-group input-group-sm">
                            <span
                              className="input-group-addon"
                              style={{ border: "0px" }}
                            >
                              RM
                            </span>
                            <input
                              type="text"
                              className="form-control input-sm"
                              name="min_purchase"
                              onChange={this.onChange}
                              placeholder="Free Delivery With Min Purchase"
                              id="freeDelivery"
                            />
                            <span
                              className="input-group-addon"
                              style={{
                                border: "0px",
                                padding: "0px",
                                paddingLeft: "5px"
                              }}
                            >
                              <input
                                type="button"
                                value="Not Applicable"
                                name="button1"
                                id="disablebutton"
                                className="btn btn-primary btn-sm"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                          Minimum Purchase Order for Delivery?
                        </label>
                        <div className="col-md-5">
                          <div className="input-group input-group-sm">
                            <span
                              className="input-group-addon"
                              style={{ border: "0px" }}
                            >
                              RM
                            </span>
                            <input
                              type="text"
                              className="form-control input-sm"
                              name="min_order"
                              onChange={this.onChange}
                              placeholder="Minimum Purchase Order for Delivery?"
                              id="minPurchase"
                            />
                            <span
                              className="input-group-addon"
                              style={{
                                border: "0px",
                                padding: "0px",
                                paddingLeft: "5px"
                              }}
                            >
                              <input
                                type="button"
                                value="Not Applicable"
                                name="button1"
                                id="disablebutton1"
                                className="btn btn-primary btn-sm"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*<div className="form-group">
                                            <label className="col-md-3 control-label">Minimum Purchase Amount For Delivery</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control input-sm" name="min_purchase_amount" onChange={this.onChange} placeholder="Minimum Purchase Amount For Delivery"/>
                                            </div>
                                        </div>*/}
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Cuisine Type
                      </label>
                      {/*<div className="col-md-3 padnoneright">
                                                <input type="text" className="form-control input-sm" name="cuisine_type" onChange={this.onChange} placeholder="Cuisine Type"/>
                                            </div>*/}

                      <div className="col-md-2">
                        {/* add Cuisine */}
                        <TodoList
                          items={this.state.add_cuisine}
                          removeItem={this.removeItem}
                        />
                        <a
                          href="!#"
                          data-toggle="modal"
                          data-target="#add-cuisine"
                          className="btn btn-primary btn-sm btn-block"
                          style={{ marginTop: "20px" }}
                        >
                          + Add Cuisine
                        </a>
                        <div
                          className="modal fade"
                          id="add-cuisine"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-hidden="true"
                                >
                                  &times;
                                </button>
                                <h4 className="modal-title">
                                  <strong>Add Cuisine</strong>
                                </h4>
                              </div>
                              <form ref="cuisineForm" method="">
                                <div className="modal-body">
                                  <div className="form-group">
                                    <label className="col-sm-4 control-label">
                                      Cuisine:
                                    </label>
                                    <div className="col-sm-5">
                                      <input
                                        type="text"
                                        className="form-control input-sm"
                                        ref="cuisineName"
                                        id="cuisineName"
                                        name="cuisineName"
                                        onChange={this.cuisineName}
                                        placeholder="Cuisine"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label className="col-sm-4 control-label"></label>
                                    <div className="col-sm-5">
                                      <button
                                        type="button"
                                        onClick={this.cuisineSave}
                                        className="btn btn-primary btn-sm"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <div
                                className="modal-footer"
                                style={{ textAlign: "left" }}
                              >
                                <div className="thumbnail btm-zero">
                                  <table className="table table-striped btm-zero">
                                    <thead>
                                      <tr>
                                        <th>Cuisine Name</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <TodoList
                                      items={this.state.add_cuisine}
                                      removeItem={this.removeItem}
                                    />
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* add Cuisine */}
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Select Your Cleanliness Rating
                      </label>
                      <div className="col-md-5 padnoneright">
                        <select
                          className="form-control input-sm"
                          name="cleenless_rating"
                          onChange={this.onChange}
                          value={this.state.cleenless_rating}
                        >
                          <option>Select</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Working Hours
                      </label>
                      <div className="col-md-5 padnoneright">
                        <div
                          className="input-group input-group-sm"
                          style={{ marginBottom: "10px" }}
                        >
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Monday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm checktime"
                                placeholder="Hour"
                                name="mon_timing_from"
                                disabled={
                                  this.state.monDisabled ? "disabled" : ""
                                }
                                value={this.state.mon_timing_from}
                                onChange={this.onChange}
                              />
                              
                           {/* <select
                                name="mon_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.monDisabled ? "disabled" : ""
                                }
                                value={this.state.mon_from_format}
                              >
                                <option disabled defaultValue=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px",
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="mon_timing_to"
                                disabled={
                                  this.state.monDisabled ? "disabled" : ""
                                }
                                value={this.state.mon_timing_to}
                                onChange={this.onChange}
                              />
                              {/*<select
                                name="mon_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.monDisabled ? "disabled" : ""
                                }
                                value={this.state.mon_to_format}
                              >
                                <option disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createMonFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createMonTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="mondayStatus"
                                  onChange={this.mondayStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                id="add_mon_time"
                                onClick={this.monClone}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.monDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="input-group input-group-sm"
                          style={{ marginBottom: "10px" }}
                        >
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Tuesday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="tues_timing_from"
                                disabled={
                                  this.state.tueDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.tues_timing_from}
                              />
                              {/*<select
                                name="tues_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.tueDisabled ? "disabled" : ""
                                }
                                value={this.state.tues_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="tues_timing_to"
                                disabled={
                                  this.state.tueDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.tues_timing_to}
                              />
                             {/* <select
                              name="tues_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.tueDisabled ? "disabled" : ""
                                }
                                value={this.state.tues_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createTueFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createTueTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="tuedayStatus"
                                  onChange={this.tuedayStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                id="add_tue_time"
                                onClick={this.tueClone}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.tueDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="input-group input-group-sm"
                          style={{ marginBottom: "10px" }}
                        >
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Wednesday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="wed_timing_from"
                                disabled={
                                  this.state.wedDisabled ? "disabled" : ""
                                }
                                value={this.state.wed_timing_from}
                                onChange={this.onChange}
                              />
                            {/*}  <select
                                name="wed_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.wedDisabled ? "disabled" : ""
                                }
                                value={this.state.wed_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="wed_timing_to"
                                disabled={
                                  this.state.wedDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.wed_timing_to}
                              />
                            {/*  <select
                                name="wed_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.wedDisabled ? "disabled" : ""
                                }
                                value={this.state.wed_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createWedFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createWedTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="wednesdayStatus"
                                  onChange={this.wednesdayStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                onClick={this.wedClone}
                                id="add_wed_time"
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.wedDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="input-group input-group-sm"
                          style={{ marginBottom: "10px" }}
                        >
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Thursday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="thus_timing_from"
                                disabled={
                                  this.state.thuDisabled ? "disabled" : ""
                                }
                                value={this.state.thus_timing_from}
                                onChange={this.onChange}
                              />
                             {/* <select
                                name="thus_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.thuDisabled ? "disabled" : ""
                                }
                                value={this.state.thus_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="thus_timing_to"
                                disabled={
                                  this.state.thuDisabled ? "disabled" : ""
                                }
                                value={this.state.thus_timing_to}
                                onChange={this.onChange}
                              />
                             {/* <select
                                name="thus_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.thuDisabled ? "disabled" : ""
                                }
                                value={this.state.thus_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createThuFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createThuTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="thursdayStatus"
                                  onChange={this.thursdayStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                                onClick={this.thuClone}
                                id="add_thur_time"
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.thuDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="input-group input-group-sm">
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Friday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="fri_timing_from"
                                disabled={
                                  this.state.friDisabled ? "disabled" : ""
                                }
                                value={this.state.fri_timing_from}
                                onChange={this.onChange}
                              />
                            {/*  <select
                                name="fri_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.friDisabled ? "disabled" : ""
                                }
                                value={this.state.fri_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="fri_timing_to"
                                disabled={
                                  this.state.friDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.fri_timing_to}
                              />
                             {/* <select
                                name="fri_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.friDisabled ? "disabled" : ""
                                }
                                value={this.state.fri_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createFriFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createFriTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="friStatus"
                                  onChange={this.friStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                                id="add_fri_time"
                                onClick={this.friClone}
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.friDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="input-group input-group-sm">
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Saturday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="sat_timing_from"
                                disabled={
                                  this.state.satDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.sat_timing_from}
                              />
                             {/* <select
                                name="sat_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.satDisabled ? "disabled" : ""
                                }
                                value={this.state.sat_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="sat_timing_to"
                                disabled={
                                  this.state.satDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.sat_timing_to}
                              />
                            {/*  <select
                                name="sat_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.satDisabled ? "disabled" : ""
                                }
                                value={this.state.sat_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createSatFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createSatTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="satStatus"
                                  onChange={this.satStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                                id="add_sat_time"
                                onClick={this.satClone}
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.satDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="input-group input-group-sm">
                          <span
                            className="input-group-addon"
                            style={{
                              border: "0px",
                              width: "90px",
                              textAlign: "left"
                            }}
                          >
                            Sunday
                          </span>
                          <div style={{ width: "100%", float: "left" }}>
                            <div style={{ width: "90%", float: "left" }}>
                              <input
                                type="time"
                                style={{ width: "45%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="sun_timing_from"
                                disabled={
                                  this.state.sunDisabled ? "disabled" : ""
                                }
                                onChange={this.onChange}
                                value={this.state.sun_timing_from}
                              />
                            {/*  <select
                                name="sun_from_format"
                                style={{ width: "23%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.sunDisabled ? "disabled" : ""
                                }
                                value={this.state.sun_from_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                              <span
                                className="input-group-addon"
                                style={{
                                  border: "0px",
                                  width: "10%",
                                  float: "left",
                                  fontSize: "12px"
                                }}
                              >
                                To
                              </span>
                              <input
                                type="time"
                                style={{ width: "44%", float: "left" }}
                                className="form-control input-sm"
                                placeholder="Hour"
                                name="sun_timing_to"
                                disabled={
                                  this.state.sunDisabled ? "disabled" : ""
                                }
                                value={this.state.sun_timing_to}
                                onChange={this.onChange}
                              />
                            {/*  <select
                                name="sun_to_format"
                                style={{ width: "22%", float: "left" }}
                                onChange={this.onChange}
                                className="form-control input-sm"
                                disabled={
                                  this.state.sunDisabled ? "disabled" : ""
                                }
                                value={this.state.sun_to_format}
                              >
                                <option selected disabled value=""></option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>*/}
                            </div>
                            <div>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createSunFrom()}
                              </table>
                              <table style={{ width: "45%", float: "left" }}>
                                {this.createSunTo()}
                              </table>
                            </div>
                            <div
                              style={{
                                marginTop: "-25px",
                                width: "10%",
                                float: "right"
                              }}
                            >
                              <span
                                className="input-group-addon"
                                style={{ border: "0px" }}
                              >
                                <input
                                  type="checkbox"
                                  name="sundayStatus"
                                  onChange={this.sundayStatus}
                                />
                              </span>
                              <span
                                className="input-group-addon"
                                onClick={this.sunClone}
                                data-toggle="tooltip"
                                title="Add extra timeslots"
                                style={{ border: "0px" }}
                                id="add_sun_time"
                              >
                                <i
                                  className="fa fa-plus"
                                  disabled={
                                    this.state.sunDisabled ? "disabled" : ""
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    {/*<div className="form-group">
                                            <label className="col-md-3 control-label">Timings</label>
                                            <div className="col-md-5 padnoneright">
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-addon">From</span>
                                                    <input type="text" style={timingClass} className="form-control" placeholder="Hour" name="timing_from"  onChange={this.onChange}/>
                                                    <select name="main_from_format" style={timingClass} onChange={this.onChange} className="form-control input-sm"><option selected disabled></option><option value="AM">AM</option><option value="PM">PM</option></select>
                                                    <span className="input-group-addon" style={{borderLeft:'0px',borderRight: '0px'}}>To</span>
                                                    <input type="text" style={timingClass} className="form-control" placeholder="Hour" name="timing_to" onChange={this.onChange}/>
                                                    <select name="main_to_format" style={timingClass} onChange={this.onChange} className="form-control input-sm"><option selected disabled></option><option value="AM">AM</option><option value="PM">PM</option></select>
                                                </div>
                                            </div>
                                        </div>*/}
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Upload Certificate Of Your Cleanliness Rating
                      </label>
                      {/* <img
                        src={this.state.cleenless_image}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      /> */}
                      <img
                        id="showCleenlessImage"
                        src={this.state.showCleenlessImage}
                        alt=""
                      />
                      <div className="col-md-4">
                        <input
                          type="file"
                          id="cleenless_image"
                          name="cleenless_image"
                          onChange={this.onCleanlessChange}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </div>
                      <span
                        id="remove_cleenless_image"
                        onClick={this.remove_cleenless}
                        style={removeImage}
                      >
                        <i className="fa fa-remove"></i>
                      </span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Venue Pictures
                      </label>
                      {/* <img
                        src={this.state.venue_image}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      /> */}
                      <img
                        id="showVenueImage"
                        src={this.state.showVenueImage}
                        alt=""
                      />
                      <div className="col-md-4">
                        <input
                          type="file"
                          id="venue_image"
                          name="venue_image"
                          onChange={this.onVenueChange}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </div>
                      <span
                        id="remove_venue_image"
                        onClick={this.remove_venue}
                        style={removeImage}
                      >
                        <i className="fa fa-remove"></i>
                      </span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Please upload your Restaurant's Logo
                      </label>
                      {/* <img
                        src={this.state.restro_image}
                        alt=""
                        style={{ height: "50px", width: "50px" }}
                      /> */}
                      <img
                        id="showLogoImage"
                        src={this.state.showLogoImage}
                        alt=""
                      />
                      <div className="col-md-4">
                        <input
                          type="file"
                          id="restro_image"
                          name="restro_image"
                          onChange={this.onRestroChange}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </div>
                      <span
                        id="remove_restro_image"
                        onClick={this.remove_restro}
                        style={removeImage}
                      >
                        <i className="fa fa-remove"></i>
                      </span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                      <div className="col-md-2">
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
                <br />
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
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
        />
      );
    });
    return <tbody>{items}</tbody>;
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
        <td>
          <button
            type="button"
            className="btn btn-danger btn-xs"
            onClick={this.onClickClose}
          >
            &times;
          </button>
        </td>
      </tr>
    );
  }
}

export default BusinessInformation;
