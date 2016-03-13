
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
				<div className="siteLogo">
					<div><nav className="navbar navbar-default">
					  <div className="container-fluid">
						<ul className="nav navbar-nav">
							<li className="companyName"><Link to="/home">DataCurator</Link></li>
							<li><Link to="/register">Register</Link></li>
							<li><Link to="/login">Login</Link></li>
							<li><Link to="/buy">Buy</Link></li>
							<li><Link to="/sell">Sell</Link></li>
						</ul>
					  </div>
					</nav>
					</div>
				</div>
			 {this.props.children}
			</div>
		 );
	}
});

module.exports = Container;
