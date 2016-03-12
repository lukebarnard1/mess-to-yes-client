var React = require('react');
var ReactDOM = require('react-dom');

var BuyCategories = React.createClass({
  render: function() {
    return (
		<div>
			<div className="searchBox input-group">
				<input type="text" className="form-control" placeholder="Search API's..."/>
				<span className="input-group-btn">
					<button className="btn btn-default" type="button">Go!</button>
				</span>
			</div>
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