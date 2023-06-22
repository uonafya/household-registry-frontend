import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Card,TextField, Typography, Box, Grid} from '@mui/material'

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
    <Card style={{padding:"5% 20% 5% 20%"}}>
      <Box sx={{ width: '100%',textAlign: 'center'  }}>
        <Typography sx={{ mt: 2, mb: 1 }}>
           <b>Household Address</b>
          </Typography>
     <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label htmlFor="household_address.area_type_id">Area Type ID:</label>
                <Field type="number" id="household_address.area_type_id" name="household_address.area_type_id" />
                <ErrorMessage name="household_address.area_type_id" component="div" className="text-red-500" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="household_address.area_name">Area Name:</label>
                <Field type="text" id="household_address.area_name" name="household_address.area_name" />
                <ErrorMessage name="household_address.area_name" component="div" className="text-red-500" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="household_address.area_code">Area Code:</label>
                <Field type="text" id="household_address.area_code" name="household_address.area_code" />
                <ErrorMessage name="household_address.area_code" component="div" className="text-red-500" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="household_address.parent_area_id">Parent Area ID:</label>
                <Field type="text" id="household_address.parent_area_id" name="household_address.parent_area_id" />
                <ErrorMessage name="household_address.parent_area_id" component="div" className="text-red-500" />
              </Grid>
            </Grid>

        </Form>
      </Formik>
     
     </Box>
    </Card>
     
      
  );
}

export default HouseHoldAddress;
