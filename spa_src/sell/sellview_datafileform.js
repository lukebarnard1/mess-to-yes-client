
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataFileForm = React.createClass({
	getInitialState: function() {
			return {progress : 0, data_to_send : ""};
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

		};

		console.log('Send to the server: ', this.state.data_to_send.length, ' bytes');

		var formData = new FormData();

		formData.append("fileToProcess", this.refs.file_input.files[0]);

		var request = new XMLHttpRequest();
		if(request.upload){ // Check if upload property exists
			request.upload.addEventListener('progress', this.prog, false); // For handling the progress of the upload
		}
		request.open("POST", "/FaceHack/www/assets/php/vendor/process-regex.php");
		request.send(formData);


		// $.ajax({
		// 	method: "POST",
		// 	url: "/FaceHack/www/assets/php/vendor/process-regex.php",
		// 	xhr: function() {  // Custom XMLHttpRequest
		// 			var myXhr = $.ajaxSettings.xhr();
		// 			if(myXhr.upload){ // Check if upload property exists
		// 					myXhr.upload.addEventListener('progress', this.prog, false); // For handling the progress of the upload
		// 			}
		// 			return myXhr;
		// 	}.bind(this),
		// 	success: this.handleSuccess,
		// 	error: this.handleError,
		// 	data: this.state.data_to_send,
		// 	cache: false,
		// 	contentType: false,
		// 	processData: false
		// }).done(done);
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

		return (
			<div>
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
						<div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={s}>
					    {percent}%
					  </div>
					</div>
				</form>
				{data_preview}
			</div>
		 );
	}
});

module.exports = DataFileForm;