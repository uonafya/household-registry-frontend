import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function ContactForm() {
  const initialValues = {
    primary_phone: '1234567890',
    secondary_phone: '9876543210',
    email: 'john@example.com'
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation rules if needed

    return errors;
  };

  return (
    <div>
      <fieldset style={{ width: '75%' }}>
        <legend>Person Contacts</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        <Form>
          <div>
            <label htmlFor="primary_phone">Primary Phone:</label>
            <Field type="text" id="primary_phone" name="primary_phone" />
            <ErrorMessage name="primary_phone" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="secondary_phone">Secondary Phone:</label>
            <Field type="text" id="secondary_phone" name="secondary_phone" />
            <ErrorMessage name="secondary_phone" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

        </Form>
      </Formik>
      </div>
        </div>
      </fieldset>
    </div>
  );
}

export default ContactForm;
