import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function IdentificationForm({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    identification_type: 'Passport',
    identification_number: 'ABC123XYZ',
  };

  const handleSubmit = async (values) => {

    try {
       // Append form values to householdRegistryData object
          setHouseholdRegistryData(householdRegistryData => ({
            ...householdRegistryData,
            identification: values
          }));

          console.log(values);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  

  return (
    <div>
      <fieldset>
        <legend>Client verification with Client Registry</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="identification_type">Identification Type</label>
          <Field type="text" id="identification_type" name="identification_type" />
          <ErrorMessage name="identification_type" component="div" />
        </div>

        <div>
          <label htmlFor="identification_number">Identification Number</label>
          <Field type="text" id="identification_number" name="identification_number" />
          <ErrorMessage name="identification_number" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
      </div>
      </fieldset>
      </div>
  );
}

export default IdentificationForm;
