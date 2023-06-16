import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Demographics({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    country: 'United States',
    countyOfBirth: 'Los Angeles',
    residence: {
      county: 'Los Angeles',
      sub_county: 'ABC',
      ward: 'XYZ',
      village: '123',
    },
  };

  const handleSubmit = async (values) => {

    try {
       // Append form values to householdRegistryData object
          setHouseholdRegistryData(householdRegistryData => ({
            ...householdRegistryData,
            values
          }));

          console.log(values);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Add validation logic if needed

    return errors;
  };

  return (
    <div>
      <fieldset>
        <legend>Person Details</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      <Form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <Field type="text" id="middleName" name="middleName" />
          <ErrorMessage name="middleName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <Field type="date" id="dateOfBirth" name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <Field type="text" id="country" name="country" />
          <ErrorMessage name="country" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="countyOfBirth">County of Birth:</label>
          <Field type="text" id="countyOfBirth" name="countyOfBirth" />
          <ErrorMessage name="countyOfBirth" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="residence.county">County of Residence:</label>
          <Field type="text" id="residence.county" name="residence.county" />
          <ErrorMessage name="residence.county" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="residence.sub_county">Sub County:</label>
          <Field type="text" id="residence.sub_county" name="residence.sub_county" />
          <ErrorMessage name="residence.sub_county" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="residence.ward">Ward:</label>
          <Field type="text" id="residence.ward" name="residence.ward" />
          <ErrorMessage name="residence.ward" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="residence.village">Village:</label>
          <Field type="text" id="residence.village" name="residence.village" />
          <ErrorMessage name="residence.village" component="div" className="error" />
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

export default Demographics;
