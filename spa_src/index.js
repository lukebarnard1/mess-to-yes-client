
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'

var Container = require('./container.js');

var HomeView = require('./home/homeview.js');
var TestView = require('./testview.js');

var SellView = require('./sell/sellview.js');
	var DatabaseForm = require('./sell/sellview_databaseform.js');
	var DataFileForm = require('./sell/sellview_datafileform.js');
	var Intro = require('./sell/sellview_intro.js');
	
var BuyView = require('./buy/buyview.js');
var APIView = require('./buy/api/apiview.js');

var RegisterView = require('./register.js');
var LoginView = require('./login.js');

var browserHistory = require('react-router').browserHistory;

var router = (
	<Router history={browserHistory}>
		<Route path="/FaceHack/www/" component={Container}>
			<Route path="/register" component={RegisterView}/>
			<Route path="/login" component={LoginView}/>
			<Route path="/home" component={HomeView}/>
			<Route path="/test" component={TestView}/>
			<Route path="/buy" component={BuyView}/>
			<Route path="/buy/:id" component={APIView}/>
			<Route path="/sell" component={SellView}>
				<Route path="/sell/intro" component={Intro}/>
				<Route path="/sell/database" component={DatabaseForm}/>
				<Route path="/sell/file" component={DataFileForm}/>
			</Route>
		</Route>
	</Router>
);

ReactDOM.render(router,
	document.getElementById('content')
);