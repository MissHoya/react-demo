import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Share from './pages/Share'
import {Router, Route, hashHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/share' component={Share} />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
