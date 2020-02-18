import React, { Component } from "react";
import { PostData, GetData, DeleteData, EditData } from "./services/postData";
import Config from '../../config/Config'


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:'',
      ingredient_name:'',
      current_stock:'',
      stock_status:'',
      success: "1",
      sResult: "",
      allData: [],
      editdata:'',
      updateBy: ""
    }    
    this.editInventory = this.editInventory.bind(this);
    this.emptyForm = this.emptyForm.bind(this);
  }
  componentWillMount() {
    let user_id = localStorage.getItem("userId");
    this.setState({ user_id});
    this.initialState = this.state;
    GetData('all-inven').then((result)=> {   
        let data = result.response.msg1;
        this.setState({allData:data});
    });   
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

  inventorySave = (event) => {
    event.preventDefault();
    let data;
    let changes=this.state.editdata;    
    if(this.state.editdata.id) {
      data={
        id:changes.id,
        user_id:1|| changes.user_id,
        ingredient_name: this.state.ingredient_name || changes.ingredient_name,
        current_stock:this.state.current_stock|| changes.current_stock,
        stock_in:this.state.stock_status ,
        stock_out:this.state.stock_status
      }
    }
    else {      
      if(this.state.ingredient_name){
        data={
          id:'',
          user_id:1,
          ingredient_name: this.state.ingredient_name,
          current_stock:this.state.current_stock,
          stock_in:this.state.stock_status,
          stock_out:this.state.stock_status
        }
      }
    }
    PostData('add_inventory1',data).then((result)=>{
      this.setState({editdata:[]});
      this.setState({success:'2'});  
      this.myFormRef.reset();
    });
  }

  editInventory(invenid){       
      GetData('all-inven').then((result)=>
      {
        let response=result.response;
        let length=response.msg1.length;
        let n=0;
        for(n;n<length;n++){    
            if(response.msg1[n].id===invenid){
              this.setState({editdata:response.msg1[n]});              
            }else{}          
        }
      })
  }

  emptyForm(){
    this.setState({editdata:''});
  }

  deletedata(invenid){    
    if (window.confirm("Delete the item?")) {
      let data={
        id:invenid
      }
      PostData('delete',data).then((result) => {
          this.setState({deleteMsgStatus:'1'});          
      });
    }
  }

  componentDidUpdate(){
    if( this.state.success==='2' || this.state.deleteMsgStatus==='1'){
      GetData('all-inven').then((result)=> {
          let data = result.response.msg1;
          this.setState({deleteMsgStatus:''});          
          this.setState({success:"1"});          
          this.setState({allData:data});
      });
    }    
  }
  
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Inventory</h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="thumbnail">
                <div className="clearfix"></div>
                <br />
                <div className="col-md-12">
                  <form className="form-horizontal" onSubmit={this.inventorySave} data-toggle="validator" novalidate="true" ref={(el) => this.myFormRef = el}>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                        Name of Stock / Ingredient
                      </label>
                      <div className="col-md-4">
                        {!this.state.editdata && this.state.success!=="1"?                         
                        <input type="text" name="ingredient_name" data-error="Please enter your Floor Name/Number."  onChange={this.onChange} className="form-control input-sm" placeholder="Name of Stock / Ingredient" required/>
                        :
                        <input type="text" name="ingredient_name" data-error="Please enter your Floor Name/Number." defaultValue={this.state.editdata.ingredient_name} onChange={this.onChange} className="form-control input-sm" placeholder="Name of Stock / Ingredient" required/>
                        }                        
                      </div>
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">
                      {this.state.editdata ?<> Stock </> :<> Current Stock </>}
                      </label>
                      <div className="col-md-4">
                      {!this.state.editdata && this.state.success!=="1" ?
                        <input type="number" name="current_stock" data-error="Invalid" onChange={this.onChange} className="form-control input-sm" placeholder="Quantity" required/>
                        :
                        <input type="number" name="current_stock" data-error="Invalid" defaultValue={this.state.editdata.current_stock} onChange={this.onChange} className="form-control input-sm" placeholder="Quantity" required />
                      }  
                      </div>
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label hidden-xs"></label>
                      <div className="col-md-4">                          
                        <label className="radio-inline" style={{ fontSize: "12px" }}>
                          <input type="radio" name="stock_status" value="stock_in" onClick={this.onChange} />{" "}
                          Stock In (+stock)
                        </label>
                        <label className="radio-inline" style={{ fontSize: "12px" }} >
                          <input type="radio" name="stock_status" value="stock_out" onChange={this.onChange} required />{" "}
                          Stock Out (-stock)
                        </label>
                      </div>      
                      <div class="help-block with-errors"></div>     
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                      <label className="col-md-3 control-label"></label>
                        {!this.state.editdata ?
                          <div className="col-md-1">
                              <button type="submit" className="btn btn-primary btn-block" >
                                Save
                              </button>                                                           
                          </div>
                          :    
                          <div className="col-md-2">                      
                            <button type="submit" style={{ float:'left',width:'55%'}} className="btn btn-primary btn-block" >
                            Save
                            </button> <span  style={{cursor:'pointer',float:'right',padding:'8px 0'}} onClick={this.emptyForm}>Cancel</span>
                          </div>
                          }
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
                      {this.state.allData.map((invenData) => (
                        <tr key={invenData.id}>
                          <td>{invenData.ingredient_name}</td>
                          <td>{invenData.current_stock}</td>
                          <td>10:30 AM | {invenData.created_at}</td>
                          <td>{localStorage.getItem("username")}</td>
                          <td>
                            <span className="btn btn-primary btn-xs" onClick={this.editInventory.bind(this,invenData.id)}>Edit</span>
                            &nbsp;
                            <span className="btn btn-danger btn-xs" onClick={this.deletedata.bind(this,invenData.id)}>
                              Delete
                            </span>
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
