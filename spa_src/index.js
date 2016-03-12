
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'

var Container = require('./container.js');

var SellView = require('./sell/sellview.js');
	var DatabaseForm = require('./sell/sellview_databaseform.js');
	var DataFileForm = require('./sell/sellview_datafileform.js');
// var Container = require('./view/container.js');

var browserHistory = require('react-router').browserHistory;

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<Route path="sell/" component={SellView}>
				<Route path="/sell/database" component={DatabaseForm}/>
				<Route path="/sell/file" component={DataFileForm}/>
			</Route>
		</Route>
	</Router>
),
	document.getElementById('content')
);