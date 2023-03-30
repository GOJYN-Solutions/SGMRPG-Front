import axios from 'axios'
import { useState } from 'react'
import './cadastro.css'

export default function RegisterFicha() {

    const [ficha, setFicha] = useState({
        nome: '',
        desc: ''
    })

    function registrarFicha (e){
        e.preventDefault()
        axios.post(`http://localhost:3333/users/${localStorage.getItem('id')}/fichas`, {
            nome: ficha.nome,
            desc: ficha.desc
        })
        .then(resp => {
            console.log(resp.data)
            window.location = 'http://localhost:3000/profile'
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
                <h1 id="titulo">CADASTRE UMA FICHA</h1>
                <form class="form-cadastro" onSubmit={e=>registrarFicha(e)} >
                    <label>
                        Titulo<span>*</span>
                        <input value={ficha.nome} onChange={e=> setFicha({...ficha, nome: e.target.value})} class="campo-cadastro" type="text" autofocus/>
                    </label>
                    <label>
                        Descrição<span>*</span>
                        <input value={ficha.desc} onChange={e=> setFicha({...ficha, desc: e.target.value})} id="email" class="campo-cadastro" type="text"/>
                    </label>
                    <button id= "btn-cadastro">CRIAR</button>
                </form>
            </div>
        </div>
    </main>
    )
  
  }