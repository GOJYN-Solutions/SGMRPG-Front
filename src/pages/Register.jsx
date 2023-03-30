import axios from 'axios'
import { useState } from 'react'
import './cadastro.css'

export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })

    function registrarUser (e){
        e.preventDefault()
        axios.post('http://localhost:3333/users', {
            username: user.username,
            email: user.email,
            password: user.password
        })
        .then(resp => {
            console.log(resp.data)
            localStorage.setItem('id', resp.data[0])
            window.location = window.location
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <main class="base">
        <div class="teste">teste</div>
        <div class="container">
            <div class="div-cadastro">
                <h1 id="titulo">CADASTRE-SE</h1>
                <form class="form-cadastro" onSubmit={e=>registrarUser(e)} >
                    <label>
                        Nickname<span>*</span>
                        <input value={user.username} onChange={e=> setUser({...user, username: e.target.value})} class="campo-cadastro" type="text" autofocus/>
                    </label>
                    <label>
                        E-mail<span>*</span>
                        <input value={user.email} onChange={e=> setUser({...user, email: e.target.value})} id="email" class="campo-cadastro" type="email"/>
                    </label>
                    <label>
                        Senha<span>*</span>
                        <input value={user.password} onChange={e=> setUser({...user, password: e.target.value})} class="campo-cadastro" type="password"/>
                    </label>
                    <button id= "btn-cadastro">CADASTRAR</button>
                </form>
            </div>
        </div>
    </main>
    )
  
  }