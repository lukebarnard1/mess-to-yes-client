var React = require('react');
var ReactDOM = require('react-dom');

var BuyAPI = require('./buyapi.js');

var data = 	[{
	'title': "Shopping Data",
	'img': "/static/retail.png",
	'code': "RET01",
	'type': "retail",
	'version': "0.01"
}];

var rows = [];
for (var i=0; i < data.length; i++) {
	rows.push(
			  <BuyAPI title={data[i].title} id={data[i].code} type={data[i].retail} img={data[i].img} version={data[i].version}></BuyAPI>
	 );
}

var BuyAPIList = React.createClass({
  render: function() {
    return (
      <div className="apiList">
		<ul className="list-group">
			{rows}
		</ul>
      </div>
    );
  }
});

module.exports = BuyAPIList;