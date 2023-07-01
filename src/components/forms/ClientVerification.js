// Client Verification
import { useSelector } from 'react-redux';
import React,{useRef, useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import { updateHousehold,submitClientVerification } from '../../stateManagement/actions/householdFormAction';
import { useDispatch } from 'react-redux';


// "//An uncontrolled form that does not rerender onChange?"
function ClientVerification(){
  
  const dispatch =useDispatch();

  const formValues = useSelector((state) => state.householdState);

 
      
		const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const country = formData.get('country');
      const identifier_type = formData.get('identification_type');
      const identifier_number = formData.get('identification_number');
      // Use the input value for further processing
      console.log(country,identifier_number,identifier_type)
      dispatch(submitClientVerification({country,identifier_type,identifier_number}));
      console.log("action called....")
    };

  
  useEffect(()=>{
         console.log('rendered here...')
         const country = formValues.household_persons[0].identification.identification_type;
          const IdentifierType = formValues.household_persons[0].identification.identification_type;
          const identifierNumber = formValues.household_persons[0].identification.identification_type;
        
         console.log(formValues)

  });
  
  
  

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
      </React.Fragment>
          
  );
}

export default ClientVerification;



