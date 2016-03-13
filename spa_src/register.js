
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var UserPassForm = require('./userpassform.js');

var Register = React.createClass({
	getInitialState: function() {
			return {};
	},
	handleSubmit: function(e) {
		console.log('Perform register ', e);
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<UserPassForm title="Register" onSubmit={this.handleSubmit}/>
		 );
	}
});

module.exports = Register;