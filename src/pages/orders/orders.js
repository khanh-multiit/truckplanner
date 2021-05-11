import React, { createContext, useEffect, useState } from 'react';
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
import SelectBox from 'devextreme-react/select-box';

import CustomStore from 'devextreme/data/custom_store';
import mock from './mock.json';
import { columns } from './columns';
import './style.css';
import { OrderContext } from './context';
import { CellEditing, MasterView, PopupEditing, RowEditing } from './views';
import { renderCaption } from './render';

const Order = () => {
  const [activeView, setActiveView] = useState('cell');
  const [view, setView] = useState(<CellEditing />);
  const onChangeSelectView = (value) => {
    setActiveView(value.value);
  };

  useEffect(() => {
    switch (activeView) {
      case 'cell':
        setView(<CellEditing />);
        break;
      case 'row':
        setView(<RowEditing />);
        break;
      case 'popup':
        setView(<PopupEditing />);
        break;
      case 'master-view':
        setView(<MasterView />);
        break;
      default:
        break;
    }
  }, [activeView]);

  return (
    <OrderContext.Provider
      value={{
        dataSource,
        columns,
        renderColumns: renderCaption,
      }}
    >
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <SelectBox
            items={viewOptions}
            valueExpr="value"
            displayExpr="text"
            value={activeView}
            onValueChanged={onChangeSelectView}
          />
          <div style={{ marginTop: '30px' }}>{view}</div>
        </div>
      </div>
    </OrderContext.Provider>
  );
};

const dataSource = new CustomStore({
  key: 'id',
  loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
  load: async () => {
    const request = await fetch(`/api/bookings/ordersextjs`);
    const data = await request.text();
    console.log(data);
    return data;
    // .then((response) => response.json())
    // .then((data) => {
    //   return {
    //     data: data.data,
    //     totalCount: data.totalCount,
    //     summary: data.summary,
    //     groupCount: data.groupCount,
    //   };
    // })
    // .catch(() => {
    //   throw 'Data Loading Error';
    // });
  },
  update: async (key, values) => {
    console.log(key, values);
  },
  insert: (values) => {
    console.log(values);
  },
});

const viewOptions = [
  {
    text: 'Cell Editing',
    value: 'cell',
  },
  {
    text: 'Row Editing',
    value: 'row',
  },
  {
    text: 'Popup Editing',
    value: 'popup',
  },
  {
    text: 'Expand View',
    value: 'master-view',
  },
];

export default Order;
