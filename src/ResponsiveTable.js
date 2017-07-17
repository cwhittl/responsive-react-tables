import React from 'react';
export default class ResponsiveTable extends React.Component {
  _head() {
    var _this = this;
    var columns = Object.keys(_this.props.columns).map(function(colName, index) {
      return (
        <th key={"head_" + colName}>{_this.props.columns[colName]}</th>
      );
    });
    return (
      <tr>{columns}</tr>
    );
  }

  _rows() {
    var _this = this;
    if (_this.props.rows && _this.props.rows.length > 0) {
      return _this.props.rows.map(function(row) {
        var values = Object.keys(_this.props.columns).map(function(colName, colKey) {
          return (
            <td key={"td_" + colName} data-label={_this.props.columns[colName]}>{row[colName]}</td>
          );
        });
        return (
          <tr>{values}</tr>
        );
      });
    } else {
      return null;
    }

  }

  render() {
    return (
      <table className="responsive-table">
        <thead>
          {this._head()}
        </thead>
        <tbody>
          {this._rows()}
        </tbody>
      </table>
    );
  }
}

ResponsiveTable.defaultProps = {
  columns: {},
  row: {}
}
