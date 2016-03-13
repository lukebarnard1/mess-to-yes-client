
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
		console.log(this.props.location.pathname);
	},
	databaseFormChange: function(e) {
		var s = {};
		s[e.target.name] = e.target.value;
		this.setState(s);
	},
	render: function() {
		return (
			<div>
				<div className="row">
					<div className="col-md-3">&nbsp;</div>
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-body">
								<ul className="nav nav-tabs">
									<li className="nav-item">
										<Link to="/sell/database">Database</Link>
									</li>
									<li className="nav-item">
										<Link to="/sell/file">Data File</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-body">
						{this.props.children}
					</div>
				</div>
			</div>
		 );
	}
});

module.exports = SellView;