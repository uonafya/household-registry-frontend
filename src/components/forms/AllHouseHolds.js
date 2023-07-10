import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function AllHouseHolds(props) {
  const [households, setHouseholds] = useState([]);

  useEffect(() => {

    console.log("rendered oaky")
    // Fetch data from the API
    axios
      .get('http://127.0.0.1:8000/api/households?is_voided=0')
      .then((response) => {
        setHouseholds(response.data.households);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'household_name', headerName: 'Household Name', width: 200 },
    { field: 'household_identifier', headerName: 'Household ID', width: 150 },
    { field: 'household_type_id', headerName: 'Household Type ID', width: 150 },
    { field: 'household_address_id', headerName: 'Household Address ID', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
    { field: 'deleted_at', headerName: 'Deleted At', width: 150 },
    { field: 'is_household_approved', headerName: 'Is Household Approved', width: 180 },
    { field: 'is_muted', headerName: 'Is Muted', width: 120 },
    { field: 'is_voided', headerName: 'Is Voided', width: 120 },
    { field: 'household_approved_by_id', headerName: 'Household Approved By ID', width: 200 },
    { field: 'household_registered_by_id', headerName: 'Household Registered By ID', width: 200 },
  ];
  const handleRowDoubleClick = (params) => {
    const selectedRowData = params.row;
    props.setHouseholdSummary(selectedRowData);
    props.setHouseholdSelected(true);
    console.log(selectedRowData);
  
  };

  return (
    <div style={{ height: 'auto', width: '100%', backgroundColor: '#eaeff1' }}>
      <DataGrid
        sx={{ bgcolor: '#eaeff1' }}
        autoHeight
        rows={households}
        columns={columns}
        onCellDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
}
