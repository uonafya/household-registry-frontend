import React from 'react';


function Contact() {
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
    <div className="form-container">
    <section className="form-group">
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

export default Contact;
