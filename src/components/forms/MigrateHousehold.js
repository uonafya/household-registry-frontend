import React from 'react';
import { Typography, Grid, TextField, NativeSelect, InputLabel, FormControl, MenuItem } from '@mui/material';

const MigrateHousehold = () => {
  const [householdId, setHouseholdId] = React.useState('');
  const [householdName, setHouseholdName] = React.useState('');
  const [oldResidenceId, setOldResidenceId] = React.useState('');
  const [newAreaName, setNewAreaName] = React.useState('');
  const [newAreaCode, setNewAreaCode] = React.useState('');
  const [reasonForMigration, setReasonForMigration] = React.useState('');
  const [initiatedByChvId, setInitiatedByChvId] = React.useState('');
  const [dateOfMigration, setDateOfMigration] = React.useState('');

  const handleHouseholdIdChange = (event) => {
    setHouseholdId(event.target.value);
  };

  const handleHouseholdNameChange = (event) => {
    setHouseholdName(event.target.value);
  };

  const handleOldResidenceIdChange = (event) => {
    setOldResidenceId(event.target.value);
  };

  const handleNewAreaNameChange = (event) => {
    setNewAreaName(event.target.value);
  };

  const handleNewAreaCodeChange = (event) => {
    setNewAreaCode(event.target.value);
  };

  const handleReasonForMigrationChange = (event) => {
    setReasonForMigration(event.target.value);
  };

  const handleInitiatedByChvIdChange = (event) => {
    setInitiatedByChvId(event.target.value);
  };

  const handleDateOfMigrationChange = (event) => {
    setDateOfMigration(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Migration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="householdId"
            name="householdId"
            label="Household ID"
            fullWidth
            autoComplete="household ID"
            variant="outlined"
            value={householdId}
            onChange={handleHouseholdIdChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="householdName"
            name="householdName"
            label="Household Name"
            fullWidth
            autoComplete="household name"
            variant="outlined"
            value={householdName}
            onChange={handleHouseholdNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="oldResidenceId"
            name="oldResidenceId"
            label="Old Residence ID"
            fullWidth
            autoComplete="old residence ID"
            variant="outlined"
            value={oldResidenceId}
            onChange={handleOldResidenceIdChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="newAreaName"
            name="newAreaName"
            label="New Area Name"
            fullWidth
            autoComplete="new area name"
            variant="outlined"
            value={newAreaName}
            onChange={handleNewAreaNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="newAreaCode"
            name="newAreaCode"
            label="New Area Code"
            fullWidth
            autoComplete="new area code"
            variant="outlined"
            value={newAreaCode}
            onChange={handleNewAreaCodeChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="reasonForMigration-label">Reason for Migration</InputLabel>
            <NativeSelect
              id="reasonForMigration"
              name="reasonForMigration"
              value={reasonForMigration}
              onChange={handleReasonForMigrationChange}
              labelId="reasonForMigration-label"
            >
              <MenuItem value="">Select a reason</MenuItem>
              <MenuItem value="Relocation test">Relocation test</MenuItem>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="initiatedByChvId"
            name="initiatedByChvId"
            label="Initiated by CHV ID"
            fullWidth
            autoComplete="initiated by CHV ID"
            variant="outlined"
            value={initiatedByChvId}
            onChange={handleInitiatedByChvIdChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfMigration"
            name="dateOfMigration"
            label="Date of Migration"
            fullWidth
            autoComplete="date of migration"
            variant="outlined"
            value={dateOfMigration}
            onChange={handleDateOfMigrationChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MigrateHousehold;
