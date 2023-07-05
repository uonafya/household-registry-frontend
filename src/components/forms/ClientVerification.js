// Client Verification
import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';



// "//An uncontrolled form that does not rerender onChange?"
function ClientVerification(){
  
  const handleSubmit=(values)=>{
      const { country, identifierType, identifierNumber } = values;
      console.log("form values" + values)
      const url = `/api/client/search/${country}/${identifierType}/${identifierNumber}`;
        axios.get(url)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
        }

      const formik = useFormik({
        initialValues: {
          country: '',
          identifierType: '',
          identifierNumber: ''
        },
        validate: values => {
          const errors = {};

          if (!values.identifierType) {
            errors.IdentifierType = 'Identifier Type is required';
          }

          if (!values.identifierNumber) {
            errors.identifierNumber = 'Identifier Number is required';
          }

        return errors;
        },
        onSubmit: handleSubmit
      });



  return (
    <div className="form-container">
      <section className="form-group">
        <div className="section-info">
          <h2 className="section-title">Client Verification</h2>
          <p className="section-description">Verify client details with client registry.</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label>Select country *</label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="KE">Kenya</option>
                <option value="UG">Uganda</option>
                <option value="TZ">Tanzania</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Identifier type *</label>
              <select
                name="identifierType"
                value={formik.values.identifierType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Identifier Type</option>
                <option value="national-id">National ID</option>
                <option value="birth-certificate">Birth Certificate</option>
                <option value="passport">Passport</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Identifier Number *</label>
              <input
                type="text"
                name="identifierNumber"
                value={formik.values.identifierNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>

          <div className="form-row buttons">
            <button type="submit" className="button-1">
              Verify with Client Registry
            </button>
          </div>
        </form>
      </section>
    </div>
          
  );
}

export default ClientVerification;



