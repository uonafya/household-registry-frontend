import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetails from "./pages/PersonDetails";
import LoginForm from "./pages/LoginForm";
import Layout from "./components/Layout";
import HouseHoldRegistration from "./pages/HouseHoldRegistration";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreatePerson" element={<PersonDetails />} />
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="HouseHoldRegistration" element={<HouseHoldRegistration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

