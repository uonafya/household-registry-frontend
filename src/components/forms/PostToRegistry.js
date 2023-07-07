import ok from "../../images/ok.png"
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { genericPostFunction } from "../../generics/genericFunctions";



function PostToRegistry() {
 
  const [activateButton, setActivateButton] = useState(true);
  const [values, setValues] = useState(null);



      


      // // Post to client registry

      // genericPostFunction('/api/client/save',parsedValues)

      // // Post to client registry

      // genericPostFunction('/api/households',parsedValues)

      const handlePostToRegistry=(values)=>{

          // const { country, identifierType, identifierNumber } = values;
          console.log(values)

          // axios.post('/api/client/save', values)
          // .then((response) => {
          //   console.log('POST request successful');
          //   console.log(response.data);
          // })
          // .catch((error) => {
          //   console.error('Error making POST request:', error);
          // });
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
        // Check if there are values in session storage
        const savedFormValues = sessionStorage.getItem('clientVerificationSessionValues');
        console.log(savedFormValues)
        if (savedFormValues) {
          try {
            const parsedValues = JSON.parse(savedFormValues);
            setValues(parsedValues);
            
          } catch (error) {
            console.error('Error parsing stored values:', error);
          }
        }
      }, [ ]); // Run the effect only once on the initial render

    return (
      <div className="form-container">

              <div class="form-row buttons">
                <button className="button-1" onClick={handlePostToRegistry}><img src={ok} alt="OK" className="mr-2" /> Post To Registry</button>
                <button className="button-2" disabled="true" onClick={handlePostLocal}><img src={ok} alt="OK" className="mr-2" /> Create Person</button>
            </div>

    </div>
    );
  }
  
  export default PostToRegistry;