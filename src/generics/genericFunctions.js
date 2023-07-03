import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const axios = require('axios');


// console.log(formValues.household_persons[0].identification.identification_type)
  

// const dispatch = useDispatch();

// const handleSubmit =(values)=>{
//   dispatch(submitClientVerification(values));
// };

// const handleInputChange = (parentField, name, value) => {
//   // const field = parentField ? `${parentField}.${name}` : name;

//   dispatch(updateHousehold(parentField, name, value));
// };
export const formValues = useSelector((state) => state.householdState);

export const HandleInputChange = (parentField, name, value) => {
    const dispatch = useDispatch();
    const field = parentField ? `${parentField}.${name}` : name;

    dispatch({
      type: 'UPDATE_HOUSEHOLD',
      payload: {
        field,
        value,
      },
    });
  };


export const postData=(url)=>{
  const token = localStorage.getItem('token');

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

axios.post(url, {
  SCOPE:'DHP.Gateway DHP.Partners',
   GRANT_TYPE:'client_credentials',
 }, options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

} 



  
