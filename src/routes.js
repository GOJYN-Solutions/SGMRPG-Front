import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register'
import RegisterFicha from './pages/RegisterFicha';
import UpdateFicha from './pages/UpdateFicha';
import Homepage from './pages/Homepage';
import Fichas from './pages/Fichas';
import Campanhas from './pages/Campanhas';

function Rotas() {
  
  const [logged, setLogged] = useState('')

  axios.get('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/profile',{
    'headers':{
      auth: localStorage.getItem('token')
    }
  }).then(response=>{
    setLogged(response.data.items.length)
  })

  if(logged == 1){
    return(
      <BrowserRouter>
       <Navbar/>
          <Routes>
              <Route path='/home' element={<Profile/>}></Route>
              <Route path='/profile' element={<Profile/>}></Route>
              <Route path='/registerFicha' element={<RegisterFicha/>}></Route>
              <Route path='/updateFicha' element={<UpdateFicha/>}></Route>
              <Route path='/fichas' element={<Fichas/>}></Route>
              <Route path='/campanhas' element={<Campanhas/>}></Route>
              <Route path='*' element={<Homepage/>}></Route>
              
          </Routes>
      </BrowserRouter>
    )
  }else{
    return(
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              
              <Route path='*' element={<Homepage/>}></Route>
              
          </Routes>
      </BrowserRouter>
    )
  }
  

}

export default Rotas;
