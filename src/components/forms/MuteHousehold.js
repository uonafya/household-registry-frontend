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
        
        <div class="form-container">
            <div className="form-row">
              <div className="input-group">
                <label>Household ID *</label>
                <input
                  type="text"
                  id="householdId"
                  name="householdId"
                  autoComplete="household ID"
                />
              </div>
            </div>
          
          
            <div className="form-row">
              <div className="input-group">
                <label>Reason for Muting *</label>
                <select
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
                </select>
              </div>
            </div>
          </div>
        

    </React.Fragment>
  );
};

export default MuteHousehold;
