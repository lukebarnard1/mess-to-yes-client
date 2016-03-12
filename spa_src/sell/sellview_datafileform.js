
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataFileForm = React.createClass({
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

		return (
			<div>
				<h2>Data File Source</h2>
				<form onSubmit={this.handleSubmit}>
					<input
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
				</form>
				{data_preview}
			</div>
		 );
	}
});

module.exports = DataFileForm;