import { useState } from "react"


export default function DropdownNavbar({imgURL}) {       
    
    const [dropDown, setDropDown] = useState(false)

    const texts = "text-black text-base"

    return(
        <div className="">
              
            <button onClick={()=>{setDropDown(prevState=>!prevState)}} className="flex flex-row space-x-2 items-center">
                <img className="h-10 w-10 rounded-full" src={imgURL} alt="" />
                <p className="text-black font-medium"> @USER123</p>
            </button>            
            
            {
                dropDown && 
                
                <div className="bg-white shadow-lg  mt-1 absolute rounded-b-md flex flex-col p-2 gap-2">
                    <p className={texts}><button onClick={()=>{window.location.href = 'http://localhost:3000/profile'}}> PERFIL </button></p>
                    <p className={texts}><button> FICHAS </button></p>
                    <p className={texts}><button> CAMPANHAS </button></p>
                    <p className={texts}><button> CONFIGURAÇÕES </button></p>
                    <p className={`${texts} text-red-600`}>
                        <button onClick={()=>{
                            localStorage.clear()
                            window.location.href = 'http://localhost:3000/login'
                        }}>SAIR</button></p>
                </div>
                
            }
        </div>
    )

}