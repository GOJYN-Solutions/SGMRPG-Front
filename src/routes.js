import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function Rotas() {

  console.log(localStorage.getItem('id'))

  if(localStorage.getItem('id')){
    return(
      <BrowserRouter>
       <Navbar/>
          <Routes>
              <Route path='/home' element={<Profile/>}></Route>
              <Route path='/profile' element={<Profile/>}></Route>
              <Route path='*' element={<Profile/>}></Route>
              
          </Routes>
      </BrowserRouter>
    )
  }else{
    return(
      <BrowserRouter>
       <Navbar/>
          <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Login/>}></Route>
              <Route path='*' element={<Login/>}></Route>
              
          </Routes>
      </BrowserRouter>
    )
  }
  

}

export default Rotas;
