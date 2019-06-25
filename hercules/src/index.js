import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {reducer} from './reducers'

import {BrowserRouter as Router, withRouter} from 'react-router-dom';

// const AppWithRouter = withRouter(App);

// // ReactDOM.render(<Router><AppWithRouter /></Router>, 
// // document.getElementById('root'));

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root')
);
