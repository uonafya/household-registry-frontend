// Client Verificatio
import {InputLabel,Grid,FormControlLabel, NativeSelect,Button}from '@mui/material';
import {TextField} from '@mui/material';
import { Field } from 'formik';

import React,{useRef, useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';

import { updateHousehold,submitClientVerification } from '../../stateManagement/actions/householdFormAction';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';


// "//An uncontrolled form that does not rerender onChange?"
function ClientVerification(){
  
  const dispatch =useDispatch();

  //  const formValues = useSelector((state) => state.householdState);

 
      
		const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const country = formData.get('country');
      const identifier_type = formData.get('identification_type');
      const identifier_number = formData.get('identification_number');
      // Use the input value for further processing
      console.log(country,identifier_number,identifier_type)
      dispatch(submitClientVerification({country,identifier_type,identifier_number}));
      console.log("action called....")
    };

  
  useEffect(()=>{
         console.log('rendered here...')

  });
  
  
  

  const validateForm = (values) => {
    const errors = {};

    if (!values.IdentifierType) {
      errors.IdentifierType = 'Identifier Type is required';
    }

    if (!values.identifierNumber) {
      errors.identifierNumber = 'Identifier Number is required';
    }

    return errors;
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
     
           <Grid container spacing={2}>

           <Grid item xs={12} sm={6}>

          <InputLabel id='IdentifierType'>Select Country</InputLabel>
          <div className='w-full flex flex-col items-start justify-start gap-1 mb-3'>
          <NativeSelect
              required
              id='Country'
              name='country'
             
              label='Country'
             
            >
              <option value=''>Select Country</option>
              <option value='KE'>Kenya</option>
              <option value='UG'>Uganda</option>
              <option value='TZ'>Tanzania</option>
            </NativeSelect>
            </div>
            </Grid>

            <Grid item xs={12} sm={6}>

          <FormControlLabel control={<Checkbox value={'KE'} defaultChecked />} label='Kenya' />
          </Grid>

          <Grid item xs={12} sm={6}>
          <InputLabel id='IdentifierType'>Identifier Type</InputLabel>
          <NativeSelect
              required
              
              id='IdentifierType'
            
              // ref={identifierTypeRef}
              name='identification_type'
            
              label='IdentifierType'
              
            >
              <option value=''>Select Identifier</option>
              <option value='birth_certificate'>Birth certificate</option>
              <option value='national-id'>National Id</option>
              <option value='passport'>Passport</option>
            </NativeSelect>
            </Grid>
      

          <Grid item xs={12} sm={6}>
              <TextField
              
                required
                id='identifierNumber'
                label='identifierNumber'
               
                name='identification_number'
              
                autoComplete='identifier Number'
               
                variant='outlined'
                className='flex-none w-full bg-gray-50 rounded p-2 flex-grow border-2 placeholder-gray-500 border-gray-200 focus:shadow-none focus:bg-white focus:border-black outline-none'
              />
            </Grid>
        
         

          <Grid item xs={12} sm={6}>
          <Button variant='outlined' type='submit'> Search Client</Button>
          </Grid>
          
        </Grid>
        </form>
      </React.Fragment>
          
  );
}

export default ClientVerification;



