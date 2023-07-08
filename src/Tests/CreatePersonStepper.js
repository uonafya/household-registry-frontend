import * as React from 'react';
import { Box, Container, Paper, Stepper, Step, StepLabel, Button,Typography } from '@mui/material';
import PersonDetails from '../pages/PersonDetails';


// const steps = ['Client verification', 'ID Numbers', 'Demographics','address','Next of kin'];
const steps = ['Client Verification','Demographics','Save','Mobile' ];
// const steps = ['Shipping address', 'Payment details', 'Review your order'];




export default function CreatePersonStepper() {
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
              {<PersonDetails activeStep={activeStep}/>}
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
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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