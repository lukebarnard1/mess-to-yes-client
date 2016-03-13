var React = require('react');
var ReactDOM = require('react-dom');

var API = require('./api.js');

var APIView = React.createClass({
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div className="viewAPI">
				<API title="Shopper Data"></API>
			</div>
		 );
	}
});

module.exports = APIView;