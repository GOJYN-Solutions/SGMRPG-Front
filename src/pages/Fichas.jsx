import { useEffect, useState } from "react"
import axios from 'axios'
import DataTable from "react-data-table-component";

import SheetCard from "../components/SheetCard/SheetCard";

export default function Fichas() {

    const [fichas, setFichas] = useState([])

    const [blackGround, setBlackground] = useState(false)
    const [createForm, setCreateForm] = useState(false)
    const [sheetLayout, setSheetLayout] = useState(false)
    const [ficha, setFicha] = useState()

    const [newFicha, setNewFicha] = useState({
      nmFicha: '',
      nmTipo: 'personagem',
      dsFicha: '',
      publico: false
    })

    const [filtro, setFiltro] = useState({
      nmFicha: '',
      nmTipo: '',
      nickname: '',
      publico: "",
      minhas: false
    })

    useEffect(() => {
      if(!filtro.minhas){
        let filtros = `?nmSheet=${filtro.nmFicha}&nmNick=${filtro.nickname}&nmType=${filtro.nmTipo}`
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/ficha/all${filtros}`)
        .then(resp => {
            setFichas(resp.data.items)
        })
        .catch(err => {

        })
      }else{
        let filtros = `?icPublic=${filtro.publico}&nmSheet=${filtro.nmFicha}&nmNick=${filtro.nickname}&nmType=${filtro.nmTipo}`
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/ficha/profile${filtros}`,{
          'headers':{
            auth: localStorage.getItem('token')
          }
        })
        .then(resp => {
            setFichas(resp.data.items)
        })
      }
    }, [newFicha, filtro, sheetLayout]);

    async function criaFicha(){
      await axios.post('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/ficha/profile',{
        nmSheet: newFicha.nmFicha,
        nmType: newFicha.nmTipo,
        icPublic: newFicha.publico?'1':'0',
        dsSheet: newFicha.dsFicha
      },{
        'headers':{
          auth: localStorage.getItem('token')
        }
      }).then(res=>{
        alert(res.data.resp)
        setBlackground(!blackGround)
        setCreateForm(false)
        setNewFicha({
          nmFicha: '',
          nmTipo: 'personagem',
          dsFicha: '',
          publico: false
        })
      })
    }

    function changeSheetLayout(){
      setSheetLayout(!sheetLayout)
      setBlackground(!blackGround)
    }

  return (
    <div className="w-screen h-screen pt-20 bg-fuchsia-600 px-24 pb-6">
      <div className="w-full h-full bg-white rounded-2xl p-10 ">
        <div className="flex flex-col h-full w-full space-y-3">
          <div className="w-full flex justify-between items-center">
            <p className="text-4xl text-[#A52EFF] font-light">FICHAS</p>
            <a href="campanhas">
              <p className="text-xl text-[#A52EFF] font-light">Explorar <b className="underline text-[#A52EFF] text-xl font-bold">CAMPANHAS</b> <b className="text-[#A52EFF] text-xl font-bold">{'->'}</b></p>
            </a>
          </div>
          <div className=" flex items-center">
            <div className="w-3/4 flex items-center gap-4">
              <p className="font-Inder text-sm text-[#A52EFF] font-bold">FILTRAR</p>
              <input placeholder="nome da ficha" type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"
                onChange={e=>{setFiltro({...filtro, nmFicha: e.target.value})}}
              />
              <input placeholder="tipo" type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"
                onChange={e=>{setFiltro({...filtro, nmTipo: e.target.value})}}
              />
              <select placeholder="próprias" className="bg-[#D9D9D9] h-8 w-32 rounded"
                onChange={e=>{setFiltro({...filtro, minhas: e.target.value=="1"?true:false, publico: '', nickname: ''})}}
              >
                <option value="0">Outras</option>
                <option value="1">Minhas</option>
              </select>

              {!filtro.minhas && 
                <input placeholder="nickname" type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"
                  onChange={e=>{setFiltro({...filtro, nickname: e.target.value})}}
                />
              }

              {filtro.minhas && 
                <select className="bg-[#D9D9D9] h-8 w-32 rounded"
                  onChange={e=>{setFiltro({...filtro, publico: e.target.value})}}
                >
                  <option value="">Todas</option>
                  <option value="0">Privado</option>
                  <option value="1">Público</option>
                </select>
              }
            </div>
            <div className="w-1/4 flex justify-end">
              <button 
                className="bg-[#AA36FF] rounded-full p-2 font-light font-Inder text-base"
                onClick={()=>{
                  setBlackground(!blackGround)
                  setCreateForm(true)
                }}
              >NOVA FICHA</button>
            </div>
          </div>


          {/*grayBackground*/}
          <div 
            className={blackGround?"w-full h-100 bg-neutral-700/75 absolute inset-0":"hidden"} 
            onClick={()=>{
              setBlackground(!blackGround)
              setCreateForm(false)
              setSheetLayout(false)
              setNewFicha({
                nmFicha: '',
                nmTipo: 'personagem',
                dsFicha: '',
                publico: false
              })
            }}  
          ></div>

          {/*newSheet*/}
          <div style={{
            width: '32%',
            // height: '80%',

            minWidth: 500,
            // minHeight: 600,

            backgroundColor: 'white',

            borderRadius: 20,

            position: 'absolute',
            top: '50%',
            left: '50%',

            transform: 'translate(-50%,-50%)',

            padding: 50,
            display: (createForm?'':'none')
          }}>
            <div style={{marginBottom: 15}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'inline'}} 
              >Nome</p>

              <input type="text" value={newFicha.nmFicha} onChange={e=>{setNewFicha({...newFicha,nmFicha: e.target.value})}}
                style={{
                  borderRadius: 5, width: '85%', height: 37, backgroundColor: '#FBF4FF', padding: 8, color: 'black', float: 'right'
                }} 
              />
            </div>

            <div style={{marginBottom: 15}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'inline'}} 
              >Tipo</p>

              <select value={newFicha.nmTipo} style={{
                  borderRadius: 5, width: '85%', height: 37, backgroundColor: '#FBF4FF', padding: 8, color: 'black', float: 'right'
                }} 
                onChange={e=>{setNewFicha({...newFicha,nmTipo: e.target.value})}}
              >
                <option value="personagem" style={{color: 'black'}}>
                  Personagem
                </option>

                <option value="item" style={{color: 'black'}}>
                  Item
                </option>
              </select>
            </div>

            <div style={{marginTop: 50}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'block', marginBottom: 10}} 
              >Descrição</p>

              <textarea value={newFicha.dsFicha} cols="30" rows="10" maxLength={70} onChange={e=>{setNewFicha({...newFicha,dsFicha: e.target.value})}}
                style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 70, color: 'black', padding: 10, resize: 'none'}}
              ></textarea>
            </div>
            
            <div style={{marginTop: 30, marginBottom: 20}}>
              <p 
                style={{
                  color: newFicha.publico?'limegreen':'coral', 
                  fontSize: 20, 
                  display: 'block', 
                  marginBottom: 10, 
                  textDecoration: 'underline', 
                  cursor: 'pointer',
                  width: 'max-content'
                }} 
                onClick={()=>{setNewFicha({...newFicha, publico: !newFicha.publico})}}
              >Tornar público? <span style={{fontWeight: 'bold', color: newFicha.publico?'limegreen':'coral'}}>{newFicha.publico?"Sim":"Não"}</span></p>
            </div>

            <button 
              className="bg-[#AA36FF] rounded-full w-20 p-2 font-light font-Inder text-base"
              onClick={()=>{criaFicha()}}
            >
                Criar
            </button>
          </div>

          {/*Tela da Ficha*/}
          {sheetLayout &&
            <SheetCard ficha={ficha} changeSheetLayout={changeSheetLayout} sheetLayout={sheetLayout} />
          }

          <div className="w-full h-full flex flex-wrap gap-6 overflow-y-auto scrollbar">
            <div className="h-1/2 w-full flex flex-wrap gap-4">

              {
                fichas.map((ficha)=>{
                  return(
                    <div style={{cursor:'pointer'}} className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2"
                      onClick={()=>{
                        setBlackground(!blackGround)
                        setSheetLayout(true)
                        setFicha(ficha)
                      }}
                    >
                      
                      <div className="w-full">
                        <p className="text-black text-base font-semibold truncate">{ficha.nm_sheet}</p>
                      </div>
                      <div className="h-full w-full overflow-y-auto scrollbar">
                        <p className="text-black text-sm font-Inder">{ficha.ds_sheet}</p>
                      </div>
                      <div className="w-full flex items-end justify-between">
                        <p className="text-sm font-semibold text-black">{ficha.nm_type}</p>
                        <p className="text-sm font-semibold text-black">Por {ficha.nm_nick}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div> 
          </div>
          {/* <div className="w-full h-full flex flex-col gap-6">
            <div className="h-1/2 w-full flex gap-4">
              {
                fichas.map((ficha, i)=>{
                  if(i <= 3){
                    return(
                      <div className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2">
                        <div className="w-full">
                          <p className="text-black text-base font-semibold truncate">{ficha.nm_sheet}</p>
                        </div>
                        <div className="h-full w-full overflow-y-auto scrollbar">
                            <p className="text-black text-sm font-Inder">{ficha.ds_sheet} *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo modi sapiente ad molestiae animi tempora nisi quae? Quasi praesentium, consectetur nisi magni adipisci aliquam commodi. Sed pariatur numquam vel et. </p>
                        </div>
                        <div className="w-full flex items-end justify-between">
                          <p className="text-sm font-semibold text-black">{ficha.nm_type}</p>
                          <p className="text-sm font-semibold text-black">Por @{ficha.nm_nick}</p>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
            <div className="h-1/2 w-full flex gap-4">
              {
                fichas.map((ficha, i)=>{
                  let falta = 4
                  if(i > 3 && i < 7){
                    falta = falta - 1
                    return(
                      <div className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2">
                        <div className="w-full">
                          <p className="text-black text-base font-semibold truncate">{ficha.nm_sheet}</p>
                        </div>
                        <div className="h-full w-full overflow-y-auto scrollbar">
                            <p className="text-black text-sm font-Inder">{ficha.ds_sheet} *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo modi sapiente ad molestiae animi tempora nisi quae? Quasi praesentium, consectetur nisi magni adipisci aliquam commodi. Sed pariatur numquam vel et. </p>
                        </div>
                        <div className="w-full flex items-end justify-between">
                          <p className="text-sm font-semibold text-black">{ficha.nm_type}</p>
                          <p className="text-sm font-semibold text-black">Por @{ficha.nm_nick}</p>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}