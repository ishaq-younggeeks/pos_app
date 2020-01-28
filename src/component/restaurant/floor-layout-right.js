import React, { Component } from 'react';
import { EditData } from './services/postData';

class FloorLayoutRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
        }
    }
    componentDidMount(){
        EditData('get_floor_detail',this.state.id).then(res=>{
            //let responseBusiness = res;
        })
    }
    render() {
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
                               
                                <div className="col-md-8">
                                    <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="8" style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>Kitchen</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td rowspan="4" style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>Bar</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>15</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>16</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>17</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>18</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>19</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>20</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>21</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>22</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>23</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>24</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>25</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>26</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>27</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>28</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>29</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>30</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>31</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>32</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>33</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>34</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>35</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>36</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>37</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>38</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>39</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>40</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>41</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>42</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                               
                                <div className="col-md-4">
                                    <div className="clearfix"></div><br/>
                                   
                                    <table className="table ml">
                                        <tbody>
                                        <tr>
                                            <td  style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>Take Away</div>
                                            </td>
                                            <td  style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>Delivery</div>
                                            </td>
                                        </tr>
                                       
                                        <tr>
                                            <td  style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>Cashier</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                   <div class="col-md-11">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>1</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>2</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>3</div>
                                            </td>
                                        </tr>
                                        <tr>
                                           
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>4</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>5</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>6</div>
                                            </td>
                                        </tr>
                                       
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>7</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>8</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>9</div>
                                            </td>
                                        </tr>
                                        <tr>
                                          
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>10</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>11</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>12</div>
                                            </td>
                                        </tr>
                                       
                                        <tr>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>13</div>
                                            </td>
                                            <td style={{borderTop: '0px'}}>
                                                <div className="resizeDiv" style={resizeDiv}>14</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                
                                    </div>
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
 
export default FloorLayoutRight;