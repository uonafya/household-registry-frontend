import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Demographics({householdRegistryData,setHouseholdRegistryData}) {
  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    country: ' ',
    countyOfBirth: ' ',
    residence: {
      county: ' ',
      sub_county: '',
      ward: '',
      village: '',
    },
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
      <fieldset style={{ width: '75%' }}>
        <legend>Person Details</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      <Form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" id="firstName" name="firstName" onChange={handleChange}/>
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <Field type="text" id="middleName" name="middleName" onChange={handleChange}/>
          <ErrorMessage name="middleName" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" id="lastName" name="lastName" onChange={handleChange}/>
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <Field type="date" id="dateOfBirth" name="dateOfBirth" onChange={handleChange}/>
          <ErrorMessage name="dateOfBirth" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="country">Country:</label>
          <Field type="text" id="country" name="country" onChange={handleChange}/>
          <ErrorMessage name="country" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="countyOfBirth">County of Birth:</label>
          <Field type="text" id="countyOfBirth" name="countyOfBirth" onChange={handleChange}/>
          <ErrorMessage name="countyOfBirth" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="residence.county">County of Residence:</label>
          <Field type="text" id="residence.county" name="residence.county" onChange={handleChange}/>
          <ErrorMessage name="residence.county" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="residence.sub_county">Sub County:</label>
          <Field type="text" id="residence.sub_county" name="residence.sub_county" onChange={handleChange}/>
          <ErrorMessage name="residence.sub_county" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="residence.ward">Ward:</label>
          <Field type="text" id="residence.ward" name="residence.ward" onChange={handleChange}/>
          <ErrorMessage name="residence.ward" component="div" className="error" />
        </div>
        <p/>
        <div>
          <label htmlFor="residence.village">Village:</label>
          <Field type="text" id="residence.village" name="residence.village" onChange={handleChange}/>
          <ErrorMessage name="residence.village" component="div" className="error" />
        </div>

      </Form>
    </Formik>
        </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Demographics;
