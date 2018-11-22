import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Users from './Users';
import User from './User';
import Topics from './Topics';


ReactDOM.render(
<Router>
    <div>
        <Route path="/" exact  component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/users/:userId" component={User} />
        <Route path="/topics" component={Topics}/>
    </div>
</Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
