import ok from "../../images/ok.png"
import { Formik, Form} from 'formik';
import axios from 'axios';
import {useState} from 'react';

function PostToRegistry(clientRegistryData, householdRegistryData) {
  const [postedToRegistry, setPostedToRegistry] =useState(false);


  const initialValuesClientRegistry = { };

  const initialValuesLocalRegistry={};

  console.log(localStorage.getItem('token'));

  const postEndpoint = 'https://dhpstagingapi.health.go.ke/partners/registry';
  const postHouseholdPerson = '127.0.0.1:8000/api/households/person';

  const handleSubmitClientRegistry = async (values) => {
    const postData = {
      clientRegistryData
    };
   

    try {
      console.log(clientRegistryData);
      // Make the request to search for the identifierNumber

      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      console.log(token);
      // https://afyakenyaapi.health.go.ke/partners/registry/search/KE/birth-certificate/35541176
      const response = await axios.options(postEndpoint, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle the response
      console.log(response.data);

      // enable post to local registry
      setPostedToRegistry(true);

     
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }

    // Post the filled in details to the local Household Person details

    const handleSubmitLocalRegistry = async (values) => {
      const postData = {
        householdRegistryData
      };
     
  
      try {
        
  
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        console.log(token);

        // populate the details from filled forms to local registry
        const response = await axios.options(postHouseholdPerson, postData
        );
        // Handle the response
        console.log(response.data);
  
       
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }
    return (
      <div className="form-container">

              <div class="form-row buttons">
                <button class="button-1"><img src={ok} alt="OK" className="mr-2" /> Post To Registry</button>
                <button class="button-2"><img src={ok} alt="OK" className="mr-2" /> Create Prson</button>
            </div>

    </div>
    );
  }
  
  export default PostToRegistry;