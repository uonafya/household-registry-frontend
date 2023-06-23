import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {TextField,Button,MenuItem,FormControl,Checkbox,NativeSelect,InputLabel,Select,FormControlLabel,Grid} from '@mui/material';

function Demographics({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    country: ' ',
    countyOfBirth: ' ',
    residence: {
      county: ' ',
      sub_county: '',
      ward: '',
      village: '',
    },
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (values) => {

    try {
       // Append form values to householdRegistryData object
          setHouseholdRegistryData(householdRegistryData => ({
            ...householdRegistryData,
            values
          }));

          console.log(values);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation logic if needed

    return errors;
  };

  return (
    <React.Fragment>
     
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="clientNumber"
              name="clientNumber"
              label="Client Number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="middleName"
              name="middleName"
              label="Middle Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              fullWidth
              type="date"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="maritalStatus">Marital Status</InputLabel>
              <NativeSelect
                id="maritalStatus"
                name="maritalStatus"
                label="Marital Status"
                fullWidth
                variant="standard"
              >
                <option value="Married Polygamous">Married Polygamous</option>
                <option value="Married Monogamous">Married Monogamous</option>
                <option value="Single">Single</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <NativeSelect
                id="gender"
                name="gender"
                label="Gender"
                fullWidth
                variant="standard"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="occupation">Occupation</InputLabel>
              <NativeSelect
                id="occupation"
                name="occupation"
                label="Occupation"
                fullWidth
                variant="standard"
              >
                <option value="1. GOVERNMENT EMPLOYEE">1. GOVERNMENT EMPLOYEE</option>
                <option value="2. NGO EMPLOYEE">2. NGO EMPLOYEE</option>
                <option value="3. PRIVATE SECTOR EMPLOYEE">3. PRIVATE SECTOR EMPLOYEE</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="religion">Religion</InputLabel>
              <NativeSelect
                id="religion"
                name="religion"
                label="Religion"
                fullWidth
                variant="standard"
              >
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="educationLevel">Education Level</InputLabel>
              <NativeSelect
                id="educationLevel"
                name="educationLevel"
                label="Education Level"
                fullWidth
                variant="standard"
              >
                <option value="Secondary">Secondary</option>
                <option value="Tertiary">Tertiary</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="country">Country</InputLabel>
              <NativeSelect
                id="country"
                name="country"
                label="Country"
                fullWidth
                variant="standard"
              >
                <option value="KE">Kenya</option>
                <option value="US">United States</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required>
              <InputLabel htmlFor="countyOfBirth">County of Birth</InputLabel>
              <NativeSelect
                id="countyOfBirth"
                name="countyOfBirth"
                label="County of Birth"
                fullWidth
                variant="standard"
              >
                <option value="001">County 1</option>
                <option value="002">County 2</option>
                {/* Add more options here */}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Is Alive"
              name="isAlive"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="originFacilityKmflCode"
              name="originFacilityKmflCode"
              label="Origin Facility Kmfl Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox />}
              label="Is on ART"
              name="isOnART"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nascopCCCNumber"
              name="nascopCCCNumber"
              label="Nascop CCC Number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <fieldset>
              <legend>Residence</legend>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl required>
                    <InputLabel id="county-label">County</InputLabel>
                    <Select
                      labelId="county-label"
                      id="county"
                      name="residence.county"
                      label="County"
                      fullWidth
                      variant="standard"
                    >
                      <MenuItem value="001">County 1</MenuItem>
                      <MenuItem value="002">County 2</MenuItem>
                      {/* Add more options here */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="subCounty"
                    name="residence.subCounty"
                    label="Sub County"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="ward"
                    name="residence.ward"
                    label="Ward"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="village"
                    name="residence.village"
                    label="Village"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="landMark"
                    name="residence.landMark"
                    label="Landmark"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="address"
                    name="residence.address"
                    label="Address"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </fieldset>
          </Grid>
        </Grid>
    
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </React.Fragment>
  );
}

export default Demographics;
