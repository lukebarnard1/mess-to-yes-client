
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
							<li><Link to="/buy">Buy</Link></li>
							<li><Link to="/sell">Sell</Link></li>
							<li><Link to="/test">???Test???</Link></li>
						</ul>
					  </div>
					</nav>
					</div>
					<a href="/FaceHack/www/home"><img src="static/lemondata.png" alt="Lemon Data"/></a>
				</div>
			 {this.props.children}
			</div>
		 );
	}
});

module.exports = Container;
