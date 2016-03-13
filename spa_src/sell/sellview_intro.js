
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var Intro = React.createClass({
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div>
				Use the tabs above to grab your data source. If you have a database ready to pump data straight from a table, choose the Database option.

				If on the other hand, you just have a CSV, TXT or any unstructured data file, use the File option.
			</div>
		 );
	}
});

module.exports = Intro;