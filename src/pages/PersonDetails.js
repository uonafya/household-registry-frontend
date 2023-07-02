import React from 'react';
import ClientVerification from '../components/forms/ClientVerification';
import IdentityNumbers from '../components/forms/IdentityNumbers';
import Demographics from '../components/forms/Demographics';
import NextOfKinDetails from '../components/forms/NextOfKinDetails';
import PostToRegistry from '../components/forms/PostToRegistry';
import ContactForm from '../components/forms/Contact';


const PersonDetails = ({ activeStep }) => {
  let DynamicComponent;

  switch (activeStep) {
    case 0:
      DynamicComponent = ClientVerification;
      break;
    case 1:
      DynamicComponent = Demographics;
      break;
    case 2:
      DynamicComponent = PostToRegistry;
      break;
      default:
      DynamicComponent = () => null;
  }

  return (
    
      <DynamicComponent />
  );
};

export default PersonDetails;
