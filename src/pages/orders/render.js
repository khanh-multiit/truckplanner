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
  RequiredRule,
  PatternRule,
  NumericRule,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

const itemRender = (data) => {
  if (data != null) {
    return (
      <div>
        <span className="middle">{data.name}</span>
      </div>
    );
  } else {
    return <span>(All)</span>;
  }
};

const statusEditorRender = (cell) => {
  return (
    <SelectBox defaultValue={cell.value} {...cell.column.lookup} onValueChanged={() => {}} itemRender={itemRender} />
  );
};

export const renderCaption = (item) => {
  if (item.header) {
    return (
      <Column caption={item.caption} key={item.caption}>
        {item?.children.map((it) => renderColumns(it))}
      </Column>
    );
  }

  return renderColumns(item);
};

export const renderColumns = (item) => {
  if (item.dataField === 'status') {
    return (
      <Column
        dataField={item.dataField}
        customizeText={item.customizeText}
        key={item.dataField}
        fixed={item.fixing}
        editCellRender={statusEditorRender}
      >
        <Lookup
          dataSource={[
            {
              id: 'UNPLANNED',
              name: 'UNPLANNED',
            },
            {
              id: 'COMPLETED',
              name: 'COMPLETED',
            },
            {
              id: 'DELIVERED',
              name: 'DELIVERED',
            },
          ]}
          displayExpr="name"
          valueExpr="id"
        />
      </Column>
    );
  }

  if (item.dataField === 'from_zipcode') {
    return (
      <Column dataField={item.dataField} key={item.dataField}>
        <NumericRule />
      </Column>
    );
  }

  return (
    <Column dataField={item.dataField} customizeText={item.customizeText} key={item.dataField} fixed={item.fixing} />
  );
};
