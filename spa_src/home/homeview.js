var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var data = 	[{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
},{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
},{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
},{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
},{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
},{
	'title': "Shopping Data",
	'img': "/FaceHack/www/static/retail.jpg",
	'code': "RET01",
	'type': "retail"
}];

var allRows = [];
for (var i=0; i < data.length; i++) {
	allRows.push(<div className="homePanel col-sm-6 col-md-3">
			<div className="thumbnail">
			  <Link to={"/buy/" + data[i].code}><img src={data[i].img} alt={data[i].code}/></Link>
			  <div className="caption">
				<h5>{data[i].title}</h5>
				<p>{data[i].description}</p>
			  </div>
			</div>
		  </div>
	 );
}

var HomeView = React.createClass({
	getInitialState: function() {
		
		return {};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		return (
			<div className="homePage">
				<div className="homeBanner">
					<div className="homeBox panel">
						<div className="panel-body">
							<h3>Find your next data innovation</h3>
							<input ref="searchBox" type="text" className="form-control" placeholder="Search for data..." onKeyPress={this._handleKeyPress}/>
							<h5>Your data{"\'"}s future is here</h5>
						</div>
					</div>
				</div>
				<div className="row">
					{allRows}
				</div>
			</div>
		 );
	},
	_handleKeyPress: function(e) {
		if (e.key === 'Enter') {
			allRows = [];
			
			var input = this.refs.searchBox;
			var inputValue = input.value;
			
		   for(var i = 0; i < data.length; i++) {
				if (data[i].title.toLowerCase().indexOf(inputValue) > -1) {
					allRows.push(<div className="homePanel col-sm-6 col-md-3">
					<div className="thumbnail">
					  <Link to={"/buy/" + data[i].code}><img src={data[i].img} alt={data[i].code}/></Link>
					  <div className="caption">
						<h5>{data[i].title}</h5>
						<p>{data[i].description}</p>
					  </div>
					</div>
				  </div>
				);
				}
		   }
			this.forceUpdate();
		}
	  }
});

module.exports = HomeView;