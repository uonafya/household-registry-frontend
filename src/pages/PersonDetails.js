import React, { useState } from 'react';
import ClientVerification from '../components/forms/ClientVerification';
import IdentityNumbers from '../components/forms/IdentityNumbers';
import Demographics from '../components/forms/Demographics';
import NextOfKinDetails from '../components/forms/NextOfKinDetails';
import PostToRegistry from '../components/forms/PostToRegistry';
import ContactForm from '../components/forms/Contact';

function PersonDetails() {
  const [isVerified, setIsVerified] = useState(false);
  const [clientRegistryData, setClientRegistryData] =useState({});
  const [householdRegistryData, setHouseholdRegistryData] =useState({});


  return (
    <div>
      <h1><b>Register Patient</b></h1>
      <ClientVerification isVerified={isVerified} setIsVerified={setIsVerified} clientRegistryData={clientRegistryData} setClientRegistryData={setClientRegistryData}/>
      
      {!isVerified && (
        <div>

          <Demographics householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData}/>
          <p />
          <ContactForm householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData} />
          <p />
          <NextOfKinDetails householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData}/>
          <p />
          <IdentityNumbers householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData}/>
          <p />
          <PostToRegistry clientRegistryData={clientRegistryData} householdRegistryData={householdRegistryData}/>
          {console.log("Details fetched from client Registry....")}
        </div>
      )}
    </div>
  );
}

export default PersonDetails;
