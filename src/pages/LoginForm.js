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
  
    
  <div  style={{ display: 'flex', height: '100vh' }}>

          <Box
          sx={{
            p:7,
            flex: '70%',
            backgroundColor: 'black',
            }}
        />

     {/* Login Form box */}
        <Box
          sx={{
            p:7,
            flex: '30%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
         

          {/* The login form */}
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
          <Form>

          <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                name="username"
                label="username"
                
                autoComplete="user Name"
                variant="outlined"
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </Grid>
              
            <Grid item xs={12} sm={6}>
                <Field
                as={TextField}
                margin="normal"
                required
                
                id="password"
                name="password"
                type="password" 
                autoComplete="current-password"
                autoFocus
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
              </Grid>

              <Grid item xs={12} sm={6}>
            <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              </Grid>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
            </Form>
          </Formik>
         
        </Box>
    
  </div>
        
  
  );
};

export default LoginForm;
