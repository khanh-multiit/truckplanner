import React from 'react';
import 'devextreme/data/odata/store';
import { Column, Lookup } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

const ColumnRender = ({ data, ...rest }) => {
  // console.log(data);
  // const itemRender = (data) => {
  //   if (data != null) {
  //     return (
  //       <div>
  //         <span className="middle">{data.name}</span>
  //       </div>
  //     );
  //   } else {
  //     return <span>(All)</span>;
  //   }
  // };

  // const statusEditorRender = (cell) => {
  //   return (
  //     <SelectBox defaultValue={cell.value} {...cell.column.lookup} onValueChanged={() => {}} itemRender={itemRender} />
  //   );
  // };

  // if (data.header) {
  //   return (
  //     <Column caption={data.caption} key={data.caption}>
  //       {data?.children.map((it) => (
  //         <Column dataField={it.dataField} customizeText={it.customizeText} key={it.dataField} fixed={it.fixing} />
  //       ))}
  //     </Column>
  //   );
  // }

  // if (data.dataField === 'status') {
  //   return (
  //     <Column
  //       dataField={data.dataField}
  //       customizeText={data.customizeText}
  //       key={data.dataField}
  //       fixed={data.fixing}
  //       editCellRender={statusEditorRender}
  //     >
  //       <Lookup
  //         dataSource={[
  //           {
  //             id: 'UNPLANNED',
  //             name: 'UNPLANNED',
  //           },
  //           {
  //             id: 'COMPLETED',
  //             name: 'COMPLETED',
  //           },
  //           {
  //             id: 'DELIVERED',
  //             name: 'DELIVERED',
  //           },
  //         ]}
  //         displayExpr="name"
  //         valueExpr="id"
  //       />
  //     </Column>
  //   );
  // }
  return (
    <Column dataField={data.dataField} customizeText={data.customizeText} key={data.dataField} fixed={data.fixing} />
  );
};

export default ColumnRender;
