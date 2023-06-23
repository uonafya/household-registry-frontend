import React from 'react';
import HouseHoldDetails from '../components/forms/HouseHoldDetails';
import HouseHoldAddress from '../components/forms/HouseHoldAddress';
import Demographics from '../components/forms/Demographics';
import Contact from '../components/forms/Contact';
import NextOfKinDetails from '../components/forms/NextOfKinDetails';
import IdentityNumbers from '../components/forms/IdentityNumbers';
import PostToRegistry from '../components/forms/PostToRegistry';
import ClientVerification from '../components/forms/ClientVerification';



function HouseHoldRegistration(activeStep){

      let DynamicComponent;

      switch (activeStep.activeStep) {
        case 0:
          DynamicComponent = HouseHoldAddress;
          break;
        case 1:
          DynamicComponent = HouseHoldDetails;
          break;
          case 2:  
          DynamicComponent = ClientVerification;
          break;
          case 3:
          DynamicComponent = Demographics;
          break;
        case 4:
          DynamicComponent = Contact;
          break;
        case 5:
          DynamicComponent = NextOfKinDetails;
          break;
        case 6:
          DynamicComponent = IdentityNumbers;
          break;
        case 7:
          DynamicComponent = PostToRegistry;
          break
        default:
          DynamicComponent = () => null;
          
      }
    
      return (
          <DynamicComponent />

      );
};

export default HouseHoldRegistration;