import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
    <div>
      <fieldset style={{ width: '75%' }}>
        <legend>Next of Kin Details</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
    <           Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  <Form>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                    <p/>
                    <label htmlFor="relationship">Relationship</label>
                    <Field type="text" id="relationship" name="relationship" />
                    <ErrorMessage name="relationship" component="div" />
                    <p/>
                    <label htmlFor="residence">Residence</label>
                    <Field type="text" id="residence" name="residence" />
                    <ErrorMessage name="residence" component="div" />
                    <p/>
                    <label htmlFor="primary_phone">Primary Phone</label>
                    <Field type="text" id="primary_phone" name="contact.primary_phone" />
                    <ErrorMessage name="contact.primary_phone" component="div" />
                    <p/>
                    <label htmlFor="secondary_phone">Secondary Phone</label>
                    <Field type="text" id="secondary_phone" name="contact.secondary_phone" />
                    <ErrorMessage name="contact.secondary_phone" component="div" />
                    <p/>
                    <label htmlFor="email">Email</label>
                    <Field type="text" id="email" name="contact.email" />
                    <ErrorMessage name="contact.email" component="div" />
                    <p/>
                  </Form>
                </Formik>
      </div>
      </div>
      </fieldset>
      </div>

  );
}

export default NextOfKinDetails;
