
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'

var Container = require('./container.js');

var SellView = require('./sell/sellview.js');
// var Container = require('./view/container.js');

var browserHistory = require('react-router').browserHistory;

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<Route path="/sell" component={SellView}/>
		</Route>
	</Router>
),
	document.getElementById('content')
);