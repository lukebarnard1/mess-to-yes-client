
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DatabaseForm = React.createClass({
	getInitialState: function() {
			return {};
	},
	handleSubmit: function(e) {
		e.preventDefault();

		console.log('Send to the server: ', this.state);
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
				<h2>Database Source</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-8">
							<label htmlFor="db_url">Database URL</label>
							<input
								className="form-control"
								type="url"
								placeholder="Database URL"
								onChange={this.databaseFormChange}
								name="db_url"
							/>
					 </div>
						<div className="col-md-4">
							<label htmlFor="db_port">Database Port</label>
							<input
								className="form-control col-md-4"
								type="number"
								placeholder="Database Port"
								onChange={this.databaseFormChange}
								name="db_port"
							/>
					 </div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<label htmlFor="db_password">Password</label>
							<input
								className="form-control"
								type="password"
								placeholder="password"
								onChange={this.databaseFormChange}
								name="db_password"
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="db_username">Username</label>
							<input
								className="form-control"
								type="text"
								placeholder="username"
								onChange={this.databaseFormChange}
								name="db_username"
							/>
						</div>
					</div>
					<label htmlFor="db_name">Database Name</label>
					<input
						className="form-control"
						type="text"
						placeholder="Database Name"
						onChange={this.databaseFormChange}
						name="db_database_name"
					/>
					<div className="well-sm">
						<button 
							className="btn btn-default"
							type="button"
							onClick={this.handleSubmit}>
							Upload Database Credentials
						</button>
						</div>
				</form>
			</div>
		 );
	}
});

module.exports = DatabaseForm;