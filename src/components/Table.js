import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useMovieData } from '@mui/x-data-grid-generator';

const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
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

const rows = [
  // { id: 1, Name: 'Snow', Username: 'Jon', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022'},
  // { id: 2, Name: 'User2', Username: 'User2name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  // { id: 3, Name: 'User3', Username: 'User3name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  // { id: 4, Name: 'User4', Username: 'User4name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  // { id: 5, Name: 'User5', Username: 'User5name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
  // { id: 6, Name: 'User6', Username: 'User6name', email: 'john@gmail.com' , Group:'office', Status:'Inactive', CreatedOn:'11/03/2022' },
 
];

export default function DataGridTable({data, edit}) {

  const handleRowClick = (params) => {
    console.log('Movie' +JSON.stringify(params.row)+' clicked');
  };
  console.log("data received: ", data)
  return (
    <Box sx={{ height: 'fit-content', width: '100%', mt:5 }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) =>  row.full_name + row.user_name}
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
        onRowClick={edit}
      />
    </Box>
  );
}