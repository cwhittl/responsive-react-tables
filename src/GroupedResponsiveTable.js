import React from 'react';
export default class GroupedResponsiveTable extends React.Component {
  constructor(props){
    super(props);
    this.getGroupHeader = this.getGroupHeader.bind(this);
  }

  _head() {
    var _this = this;
    var columns = Object.keys(_this.props.columns).map(function(colName, index) {
      return (
        <th key={"th" + colName}>{_this.props.columns[colName]}</th>
      );
    });
    return (
      <tr>{columns}</tr>
    );
  }

  getGroupHeader(group){
    var _this = this;
    if(group && group.length > 0 && group[0].hasOwnProperty(_this.props.group_field)){
        return (<tr className="group_header" key={group[0][_this.props.group_field]}><td colSpan={Object.keys(_this.props.columns).length}>{group[0][_this.props.group_field]}</td></tr>);
    }else{
      return null;
    }
  }

  _rows() {
    var _this = this;
    return Object.keys(_this.props.groups).map(function(groupName, groupKey) {
      var group = _this.props.groups[groupName];
      return (<tbody key={"group_"+groupName} className={"group_"+groupName}>{_this.getGroupHeader(group)}{group.map(function(rowName, rowKey){
        var row = group[rowKey];
        var values = Object.keys(_this.props.columns).map(function(colName, colKey) {
          return (
            <td data-label={_this.props.columns[colName]} key={colName}>{row[colName]}</td>
          );
        })
        return (
          <tr key={"row_"+rowKey}>{values}</tr>
        );
      })}</tbody>);
    })
  }

  render() {
    return (
      <table className="grouped-responsive-table">
        <thead>
          {this._head()}
        </thead>
        {this._rows()}
      </table>
    );
  }
}

GroupedResponsiveTable.defaultProps = {
  columns:{},
  row:{},
  group_field: null
}
