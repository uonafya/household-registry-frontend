import { Box } from '@mui/material';
import React, { lazy, Suspense } from 'react';

const HouseHoldDetails = lazy(() => import('../components/forms/HouseHoldDetails'));
const HouseHoldAddress = lazy(() => import('../components/forms/HouseHoldAddress'));
const PersonDetails = lazy(() => import('./PersonDetails'));


function HouseHoldRegistration(activestep){

      let DynamicComponent;

      switch (activestep) {
        case 1:
          DynamicComponent = HouseHoldAddress;
          break;
        case 2:
          DynamicComponent = HouseHoldDetails;
          break;
          case 3:
          DynamicComponent = PersonDetails;
          break;
        default:
          <p>a comonent goes here</p>
      }
    
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponent />
        </Suspense>
      );




};

export default HouseHoldRegistration;