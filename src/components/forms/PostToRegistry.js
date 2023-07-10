import ok from "../../images/ok.png"
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { genericPostFunction } from "../../generics/genericFunctions";



function PostToRegistry() {
 
  const [activateButton, setActivateButton] = useState(true);
  const [storedValues, setStoredValues] = useState({});

        // Define the keys in the session storage
      const stepKeys = [
        "Demographics",
        "Next of Kin",
        "Household Address",
        "Contacts",
        "Client Verification",
        "Household Details",
      ];

        // Create an empty object to store the parsed values
        const parsedValues = {};

        // Loop through the step keys
        stepKeys.forEach((key) => {
          // Retrieve the stored value from session storage
          const storedValue = sessionStorage.getItem(key);

          // Parse the stored value into an object
          const parsedValue = JSON.parse(storedValue);

          // Store the parsed value in the data structure
          parsedValues[key] = parsedValue;
        });

      const handlePostToRegistry=(storedValues)=>{
     
        
        const householdData = {
          household_registered_by_id: 3,
          household_approved_by_id: 3,
          household_name: parsedValues["Household Details"].householdName,
          household_identifier: '123456',
          household_type: {
            household_type_name: parsedValues["Household Details"].householdName,
          },
          household_address: {
            area_type_id: 1,
            area_name: 'Sample Area',
            area_code: '123',
            parent_area_id: null
          },
          household_persons: [
            {
              firstName: parsedValues["Demographics"].firstName,
              middleName: parsedValues["Demographics"].middleName,
              lastName: parsedValues["Demographics"].lastName,
              nupi_number: null,
              dateOfBirth: parsedValues["Demographics"].dateOfBirth,
              gender: parsedValues["Demographics"].gender,
              country: parsedValues["Client Verification"].country,
              countyOfBirth: parsedValues["Demographics"].countyOfBirth,
              residence: {
                county: parsedValues["Demographics"].county,
                sub_county: parsedValues["Demographics"].subCounty,
                ward: parsedValues["Demographics"].ward,
                village: parsedValues["Demographics"].village
              },
              contact: parsedValues["Contacts"],
              next_of_kin: parsedValues["Next of Kin"],
              identification: {
                identification_type: parsedValues["Client Verification"].identifierType,
                identification_number: parsedValues["Client Verification"].identifierNumber
              },
              household_member_type_id: 1,
              is_alive: true
            }
          ]
        };

          // const { country, identifierType, identifierNumber } = values;
          console.log(storedValues)

          axios.post('/api/households', householdData)
          .then((response) => {
            console.log('POST request successful');
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error making POST request:', error);
          });
        };


        const handlePostLocal=(values)=>{

          // const { country, identifierType, identifierNumber } = values;
          console.log(values)

          axios.post('/api/households', values)
          .then((response) => {
            console.log('POST request successful');
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error making POST request:', error);
          });
        };

        
      useEffect(() => {
        const savedFormValues = {};

        // Check if there are values in session storage
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          const value = sessionStorage.getItem(key);
          savedFormValues[key] = value;
        }
        
        console.log(savedFormValues)
        if (savedFormValues) {
          try {
            const parsedValues = JSON.parse(savedFormValues);
            setStoredValues(parsedValues);
            
          } catch (error) {
            console.error('Error parsing stored values:', error);
          }
        }
      }, []); 

    return (
      <div className="form-container">

              <div class="form-row buttons">
                <button className="button-1" onClick={handlePostToRegistry}><img src={ok} alt="OK" className="mr-2" /> Post To Registry</button>
                <button className="button-2" disabled={activateButton} onClick={handlePostLocal}><img src={ok} alt="OK" className="mr-2" /> Create Person</button>
            </div>

    </div>
    );
  }
  
  export default PostToRegistry;