import { useEffect, useState } from "react"
import axios from 'axios'
import DataTable from "react-data-table-component";

import CampaignCard from "../components/CampaignCard/CampaignCard";

export default function Campanhas() {

  const [campanhas, setCampanhas] = useState([])

  const [blackGround, setBlackground] = useState(false)
  const [createForm, setCreateForm] = useState(false)
  const [campaignLayout, setCampaignLayout] = useState(false)
  const [campanha, setCampanha] = useState()

  const [newCampanha, setNewCampanha] = useState({
    nmCampaign: '',
    dsCampaign: '',
    qtMinAge: '',
    dsStory: '',
    icPublic: false
  })

  const [filtro, setFiltro] = useState({
    nmCampaign: '',
    nickname: '',
    qtMinAge: '',
    publico: '',
    minhas: false
  })
 
  useEffect(() => {
    if(!filtro.minhas){
      let filtros = `?nmNick=${filtro.nickname}&nmCampaign=${filtro.nmCampaign}&qtMinAge=${filtro.qtMinAge}`
      axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/all${filtros}`)
      .then(resp => {
        console.log(resp.data.items)
        setCampanhas(resp.data.items)
      })
      .catch(err => {

      })
    }else{
      let filtros = `?nmNick=${filtro.nickname}&nmCampaign=${filtro.nmCampaign}&qtMinAge=${filtro.qtMinAge}&icPublic=${filtro.publico}`
      axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/profile${filtros}`,{
        'headers':{
          auth: localStorage.getItem('token')
        }
      })
      .then(resp => {
        setCampanhas(resp.data.items)
      })
    }
  }, [newCampanha, filtro, campaignLayout]);

  async function criaCampanha(){
    await axios.post('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/profile',{
      nmCampaign: newCampanha.nmCampaign,
      dsCampaign: newCampanha.dsCampaign,
      qtMinAge: newCampanha.qtMinAge,
      dsStory: newCampanha.dsStory,
      icPublic: newCampanha.icPublic?'1':'0'
    },{
      'headers':{
        auth: localStorage.getItem('token')
      }
    }).then(res=>{
      alert(res.data.resp)
      setBlackground(!blackGround)
      setCreateForm(false)
      setNewCampanha({
        nmCampaign: '',
        dsCampaign: '',
        qtMinAge: '',
        dsStory: '',
        icPublic: false
      })
    })
  }

  function changeCampaignLayout(){
    setCampaignLayout(!campaignLayout)
    setBlackground(!blackGround)
  }

  return (
    <div className="w-screen h-screen pt-20 bg-fuchsia-600 px-24 pb-6">
      <div className="w-full bg-white rounded-2xl p-10 ">
        <div className="flex flex-col h-full w-full space-y-3">
          <div className="w-full flex justify-between items-center">
            <p className="text-4xl text-[#A52EFF] font-light ">CAMPANHAS</p>
            <a href="fichas">
              <p className="text-xl text-[#A52EFF] font-light">Explorar <b className="underline text-[#A52EFF] text-xl font-bold">FICHAS</b> <b className="text-[#A52EFF] text-xl font-bold">{'->'}</b></p>
            </a>
          </div>
          <div className=" flex items-center">
            <div className="w-3/4 flex items-center gap-4">
              <p className="font-Inder text-sm text-[#A52EFF] font-bold">FILTRAR</p>
              <input placeholder="nome da campanha" type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"
                onChange={e=>{setFiltro({...filtro, nmCampaign: e.target.value})}}
              />
              <input placeholder="idade" type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"
                onChange={e=>{setFiltro({...filtro, qtMinAge: e.target.value})}}
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
              >NOVA CAMPANHA</button>
            </div>
          </div>

          {/*grayBackground*/}
          <div 
            className={blackGround?"w-full h-100 bg-neutral-700/75 absolute inset-0":"hidden"} 
            onClick={()=>{
              setBlackground(!blackGround)
              setCreateForm(false)
              setCampaignLayout(false)
              setNewCampanha({
                nmCampaign: '',
                dsCampaign: '',
                qtMinAge: '',
                dsStory: '',
                icPublic: false
              })
            }}  
          ></div>

          {/*newCampaign*/}
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

              <input type="text" value={newCampanha.nmCampaign} onChange={e=>{setNewCampanha({...newCampanha, nmCampaign: e.target.value})}}
                style={{
                  borderRadius: 5, width: '85%', height: 37, backgroundColor: '#FBF4FF', padding: 8, color: 'black', float: 'right'
                }} 
              />
            </div>

            <div style={{marginBottom: 15}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'inline'}} 
              >Descricão</p>

              <textarea value={newCampanha.dsCampaign} cols="30" rows="10" maxLength={70} onChange={e=>{setNewCampanha({...newCampanha,dsCampaign: e.target.value})}}
                style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 70, color: 'black', padding: 10, resize: 'none'}}
              ></textarea>
            </div>

            <div style={{marginBottom: 15}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'inline'}} 
              >Idade mínima</p>

              <input type="number" value={newCampanha.qtMinAge} onChange={e=>{setNewCampanha({...newCampanha, qtMinAge: e.target.value})}}
                style={{
                  borderRadius: 5, width: '68%', height: 37, backgroundColor: '#FBF4FF', padding: 8, color: 'black', float: 'right'
                }} 
              />
            </div>
            
            <div style={{marginTop: 30, marginBottom: 20}}>
              <p 
                style={{
                  color: newCampanha.icPublic?'limegreen':'coral', 
                  fontSize: 20, 
                  display: 'block', 
                  marginBottom: 10, 
                  textDecoration: 'underline', 
                  cursor: 'pointer',
                  width: 'max-content'
                }} 
                onClick={()=>{setNewCampanha({...newCampanha, icPublic: !newCampanha.icPublic})}}
              >Tornar público? <span style={{fontWeight: 'bold', color: newCampanha.icPublic?'limegreen':'coral'}}>{newCampanha.icPublic?"Sim":"Não"}</span></p>
            </div>

            <div style={{marginBottom: 15}}>
              <p 
                style={{color: 'black', fontSize: 20, display: 'inline'}} 
              >História</p>

              <textarea value={newCampanha.dsStory} cols="30" rows="10" onChange={e=>{setNewCampanha({...newCampanha,dsStory: e.target.value})}}
                style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 150, color: 'black', padding: 10, resize: 'none'}}
              ></textarea>
            </div>

            <button 
              className="bg-[#AA36FF] rounded-full w-20 p-2 font-light font-Inder text-base"
              onClick={()=>{criaCampanha()}}
            >
                Criar
            </button>
          </div>

          {/*Tela da Ficha*/}
          {campaignLayout &&
            <CampaignCard campanha={campanha} changeCampaignLayout={changeCampaignLayout} />
          }

          <div className="w-full h-full flex flex-wrap gap-6 overflow-y-auto scrollbar">
            <div className="h-1/2 w-full flex flex-wrap gap-4">

              {
                campanhas.map((campanha)=>{
                  return(
                    <div style={{cursor:'pointer'}} className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2"
                      onClick={()=>{
                        setBlackground(!blackGround)
                        setCampaignLayout(true)
                        setCampanha(campanha)
                      }}
                    >
                      
                      <div className="w-full">
                        <p className="text-black text-base font-semibold truncate">{campanha.nm_campaign}</p>
                      </div>
                      <div className="h-full w-full overflow-y-auto scrollbar">
                        <p className="text-black text-sm font-Inder">{campanha.ds_campaign}</p>
                      </div>
                      <div className="w-full flex items-end justify-between">
                        <p 
                          style={{backgroundColor: 'black', padding: 5, borderRadius: 10}}
                          className="text-sm font-semibold text-white"
                        >+{campanha.qt_minimal_age}</p>
                        <p className="text-sm font-semibold text-black">Por {campanha.nm_nick}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div> 
          </div>

        </div>
      </div>
      
    </div>
  )
}