
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var UserPassForm = React.createClass({
	getInitialState: function() {
			return {};
	},
	handleSubmit: function(e) {
		e.preventDefault();

		this.props.onSubmit(this.state);
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	formChange: function(e) {
		var s = {};
		s[e.target.name] = e.target.value;
		this.setState(s);
	},
	render: function() {
		var s = {'marginTop' : '5px', 'width' : '100%'};
		return (
			<div className="panel panel-default">
				<div className="panel-heading">{this.props.title}</div>
				<div className="panel-body">
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-md-8">
								<label htmlFor="username">Username</label>
								<input
									className="form-control"
									type="url"
									placeholder="username"
									onChange={this.formChange}
									name="username"
								/>
						  </div>
							<div className="col-md-4">
								<label htmlFor="password">Password</label>
								<input
									className="form-control col-md-4"
									type="password"
									placeholder="password"
									onChange={this.formChange}
									name="password"
								/>
						  </div>
						</div>

						<button
							style={s} 
							className="btn btn-default"
							type="button"
							onClick={this.handleSubmit}>
							{this.props.title}
						</button>
					</form>
				</div>
			</div>
		 );
	}
});

module.exports = UserPassForm;