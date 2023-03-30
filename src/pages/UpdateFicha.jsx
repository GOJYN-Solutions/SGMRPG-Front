import axios from 'axios'
import { useEffect, useState } from 'react'
import './cadastro.css'

export default function UpdateFicha() {
    const [ficha, setFicha] = useState({
        nome: '',
        desc: ''
    })

    useEffect(()=>{
        axios.get(`http://localhost:3333/users/${localStorage.getItem('id')}/fichas/${localStorage.getItem('id_ficha')}`)
        .then(res=> {
            setFicha({
                nome: res.data[0].nm_ficha,
                desc: res.data[0].ds_ficha
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    

    function registrarFicha (e){
        e.preventDefault()
        axios.post(`http://localhost:3333/users/${localStorage.getItem('id')}/update/${localStorage.getItem('id_ficha')}`, {
            nome: ficha.nome,
            desc: ficha.desc
        })
        .then(resp => {
            console.log(resp.data)
            window.location = 'http://localhost:3000/profile'
            localStorage.removeItem('id_ficha')
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
                <h1 id="titulo">EDITANDO FICHA</h1>
                <form class="form-cadastro" onSubmit={e=>registrarFicha(e)} >
                    <label>
                        Titulo<span>*</span>
                        <input value={ficha.nome} onChange={e=> setFicha({...ficha, nome: e.target.value})} class="campo-cadastro" type="text" autofocus/>
                    </label>
                    <label>
                        Descrição<span>*</span>
                        <input value={ficha.desc} onChange={e=> setFicha({...ficha, desc: e.target.value})} id="email" class="campo-cadastro" type="text"/>
                    </label>
                    <button id= "btn-cadastro">EDITAR</button>
                </form>
            </div>
        </div>
    </main>
    )
  
  }