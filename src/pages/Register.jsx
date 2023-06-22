import axios from 'axios'
import { useState } from 'react'
import './cadastro.css'

export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        desc: '',
        birth: ''
    })

    let inputStyle = 'bg-[#D9D9D9] border border-gray-300 text-[#8D8D8D] font text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 font-Inder'
    
    function registrarUser (){
        // let data = new Date(user.birth)
        // let datafeita = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`
        const day = user.birth.substring(8,10)
        const month = user.birth.substring(5,7)
        const year = user.birth.substring(0,4)
        const datafeita = `${day}/${month}/${year}`
        for (let key in user) {
            if (user[key] == '') {
                alert("Preencha todos os campos")
                return
            }
        }

        axios.post('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/profile', {
            nick: user.username,
            email: user.email,
            passw: user.password,
            descr: user.desc,
            birth: datafeita
        })
        .then(resp => {
            alert("Registro feito com sucesso!")
            //window.location.href = 'http://localhost:3000/'
            localStorage.setItem('token',resp.data.token)
            console.log(resp.data.token)
            window.location.href = window.location.href
        })
        .catch(err => {
            alert("Nickname ou email já está em uso!")
            console.log(err)
        })
    }

    return(
        <div className='w-screen h-screen bg-gradient-to-b from-[#A52EFF] via-[#D186FF] to-[#ECCCFF] flex flex-row justify-between p-6 space-x-16'>
            <div className=' w-2/6  rounded-lg flex items-center'>
                <a href="Homepage.jsx"><img className='rounded-lg w-full h-full' src="https://mega.ibxk.com.br/2022/05/03/03001446876621.jpg" alt="" /></a>
            </div>
            <div className='bg-white w-4/6 h-auto rounded-lg p-20 flex flex-col items-center space-y-12 '>
                <div className='w-full space-y-10'>
                    <p className='text-black font-Inder font-semibold text-[40px] text-center'>CADASTRE-SE</p>
                    <div className='w-full space-y-7 flex flex-col items-center'>
                        <div className='space-y-2'>
                            <p className='text-black'>Nickname*</p>
                            <input type="text" className={inputStyle} onChange={(e) => { setUser({...user, username: e.target.value}) }} value={user.username} />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>E-mail*</p>
                            <input type="email" className={inputStyle} onChange={(e) => { setUser({...user, email: e.target.value}) }}  value={user.email} />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>Senha*</p>
                            <input type="password" className={inputStyle} onChange={(e) => { setUser({...user, password: e.target.value}) }}  value={user.password} />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>Descrição</p>
                            <input type="text" className={inputStyle} onChange={(e) => { setUser({...user, desc: e.target.value}) }}  value={user.desc} />
                        </div>
                        <div className='space-y-2 pb-11'>
                            <p className='text-black'>Data de Nascimento*</p>
                            <input type="date" className={inputStyle} onChange={(e) => { setUser({...user, birth: e.target.value}) }}  value={user.birth} />
                        </div>   
                        <button className='text-black bg-[#D9D9D9] w-96 p-2.5 rounded-full ' onClick={e => {registrarUser()}}>CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}