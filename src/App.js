import React from "react";
import Countries from "./components/Countries/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import EditUser from "./Edituser";
import Appheader from "./Appheader";
import Detailcountries from "./components/DetailCountries/Detailcountries";

function App() {
  return (
    <BrowserRouter>
      <Appheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-user/:userId" element={<EditUser />} />
        <Route path="/Countries/:countryId" element={<Detailcountries />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
