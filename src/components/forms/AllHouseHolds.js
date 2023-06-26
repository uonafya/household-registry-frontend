import * as React from 'react';
import { DataGrid}from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

export default function AllHouseHolds() {
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
    
        rows={rows} columns={columns}
        onCellDoubleClick={handleRowDoubleClick}
      />

      <Dialog open={open} onClose={handleClose}>
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
      </Dialog>
    </div>
  );
}
