import React from "react";
import Countries from "./pages/Countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditUser from "./pages/Edituser";
import Appheader from "./components/Appheader";
import { ToastContainer } from 'react-toastify';
import CountryDetail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
        <Appheader></Appheader>
        <Routes>
          <Route path="/User" element={<User />} />
          <Route path="/" element={<Countries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/detail/:cca2" element={<CountryDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
