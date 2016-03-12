
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

import {Table, Column, Cell} from 'fixed-data-table';

var DataColumnSelector = React.createClass({
	getInitialState: function() {
			return {
				'data_from_server' : {
					columns : {
						'col_1' : 'number', 
						'col_2' : 'datetime'
					}, 
					data : [[1,2,3,4,5,6,7,8],['1pm','2am','3am']] },
				'columns_selected' : {}};
	},
	componentDidMount: function() {
		// Called when the component has loaded
	},
	render: function() {
		var rows = this.state.data_from_server.data;
		return (<Table
			rowHeight={50}
			rowsCount={rows.length}
			headerHeight={50}
			width={500}
			height={100}>
		</Table>);
	}
});

module.exports = DataColumnSelector;