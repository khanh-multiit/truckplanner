export const columns = [
  {
    dataField: 'id',
    fixing: true,
  },
  {
    dataField: 'order_number',
  },
  {
    dataField: 'order_type',
    customizeText: (cell) => cell?.value || 'Transport',
  },
  {
    dataField: 'Customer',
    customizeText: (cell) => cell?.value?.name,
  },
  {
    dataField: 'status',
  },
  {
    header: true,
    caption: 'To',
    children: [
      {
        dataField: 'to_address1',
      },
      {
        dataField: 'to_city',
      },
      {
        dataField: 'to_country',
      },
      {
        dataField: 'to_zipcode',
      },
    ],
  },
  {
    header: true,
    caption: 'From',
    children: [
      {
        dataField: 'from_address1',
      },
      {
        dataField: 'from_city',
      },
      {
        dataField: 'from_country',
      },
      {
        dataField: 'from_zipcode',
      },
    ],
  },
  {
    dataField: 'pickup_date',
  },
];
