import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../allStyles.css'
import '../images/arms.png'





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
  
    <div className="login-container">
  <div className="arms"><img src="arms.png" alt="" /></div>
  <form>
    <section className="form-group">
      <div className="section-info">
        <h2 className="section-title">Login</h2>
        <p className="section-description">
          This is the section description.
        </p>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label>Username *</label>
          <input type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label>Password *</label>
          <input type="password" />
        </div>
      </div>
    </section>

    <div className="form-row buttons">
      <button className="button-1">Login</button>
    </div>
    <img src="arms.png" alt=""/>
  </form>
</div>

  );
};

export default LoginForm;
