import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import LandingPage from "./Pages/LandingPage/LandingPage"
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Modelos from "./Pages/Modelos/Modelos";
import Fichas from "./Pages/Fichas/Fichas";
import Campanhas from "./Pages/Campanhas/Campanhas";
import ModeloCampanhas from "./Pages/ModeloCampanhas/ModeloCampanhas";


export default function App() {
  let rotas = ''
  if(localStorage.getItem('token')){
    rotas = (
      <>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/fichas" element={<Modelos/>}></Route>
        <Route path="/campanhas" element={<Campanhas/>}></Route>
        <Route path="/modelos" element={<Fichas/>}></Route>
        <Route path="/modelosCampanhas" element={<ModeloCampanhas/>}></Route>
        <Route path="/*" element={<HomePage/>}></Route>
      </>
    )
  }else{
    rotas = (
      <>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path="/changepassword" element={<ChangePassword/>}></Route>
        <Route path="/*" element={<LandingPage/>}></Route>
      </>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {rotas}
        </Routes>
      </BrowserRouter>
    </>
  );
}