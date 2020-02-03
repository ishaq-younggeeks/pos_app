import React from 'react'
import axios from 'axios'
import Config from './../../config/Config'

class SstCharge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantData : [],
            value:'select',
        }
    }

    componentDidMount() {
        axios.get(`${Config.url}restaurents`)
        .then(response => {
            this.setState({
                restaurantData:response.data.response.data
            })
        }).catch(error => {
            
        })
    }

    onChange = (e,list) => {
        this.setState({value : e.target.value})
        if(e.target.value === 'Yes') {
            list.sort((a,b) => {
                
                
                return a.sst_number - b.sst_number  
            })
        }
        if(e.target.value === 'No') { 
            list.sort((a,b) => {
                return b.sst_number - a.sst_number  
            })
        }
    }

    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            SST Charge
                            <input type="text" class="form-control input-sm pull-right" placeholder="SST Amount (%)" style={{width: "150px", display: "inline" ,margin_left: "10px"}}/>
                            <select class="form-control input-sm pull-right" style={{width: "100px", display: "inline"}} onChange={(e) => this.onChange(e,this.state.restaurantData)}>
                                <option>Sort By</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </h1>
                    </section>
                    <section class="content">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="clearfix"></div>
                                <div class="thumbnail">
                                    <div class="table-responsive">
                                        <table class="table table-striped" style={{margin_bottom:"0px"}}>
                                            <thead>
                                                <tr class="bg-info">
                                                    <th>#</th>
                                                    <th>Restaurant Name</th>
                                                    <th>SST Registered</th>
                                                    <th>SST Registration Number</th>
                                                    <th><input type="checkbox"/> Charge SST To Consumer</th>
                                                </tr>
                                            </thead>
                                            {this.state.restaurantData.map((item,index) => {
                                                return (
                                                    <tbody>
                                                        <tr>
                                                            <td key={index}>{index=index+1}</td>
                                                            <td>{item.restro_name}</td>
                                                            {item.sst_status === 0 ? <td>No</td> : <td>Yes</td>}
                                                            <td>{item.sst_number}</td>
                                                            {item.charge_cust === null ? <td><input type="checkbox" defaultChecked={false}/></td> : <td><input type="checkbox" defaultChecked={true}/></td>}
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
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
export default SstCharge;