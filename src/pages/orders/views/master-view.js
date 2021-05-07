import React from 'react';

import DataGrid, { Column, MasterDetail } from 'devextreme-react/data-grid';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

import { employees, tasks } from './data.js';

class DetailTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = getTasks(props.data.key);
  }
  render() {
    let { FirstName, LastName } = this.props.data.data;
    return (
      <React.Fragment>
        <div className="master-detail-caption">{`${FirstName} ${LastName}'s Tasks`}</div>
        <DataGrid dataSource={this.dataSource} showBorders={true} columnAutoWidth={true}>
          <Column dataField="Subject" />
          <Column dataField="StartDate" dataType="date" />
          <Column dataField="DueDate" dataType="date" />
          <Column dataField="Priority" />
          <Column caption="Completed" dataType="boolean" calculateCellValue={this.completedValue} />
        </DataGrid>
      </React.Fragment>
    );
  }
  completedValue(rowData) {
    return rowData.Status === 'Completed';
  }
}

function getTasks(key) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    }),
    filter: ['EmployeeID', '=', key],
  });
}

class App extends React.Component {
  render() {
    return (
      <DataGrid id="grid-container" dataSource={employees} keyExpr="ID" showBorders={true}>
        <Column dataField="Prefix" width={70} caption="Title" />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={170} />
        <Column dataField="State" width={125} />
        <Column dataField="BirthDate" dataType="date" />
        <MasterDetail enabled={true} component={DetailTemplate} />
      </DataGrid>
    );
  }
}

export default App;
