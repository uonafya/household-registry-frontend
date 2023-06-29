import axios from "axios";


export const submitHouseholdForm = (values) => {
  return async (dispatch) => {
    try {
      // Perform the API request here
      const response = await axios.post('https://api.example.com/submit', values);

      // Dispatch a success action if the request is successful
      dispatch(submitFormSuccess(response.data));
    } catch (error) {
      // Dispatch an error action if the request fails
      dispatch(submitFormError(error.message));
    }
  };
};


export const submitClientVerification = (values) => {
  return async (dispatch) => {
    try {

      //obtain token from local storage react js
      const token = window.localStorage.getItem('token');
      console.log("token here.."+token)

      const url = `https://dhpstagingapi.health.go.ke/partners/registry/search/${values.country}/${values.identifier_type}/${values.identifier_number}`;


      // send axios post request using OAuth2.0 with token stored in local storage after log in?"
      // Perform the API request here
      const response = await axios.post(url, {
        headers: {
          Authorization: `OAuth2.0 ${token}`,
        },
      });

      console.log("response here.."+response)

      // Dispatch a success action if the request is successful
      dispatch(submitFormSuccess(response.data));
    } catch (error) {
      // Dispatch an error action if the request fails
      dispatch(submitFormError(error.message));
    }
  };
};



export const updateHousehold = ({parentField, name, value}) => {
  return {
    type: 'UPDATE_HOUSEHOLD',
    payload: {
      parentField,
      name,
      value,
    },
  };
};


   
  export const submitFormSuccess = (data) => {
    return {
      type: 'SUBMIT_HOUSEHOLD_SUCCESS',
      payload: data,
    };
  };
  
  export const submitFormError = (error) => {
    return {
      type: 'SUBMIT_HOUSEHOLD_ERROR',
      payload: error,
    };
  };
  
  