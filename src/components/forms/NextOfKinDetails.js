import React from 'react';
import {TextField,Grid} from '@mui/material';

function NextOfKinDetails({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    name: '',
    relationship: '',
    residence: '',
    contact: {
      primary_phone: '',
      secondary_phone: '',
      email: ''
    }
  };

  const handleSubmit = async (values) => {
   
    try {
       // Append form values to householdRegistryData object
          setHouseholdRegistryData(householdRegistryData => ({
            ...householdRegistryData,
            next_of_kin: values
          }));

          console.log(values);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      
        <legend>Next of Kin</legend>
        <Grid container spacing={3}sx ={{width:'100%'}}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="kinName"
              name="nextOfKins[0].name"
              label="Name"
              
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="kinRelationship"
              name="nextOfKins[0].relationship"
              label="Relationship"
              
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="kinResidence"
              name="nextOfKins[0].residence"
              label="Residence"
              
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="kinPrimaryPhone"
              name="nextOfKins[0].contact.primaryPhone"
              label="Primary Phone"
              
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="kinSecondaryPhone"
              name="nextOfKins[0].contact.secondaryPhone"
              label="Secondary Phone"
              
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="kinEmailAddress"
              name="nextOfKins[0].contact.emailAddress"
              label="Email Address"
              
              variant="outlined"
            />
          </Grid>
        </Grid>
    
    </React.Fragment>

  );
}

export default NextOfKinDetails;
