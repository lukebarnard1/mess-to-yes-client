var React = require('react');
var ReactDOM = require('react-dom');

//var ChartJS = require('chartjs');
//var LineChart = require("react-chartjs").Line;
//
//var chartData = {
//    labels: ["06/03", "07/03", "08/03", "09/03", "10/03", "11/03", "12/03"],
//    datasets: [
//        {
//            label: "My First dataset",
//            fillColor: "rgba(220,220,220,0.2)",
//            strokeColor: "rgba(220,220,220,1)",
//            pointColor: "rgba(220,220,220,1)",
//            pointStrokeColor: "#fff",
//            pointHighlightFill: "#fff",
//            pointHighlightStroke: "rgba(220,220,220,1)",
//            data: [100, 100, 100, 100, 100, 100, 100]
//        }
//    ]
//};
//
//var chartOptions = {
//
//	scaleOverride : true,
//	
//	scaleSteps : 5,
//	
//	scaleStepWidth : 20,
//	
//	scaleStartValue : 0,
//	
//    ///Boolean - Whether grid lines are shown across the chart
//    scaleShowGridLines : true,
//
//    //String - Colour of the grid lines
//    scaleGridLineColor : "rgba(0,0,0,.05)",
//
//    //Number - Width of the grid lines
//    scaleGridLineWidth : 1,
//
//    //Boolean - Whether to show horizontal lines (except X axis)
//    scaleShowHorizontalLines: true,
//
//    //Boolean - Whether to show vertical lines (except Y axis)
//    scaleShowVerticalLines: true,
//
//    //Boolean - Whether the line is curved between points
//    bezierCurve : true,
//
//    //Number - Tension of the bezier curve between points
//    bezierCurveTension : 0.4,
//
//    //Boolean - Whether to show a dot for each point
//    pointDot : true,
//
//    //Number - Radius of each point dot in pixels
//    pointDotRadius : 4,
//
//    //Number - Pixel width of point dot stroke
//    pointDotStrokeWidth : 1,
//
//    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
//    pointHitDetectionRadius : 20,
//
//    //Boolean - Whether to show a stroke for datasets
//    datasetStroke : true,
//
//    //Number - Pixel width of dataset stroke
//    datasetStrokeWidth : 2,
//
//    //Boolean - Whether to fill the dataset with a colour
//    datasetFill : true,
//
//};

var data = 	{
	'title': "Shopping Data",
	'img': "/static/retail.png",
	'code': "RET01",
	'type': "retail",
	'version': "0.01",
	'description': "All the data about shoppers in a given shop.",
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
			  <div>{data.paymentOptions[i].description} = {data.paymentOptions[i].price}</div>
	 );
}

var API = React.createClass({
  render: function() {
    return (
		<div className="panel panel-default">
  			<div className="panel-heading">
    			<h3 className="panel-title">{data.title}</h3>
  			</div>
		
  			<div className="panel-body">
    			<div className="col-xs-6 col-md-3">
					<a href="#" className="thumbnail">
						<img src={data.img} alt={data.title}/>
					</a>
				</div>
				
				<div className="col-xs-6 col-md-4">
					<div>Ver. {data.version}</div>
					<div>{data.description}</div>
					<div>Size: {data.size}</div>
					<div>Last updated: {data.lastUpdated}</div>
				</div>
		
				<div className="col-xs-6 col-md-5">
					<div>Payment options: </div>
					{ paymentOptions }

				</div>
		
				<table className="table">
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
								Etag: W/"a-SxLlzPl2dGi05bEsdOVLrg"<br/>
								Server: Mashape/5.0.6<br/>
								Via: 1.1 vegur<br/>
								X-Powered-By: Express<br/>
								<br/>
								&#123;<br/>
								  &emsp;"age": 22<br/>
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