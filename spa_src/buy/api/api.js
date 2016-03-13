var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var ChartJS = require('chartjs');
var LineChart = require("react-chartjs").Line;

var chartData = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        }
    ]
};

var chartOptions = {

	scaleOverride : true,
	
	scaleSteps : 5,
	
	scaleStepWidth : 400,
	
	scaleStartValue : 0,
	
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : false,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

};

var data = 	{
	'title': "Visitors to Westfield London",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail",
	'version': "0.01",
	'description': "All the data about shoppers visiting Westfield London.",
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

var API = React.createClass({
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
				<div className="lineChart">
					<div>Page ID</div>
					<LineChart data={chartData} options={chartOptions} width="600" height="250"/>
					<div>Row No.</div>
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
				<table className="apiTable table">
			  		<thead>
						<tr>
							<th>API Call</th>
							<th>URL</th>
							<th>Parameters</th>
							<th>Desc.</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>GET</td>
							<td>/api/RET01/ageofcustomers</td>
							<td></td>
							<td>Returns average age of customers.</td>
							<td>
								<button type="button" className="testAPIBtn btn btn-warning" aria-expanded="false">
									Test
								</button>
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					<div className="testOutput panel panel-default">
						<div className="panel-body">
					  		<p>HTTP/1.1 200 OK<br/>
								Content-Length: 10<br/>
								Content-Type: application/json; charset=utf-8<br/>
								Date: Sat, 12 Mar 2016 17:57:48 GMT<br/>
								<br/>
								&#123;<br/>
								<br/>
								&#125;<br/>

							</p>
				  		</div>
					</div>
				</div>
  			</div>
		</div>

    );
  }
});

module.exports = API;