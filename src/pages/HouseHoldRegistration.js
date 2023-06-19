import { useState } from "react";
import HouseHoldDetails from "../components/forms/HouseHoldDetails";
import HouseHoldAddress from "../components/forms/HouseHoldAddress";
import PersonDetails from "./PersonDetails";


function HouseHoldRegistration(){
    const [householdRegistryData, setHouseholdRegistryData] =useState({});
    const [addHHMember, setAddHHMember] =useState(false);


    return (
      <div>
        <h1><b>Register Household</b></h1>

        <div>
        <fieldset><legend>step 1:Register HH Head</legend>

        <PersonDetails/>
        </fieldset>
        </div>


        <div>
        <fieldset><legend>step 2:Register HH Details</legend>
        <p/>
        <HouseHoldDetails householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData}/>
        <p/>
        <HouseHoldAddress householdRegistryData={householdRegistryData} sethouseholdRegistryData={setHouseholdRegistryData}/>
        
        </fieldset>
        </div>

        <button onClick={() => setAddHHMember(true)}>Add HH Member</button>

       {
       addHHMember &&
        <div>
        <fieldset><legend>step 3:Register HH Members</legend>

        
        </fieldset>
        </div>
        } 
        
    

      </div>
    );

};

export default HouseHoldRegistration;