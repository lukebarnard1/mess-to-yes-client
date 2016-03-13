
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var Container = React.createClass({
	getInitialState: function() {
		return {output : {message : '...'}};
	},
	componentDidMount: function() {
		// Called when the component has loaded

		var done = function (d) {
			this.setState({output : d.response});
		}.bind(this);

		$.ajax({
			'type' : 'POST',
			'url' : '/FaceHack/www/share/json-connector.php',
			'data' : {'function' : 'myFunction', 'arg1' : 'test', 'arg2' : 'test2'},
			'dataType' : 'json'
		}).done(done);
	},
	render: function() {

		var message = this.state.output.message;

		return (
			<div>
				I shall query the JSON test endopointos...
				<span className="alert alert-info">{message}</span>
			</div>
		 );
	}
});

module.exports = Container;
