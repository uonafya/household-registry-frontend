import React from 'react';
import {TextField,Grid} from '@mui/material';

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
    <div className="form-container">
    <section className="form-group">
    <div className="form-row">
      <div className="input-group">
        <label>Name *</label>
        <input type="text" required />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Relationship *</label>
        <input type="text" required />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Residence *</label>
        <input type="text" required />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Primary Phone *</label>
        <input type="text" required />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Secondary Phone</label>
        <input type="text" />
      </div>
    </div>
  
  
    <div className="form-row">
      <div className="input-group">
        <label>Email Address</label>
        <input type="email" />
      </div>
    </div>
  
    </section>
</div>
  );
}

export default NextOfKinDetails;
