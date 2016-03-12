
var React = require('react');
var ReactDOM = require('react-dom');

var Container = React.createClass({
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div>
				Hello World!
				{this.props.children}
			</div>
		 );
	}
});

module.exports = Container;