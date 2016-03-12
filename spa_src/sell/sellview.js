
var React = require('react');
import Link from 'react-router'
var ReactDOM = require('react-dom');

var SellView = React.createClass({
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div>Sell your data here!</div>
		 );
	}
});

module.exports = SellView;