
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var SellView = React.createClass({
	getInitialState: function() {
			return {database_form_values : {}};
	},
	handleSubmit: function(e) {
		e.preventDefault();
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	databaseFormChange: function(e) {
		var s = {};
		s[e.target.name] = e.target.value;
		this.setState(s);
	},
	render: function() {
		return (
			<div>
				<div className="col-md-3">&nbsp;</div>
				<div className="col-md-6">
					<ul className="nav nav-tabs">
						<li htmlrole="presentation"><Link to="/sell/database">Database</Link></li>
						<li htmlrole="presentation"><Link to="/sell/file">Data File</Link></li>
					</ul>
					{this.props.children}
				</div>
			</div>
		 );
	}
});

module.exports = SellView;