
var React = require('react');
var Link = require('react-router').Link;
var ReactDOM = require('react-dom');

var DataGrid = require('react-datagrid');

var DataColumnSelector = React.createClass({
	getInitialState: function() {
		return {
			data : [],
			columns : [],
			columns_selected : [] // means all selected: if a column isn't in there, it's selected!
		};
	},
	componentDidMount: function() {
		// Called when the component has loaded

		this.setState({data : this.props.data, columns : this.props.columns});
	},
	is_col_selected: function(colname) {
		var selected = this.state.columns_selected;

		var is_col_selected = true;
		for (var j in selected) {
			if (!selected[j].selected && selected[j].name == colname) {
				is_col_selected = false;
			}
		}
		return is_col_selected;
	},
	selectColumns: function(e) {
		var columns = this.state.columns;

		var ncolumns = [];

		for (var i in columns) {
			var col = columns[i];

			var is_col_selected = this.is_col_selected(col.colname);

			if (is_col_selected)ncolumns.push(col);
		}

		this.props.selectColumns(ncolumns);
	},
	render: function() {
		var data = this.state.data;
		var columns = this.state.columns;

		var id_prop = "id";

		for (var i in columns) {
			if (columns[i].isPrimary) {
				id_prop = columns[i].colname;
				break;
			}
		}

		columns = columns.map(function(col){
			return {name : col.colname, type : col.coltype};
		});

		var tick_boxes = columns.map(function (col, i) {
			var btn_text = col.name;
			
			var tog = function() {
				var ncols = this.state.columns_selected;
				
				var found = false;
				for (var i in ncols) {
					if (ncols[i].name == col.name) {
						ncols[i].selected = !ncols[i].selected;
						found = true;
					}
				}
				if (!found) {
					ncols.push({name: col.name, selected : false}); // false because they are all on by default
				}

				this.setState({columns_selected: ncols});
			}.bind(this);

			return (
				<button key={i} type="button" className="btn btn-default active" data-toggle="button" aria-pressed="true" onClick={tog}>{btn_text}</button>
			);
		}.bind(this));

		var visible_columns = [];

		for (var i in columns) {
			if (this.is_col_selected(columns[i].name)) {
				visible_columns.push(columns[i]);
			}
		}

		var s = {marginBottom : '50px'};

		return (
			<div style={s}>
				Toggle columns and then confirm:
				<div className="flex-box">
					{tick_boxes}
				</div>
				<DataGrid idProperty={id_prop} dataSource={data} columns={visible_columns}/>
				<button type="button" className="btn btn-default" onClick={this.selectColumns}>Confirm columns</button>
			</div>
			);
	}
});

module.exports = DataColumnSelector;