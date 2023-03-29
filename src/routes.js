import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function Rotas() {

  return(
    <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path='*' element="404"></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            
        </Routes>
    </BrowserRouter>
  )

}

export default Rotas;
