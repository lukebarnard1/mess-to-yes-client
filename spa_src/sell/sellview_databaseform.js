
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataColumnSelector = require('./datacolumnselector.js');

var send_finalised = require('./thing.js');

var DatabaseForm = React.createClass({
	getInitialState: function() {
			return {'data_to_send' : {
				dbname: "fbhackathon",
				ip: "localhost",
				port: "3306",
				user: "root"
			}, 'data' : undefined, 'columns' : undefined};
	},
	handleSubmit: function(e) {
		e.preventDefault();

		var done = function(response) {
			console.log(response);
			console.log(response.message);
			if (response.success) {
				if (!this.state.data_to_send.tablename) {
					// Pull tables from the server
					var tablenames = response.response.tablenames;

					this.setState({db_tables : tablenames}, function() {

						// Select first table by default
						var s = {data_to_send : this.state.data_to_send};

						s.data_to_send['tablename'] = tablenames[0];

						this.setState(s);
					});
				} else {
					// db_table was set, expect to receive data_from_server
					var tableinfo = response.response.tableinfo;
					var tabledata = response.response.tabledata;
					
					this.setState({data : undefined}, function(){
						this.setState({data : tabledata, columns : tableinfo});
					});
				}
			}
		}.bind(this);

		console.log('Sending:',this.state.data_to_send);

		$.ajax({
		  method: "POST",
		  url: "/FaceHack/www/assets/php/vendor/sql-import.php",
		  data: this.state.data_to_send,
		  dataType: "json"
		}).done(done);
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	databaseFormChange: function(e) {
		var s = {data_to_send : this.state.data_to_send};

		s.data_to_send[e.target.name] = e.target.value;

		// Update the data_to_send
		this.setState(s);
	},
	handleColumnsSelect: function(cols) {
		var sf = send_finalised.bind(this);
		sf(cols, function(res) {
			console.log(res);
		}.bind(this));
	},
	render: function() {
		var db_tables_selector = "";
		var btn_text = "Upload database credentials";
		var selector = "";

		if (this.state.db_tables) {
			var tables = [];

			btn_text = "Use table as source";

			tables = tables.concat(this.state.db_tables);

			var options = tables.map(function (table_name, i) {

				return (
					<option key={i} value={table_name}>{table_name}</option>
				);
			});

			db_tables_selector = (
				<div>
					<label htmlFor="tablename">Database Table</label>
					<select name="tablename" className="form-control" onChange={this.databaseFormChange}>
						{options}
					</select>
				</div>
				);
		}

		if (this.state.data) {
			selector = (
				<DataColumnSelector data={this.state.data} columns={this.state.columns} selectColumns={this.handleColumnsSelect}/>
			);
		}

		return (
			<div>
				<div className="row">
					<div className="col-md-3">&nbsp;</div>
					<div className="col-md-6">
						<h2>Database Source</h2>
						<form onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-md-8">
									<label htmlFor="ip">Database URL</label>
									<input
										className="form-control"
										type="url"
										placeholder="Database URL"
										onChange={this.databaseFormChange}
										defaultValue="localhost"
										name="ip"
									/>
							 </div>
								<div className="col-md-4">
									<label htmlFor="port">Database Port</label>
									<input
										className="form-control col-md-4"
										type="number"
										placeholder="Database Port"
										onChange={this.databaseFormChange}
										defaultValue="3306"
										name="port"
									/>
							 </div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<label htmlFor="user">Username</label>
									<input
										className="form-control"
										type="text"
										placeholder="username"
										onChange={this.databaseFormChange}
										defaultValue="root"
										name="user"
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="pass">Password</label>
									<input
										className="form-control"
										type="password"
										placeholder="password"
										onChange={this.databaseFormChange}
										name="pass"
									/>
								</div>
							</div>
							<label htmlFor="dbname">Database Name</label>
							<input
								className="form-control"
								type="text"
								placeholder="Database Name"
								onChange={this.databaseFormChange}
								defaultValue="fbhackathon"
								name="dbname"
							/>
							{db_tables_selector}
							<div className="well-sm">
								<button 
									className="btn btn-default"
									type="button"
									onClick={this.handleSubmit}>
									{btn_text}
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-3">&nbsp;</div>
				</div>
				{selector}
			</div>
		 );
	}
});

module.exports = DatabaseForm;