var React = require('react');
var ReactDOM = require('react-dom');

var BuyAPI = require('./buyapi.js');

var data = 	[{
	'title': "Shopping Data",
	'img': "/static/retail.jpg",
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
		<div className="searchBox input-group">
			<input ref="searchText" type="text" className="form-control" placeholder="Search API's..." onKeyPress={this._handleKeyPress}/>
			<span className="input-group-btn">
				<button className="btn btn-default" type="button">Go!</button>
			</span>
		</div>
		<ul className="list-group">
			{rows}
		</ul>
      </div>
    );
  },
	_handleKeyPress: function(e) {
		if (e.key === 'Enter') {
			rows = [];
			
			var input = this.refs.searchText;
			var inputValue = input.value;
			
		   for(var i = 0; i < data.length; i++) {
				if (data[i].title.toLowerCase().indexOf(inputValue) > -1) {
					rows.push(
			  <BuyAPI title={data[i].title} id={data[i].code} type={data[i].retail} img={data[i].img} version={data[i].version}></BuyAPI>
	 			);
				}
		   }
			this.forceUpdate();
		}
	}
});

module.exports = BuyAPIList;