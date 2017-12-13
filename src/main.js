import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import $ from "jquery"
import scriptjs from 'scriptjs';

import { hashHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router'
import App from "./containers/app"
import Clubber from "./containers/customer/clubber"
import Policies from "./containers/customer/policies"

window.$ = $;

const scripts = [];

const ready = () => {

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Clubber}/>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Clubber}></Route>
        <Route path="/clubberinfo" component={Clubber}></Route>
        <Route path="/policies" component={Policies}></Route>
      </Route>
    </Router>,
    document.getElementById('root')
  )
};

if (scripts.length) {
  scriptjs(scripts, ready);
} else {
  ready();
}
