import * as React from 'react';
import { Box, Container, Paper, Stepper, Step, StepLabel, Button, Link, Typography } from '@mui/material';
import Review from './Review';
import HouseHoldAddress from '../components/forms/HouseHoldAddress';
import HouseHoldDetails from '../components/forms/HouseHoldDetails';
import HouseHoldRegistration from '../pages/HouseHoldRegistration';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// const steps = ['Client verification', 'ID Numbers', 'Demographics','address','Next of kin'];
const steps = ['Household details', 'Household address', 'Household Head','Demographics','Contacts','Next of Kin','Save' ];
// const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <HouseHoldAddress />;
    case 1:
      return <HouseHoldDetails />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


export default function HouseholdRegistrationStepper() {
  // let DynamicComponent;
  // DynamicComponent = HouseHoldRegistration;
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    // <ThemeProvider theme={defaultTheme}>
    //   <CssBaseline />
     
      <Container component="main" sx={{ mb: 4 ,width: '100%'}}>
         <Typography component="h3" variant="h5" align="center">
            Household Registration
          </Typography>
  <Paper variant="outlined" sx={{ my: 'auto', p: 'auto' }}>
            {/* The heading */}
         
           {/* The stepper */}
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Stepper logic */}
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {<HouseHoldRegistration activeStep={activeStep}/>}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 , bgcolor: '#f45d48'}}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        {/* <Copyright /> */}
      </Container>
    // </ThemeProvider>
  );
}