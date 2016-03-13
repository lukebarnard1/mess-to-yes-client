
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var UserPassForm = require('./userpassform.js');

var Login = React.createClass({
	getInitialState: function() {
			return {msg : undefined, msg_class : undefined};
	},
	handleSubmit: function(e) {
		// function=login&username=ashton&password=lol
		$.ajax({
		  method: "POST",
		  url: "/FaceHack/www/assets/php/user/UserFunctions.php",
		  data: {'function' : 'login', 'username' : e.username, 'password' : e.password},
		  dataType: "json"
		}).done(function(resp){
			if (resp.success) {
				this.setState({msg : "You're logged in, welcome!", msg_class:"alert alert-success"});

				$.ajax({
				  method: "POST",
				  url: "/FaceHack/www/assets/php/user/UserFunctions.php",
				  data: {'function' : 'getUserId'},
				  dataType: "json"
				}).done(function(resp){
					console.log('user id', resp);	
				}.bind(this));

			} else {
				this.setState({msg : resp.message, msg_class:"alert alert-danger"});
			}
		}.bind(this));


		// ?function=logout
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		var message_box = "";

		if (this.state.msg) {
			message_box = (
				<span className={this.state.msg_class}>{this.state.msg}</span>
			);
		}
		return (
			<div className="row">
				<div className="col-md-4">&nbsp;</div>
				<div className="col-md-4">
					<UserPassForm title="Login" onSubmit={this.handleSubmit}/>
					{message_box}
				</div> 
			</div>
		 );
	}
});

module.exports = Login;