import React from 'react';
import { Typography, Grid, TextField, NativeSelect, InputLabel, FormControl, MenuItem } from '@mui/material';

const MuteHousehold = () => {
  const [reasonForMuting, setReasonForMuting] = React.useState('');

  const handleReasonForMutingChange = (event) => {
    setReasonForMuting(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Muting
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="householdId"
            name="householdId"
            label="Household ID"
            
            autoComplete="household ID"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl  variant="outlined" required>
            <InputLabel id="reasonForMuting-label">Reason for Muting</InputLabel>
            <NativeSelect
              id="reasonForMuting"
              name="reasonForMuting"
              value={reasonForMuting}
              onChange={handleReasonForMutingChange}
              
            >
              <option value="">Select a reason</option>
              <option value="An entire household moves to a new geographical area/locality.">
                An entire household moves to a new geographical area/locality
              </option>
              <option value="All members die.">All members die</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MuteHousehold;
