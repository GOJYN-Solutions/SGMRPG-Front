import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register'
import RegisterFicha from './pages/RegisterFicha';
import UpdateFicha from './pages/UpdateFicha';
import Homepage from './pages/Homepage';

function Rotas() {

  if(localStorage.getItem('id')){
    return(
      <BrowserRouter>
       <Navbar/>
          <Routes>
              <Route path='/home' element={<Profile/>}></Route>
              <Route path='/profile' element={<Profile/>}></Route>
              <Route path='/registerFicha' element={<RegisterFicha/>}></Route>
              <Route path='/updateFicha' element={<UpdateFicha/>}></Route>
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
