// Client Verification
import { useSelector } from 'react-redux';
import { submitClientVerification } from '../../stateManagement/actions/householdFormAction';
import React from 'react';



// "//An uncontrolled form that does not rerender onChange?"
function ClientVerification(){
  
 

  const formValues = useSelector((state) => state.householdState);

 

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
    <React.Fragment>
       <div className="form-container">
       <section className="form-group">
          <div className="section-info">
            <h2 className="section-title">Client Verification</h2>
            <p className="section-description">
             Verify client details with client registry.
            </p>
          </div>
          
          <div className="form-row">
            <div className="input-group">
              <label>Select country *</label>
              <select>
              <option value="">Select Country</option>
                <option value="">Kenya</option>
                <option value="">Uganda</option>
                <option value="">Tanzania</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Identifier type *</label>
              <select>
              <option value="">Select Identifier Type</option>
                <option value="">National ID</option>
                <option value="">Birth Certificate</option>
                <option value="">Passport</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="input-group">
              <label>Identifier Number *</label>
              <input type="text" />
            </div>
          </div>

        </section> 
        </div>
      </React.Fragment>
          
  );
}

export default ClientVerification;



