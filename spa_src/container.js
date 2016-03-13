
var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var ReactDOM = require('react-dom');

var Container = React.createClass({
	mixins:[Router.State],  
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
		// console.log(this.getRoutes());
	},
	render: function() {
		return (
			<div className="container">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<Link to="/home" className="navbar-brand">
								<img width="200px" src="/FaceHack/www/static/logo.png"/>
							</Link>
						</div>
						<ul className="nav navbar-nav">
							<li><Link to="/register">Register</Link></li>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/buy">Buy</Link></li>
							<li><Link to="/sell/intro">Sell</Link></li>
						</ul>
					</div>
				</nav>
			 {this.props.children}
			</div>
		 );
	}
});

module.exports = Container;
