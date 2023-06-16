import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function NextOfKinDetails({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    name: 'Jane Doe',
    relationship: 'Spouse',
    residence: 'Los Angeles',
    contact: {
      primary_phone: '5555555555',
      secondary_phone: '1111111111',
      email: 'jane@example.com'
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
      <fieldset>
        <legend>Client verification with Client Registry</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
    <           Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  <Form>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />

                    <label htmlFor="relationship">Relationship</label>
                    <Field type="text" id="relationship" name="relationship" />
                    <ErrorMessage name="relationship" component="div" />

                    <label htmlFor="residence">Residence</label>
                    <Field type="text" id="residence" name="residence" />
                    <ErrorMessage name="residence" component="div" />

                    <label htmlFor="primary_phone">Primary Phone</label>
                    <Field type="text" id="primary_phone" name="contact.primary_phone" />
                    <ErrorMessage name="contact.primary_phone" component="div" />

                    <label htmlFor="secondary_phone">Secondary Phone</label>
                    <Field type="text" id="secondary_phone" name="contact.secondary_phone" />
                    <ErrorMessage name="contact.secondary_phone" component="div" />

                    <label htmlFor="email">Email</label>
                    <Field type="text" id="email" name="contact.email" />
                    <ErrorMessage name="contact.email" component="div" />

                    <button type="submit">Submit</button>
                  </Form>
                </Formik>
      </div>
      </div>
      </fieldset>
      </div>

  );
}

export default NextOfKinDetails;
