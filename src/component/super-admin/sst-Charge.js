import React from 'react'
import axios from 'axios'
import Config from './../../config/Config'

class SstCharge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantData : [],
            value:'select',
            check:'1'
        }
        this.checkAll=this.checkAll.bind(this)
        this.onChange=this.onChange.bind(this)
    }

    componentDidMount() {
        let Baseurl =`${Config.url}`
        axios.get(Baseurl+`restaurents`)
        .then(response => {
            this.setState({
                restaurantData:response.data.response.data
            })
            //console.log(this.state.restaurantData)
        }).catch(error => {
            
        })
    }

    onChange = (e,list) => {
        this.setState({value : e.target.value})
        if(e.target.value === 'Yes') {
            list.sort((a,b) => {
                return b.sst_status - a.sst_status  
            })
        }
        if(e.target.value === 'No') { 
            list.sort((a,b) => {
                return a.sst_status - b.sst_status  
            })
        }
    }

    checkAll(){
        let checkeds = document.getElementsByName('ChargeSst'); 
        if(this.state.check=='1') {
            for (let i = 0; i < checkeds.length; i++) {
                checkeds[i].checked = true;
            }
            this.setState({check:'2'})  
        }
        else {            
            for (let i = 0; i < checkeds.length; i++) {
                checkeds[i].checked = false;                 
            }
            this.setState({check:'1'})  
        }

    }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            SST Charge
                            <input type="text" className="form-control input-sm pull-right" placeholder="SST Amount (%)" name="SST" style={{width: "150px", display: "inline" ,margin_left: "10px"}}/>
                            <select className="form-control input-sm pull-right" style={{width: "100px", display: "inline"}} onChange={(e) => this.onChange(e,this.state.restaurantData)}>
                                <option>Sort By</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="clearfix"></div>
                                <div className="thumbnail">
                                    <div className="table-responsive">
                                        <table className="table table-striped" style={{margin_bottom:"0px"}}>
                                            <thead>
                                                <tr className="bg-info">
                                                    <th>#</th>
                                                    <th>Restaurant Name</th>
                                                    <th>SST Registered</th>
                                                    <th>SST Registration Number</th>
                                                    <th><input type="checkbox" onClick={this.checkAll}/> Charge SST To Consumer</th>
                                                </tr>
                                            </thead>
                                            {this.state.restaurantData.map((item,index) => {
                                                return (
                                                    <tbody key={item.id}>
                                                        <tr >
                                                            <td >{index=index+1}</td>
                                                            <td>{item.restro_name}</td>
                                                            {item.sst_status === 0 ? <td>No</td> : <td>Yes</td>}
                                                            <td>{item.sst_number}</td>
                                                            {item.charge_cust === null ? <td><input type="checkbox" name='ChargeSst' defaultChecked={false}/></td> : <td><input type="checkbox" name='ChargeSst'  defaultChecked={true}/></td>}
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