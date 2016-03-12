var React = require('react');
var ReactDOM = require('react-dom');

var BuyAPI = React.createClass({
	render: function () {
		return ( 
			<li className="list-group-item">
				{this.props.children.toString()}
			</li>
	);
}
});

module.exports = BuyAPI;