import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import moment from 'moment';
import RestaurantList from './restaurantList'
import Modal from "react-responsive-modal";
import {Config} from '../../config/Config'

class CuisineManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addcausine : '',
            myImage:'',
            id:0,
            LogoImageError:'',
            showLogoImage:'',
            allList:[],
            editId :'',
            isToggleOn:true,
            toggleId : '',
            value:'select',
            isModalOpen:false,
            isChecked:false,
            editimage:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    formSubmit = (e,id) => {
        console.log(this.state.myImage)
        e.preventDefault();
        let userId = parseInt(localStorage.getItem('userId'))
            if(id < this.state.editId) {
                var myData = {
                    admin_id : userId,
                    cuisine_name : this.state.addcausine,
                    image : this.state.myImage,
                    id:this.state.editId,
                }
            } else {
                var myData = {
                    admin_id : 5 ,
                    cuisine_name : this.state.addcausine ,
                    image : this.state.myImage
                }
            }
        const type = "add-cuisine"        
        let BaseUrl = `${Config.url}`;
        axios({
            method:'post',
            url:BaseUrl+type,
            data:myData
        }).then((res) => {  
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        let BaseUrl=`${Config.url}`
        axios.get(BaseUrl+`all-cuisine`)
        .then(response => {
            this.setState({allList:response.data.response.data})
        }) .catch (error => {
            console.log(error)
        })
    }

    onLogo = event =>{
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            console.log(file)
            if(file.size < 50000){
                $("#remove_image").show();
                this.setState({showLogoImage:URL.createObjectURL(event.target.files[0])});
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.setState({ myImage: reader.result });
                }                
            }else{
                
                this.setState({LogoImageError:'File is too big'})
                console.log("File is too big");
            }
        }
    }

    deleteList = (item) => {
        deleteList = (item) => {
            let BaseUrl=`${Config.url}`
            let type = "delete-cuisine"
            console.log(item.id)
            axios.post(BaseUrl+type+'/'+item.id)
            .then(res => {
                console.log(res)
                if(res.status === 200) {
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    edit = (item) => {
        this.setState({editId:item.id})
        this.setState({addcausine:item.cuisine_name})
        this.setState({editimage:item.image});
    }

    toggle = (id) => {
        this.setState({isToggleOn : this.state.isToggleOn  })
        this.setState({toggleId:id})
    }

    onChange = (e,list) => {
        this.setState({value : e.target.value})
        if(e.target.value === 'Alpha') {
            list.sort((a,b) => {
                let nameA = a.cuisine_name.toUpperCase();
                let nameB = b.cuisine_name.toUpperCase();
                if(nameA<nameB) {
                    return -1;
                }
                if(nameA>nameB) {
                    return 1;
                }
                return 0;
            })
        }
        if(e.target.value === 'latestAdded') { 
            list.sort((a,b) => {
                return b.id - a.id  
            })
        }
    }

    onOpenModal = () => {
        this.setState({ isModalOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleChecked = () => {
        this.setState({isChecked: !this.state.isChecked});
      }

    render() {
        const { isModalOpen } = this.state;
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>Cuisine Management</h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form action="#" className="form-horizontal" onSubmit={(e) => this.formSubmit(e,this.state.id)}>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Add Cuisine</label>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control input-sm" placeholder="Cuisine Name"  name="addcausine" defaultValue={this.state.addcausine} onChange={(e) => this.handleChange(e)}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label" style={{paddingtop: "3px"}}>Image</label>
                                            <div className="col-sm-5">
                                                <input type="file" name="image" onChange={this.onLogo}/>
                                                <img src={this.state.editimage} width='8%' />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label"></label>
                                            <div className="col-sm-6">
                                                <input type="submit" value="Submit" className="btn btn-primary btn-sm"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    <select className="form-control input-sm pull-right" style={{width: "150px"}}  onChange={(e) => this.onChange(e,this.state.allList)} value={this.state.value}>
                                        <option >Sort By</option>
                                        <option value="Alpha">Alphabetical</option>
                                        <option value="latestAdded">Latest Added</option>                                        
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="thumbnail">
                                    <div className="table-responsive">
                                        <table className="table table-striped" style={{marginbottom: "0px"}}>
                                            <thead>
                                                <tr className="bg-info">
                                                    <th>#</th>
                                                    <th>Cuisines</th>
                                                    <th>Image</th>
                                                    <th>Date Added</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {this.state.allList.map((item,key) => {
                                                        return (
                                                            <tr key={item.id} >
                                                                <td>{key=key+1}</td>
                                                                <td style = {{color: "#63abf5", cursor: "pointer"}} onClick={this.onOpenModal}>{item.cuisine_name}</td>
                                                                <td><img src={item.image} width="30px"/></td>
                                                                <td>{moment(item.updated_at).format('Do MMMM YYYY | h:mm a')}</td>
                                                                <td>
                                                                    <button className="btn btn-primary btn-xs" onClick={(e) => this.edit(item)}>Edit</button> &nbsp;
                                                                    <button className="btn btn-primary btn-xs" onClick={() => {this.deleteList(item.id)}}>Delete</button> &nbsp;
                                                                    {/* {this.state.toggleId !== item.id ? <button className="btn btn-danger btn-xs" style={{width: "62px"}}onClick={() => this.toggle(item.id)}>Deactivate</button>: <button className="btn btn-success btn-xs" style={{width: "62px"}}>Active</button>} */}
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
                    </section>
                </div>
                <Modal open={isModalOpen} onClose={() => this.onCloseModal()}>
                    <div className="modal-dialog">
                        <div className="modal-content" style={{border: "2px #e2a062 solid"}}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onCloseModal()}><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title"><strong>Restaurant List</strong></h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">                                    
                                    <div className="input-group">
                                        <input type="text" className="form-control input-sm" placeholder="Search Restaurant"/>
                                        <span className="input-group-addon" style={{background: "none" ,padding: '0px' ,border: '0px' ,paddingLeft: "5px"}}><button className="btn btn-primary btn-sm"><i className="fa fa-search"></i> Search</button></span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="thumbnail" style={{marginBottom: "0px"}}>
                                    <table className="table table-striped" style={{marginBottom:"0px"}}>
                                        <thead>
                                            <tr className="bg-warning">
                                                <th>#</th>
                                                <th>Restaurant Name</th>
                                                <th>Added By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>McDonald</td>
                                                <td>Restaurant</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>McDonald</td>
                                                <td>Restaurant</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>McDonald</td>
                                                <td>Super Admin</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default CuisineManagement;