// Client Verification
import { Formik, Field, Form, ErrorMessage,Checkbox } from 'formik';
import axios from 'axios';
import CountryOptions from '../options/CountryOptions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ClientVerification({showForms,setShowForms,setShowFormsisVerified,setIsVerified,clientRegistryData,setClientRegistryData}){
  const initialValues = {
    country: '',
    IdentifierType: '',
    identifierNumber: '',
    selectKenya: 'KE',
  };

  const handleChangeKenya = (event) => {
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
    <Box sx={{ width: '100%',textAlign: 'center'  }}>
        <Typography sx={{ mt: 2, mb: 1 }}>
           <b>Client Verification</b>
          </Typography>
      <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label htmlFor="IdentifierType">Identifier Type:</label>
            <p/>
            <Field as="select" id="IdentifierType" name="IdentifierType">
              <option value="">Select an option</option>
              <option value="birth_certificate">Birth Certificate</option>
              <option value="national-id">ID Number</option>
              <option value="passport">Passport</option>
            </Field>
            <ErrorMessage name="IdentifierType" component="div" className="text-red-500" />
            <br />
          </div>
          <p />
          <div className="mb-4">
            <label htmlFor="identifierNumber">Identifier Number:</label>
            <p/>
            <Field type="text" id="identifierNumber" name="identifierNumber" />
            <ErrorMessage name="identifierNumber" component="div" className="text-red-500" />
            <br />
          </div>

          <p/>
          <CountryOptions/>
  
            <label>
              <Field type="checkbox" 
              name="selectKenya" 
              id="selectKenya" 
              onChange={(event) => handleChangeKenya(event)}/>
              select Kenya
            </label>
          
      
          <p/>
          <button type="submit">Submit</button>
          <p />
          <button type="reset">Reset</button>
        </Form>
      </Formik>
    </Box>

  );
}

export default ClientVerification;
