import axios from 'axios'

import DropdownNavbar from "../DropdownNavbar/DropdownNavbar"

export default function Navbar() {

    function logoff(){
        axios.delete('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/login',{
            'headers':{
                auth: localStorage.getItem('token')
            }
        })
    }

    if(localStorage.getItem('token')){
        return(
            <header>
            <div class="navbar flex flex-row justify-between border-solid border-2 pr-6">

            <button className="flex flex-row items-center" onClick={e => {
                window.location.href = 'http://localhost:3000/'
            }}>
                <img className="logo " src="imagens/logo.png"/>
                <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>
            Perfil</button>

                <DropdownNavbar imgURL={"imagens/user.png"}/>
            </div>
        </header>
        )
    }
    else{
        return(
            <header>
            <nav class="navbar justify-between border-solid border-2">
            <button className="flex flex-row items-center" onClick={e => {
                window.location.href = 'http://localhost:3000/'
            }}>
                <img className="logo " src="imagens/logo.png"/>
                <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>
            Perfil</button>    
                <button className="text-white mr-4 bg-[#AE00FF] p-2 px-4 rounded-lg" 
                    onClick={e => {
                        localStorage.clear()
                        logoff()
                        window.location.href = 'http://localhost:3000/login'
                    }}>Login</button>
            </nav>
        </header>
        )
    }

    
  
  }
  
  