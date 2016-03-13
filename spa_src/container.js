
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
			 <h1>&nbsp;</h1>
			 <nav className="navbar navbar-default">
				<div className="container-fluid">
				<div className="navbar-header">
					<Link to="/FaceHack/www/" className="navbar-brand">Mess to Yes</Link>
				</div>
				<ul className="nav navbar-nav">
					<li><Link to="sell/">Sell</Link></li>
				</ul>
				</div>
			</nav>
			 {this.props.children}
			</div>
		 );
	}
});

module.exports = Container;
