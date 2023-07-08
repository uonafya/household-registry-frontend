import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import HouseHoldAddress from './HouseHoldAddress';
import HouseHoldDetails from './HouseHoldDetails';
import ClientVerification from './ClientVerification';
import Demographics from './Demographics';
import Contact from './Contact';
import NextOfKinDetails from './NextOfKinDetails';
import PostToRegistry from './PostToRegistry';



export default function TextMobileStepper() {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState({});
    const [label, setlabel] = React.useState('');
    

    const steps = [
        {
          label: 'Household Details',
          component: <HouseHoldDetails label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Household Address',
          component: <HouseHoldAddress label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Client Verification',
          component: <ClientVerification label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Demographics',
          component: <Demographics label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Contacts',
          component: <Contact label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Next of Kin',
          component: <NextOfKinDetails label={label} setFormValues={setFormValues}/>,
        },
        {
          label: 'Create Household',
          component: <PostToRegistry label={label} setFormValues={setFormValues}/>,
        },
      ];

      const maxSteps = steps.length;


  const handleNext = () => {
    const { label } = steps[activeStep];

    // Get the form values from the current step's component
    const storeValues = formValues;
    console.log("logged here");
    

    // Save the form values to session storage
    sessionStorage.setItem(label, JSON.stringify(storeValues));

    // Move to the next step
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 'auto',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 'auto', maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].component}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
