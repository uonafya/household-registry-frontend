import React from 'react';
import ClientVerification from '../components/forms/ClientVerification';
import Demographics from '../components/forms/Demographics';
import PostToRegistry from '../components/forms/PostToRegistry';
import CreateHouseholdStepper from '../components/navigation/CreateHouseholdStepper';



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
      case 3:
      DynamicComponent = CreateHouseholdStepper;
      break;
      default:
      DynamicComponent = () => null;
  }

  return (
    
      <DynamicComponent />
  );
};

export default PersonDetails;
