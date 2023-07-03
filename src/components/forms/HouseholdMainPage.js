import React from "react";
import { Box } from "@mui/material";
import Header from "../navigation/HouseholdManagementHeader";
import { TabPanel, TabContext } from "@mui/lab";
import AllHouseHolds from "./AllHouseHolds";
import CreatePersonStepper from "../../Tests/CreatePersonStepper";
import HouseholdSummary from "./HouseholdSummary";
// import AddMember from "./"
import VoidHousehold from "./VoidHousehold"
import MuteHousehold from "./MuteHousehold"
import MigrateHousehold from "./MigrateHousehold"

const HouseholdMainPage=(props)=>{


    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
    
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <Header onDrawerToggle={props.handleDrawerToggle} handleChange={handleChange} value={value}/>
    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
    <TabContext value={value}>
    <TabPanel value="1"><AllHouseHolds/></TabPanel>
    <TabPanel value="2"><HouseholdSummary/></TabPanel>
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