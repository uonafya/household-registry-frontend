import * as React from 'react';
import { DataGrid}from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { Button, AppBar, Toolbar, IconButton, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HouseholdOperations from './HouseholdOperations';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AllHouseHolds() {
  const { data } = {
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  };


    const rows = [];

for (let id = 1; id <= 20; id++) {
  const householdId = generateRandomId();
  const residenceId = generateRandomId();
  const householdName = `Household ${id}`;
  const householdHead = generateRandomName();

  rows.push({ id, householdName, householdId, residenceId, householdHead });
}

function generateRandomId() {
  const parts = [];

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);
    parts.push(randomNumber);
  }

  const formattedId = parts.join('/');

  return formattedId;
}

function generateRandomName() {
  const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Wilson'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

      
      const columns = [
        { field: 'householdName', headerName: 'Household Name', width: 200 },
        { field: 'householdId', headerName: 'Household ID', width: 150 },
        { field: 'residenceId', headerName: 'Residence ID', width: 150 },
        { field: 'householdHead', headerName: 'Household Head', width: 200 },
      ];
      
      

  const [selectedRowData, setSelectedRowData] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleRowDoubleClick = (params) => {
    setSelectedRowData(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: 400, width: '100%',backgroundColor:'#eaeff1' }}>
      <DataGrid
        sx={{bgcolor: '#eaeff1'}}
        autoHeight {...data} 
        rows={rows} columns={columns}
        onCellDoubleClick={handleRowDoubleClick}
      />

      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Row Data</DialogTitle>
        <DialogContent>
          {selectedRowData && (
            <>
              {Object.entries(selectedRowData).map(([key, value]) => (
                <Typography key={key}>
                  {`${key}: ${value}`}
                </Typography>
              ))}
            </>
          )}
        </DialogContent>
      </Dialog> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Household 234/23/keph/678/56
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Row Data</DialogTitle>


        <DialogContent>
          {selectedRowData && (
            <>
              {Object.entries(selectedRowData).map(([key, value]) => (
                <Typography key={key}>
                  {`${key}: ${value}`}
                </Typography>
              ))}
            </>
          )}
          <p/>
          <p/>
          <HouseholdOperations/>
        </DialogContent>
      
      </Dialog>
    </div>
  );
}
