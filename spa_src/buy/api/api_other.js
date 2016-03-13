var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var data = 	{
	'title': "Shopping Data",
	'img': "/static/retail.jpg",
	'code': "RET01",
	'type': "retail",
	'version': "0.01",
	'description': ".",
	'lastUpdated': "8th March 2016",
	'size': "100kB",
	'paymentOptions': [
		{
			'description': "30 rows",
			'price': "£20"
		}
	
	]
};

var paymentOptions = [];
for (var i=0; i < data.paymentOptions.length; i++) {
	paymentOptions.push(
			  <li><Link to="#">{data.paymentOptions[i].description} for {data.paymentOptions[i].price}</Link></li>
	 );
}

var rowHeadings = [];
var rows = [];

var APIOther = React.createClass({
	getInitialState: function() {
		var data = [];
		var done = function(response) {
		if (response.response.length > 0) {
			for (var i = 0; i < 15; i++) {
				chartData.labels.push("" + i);
				chartData.datasets[0].data.push(response.response[i].page_id);
				rows.push(<tr>
							<td>{i}</td>
							<td>{response.response[i].page_id}</td>
							<td>{response.response[i].page_content_model}</td>
							<td>{response.response[i].page_title}</td>
						</tr>);
			}
			rowHeadings = [<th>Row</th>, <th>Page ID</th>, <th>Page Content</th>, <th>Page Title</th>];
			this.forceUpdate();
			data = response.success;
		}
	}.bind(this);

$.ajax({
	method: "GET",
	url: "/FaceHack/www/assets/php/data/GetData.php?getData",
	dataType: "jsonp"
}).done(done);
	return {};
	},
  render: function() {
    return (
		<div className="panel panel-default">
  			<div className="panel-heading">
    			<h3 className="panel-title">{data.title}</h3>
  			</div>
		
  			<div className="panel-body">
    			<div className="col-xs-6 col-md-3">
					<div className="thumbnail">
						<img src={data.img} alt={data.title}/>
					</div>
				</div>
				
				<div className="col-xs-6 col-md-4">
					<div>Ver. {data.version}</div>
					<div>{data.description}</div>
					<div>Size: {data.size}</div>
					<div>Last updated: {data.lastUpdated}</div>
				</div>
		
				<div className="col-xs-6 col-md-5">
					<div>Payment options: </div>
					<div className="paymentSelection dropdown">
					  <button className="optionsButton btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						Select payment option
						<span className="caret"></span>
					  </button>
					<button type="button" className="purchaseOption btn btn-primary">
    					Purchase
  					</button>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						{ paymentOptions }
					  </ul>
					</div>
				</div>
				<table className="table">
			  		<thead>
						<tr>
							{rowHeadings}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
  			</div>
		</div>

    );
  }
});

module.exports = APIOther;