import React, { useContext } from 'react';
import 'devextreme/data/odata/store';
import DataGrid, { Pager, Paging, Editing, ColumnFixing, Selection } from 'devextreme-react/data-grid';
import { OrderContext } from '../context';

const CellEditing = () => {
  const { dataSource, columns, renderColumns } = useContext(OrderContext);
  return (
    <DataGrid
      dataSource={dataSource}
      showBorders={true}
      // columnAutoWidth={true}
      // repaintChangesOnly={true}

      // id="gridContainer"
      // dataSource={dataSource}
      // allowColumnReordering={true}
      // allowColumnResizing={true}
      // columnAutoWidth={true}
      // showBorders={false}
      // // focusedRowEnabled={true}
      // defaultFocusedRowIndex={0}
    >
      <ColumnFixing enabled={true} />

      <Editing mode="cell" allowUpdating={true} allowAdding={true} allowDeleting={true} useIcons={true} />
      <Paging defaultPageSize={5} />
      <Pager showPageSizeSelector={false} showInfo={true} />
      <Selection mode="multiple" allowSelectAll={true} deferred={true} />
      {columns.map((item) => renderColumns(item))}
    </DataGrid>
  );
};

export default CellEditing;

// import React from 'react';

// import DataGrid, {
//   Column,
//   Editing,
//   Paging,
//   RequiredRule,
//   PatternRule,
//   EmailRule,
//   AsyncRule,
// } from 'devextreme-react/data-grid';

// import { createStore } from 'devextreme-aspnet-data-nojquery';

// const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridEmployeesValidation';
// const dataSource = createStore({
//   key: 'ID',
//   loadUrl: url,
//   insertUrl: url,
//   updateUrl: url,
//   deleteUrl: url,
//   onBeforeSend: (method, ajaxOptions) => {
//     ajaxOptions.xhrFields = { withCredentials: true };
//   },
// });

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <DataGrid dataSource={dataSource} showBorders={true} columnAutoWidth={true} repaintChangesOnly={true}>
//           <Paging enabled={false} />
//           <Editing mode="batch" allowUpdating={true} allowAdding={true} />
//           <Column dataField="FirstName">
//             <RequiredRule />
//           </Column>
//           <Column dataField="LastName">
//             <RequiredRule />
//           </Column>
//           <Column dataField="Position">
//             <RequiredRule />
//           </Column>
//           <Column dataField="Phone">
//             <RequiredRule />
//             <PatternRule
//               message={'Your phone must have "(555) 555-5555" format!'}
//               pattern={/^\(\d{3}\) \d{3}-\d{4}$/i}
//             />
//           </Column>
//           <Column dataField="Email">
//             <RequiredRule />
//             <EmailRule />
//           </Column>
//         </DataGrid>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
