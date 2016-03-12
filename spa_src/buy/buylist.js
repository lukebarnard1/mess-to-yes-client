var React = require('react');
var ReactDOM = require('react-dom');

var BuyAPI = require('./buyapi.js');

var BuyAPIList = React.createClass({
  render: function() {
    return (
      <div className="apiList">
        Hello, world! I am an APIList.
		<ul className="list-group">
			<BuyAPI title="Shopper Data">This is one comment</BuyAPI>
		</ul>
      </div>
    );
  }
});

module.exports = BuyAPIList;