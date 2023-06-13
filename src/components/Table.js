import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import BlockIcon from '@mui/icons-material/Block';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    field: 'group_user',
    headerName: 'Group name',
    type: 'string',
    sortable: false,
    width: 130,
  },
  {
    field: 'user_profile',
    headerName: 'Status',
    type: 'string',
    width: 110,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Created On',
    type: 'string',
    width: 220,
    editable: false,
  },
];







export default function DataGridTable({ data, edit }) {
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [filter, setFilter] = React.useState(
    {
      search: '',
      username: '',
      dateFrom: '',
      dateTo: ''
    }
  )
  console.log(data)
  console.log("data received: ", data)

  const {search, username, dateFrom, dateTo} = filter
  return (
    <>
      <Paper sx={{ display: 'flex', flexDirection: "column", alignItems: "space-between" }}>
        <Box sx={{ display: 'flex', gap: '15px', margin: "10px" }}>
          <TextField
            placeholder="Search..."
            type="search"
            variant="outlined"
            size="small"
            // onChange=""
            InputProps={{
              style: {
                width: 300
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField size="small" id="outlined-basic" variant="outlined" label="User Name" />

          <FormControl size="small" sx={{ m: 0, minWidth: 120 }}>
            <InputLabel size="small" id="demo-select-small-label">Any</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value=""
              label="Any"
              // onChange=""
            >
              <MenuItem value="" >
                <em>None</em>
              </MenuItem>
              <MenuItem value={'action_1'}>Action 1</MenuItem>
              <MenuItem value={'action_2'}>Action 2</MenuItem>
              <MenuItem value={'action_3'}>Action 3</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ padding: 0 }} components={['DatePicker', 'DatePicker']}>
              <DatePicker
                labelId="demo-select-small-label"
                value={dateFrom}
                // onChange=""
                slotProps={{ textField: { size: 'small', padding: 0, } }}
                style
              />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider size="small" dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ padding: 0 }} size="small" components={['DatePicker', 'DatePicker']}>
              <DatePicker
                value={dateTo}
                // onChange=""
                slotProps={{ textField: { size: 'small' } }}

              />
            </DemoContainer>
          </LocalizationProvider>
          <Link href="#" underline="hover" sx={{ alignSelf: 'center' }}>
            All Filters
          </Link>
        </Box>
        <Box sx={{ m: 1, display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
          <Box sx={{ display: 'flex', gap: "15px", alignItems: "center" }}>
            <Button sx={{ backgroundColor: "lightgray", minWidth: "10px", color: "#51576d" }} size="larger" color="inherit">
              <BlockIcon />
            </Button>
            <Button sx={{ backgroundColor: "lightgray", color: "#51576d", minWidth: "10px" }} size="larger" color="inherit">
              <EditIcon />
            </Button>

            <Button sx={{ backgroundColor: "lightgray", color: "#51576d", minWidth: "10px" }} size="larger" color="inherit">
              <LockIcon />
            </Button>

            <Button variant="contained" sx={{ backgroundColor: "lightgray", color: "#51576d" }}>Assign To Profile</Button>
            <Button variant="contained" sx={{ backgroundColor: "lightgray", color: "#51576d" }}>Assign To Group</Button>

            <Button sx={{ backgroundColor: "lightgray", color: "#51576d", minWidth: "10px" }} size="larger" color="inherit">
              <MoreVertIcon />
            </Button>
            <Link fontWeight='bold' color='#51576d'>
              Unselect All
            </Link>
          </Box>
          <Box>
            <Button sx={{ backgroundColor: "lightgray", color: "#51576d", minWidth: "10px", mr: 3 }} size="larger" color="inherit">
              <DownloadIcon />
            </Button>

          </Box>
        </Box>
      </Paper>


      <Box sx={{ height: 'fit-content' }}>
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
          getRowId={row => row.id}
          pageSizeOptions={[100]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={edit}
        />
      </Box>
    </>
  );
}