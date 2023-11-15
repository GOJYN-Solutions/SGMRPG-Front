import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import LandingPage from "./Pages/LandingPage/LandingPage"
import HomePage from "./Pages/HomePage/HomePage";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/changepassword" element={<ChangePassword/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/*" element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}