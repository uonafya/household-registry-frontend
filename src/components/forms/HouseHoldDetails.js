import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
    
     
     <Box sx={{ width: '100%',textAlign: 'center'  }}>
        <Typography sx={{ mt: 2, mb: 1 }}>
           <b>Household Details</b>
          </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        <Form>
          <div>
            <label htmlFor="household_name">Household Name:</label>
            <Field type="text" id="household_name" name="household_name" />
            <ErrorMessage name="household_name" component="div" className="error-message" />
          </div>
          <p/>
          <div>
            <label htmlFor="household_identifier">Household Identifier:</label>
            <Field type="text" id="household_identifier" name="household_identifier" />
            <ErrorMessage name="household_identifier" component="div" className="error-message" />
          </div>
          <p/>
          <div>
            <label htmlFor="household_type_name">Household Type:</label>
            <Field as="select" id="household_type_name" name="household_type.household_type_name">
              <option value="">Select Household Type</option>
              <option value="family">Family</option>
              <option value="single_person_household">Single Person Household</option>
            </Field>
            <ErrorMessage name="household_type.household_type_name" component="div" className="error-message" />
          </div>
          <p/>
        </Form>
      </Formik>
      </Box>
  );
}

export default HouseHoldDetails;
