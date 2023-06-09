import React from 'react';


function PersonDetails() {
  return (
    <div>
      <h1>Create person</h1>
      <form>
  <h2>Step 2: Register Patient</h2>
  
  <h3>Client verification with Client Registry</h3>
  <div>
    <label htmlFor="country">Country *</label>
    <select id="country" name="country">
      <option value="kenya">Kenya</option>
    </select>
  </div>
  
  <div>
    <label htmlFor="identifierType">Identifier Type *</label>
    <select id="identifierType" name="identifierType">
      <option value="valid">Select a valid identifier type</option>
    </select>
    <button>Validate Identifier</button>
  </div>
  
  <p>* indicates a required field</p>
  
  <h3>ID Numbers</h3>
  <div>
    <label htmlFor="patientClinicNumber">Patient Clinic Number (if available)</label>
    <input type="text" id="patientClinicNumber" name="patientClinicNumber" />
  </div>
  
  <div>
    <label htmlFor="nationalIdNumber">National ID Number (This is required for all Kenyans aged 18+)</label>
    <input type="text" id="nationalIdNumber" name="nationalIdNumber" />
  </div>
  
  <div>
    <label htmlFor="birthCertificateNumber">Birth Certificate Number (if available or Birth Notification number)</label>
    <input type="text" id="birthCertificateNumber" name="birthCertificateNumber" />
  </div>
  
  <div>
    <label htmlFor="nupi">NUPI (This will be populated from MOH Client Registry)</label>
    <input type="text" id="nupi" name="nupi" />
  </div>
  
  <h3>More identifiers</h3>
  {/* Additional identifier fields */}
  
  <h3>Demographics</h3>
  <div>
    <label htmlFor="surname">Surname *</label>
    <input type="text" id="surname" name="surname" required />
  </div>
  
  <div>
    <label htmlFor="firstName">First name *</label>
    <input type="text" id="firstName" name="firstName" required />
  </div>
  
  <div>
    <label htmlFor="otherNames">Other name(s)</label>
    <input type="text" id="otherNames" name="otherNames" />
  </div>
  
  <div>
    <label htmlFor="sex">Sex *</label>
    <select id="sex" name="sex" required>
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
  </div>
  
  <div>
    <label htmlFor="dateOfBirth">Date of Birth *</label>
    <input type="text" id="dateOfBirth" name="dateOfBirth" required />
  </div>
  
  {/* Additional demographic fields */}
  
  <h3>Next of Kin Details</h3>
  {/* Next of Kin fields */}
  
  <div>
    <label htmlFor="verificationStatus">Verification Status</label>
    <input type="text" id="verificationStatus" name="verificationStatus" />
  </div>
  
  <div>
    <button type="submit">Post to Registry</button>
    <button type="button">Create Patient</button>
  </div>
</form>

    </div>
  );
}

export default PersonDetails;
