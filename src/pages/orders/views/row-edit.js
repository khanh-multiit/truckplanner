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
  const state = {
    allMode: 'allPages',
    checkBoxesMode: 'onClick',
  };
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
      columnHidingEnabled={true}
    >
      <ColumnFixing enabled={true} />
      <Column type="buttons" width={110}>
        <Button name="edit" visible={true} />
        <Button name="delete" visible={true} />
        <Button hint="Clone" icon="repeat" visible={true} onClick={() => {}} />
      </Column>
      <Editing mode="row" useIcons={true} allowUpdating={true} allowDeleting={true} allowAdding={true} />
      <Paging defaultPageSize={5} />
      <Pager showPageSizeSelector={false} showInfo={true} />
      {/* <Selection mode="multiple" selectAllMode={state.allMode} showCheckBoxesMode={state.checkBoxesMode} /> */}
      {columns.map((item) => renderColumns(item))}
    </DataGrid>
  );
};

export default CellEditing;
