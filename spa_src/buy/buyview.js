var React = require('react');
var ReactDOM = require('react-dom');

var BuyCategories = require('./buycategories.js');
var BuyAPIList = require('./buylist.js');

var BuyView = React.createClass({
	getInitialState: function() {
			return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div className="buyAPI">
				<div className="buyCategories">
					<BuyCategories/>
				</div>
				<div className="buyAPIList">
					<h1>API</h1>
					<BuyAPIList/>
				</div>
			</div>
		 );
	}
});

module.exports = BuyView;