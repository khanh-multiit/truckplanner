import React, { useContext } from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Pager,
  Paging,
  FilterRow,
  Editing,
  RemoteOperations,
  ColumnFixing,
  Selection,
  Column,
  Button,
  Lookup,
} from 'devextreme-react/data-grid';
import { OrderContext } from '../context';

const CellEditing = () => {
  const { dataSource, columns, renderColumns } = useContext(OrderContext);
  return (
    <DataGrid
      id="gridContainer"
      dataSource={dataSource}
      allowColumnReordering={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
      showBorders={false}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      // columnHidingEnabled={true}
    >
      <ColumnFixing enabled={true} />
      <Column type="buttons" width={110}>
        <Button name="edit" visible={true} />
        <Button name="delete" visible={true} />
        <Button hint="Clone" icon="repeat" visible={true} onClick={() => {}} />
      </Column>
      <Editing mode="popup" allowUpdating={true} />
      {/* <Editing mode="row" useIcons={true} allowUpdating={true} allowDeleting={true} /> */}
      {/* <Editing mode="cell" useIcons={true} allowUpdating={true} allowDeleting={true} /> */}
      {/* <Selection mode="multiple" selectAllMode={'allPages'} showCheckBoxesMode={'onClick'} /> */}
      <Paging defaultPageSize={5} />
      <Pager showPageSizeSelector={false} showInfo={true} />
      {/* <FilterRow visible={true} /> */}
      <Selection mode="multiple" allowSelectAll={true} deferred={true} />
      {/* <RemoteOperations
    filtering={true}
    paging={true}
    sorting={true}
    summary={true}
    grouping={true}
    groupPaging={true}
  /> */}
      {/* <Editing mode="popup" allowUpdating={true} allowDeleting={true} allowAdding={true} /> */}
      {columns.map((item) => renderColumns(item))}
      {/* {children} */}
    </DataGrid>
  );
};

export default CellEditing;
