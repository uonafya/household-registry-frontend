import React from 'react';

function NextOfKinDetails({householdRegistryData,setHouseholdRegistryData}) {
  
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
