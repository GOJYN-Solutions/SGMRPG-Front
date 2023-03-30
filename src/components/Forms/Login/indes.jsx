import { useState } from 'react'
import './style.css'
import axios from 'axios'

export default function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function loginSubmit(e){
        e.preventDefault()
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
        <main className="base pt-16">
            <div class="teste ">teste</div>
            <div class="container">
                <div class="div-login">
                    <h1>LOGIN</h1>
                    <form class="form-login" onSubmit={loginSubmit}>
                        <input class="campo-login" value={user.email} onChange={(e) => { setUser({...user, email: e.target.value}) }} type="text" placeholder="Nickname ou Email" autofocus/>
                        <input class="campo-login" value={user.password} onChange={(e) => { setUser({...user, password: e.target.value}) }}  type="password" placeholder="Senha"/>
                        <button id= "btn-login">ENTRAR</button>
                    </form>
                    <div class="cadastro">
                        <p>Não possui uma conta?</p>
                        <button id="btn-cadastro">CADASTRE-SE</button>
                    </div>
                </div>
            </div>
        </main>
    )
  
  }
  
  