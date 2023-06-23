import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Card,TextField,Paper, Typography, Box, Grid} from '@mui/material';

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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="primaryPhone"
            name="contact.primaryPhone"
            label="Primary Phone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="secondaryPhone"
            name="contact.secondaryPhone"
            label="Secondary Phone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="emailAddress"
            name="contact.emailAddress"
            label="Email Address"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </fieldset>
  </React.Fragment>
  );
}

export default Contact;
