import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


// console.log(formValues.household_persons[0].identification.identification_type)
  

// const dispatch = useDispatch();

// const handleSubmit =(values)=>{
//   dispatch(submitClientVerification(values));
// };

// const handleInputChange = (parentField, name, value) => {
//   // const field = parentField ? `${parentField}.${name}` : name;

//   dispatch(updateHousehold(parentField, name, value));
// };
// export const formValues = useSelector((state) => state.householdState);

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


// Generic function to Post data through axios

export const genericPostFunction=(url,values)=>{

  console.log("form values" + values)

  axios.post({url}, values)
  .then((response) => {
    console.log('POST request successful');
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error making POST request:', error);
  });
};
  
