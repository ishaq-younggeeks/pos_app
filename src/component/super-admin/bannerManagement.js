import React from 'react';
import {GetData,PostData} from '../restaurant/services/postData.js';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class BannerManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            bannerData:[],
            banner:'',
            success:'',
            deletesuccess:'',
            icon:''
        }
        this.onSubmit= this.onSubmit.bind(this)
    }
    componentWillMount(){
       GetData('all-banner').then((result) => {
           let fetchdata = result.data; 
           this.setState({bannerData:fetchdata})
       })
    }

    onSubmit(e){
        e.preventDefault();        
        let data={
            admin_id:'5',
            banner_type:'consumer',
            banner:this.state.banner
        }
        console.log(data);
        PostData('add-banner',data).then((result) => {
            this.setState({success:'1'});
        });        
    }

    componentDidUpdate(){  
        if(this.state.deletesuccess==='1' || this.state.success==="1") {
            GetData('all-banner').then((result)=>{
                let fetchdata = result.data; 
                this.setState({bannerData:fetchdata})
                this.setState({success:'0'});
                this.setState({deletesuccess:'0'});
            });
        }
    } 

    logo= e =>{
        this.setState({ banner: e.target.files[0] });  
        console.log(this.state.banner);      
    }
    render() {
        let bannerurl='http://posapp.younggeeks.net/posApi/public/images/banner/';

        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>Consumer Banner Management</h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <ul class="nav nav-pills">
                                    <li class="active width1" style={{font_size: "12px"}}><Link to="consumer-banner-management" style={{padding: "10px"}}>Consumer Banner</Link></li>
                                    <li class="width1" style={{font_size: "12px"}}><Link to="dashboard-banner-management" style={{padding: "10px"}}>Dashboard Banner</Link></li>
                                </ul>
                                <div class="clearfix"></div><br/>
                                <div class="thumbnail" style={{padding: "15px 10px 0px 10px"}}>
                                    <form onSubmit={this.onSubmit} enctype="multipart/form-data" class="form-horizontal">                                   
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Upload Banner</label>
                                            <div class="col-sm-5">
                                                <input type="file" onChange={this.logo}/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label"></label>
                                            <div class="col-sm-5">
                                                <input type="submit" value="Submit" class="btn btn-primary"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped" style={{margin_bottom: "0px"}}>
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Banner Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.bannerData.map((banner,i)=>
                                                banner.banner_type=='consumer' ?
                                                <tr key={banner.id}>
                                                    <td>{i+1}</td>
                                                    <td><img src={bannerurl+banner.banner} alt="" width="100"/></td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        {/*<span onClick={this.bannerdelete.bind(this,banner.id)} class="btn btn-primary btn-xs">Delete</span>*/}
                                                    </td>
                                                </tr>
                                                :
                                                <></>
                                                )}                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default BannerManagement