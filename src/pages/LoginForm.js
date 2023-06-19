import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moh from '../images/moh.png';
import { blue } from '@mui/material/colors';
import Home from './Home';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const LoginForm = () => {

  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = btoa(`${values.username}:${values.password}`);
      const response = await axios.post(
        'https://dhpidentitystagingapi.health.go.ke/connect/token',
        `grant_type=client_credentials&scope=DHP.Gateway%20DHP.Partners`,
        {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
  
      const { access_token } = response.data;
  
      // Store the token in local storage or any other preferred storage mechanism
      localStorage.setItem('token', access_token);
      
      console.log(localStorage.getItem('token'))
  
      // Check if the response status is 200
      if (response.status === 200) {
        // Redirect to /HouseHoldRegistration
        
        navigate('/HouseHoldRegistration');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  
    setSubmitting(false);
  };

  const validateForm = values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    
    <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(${moh})',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
  {/* <img src={moh} alt="MOH" style={{ width: '220px', height: '220px' }} /> */}
  {/* <Typography variant="body1" component="p">
    Household Registry.
  </Typography> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon color='blue'/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login in
          </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block">Username</label>
                <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">Password</label>
                <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                type="password" 
                autoComplete="current-password"
                autoFocus
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 5 }}>
            Place any additional content here
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};

export default LoginForm;
