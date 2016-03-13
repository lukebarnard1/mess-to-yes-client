var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var BuyAPI = React.createClass({
	render: function () {
		return ( 
			<li className="list-group-item">
				<div className="apiLogo">
					<Link to={"/buy/" + this.props.id} className="thumbnail">
						<img src={this.props.img} alt={this.props.title}/>
					</Link>
				</div>
				<div className="apiTitle">
					<h4 className="list-group-item-heading">{this.props.title}</h4>
					<div className="list-group-item-text">
						<div>Ver. {this.props.version}</div>
						<div>Uptime: 100%</div>
					</div>
				</div>
			</li>
	);
}
});

module.exports = BuyAPI;