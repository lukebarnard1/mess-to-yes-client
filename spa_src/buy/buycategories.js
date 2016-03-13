var React = require('react');
var ReactDOM = require('react-dom');

var BuyAPIList = require('./buylist.js');

var BuyCategories = React.createClass({
  render: function() {
    return (
		<div>
			<ul className="list-group">
				<li className="list-group-item">Educational</li>
				<li className="list-group-item">Retail</li>
				<li className="list-group-item">Sports</li>
				<li className="list-group-item">Political</li>
			</ul>
		</div>
    );
  }
});

module.exports = BuyCategories;