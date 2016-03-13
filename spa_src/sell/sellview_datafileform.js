
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataColumnSelector = require('./datacolumnselector.js');

var DataFileForm = React.createClass({
	getInitialState: function() {
		return {progress : 0, data_to_send : "", data_from_server : undefined, user_id : 'PLACEHOLDER_USERID'};
	},
	prog: function(pe) {
		if(pe.lengthComputable) {
    	this.setState({progress : 100 * pe.total / pe.loaded});
    }
	},
	handleSuccess: function(e) {

	},
	handleError: function(e) {

	},
	handleSubmit: function(e) {
		e.preventDefault();

		var done = function(res) {
			console.log(res);
			this.setState({data_from_server : res.response});
		}.bind(this);

		console.log('Send to the server: ', this.state.data_to_send.length, ' bytes');

		var formData = new FormData();

		formData.append('user_id', this.state.user_id);
		formData.append("fileToProcess", this.refs.file_input.files[0]);

		var request = new XMLHttpRequest();

		request.onreadystatechange = function(e) {
			if (request.readyState == 4) {
				done(JSON.parse(request.responseText));
			}
		}.bind(this);

		if(request.upload){ // Check if upload property exists
			request.upload.addEventListener('progress', this.prog, false); // For handling the progress of the upload
		}
		request.open("POST", "/FaceHack/www/assets/php/vendor/process-regex.php");
		request.send(formData);
	},
	handleColumnsSelect: function(cols) {
		console.log('Send columns to server ', cols);
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	fileFormChange: function(e) {
		var file = e.target.files[0];

		var reader = new FileReader();

		reader.onload = function(load_event) {
			var data = load_event.target.result;

			this.setState({'data_to_send' : data});
		}.bind(this);

		reader.readAsText(file);
	},
	render: function() {

		var data_preview = "";

		if (this.state.data_to_send) {
			var data_preview_text = this.state.data_to_send.slice(0, 100);

			data_preview = (
				<div>
					<h3>Preview</h3>
					<pre>{data_preview_text}...</pre>
				</div>
			);
		}

		var percent = "" + (this.state.progress);

		var s = {width : percent + "%"};

		var selector = "";

		if (this.state.data_from_server && this.state.data_from_server.sampledata) {
			var data = this.state.data_from_server.sampledata;

			var cols = [];
			for (var i in data[0]) {
				cols.push({colname : i, coltype : i});
			}

			selector = (
				<DataColumnSelector 
					data={data} 
					columns={cols}
					selectColumns={this.handleColumnsSelect}
				/>
			);
		}

		return (
			<div>
				<div className="row">
					<div className="col-md-3">&nbsp;</div>
					<div className="col-md-6">
						<h2>Data File Source</h2>
						<form onSubmit={this.handleSubmit}>
							<input
								ref="file_input"
								className="form-control"
								type="file"
								name="datafile"
								onChange={this.fileFormChange}
								/>
							<div className="well-sm">
								<button 
									className="btn btn-default"
									type="button" onClick={this.handleSubmit}>
									Upload File
								</button>
							</div>
							<div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={s}>
						    {percent}%
						  </div>
						</form>
						{data_preview}
					</div>
					<div className="col-md-3">&nbsp;</div>
				</div>
				{selector}
			</div>
		 );
	}
});

module.exports = DataFileForm;