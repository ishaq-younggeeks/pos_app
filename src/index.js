import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {} from 'react-router-dom'
//import reducer from './component/SuperAdminPanel/reducer/reducer'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
