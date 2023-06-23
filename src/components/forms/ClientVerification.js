// Client Verification
import { Formik, Field, Form, ErrorMessage} from 'formik';
import axios from 'axios';
import CountryOptions from '../options/CountryOptions';
import Box from '@mui/material/Box';
import {Typography, MenuItem,InputLabel,Grid,Select,FormControlLabel,NativeSelect,TextField}from '@mui/material';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function ClientVerification({showForms,setShowForms,setShowFormsisVerified,setIsVerified,clientRegistryData,setClientRegistryData}){
  const initialValues = {
    country: '',
    IdentifierType: '',
    identifierNumber: '',
    selectKenya: 'KE',
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    
    Formik.values.setFieldValue(name, checked ? 'KE' : ''); // Update selectKenya value based on checkbox state
  };

  console.log(localStorage.getItem('token'));

    //sample edpoint:  https://httpstat.us/200
    // test edpoint: https://afyakenyaapi.health.go.ke/partners/registry/search/KE
    
  const searchEndpoint = 'https://dhpstagingapi.health.go.ke/partners/registry/search';

  const handleSubmit = async (values) => {
    const searchData = {
      selectKenya: values.selectKenya,
      IdentifierType: values.IdentifierType,
      identifierNumber: values.identifierNumber,
    };
    console.log("here 2");

    try {
      console.log(values);
      // Make the request to search for the identifierNumber

      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      console.log(token);

      // https://afyakenyaapi.health.go.ke/partners/registry/search/KE/birth-certificate/35541176
      const response = await axios.get(`${searchEndpoint}/${searchData.selectKenya}/${searchData.IdentifierType}/${searchData.identifierNumber}`, {
        headers: {
          Authorization: `OAuth2.0 ${token}`,
        },
      });
      // Handle the response
      console.log(response.data);

      // Check if the status code is 200
    if (response.status === 200) {
      console.log("Request successful");
      setIsVerified(true);
      setShowForms(true);
      setClientRegistryData(response.data);
    } else {
      console.log("Request failed with status code: " + response.status);
    }
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.IdentifierType) {
      errors.IdentifierType = 'Identifier Type is required';
    }

    if (!values.identifierNumber) {
      errors.identifierNumber = 'Identifier Number is required';
    }

    return errors;
  };

  return (
    <React.Fragment>
      <fieldset style={{ width: '90%' }}>
        <legend>Client Verification</legend>
           <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
          <InputLabel id="IdentifierType">Identifier Type</InputLabel>
          <NativeSelect
              required
              labelId="IdentifierType"
              id="IdentifierType"
              value={initialValues.IdentifierType}
              label="IdentifierType"
              onChange={handleChange}
            >
              <option value=''>Select Identifier</option>
              <option value='birth_certificate'>Birth certificate</option>
              <option value='national-id'>National Id</option>
              <option value='passport'>Passport</option>
            </NativeSelect>
            </Grid>
      

          <Grid item xs={12} sm={6}>
              <TextField
                required
                id="identifierNumber"
                name="identifierNumber"
                label="identifierNumber"
                fullWidth
                autoComplete="identifier Number"
                variant="standard"
              />
            </Grid>
        
          <Grid item xs={12} sm={6}>
          <CountryOptions/>
          </Grid>

          <Grid item xs={12} sm={6}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Kenya" />
          </Grid>
          
        </Grid>
        </fieldset>
      </React.Fragment>
          
  );
}

export default ClientVerification;
