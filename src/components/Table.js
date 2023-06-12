import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Username',
    headerName: 'User Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    type: 'email',
    width: 110,
    editable: true,
  },
  {
    field: 'Group',
    headerName: 'Group name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.Group || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'Status',
    headerName: 'Status',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'CreatedOn',
    headerName: 'Created On',
    type: 'string',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, Name: 'Snow', Username: 'Jon', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022'},
  { id: 2, Name: 'User2', Username: 'User2name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  { id: 3, Name: 'User3', Username: 'User3name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  { id: 4, Name: 'User4', Username: 'User4name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  { id: 5, Name: 'User5', Username: 'User5name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  { id: 6, Name: 'User6', Username: 'User6name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
 
];

export default function DataGridTable() {
  return (
    <Box sx={{ height: 'fit-content', width: '100%', mt:5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
        // onRowClick={handleEvent} {...other}
      />
    </Box>
  );
}