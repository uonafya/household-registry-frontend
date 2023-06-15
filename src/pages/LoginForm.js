import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = btoa(`${values.username}:${values.password}`);
      const response = await axios.post(
        'https://dhpidentitystagingapi.health.go.ke/connect/token',
        `grant_type=client_credentials&scope=DHP.Gateway%20DHP.Partners`,
        {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      const { access_token } = response.data;

      // Store the token in local storage or any other preferred storage mechanism
      localStorage.setItem('token', access_token);
      console.log("Username and password:"+values.username + "passssword..."+values.password)

      // Perform any other actions with the token, such as redirecting to a protected route
    } catch (error) {
      console.log('Login error:', error);
    }

    setSubmitting(false);
  };

  const validateForm = values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block">Username</label>
              <Field type="text" name="username" id="username" className="border border-gray-300 px-2 py-1 rounded" />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">Password</label>
              <Field type="password" name="password" id="password" className="border border-gray-300 px-2 py-1 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 w-full"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
