
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataGrid = require('react-datagrid');

var DataColumnSelector = React.createClass({
	getInitialState: function() {
			return {
				'data_from_server' : {
					columns : [
						{name : 'col_1', type : 'number'}, 
						{name : 'col_2', type : 'time'}
					], 
					data : [{id: 0, col_1 : 1, col_2 :'1pm'},{id: 1, col_1 : 2, col_2 :'2pm'},{id: 2, col_1 : 3, col_2 :'3pm'}]} ,
				'columns_selected' : {}};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		var data = this.state.data_from_server.data;

		var columns = this.state.data_from_server.columns;

		return (
			<DataGrid idProperty="id" dataSource={data} columns={columns}/>
			);
	}
});

module.exports = DataColumnSelector;