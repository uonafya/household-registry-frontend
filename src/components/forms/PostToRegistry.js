import ok from "../../images/ok.png"
import { Formik, Form} from 'formik';
import axios from 'axios';

function PostToRegistry(clientRegistryData, householdRegistryData) {
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
      <div>
      <fieldset style={{ width: '75%' }}>
        <legend>Post to Registry/Create Person</legend>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg">
            <Formik initialValues={initialValuesClientRegistry} onSubmit={handleSubmitClientRegistry}>
              <Form>
                    <button
                    type="button"
                    id="post-registrations"
                    className="mr-5 ml-5"
                            >
                    <img src={ok} alt="OK" className="mr-2" />
                    Post to Registry
            </button>
              </Form>
              </Formik>
 
      <Formik initialValues={initialValuesLocalRegistry} onSubmit={handleSubmitLocalRegistry}>
          <Form>
              <button
                  type="submit"
                  id="createPatientBtn"
                  className="mr-5 ml-5"
                  disabled
                      >
                  <img src={ok} alt="OK" className="mr-2" />
                  Create Patient
              </button>
            </Form>
        </Formik>
      
    </div>
        </div>
      </fieldset>
    </div>
    );
  }
  
  export default PostToRegistry;