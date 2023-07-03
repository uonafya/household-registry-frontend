import React from 'react';
import { Typography } from '@mui/material';

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
            <label>Reason for Voiding *</label>
            <select
              id="reasonForVoiding"
              name="reasonForVoiding"
              value={reasonForVoiding}
              onChange={handleReasonForVoidingChange}
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
            </select>
          </div>
        </div>
      </div>


    </React.Fragment>
  );
};

export default VoidHousehold;
