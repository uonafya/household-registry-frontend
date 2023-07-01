import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Card,TextField,Paper, Typography, Box, Grid} from '@mui/material';
import React from 'react';

function HouseHoldAddress() {
  const initialValues = {
    household_address: {
      area_type_id: 1,
      area_name: 'Example Area',
      area_code: '123456',
      parent_area_id: null,
    },
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation logic if needed

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
            id="county"
            name="county"
            label="County"
            
            autoComplete="county of residence"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="subCounty"
            name="subCounty"
            label="sub County"
            
            autoComplete="sub county of residence"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="constituency"
            name="constituency"
            label="Constituency"
            
            autoComplete="constituency of residence"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ward"
            name="ward"
            label="Ward"
            
            autoComplete="Ward of residence"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="village"
            name="village"
            label="Village"
            
            autoComplete="Village of residence"
            variant="outlined"
          />
        </Grid>
            </Grid>
    </React.Fragment>
    
      
  );
}

export default HouseHoldAddress;


