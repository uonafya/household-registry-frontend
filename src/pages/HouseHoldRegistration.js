import { Box } from '@mui/material';
import React, { lazy, Suspense } from 'react';

const HouseHoldDetails = lazy(() => import('../components/forms/HouseHoldDetails'));
const HouseHoldAddress = lazy(() => import('../components/forms/HouseHoldAddress'));
const PersonDetails = lazy(() => import('./PersonDetails'));


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
          DynamicComponent = PersonDetails;
          break;
        default:
          DynamicComponent = () => null;
          
      }
    
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponent />
          {console.log(activeStep.activeStep)}
        </Suspense>
      );
};

export default HouseHoldRegistration;