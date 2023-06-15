import CountryOptions from '../options/CountryOptions';
// Client Verification
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

function ClientVerification() {
  const initialValues = {
    country: '',
    IdentifierType: '',
    identifierNumber: '',
    selectKenya: false,
  };

  console.log(localStorage.getItem('token'));

  const searchEndpoint = 'https://afyakenyaapi.health.go.ke/partners/registry/search/KE';

  const handleSubmit = async (values) => {
    const searchData = {
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
      const response = await axios.options(searchEndpoint, searchData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle the response
      console.log(response.data);
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
    <div>
      <fieldset>
        <legend>Client verification with Client Registry</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
            <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
              <Form>
                <div className="mb-4">
                  <label htmlFor="IdentifierType">Identifier Type:</label>
                  <Field type="text" id="IdentifierType" name="IdentifierType" />
                  <ErrorMessage name="IdentifierType" component="div" className="text-red-500" />
                  <br />
                </div>
                <p />
                <div className="mb-4">
                  <label htmlFor="identifierNumber">Identifier Number:</label>
                  <Field type="text" id="identifierNumber" name="identifierNumber" />
                  <ErrorMessage name="identifierNumber" component="div" className="text-red-500" />
                  <br />
                </div>

                <button type="submit">Submit</button>
                <p />
                <button type="reset">Reset</button>
              </Form>
            </Formik>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default ClientVerification;
