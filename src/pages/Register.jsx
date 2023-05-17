import axios from 'axios'
import { useState } from 'react'
import './cadastro.css'

export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        birth: '',
        tel: ''
    })

    let inputStyle = 'bg-[#D9D9D9] border border-gray-300 text-[#8D8D8D] font text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 font-Inder'

    function registrarUser (){
        console.log(user.birth)
        // axios.post('http://localhost:3333/users', {
        //     username: user.username,
        //     email: user.email,
        //     password: user.password,
        //     birth: user.birth,
        //     tel: user.tel
        // })
        // .then(resp => {
        //     console.log(resp.data)
        //     localStorage.setItem('id', resp.data[0])
        //     window.location = window.location
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    return(

        <div className='w-screen bg-gradient-to-b from-[#A52EFF] via-[#D186FF] to-[#ECCCFF] flex flex-row justify-between p-6 space-x-16'>
            <div className=' w-2/6  rounded-lg flex items-center'>
                <img className='rounded-lg w-full h-full' src="https://mega.ibxk.com.br/2022/05/03/03001446876621.jpg" alt="" />
            </div>
            <div className='bg-white w-4/6 h-auto rounded-lg p-20 flex flex-col items-center space-y-12 '>
                <div className='w-full space-y-10'>
                    <p className='text-black font-Inder font-semibold text-[40px] text-center'>CADASTRE-SE</p>
                    <div className='w-full space-y-7 flex flex-col items-center'>
                        <div className='space-y-2'>
                            <p className='text-black'>Nickname*</p>
                            <input type="text" class={inputStyle} onChange={(e) => { setUser({...user, username: e.target.value}) }} value={user.username} autofocus/>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>E-mail*</p>
                            <input type="email" class={inputStyle} onChange={(e) => { setUser({...user, email: e.target.value}) }}  value={user.email} autofocus/>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>Senha*</p>
                            <input type="password" class={inputStyle} onChange={(e) => { setUser({...user, password: e.target.value}) }}  value={user.password} autofocus/>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-black'>Data de Nascimento*</p>
                            <input type="date" class={inputStyle} onChange={(e) => { setUser({...user, birth: e.target.value}) }}  value={user.birth} autofocus/>
                        </div>
                        <div className='space-y-2 pb-11'>
                            <p className='text-black'>Telefone</p>
                            <input type="tel    " class={inputStyle} onChange={(e) => { setUser({...user, tel: e.target.value}) }}  value={user.tel} autofocus/>
                        </div>  
                        <button className='text-black bg-[#D9D9D9] w-96 p-2.5 rounded-full ' onClick={e => {registrarUser()}}>CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    //     <main class="base">
    //     <div class="teste">teste</div>
    //     <div class="container">
    //         <div class="div-cadastro">
    //             <h1 id="titulo">CADASTRE-SE</h1>
    //             <form class="form-cadastro" onSubmit={e=>registrarUser(e)} >
    //                 <label>
    //                     Nickname<span>*</span>
    //                     <input value={user.username} onChange={e=> setUser({...user, username: e.target.value})} class="campo-cadastro" type="text" autofocus/>
    //                 </label>
    //                 <label>
    //                     E-mail<span>*</span>
    //                     <input value={user.email} onChange={e=> setUser({...user, email: e.target.value})} id="email" class="campo-cadastro" type="email"/>
    //                 </label>
    //                 <label>
    //                     Senha<span>*</span>
    //                     <input value={user.password} onChange={e=> setUser({...user, password: e.target.value})} class="campo-cadastro" type="password"/>
    //                 </label>
    //                 <button id= "btn-cadastro">CADASTRAR</button>
    //             </form>
    //         </div>
    //     </div>
    // </main>
    )
  
  }