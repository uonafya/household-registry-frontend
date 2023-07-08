import React from "react";
import { Box } from "@mui/material";
import HouseholdManagementHeader from "../navigation/HouseholdManagementHeader";
import { TabPanel, TabContext } from "@mui/lab";
import AllHouseHolds from "./AllHouseHolds";
import HouseholdSummary from "./HouseholdSummary";
import CreatePersonStepper from "../navigation/CreatePersonStepper";
import VoidHousehold from "./VoidHousehold"
import MuteHousehold from "./MuteHousehold"
import MigrateHousehold from "./MigrateHousehold"

const HouseholdMainPage=(props)=>{


    const [value, setValue] = React.useState(0);
    const [householdSelected, setHouseholdSelected]=React.useState(true);
    const [househouldSummary, setHousehouldSummary]=React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
    
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <HouseholdManagementHeader onDrawerToggle={props.handleDrawerToggle} handleChange={handleChange} householdSelected={householdSelected} value={value}/>
    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
    <TabContext value={value}>
   
    <TabPanel value="1"><AllHouseHolds setHousehouldSummary={setHousehouldSummary} setHouseholdSelected={setHouseholdSelected}/></TabPanel>
     <TabPanel value="2"><HouseholdSummary househouldSummary={househouldSummary}/></TabPanel>
     <TabPanel value="3"><CreatePersonStepper/></TabPanel>
     <TabPanel value="4"><VoidHousehold/></TabPanel>
     <TabPanel value="5"><MuteHousehold/></TabPanel>
     <TabPanel value="6"><MigrateHousehold/></TabPanel>

    
     </TabContext>
    </Box>
    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>

    </Box>
  </Box> );




}
export default HouseholdMainPage