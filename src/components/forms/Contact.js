import React from 'react';
import {TextField,Grid} from '@mui/material';

function Contact() {
  const initialValues = {
    primary_phone: '1234567890',
    secondary_phone: '9876543210',
    email: 'john@example.com'
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation rules if needed

    return errors;
  };

  return (
    <React.Fragment>
    <fieldset style={{ width: '90%' }}>
      <legend>Contact Information</legend>
      <Grid container spacing={3}>

      <div className="form-row">
      <div className="input-group">
          <TextField
            required
            id="primaryPhone"
            name="contact.primaryPhone"
            label="Primary Phone"
            
            variant="outlined"
          />
        
        </div>
        </div>
        <Grid item xs={12} sm={6}>
          <TextField
            id="secondaryPhone"
            name="contact.secondaryPhone"
            label="Secondary Phone"
            
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="emailAddress"
            name="contact.emailAddress"
            label="Email Address"
            
            variant="outlined"
          />
        </Grid>
      </Grid>
    </fieldset>
  </React.Fragment>
  );
}

export default Contact;
