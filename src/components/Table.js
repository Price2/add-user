import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useMovieData } from '@mui/x-data-grid-generator';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'full_name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'user_name',
    headerName: 'User Name',
    width: 130,
    editable: false,
  },
  {
    field: 'e_mail',
    headerName: 'Email Address',
    type: 'email',
    width: 140,
    editable: false,
  },
  {
    field: 'group',
    headerName: 'Group name',
    type: 'string',
    sortable: false,
    width: 130,
  },
  {
    field: 'assignprofile',
    headerName: 'Status',
    type: 'string',
    width: 110,
    editable: false,
  },
  {
    field: 'CreatedOn',
    headerName: 'Created On',
    type: 'string',
    width: 220,
    editable: false,
    valueGetter: (params) => new Date().toLocaleString() + ""
  },
];


export default function DataGridTable({ data, edit }) {

  const handleRowClick = (params) => {
    console.log('Movie' + JSON.stringify(params.row) + ' clicked');
  };
  console.log("data received: ", data)
  return (
    <Box sx={{ height: 'fit-content', width: '100%', mt: 5 }}>
      <DataGrid
        initialState={{
          columns: {
            columnVisibilityModel: {
              // Hide columns status and traderName, the other columns will remain visible
              id: false,
            },
          },
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        rows={data}
        columns={columns}
        getRowId={(row) => row.full_name + row.user_name}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowClick={edit}
      />
    </Box>
  );
}