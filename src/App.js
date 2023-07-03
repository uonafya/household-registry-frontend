import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetails from "./pages/PersonDetails";
import LoginForm from "./pages/LoginForm";
import Layout from "./components/Layout";
import HouseHoldRegistration from "./pages/HouseHoldRegistration";
import PersistentDrawerLeft from "./components/navigation/PersistentDrawer";
import HouseholdRegistrationStepper from "./Tests/HouseholdRegistrationStepper";
import Mainpage from "./pages/MainPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreatePerson" element={<PersonDetails />} />
          
          <Route path="HouseHoldRegistration" element={<HouseHoldRegistration/>}/>
        </Route>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/PersistentDrawer" element={<PersistentDrawerLeft/>}/>
        <Route path="/test" element={<HouseholdRegistrationStepper/>}/>
        <Route path="/main" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

