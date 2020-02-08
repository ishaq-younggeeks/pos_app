import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './component/main';
import MainIndex from './component/restaurant';
import SuperAdminIndex from './component/super-admin/SuperAdminIndex'
import Register from './component/Register'
import { createBrowserHistory as createHistory } from "history";


class App extends React.Component {
  history = createHistory(this.props);
  constructor(props) {
    super(props);
    this.state= {
      path:false,
    }
  }

  render() {  
    return (
      <React.Fragment>
        <Router basename={'/'} history={this.history} children={this.props.children} >
          <Route path="/restaurant"  component={MainIndex} />
          {/* <Route exact path="/" component={() => <MainPage routingPath={this.routingPath}/>} /> */}
          <Route exact path="/"  component={MainPage}/>
          <Route path="/super-admin"  component={SuperAdminIndex}/>
          <Route path="/register" component={Register} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
