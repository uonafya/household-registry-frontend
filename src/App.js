import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetails from "./pages/PersonDetails";
import LoginForm from "./pages/LoginForm";
import Layout from "./components/Layout";
import HouseHoldRegistration from "./pages/HouseHoldRegistration";
import Mainpage from "./pages/MainPage";
import CreateHouseholdStepper from "./components/navigation/CreateHouseholdStepper";


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
        <Route path="/main" element={<Mainpage/>}/>
        <Route path="/text" element={<CreateHouseholdStepper/>}/>
      </Routes>
    </BrowserRouter>
  );
}

