var React = require('react');
var ReactDOM = require('react-dom');

var data = 	[{
	'title': "Shopping Data",
	'img': "/static/retail.png",
	'code': "RET01",
	'type': "retail"
}];

var allRows = [];
for (var i=0; i < data.length; i++) {
	allRows.push(<a href={"/buy/" + data[i].code}><div className="homePanel col-sm-6 col-md-4">
			<div className="thumbnail">
			  <img src={data[i].img} alt={data[i].code}/>
			  <div className="caption">
				<h3>{data[i].title}</h3>
				<p>{data[i].description}</p>
			  </div>
			</div>
		  </div></a>
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
				<div className="searchBar input-group">
			  		<input ref="searchBox" type="text" className="form-control" placeholder="Search for data..." onKeyPress={this._handleKeyPress}/>
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
					allRows.push(<a href={"/buy/" + data[i].code}><div className="homePanel col-sm-6 col-md-4">
					<div className="thumbnail">
					  <img src={data[i].img} alt={data[i].code}/>
					  <div className="caption">
						<h3>{data[i].title}</h3>
						<p>{data[i].description}</p>
					  </div>
					</div>
				  </div></a>
				);
				}
		   }
			this.forceUpdate();
		}
	  }
});

module.exports = HomeView;