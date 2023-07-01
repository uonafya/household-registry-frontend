import { Formik, Form, Field } from 'formik';
import { Grid} from '@mui/material';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchFormValues } from '../../stateManagement/actions/householdFormAction';

const initialValues = {
  householdName: '',
  householdType: '',
};

const HouseHoldDetails = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch the data from Redux store
  const formValues = dispatch(fetchFormValues());
  }, [dispatch]);

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
    console.log("Redux");
   
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field
              type="text"
              name="householdName"
              required
              id="householdName"
              label="Household Name"
              
              autoComplete="household name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
              type="text"
              name="householdType"
              required
              id="householdType"
              label="Household Type"
              
              autoComplete="household type"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Field
              type="text"
              name="householdType"
              required
              id="householdType"
              label="Household Type"
              
              autoComplete="household type"
              variant="outlined"
            />
          </Grid>

          {/* Add more fields */}
        </Grid>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default HouseHoldDetails;
