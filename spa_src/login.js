
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var UserPassForm = require('./userpassform.js');

var Login = React.createClass({
	getInitialState: function() {
			return {};
	},
	handleSubmit: function(e) {
		console.log('Perform login ', e);
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<UserPassForm title="Login" onSubmit={this.handleSubmit}/>
		 );
	}
});

module.exports = Login;