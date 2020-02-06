import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './component/main';
import MainIndex from './component/restaurant';
import SuperAdminIndex from './component/super-admin/SuperAdminIndex'
import Register from './component/Register'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      path:false,
    }
  }

  render() {  
    return (
      <React.Fragment>
        <Router basename={'/'} >
          <Route path="/restaurant" component={MainIndex} />
          {/* <Route exact path="/" component={() => <MainPage routingPath={this.routingPath}/>} /> */}
          <Route path="/" exact component={MainPage}/>
          <Route path="/super-admin" component={SuperAdminIndex}/>
          <Route path="/register" component={Register} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
