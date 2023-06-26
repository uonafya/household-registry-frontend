import React from 'react';
import { Typography, Grid, TextField, NativeSelect, InputLabel, FormControl, MenuItem } from '@mui/material';

const VoidHousehold = () => {
  const [reasonForVoiding, setReasonForVoiding] = React.useState('');

  const handleReasonForVoidingChange = (event) => {
    setReasonForVoiding(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Household Voiding
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
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="reasonForVoiding-label">Reason for Voiding</InputLabel>
            <NativeSelect
              id="reasonForVoiding"
              name="reasonForVoiding"
              value={reasonForVoiding}
              onChange={handleReasonForVoidingChange}
              labelId="reasonForVoiding-label"
            >
              <option value="">Select a reason</option>
              <option value="Incase of a duplicate, Merging the records can be used as a corrective measure after validation.">
                Incase of a duplicate, Merging the records can be used as a corrective measure after validation
              </option>
              <option value="Incase of errors of omission and commission, EDIT can be used to correct that.">
                Incase of errors of omission and commission, EDIT can be used to correct that
              </option>
              <option value="Household registered with clerical errors to be validated as non-existing then VOID">
                Household registered with clerical errors to be validated as non-existing then VOID
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VoidHousehold;
