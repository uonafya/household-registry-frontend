import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetails from "./pages/PersonDetails";
import Layout from "./components/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CreatePerson" element={<PersonDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

