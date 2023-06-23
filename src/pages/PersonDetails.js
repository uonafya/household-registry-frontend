import React, { useState } from 'react';
import ClientVerification from '../components/forms/ClientVerification';
import IdentityNumbers from '../components/forms/IdentityNumbers';
import Demographics from '../components/forms/Demographics';
import NextOfKinDetails from '../components/forms/NextOfKinDetails';
import PostToRegistry from '../components/forms/PostToRegistry';
import ContactForm from '../components/forms/Contact';

function PersonDetails() {
  const [isVerified, setIsVerified] = useState(false);
  const [showForms, setShowForms] = useState (false);
  const [clientRegistryData, setClientRegistryData] =useState({});
  const [householdRegistryData, setHouseholdRegistryData] =useState({});
  const clientVerificationProps = {
    showForms:showForms,
    setShowForms:setShowForms,
    setShowFormsisVerified: isVerified,
    setIsVerified:setIsVerified,
    clientRegistryData:clientRegistryData,
    setClientRegistryData:setClientRegistryData,
  };


  return (
    <div>
      <h1><b>Register Person</b></h1>
      <ClientVerification {...clientVerificationProps}/>
      
      {!showForms && (
        <div>

          <Demographics />
          <p />
          <ContactForm  />
          <p />
          <NextOfKinDetails />
          <p />
          <IdentityNumbers />
          <p />
          <PostToRegistry />
          {console.log("Details fetched from client Registry....")}
        </div>
      )}
    </div>
  );
}

export default PersonDetails;
