import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import {TextField, Typography, Grid} from '@mui/material';
import React from 'react';

function HouseHoldDetails() {
  const initialValues = {
    household_name: '',
    household_identifier: '',
    household_type: {
      household_type_name: ''
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      // Make the request to submit the form data
      const response = await axios.post('https://example.com/api/households', values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.household_name) {
      errors.household_name = 'Household name is required';
    }

    if (!values.household_identifier) {
      errors.household_identifier = 'Household identifier is required';
    }

    if (!values.household_type.household_type_name) {
      errors.household_type = 'Household type is required';
    }

    return errors;
  };

  return (
    
     
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Household address
    </Typography>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
    <TextField
            required
            id="householdName"
            name="householdName"
            label="Household Name"
            fullWidth
            autoComplete="household name"
            variant="standard"
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
            variant="standard"
          />
    </Grid>

    <Grid item xs={12} sm={6}>
    <TextField
            required
            id="householdType"
            name="householdType"
            label="Household Type"
            fullWidth
            autoComplete="household type"
            variant="standard"
          />
    </Grid>
    
    </Grid>
    </React.Fragment>
  );
}

export default HouseHoldDetails;
