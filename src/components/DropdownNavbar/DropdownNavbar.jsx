import { useState, useEffect } from "react"
import axios from 'axios'

export default function DropdownNavbar({imgURL}) {

    const [user, setUser] = useState({
        codigo: '',
        nick: '',
        email: '',
        desc: '',
        imagem: '',
        banner: '',
        birth: ''
    })

    useEffect(()=>{
        axios.get('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/profile',{
            'headers':{
                auth: localStorage.getItem('token')
            }
        }).then(res=>{
            setUser({
                codigo: res.data.items[0].cd_user,
                nick: res.data.items[0].nm_nick,
                email: res.data.items[0].nm_email,
                desc: res.data.items[0].ds_user,
                imagem: res.data.items[0].im_profile,
                banner: res.data.items[0].im_banner,
                birth: res.data.items[0].dt_birth
            })
        })
    },[])

    function logoff(){
        axios.delete('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/login',{
            'headers':{
                auth: localStorage.getItem('token')
            }
        }).then(e=>{
            localStorage.clear()
            window.location.href = 'http://localhost:3000/login'
        })
    }
    
    const [dropDown, setDropDown] = useState(false)

    const texts = "text-black text-base"

    return(
        <div className="">
              
            <button onClick={()=>{setDropDown(prevState=>!prevState)}} className="flex flex-row space-x-2 items-center">
                <img className="h-10 w-10 rounded-full" src={imgURL} alt="" />
                <p className="text-black font-medium">{user.nick}</p>
            </button>            
            
            {
                dropDown && 
                
                <div className="bg-white shadow-lg  mt-1 absolute rounded-b-md flex flex-col p-2 gap-2">
                    <p className={texts}><button onClick={()=>{window.location.href = 'http://localhost:3000/profile'}}> PERFIL </button></p>
                    <p className={texts}><button onClick={()=>{window.location.href = 'http://localhost:3000/fichas'}}> FICHAS </button></p>
                    <p className={texts}><button onClick={()=>{window.location.href = 'http://localhost:3000/campanhas'}}> CAMPANHAS </button></p>
                    {/* <p className={texts}><button> CONFIGURAÇÕES </button></p> */}
                    <p className={`${texts} text-red-600`}>
                        <button onClick={()=>{logoff()}}>SAIR</button></p>
                </div>
                
            }
        </div>
    )

}