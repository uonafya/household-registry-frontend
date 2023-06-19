
function CreateHouseHold(householdRegistryData){
  const initialValuesLocalRegistry={};

  console.log(localStorage.getItem('token'));
  const postHousehold = '127.0.0.1:8000/api/households';

 
    // Post the filled in details to the local Household Person details

    const handleSubmitLocalRegistry = async (values) => {
      const postData = {
        householdRegistryData
      };
     
  
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        console.log(token);
        console.log(postData);

        // populate the details from filled forms to local registry
        const response = await axios.options(postHousehold, postData
        );
        // Handle the response
        console.log(response.data);
  
       
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }

return(

    <div>
        <button onClick={handleSubmitLocalRegistry}>Create HouseHold</button>
    </div>
);
}
export default CreateHouseHold;