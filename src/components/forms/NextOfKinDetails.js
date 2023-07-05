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
        <select name="nextOfKinRelationship">
                            <option value=""></option>
                            <option value="Partner">Parent</option>
                            <option value="Spouse">Spouse</option>           
                            <option value="Sibling">Sibling</option>
                            <option value="Child">Child</option>
                            <option value="Aunt">Grandparent</option>                            
                            <option value="Guardian">Guardian</option>
                            <option value="Friend">Friend</option>
                            <option value="Co-worker">Co-worker</option>  
                        </select>
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
