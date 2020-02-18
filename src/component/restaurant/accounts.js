import React, { Component } from 'react';
import Axios from 'axios';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
          incomeData: [],
          expenseData: [],
          incomeTotal:'',
          expenseTotal:''
        }
    }
    
    componentWillMount(){       
        Axios.get('http://posapp.younggeeks.net/posApi/api/all-accounts')
        .then((result)=>{
        let sumTotal=0; 
        let n=0;
        let accountIData=result.data.data;             
            this.setState({incomeData:accountIData});
            for(n;n<this.state.incomeData.length;n++) {            
                if(this.state.incomeData[n].in_ex_status==='income') {
                    sumTotal=parseInt(this.state.incomeData[n].price)+sumTotal;
                    this.setState({incomeTotal:sumTotal})
                }     
            }    
        }) 
        Axios.get('http://posapp.younggeeks.net/posApi/api/all-expenditure')
        .then((result)=>{
        let sumTotal=0; 
        let n=0;
        let accountEData=result.data.data;             
            this.setState({expenseData:accountEData});
            for(n;n<this.state.expenseData.length;n++) {     
                sumTotal=parseInt(this.state.expenseData[n].price)+sumTotal;
                this.setState({expenseTotal:sumTotal})
            }    
        }) 
    }

    render() { 
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Accounts
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div>
                            <div className="col-md-6">
                                <h4>
                                    <strong>Income List</strong> &nbsp;
                                    <a href="#" className="btn btn-warning btn-xs">Export To Excel</a>
                                </h4>
                            </div>
                            <div className="col-md-6">
                                <div className="pull-right">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#add-income" className="btn btn-primary btn-sm">Add Income</a>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#add-expense" className="btn btn-primary btn-sm">Add Expense</a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Note</th>
                                                <th>Date</th>
                                                <th>Price (Excluding GST)</th>
                                                <th>GST</th>
                                                <th>Service Charge</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>                                            
                                            {this.state.incomeData.map(accData=>
                                            accData.in_ex_status==='income' ?
                                            (                                                
                                                <tr key={accData.id}>
                                                    <td>{accData.item_name}</td>
                                                    <td>{accData.note}</td>
                                                    <td>{accData.created_at}</td>
                                                    <td>RM{accData.price}</td>
                                                    <td>RM{accData.gst}</td>
                                                    <td>RM{accData.service_charge}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                            )
                                            :
                                            (  <></> )                                            
                                            )}
                                            <tr style={{background: '#167aeb',color: '#fff',fontSize: '15px'}}>
                                                <td colSpan="7"><strong>Total Overall Income:</strong>{this.state.incomeTotal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <h4>
                                <strong>Expenditure List</strong> &nbsp;
                                <a href="#" className="btn btn-warning btn-xs">Export To Excel</a>
                            </h4>
                            <div className="thumbnail">
                                <div className="table-responsive">
                                    <table className="table table-striped btm-zero">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Note</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.expenseData.map(accData=>
                                            accData.in_ex_status==='expenditure' ?
                                            (                                                
                                                <tr key={accData.id}>
                                                    <td>{accData.item_name}</td>
                                                    <td>{accData.note}</td>
                                                    <td>{accData.date}</td>
                                                    <td>RM{accData.price}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary btn-xs">Edit</a> &nbsp;
                                                        <a href="#" className="btn btn-danger btn-xs">Delete</a>
                                                    </td>
                                                </tr>
                                            )
                                            :
                                            (  <></> )                                            
                                            )} 
                                            <tr style={{background: '#eb9316',color: '#fff',fontSize: '15px'}}>
                                                <td colSpan="7"><strong>Total Overall Expense:</strong>{this.state.expenseTotal}</td>
                                            </tr>
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
 
export default Account;