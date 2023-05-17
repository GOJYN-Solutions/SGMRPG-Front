import { useState } from 'react'
import './style.css'
import axios from 'axios'

export default function LoginForm() {

    let inputStyle = 'bg-[#D9D9D9] border border-gray-300 text-[#8D8D8D] font text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-Inder'

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function loginSubmit(){
       
        console.log(user)
        axios.post('http://localhost:3333/login', {
            email: user.email,
            senha: user.password
        })
        .then(resp => {
            console.log(resp.data.length)
            if(resp.data.length > 0){
                localStorage.setItem('id', resp.data[0].cd_user)
                window.locale = window.locale
                window.location.href = window.location.href
            }
            else{
                alert("Usuário invalido")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div className='h-screen w-screen bg-gradient-to-b from-[#A52EFF] via-[#D186FF] to-[#ECCCFF] flex flex-row justify-between p-6 space-x-16'>
            <div className='py-14 w-1/2 rounded-lg flex items-center'>
                <img className='rounded-lg ' src="https://mega.ibxk.com.br/2022/05/03/03001446876621.jpg" alt="" />
            </div>
            <div className='bg-white w-1/2 rounded-lg p-28 flex flex-col items-center space-y-12 justify-center'>
                <div className='w-full space-y-10'>
                    <p className='text-black font-Inder font-semibold text-[40px] text-center'>LOGIN</p>
                    <div className='w-full space-y-7'>
                        <input type="text" id="first_name" class={inputStyle} placeholder="Nickname ou email" onChange={(e) => { setUser({...user, email: e.target.value}) }} value={user.username} autofocus/>
                        <div>
                            <input class={inputStyle} placeholder="Senha" onChange={(e) => { setUser({...user, password: e.target.value}) }}  value={user.password} type="password" required></input>
                            <button className='text-[#B4B2B2] pl-2.5 pt-3 underline'>Esqueci a senha</button>
                        </div>
                        <button className='text-black bg-[#D9D9D9] w-full p-2.5 rounded-full' onClick={e => {loginSubmit()}}>ENTRAR</button>
                        <div className='pt-9 space-y-5'>
                            <p className='text-black text-center font-Inder text-[21px]'>Não possui uma conta?</p>
                            <button className='text-black bg-[#D9D9D9] w-full p-2.5 rounded-full' onClick={e => window.location = 'http://localhost:3000/register'}>CADASTRE-SE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  
  }
  
  