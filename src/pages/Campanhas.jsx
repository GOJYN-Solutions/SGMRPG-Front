import { useEffect, useState } from "react"
import axios from 'axios'
import DataTable from "react-data-table-component";

export default function Campanhas() {

      const [user, setUser] = useState({
        codigo: '',
        nick: '',
        email: '',
        desc: '',
        imagem: '',
        banner: '',
        birth: ''
    })
    
    const [companhas, setCampanhas] = useState([])

    useEffect(() => {
    axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/all`)
        .then(resp => {
            console.log(resp.data.items)
            setCampanhas(resp.data.items)
        })
        .catch(err => {

        })
    }, []);


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
              <input type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"/>
              <input type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"/>
              <input type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"/>
              <input type="text" className="bg-[#D9D9D9] h-8 w-32 rounded"/>
            </div>
            <div className="w-1/4 flex justify-end">
              <button className="bg-[#AA36FF] rounded-full p-2 font-light font-Inder text-base">NOVA FICHA</button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-6">
            <div className="h-1/2 w-full flex gap-4">
              {
                companhas.map((ficha, i)=>{
                  if(i <= 3){
                    return(
                      <div className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2">
                        <div className="w-full">
                          <p className="text-black text-base font-semibold truncate">{ficha.nm_campaign}</p>
                        </div>
                        <div className="h-full w-full overflow-y-auto scrollbar">
                            <p className="text-black text-sm font-Inder">{ficha.ds_campaign} *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo modi sapiente ad molestiae animi tempora nisi quae? Quasi praesentium, consectetur nisi magni adipisci aliquam commodi. Sed pariatur numquam vel et. </p>
                        </div>
                        <div className="w-full flex items-end justify-between">
                          <p className="text-sm font-semibold text-black">{ficha.qt_minimal_age}</p>
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
                companhas.map((ficha, i)=>{
                  let falta = 4
                  if(i > 3 && i < 7){
                    falta = falta - 1
                    return(
                        <div className="w-60 h-40 bg-[#D9D9D9] rounded-md shadow-xl p-3 flex flex-col gap-2">
                        <div className="w-full">
                          <p className="text-black text-base font-semibold truncate">{ficha.nm_campaign}</p>
                        </div>
                        <div className="h-full w-full overflow-y-auto scrollbar">
                            <p className="text-black text-sm font-Inder">{ficha.ds_campaign} *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo modi sapiente ad molestiae animi tempora nisi quae? Quasi praesentium, consectetur nisi magni adipisci aliquam commodi. Sed pariatur numquam vel et. </p>
                        </div>
                        <div className="w-full flex items-end justify-between">
                          <p className="text-sm font-semibold text-black">{ficha.qt_minimal_age}</p>
                          <p className="text-sm font-semibold text-black">Por @{ficha.nm_nick}</p>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}