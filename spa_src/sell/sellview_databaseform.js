
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataColumnSelector = require('./datacolumnselector.js');

var DatabaseForm = React.createClass({
	getInitialState: function() {
			return {'data_to_send' : {}, 'data_from_server' : undefined};
	},
	handleSubmit: function(e) {
		e.preventDefault();

		console.log('Send to the server: ', this.state.data_to_send.tablename);

		if (!this.state.data_to_send.db_table) {
			// Pull tables from the server
			var tables = ['test_db_1', 'test_db_2'];

			this.setState({db_tables : tables}, function() {

				// Select first table by default
				var s = {data_to_send : this.state.data_to_send};

				s.data_to_send['tablename'] = tables[0];

				this.setState(s);
			});
		} else {
			// db_table was set, expect to receive data_from_server
			this.setState({data_from_server : 
				{
					columns : {'col_1' : 'number', 'col_2' : 'datetime'},
					data : [[1,2,3,4,5,6,7,8],['1pm','2am','3am']]
				}
			});
		}
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

		if (this.state.data_from_server) {
			selector = (
				<DataColumnSelector data={this.state.data_from_server}/>
			);
		}

		return (
			<div>
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
								name="port"
							/>
					 </div>
					</div>
					<div className="row">
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
						<div className="col-md-6">
							<label htmlFor="user">Username</label>
							<input
								className="form-control"
								type="text"
								placeholder="username"
								onChange={this.databaseFormChange}
								name="user"
							/>
						</div>
					</div>
					<label htmlFor="dbname">Database Name</label>
					<input
						className="form-control"
						type="text"
						placeholder="Database Name"
						onChange={this.databaseFormChange}
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
				{selector}
			</div>
		 );
	}
});

module.exports = DatabaseForm;