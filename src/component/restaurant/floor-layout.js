import React, { Component } from 'react';
import { EditData } from './services/postData';
import "./css/Style.css";

class FloorLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id:this.props.match.params.id,
            floorData : []
        }
    }

  
    componentDidMount(){
        EditData('get_floor_detail',this.state.id).then(res=>{
            //let responseBusiness = res;
        })  
    }

    // createSquares = (data) => {
    //     console.log("fhsdfhksdhflkshfhksdhfksdhf",data)
    //     let rows = [];
    //     for(let i = 1; i<=data.num_table ; i++) {
    //         rows.push(
    //             <tr className="three_tr">
    //                 <td style={{borderTop: '0px'}}><button className="resizeDiv">{i}</button></td>
    //             </tr>
    //         )      
    //     }
    //     return rows;
    // }

    render() {
        let myData = []
        let Data = (this.props.floorLayData)
        for(let i = 1 ;i <= Data.num_table;i++ ) {
            myData.push(i)
        }
        const resizeDiv = {
            width:'100%',
            padding:'15px',
            backgroundColor:'#4472c8',
            border: '1px #305186 solid',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '18px'
        }
       
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{marginTop: '0px',marginBottom: '0px'}}>
                                Floors
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" style={{left: 'inherit',right: '0px'}}>
                                        <li><a href="floor-layout">Floor 1</a></li>
                                        <li><a href="floor-layout">Floor 2</a></li>
                                        <li><a href="floor-layout">Floor 3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="thumbnail" style={{paddingTop: '0px',paddingBottom: '0px'}}>
                                <div className="col-md-2">
                                    <div className="clearfix"></div><br/>
                                    <table className="table">
                                        <tbody>
                                            {/* {Data[3].map((item) => {
                                                console.log(item);
                                                return (
                                                    <tr>
                                                    <td style={{borderTop: '0px'}}>
                                                    <div className="resizeDiv" style={resizeDiv}>{item}</div>
                                                    </td>
                                                </tr>
                                                )
                                            })} */}
                                        </tbody>
                                    </table>
                                </div> 
                                <div className="col-md-7">
                                    <table className="table">
                                    <tbody>
                                        <tr className="first_tr">
                                            <td colSpan="6" style={{borderTop: '0px'}}>
                                                <button className="resizeDiv" style={resizeDiv}>Kitchen</button>
                                            </td>
                                        </tr>
                                            {/* {this.createSquares(this.props.floorLayData)} */}
                                            {myData.map((item) => {
                                                return (
                                                    <tr className="three_tr" key={item}>
                                                        <td style={{borderTop: '0px'}}>
                                                        <button>{item}</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                     </tbody>
                                    </table>
                                </div>
                                <div className="col-md-3">
                                    <div className="clearfix"></div><br/>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td colSpan="8" style={{borderTop: '0px', padding: "27px"}}>
                                                <button className="resizeDiv" style={resizeDiv}>Take Away</button>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td colSpan="8" style={{borderTop: '0px', padding: "27px"}}> 
                                                <button className="resizeDiv" style={resizeDiv}>Delivery</button>
                                            </td>
                                        </tr>
                                        <tr>    
                                            <td colSpan="8" style={{borderTop: '0px', padding: "27px"}}> 
                                                <button className="resizeDiv" style={resizeDiv}>Cashier</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="col-md-3">
                                        <button className="fa fa-arrow-left" style={{fontSize:"18px", color:"rgb(68, 114, 200)", background:"none", border:"none", fontWeight:"bold", marginLeft:"30px", paddingBottom:"20px" }}onClick= {() => this.props.toggle()}>Back</button>
                                        </div>
                                    {/* <div className="col-md-10">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>1</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>2</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>3</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>4</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div> */}
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default FloorLayout;