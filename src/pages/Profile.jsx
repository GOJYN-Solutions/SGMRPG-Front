import { useEffect, useState } from "react"
import axios from 'axios'
//http://localhost:3333/users/1/fichas
export default function Profile() {

  const [userName, setUserName] = useState('')
  const [fichas, setFichas] = useState([{cd_ficha: 'teste', nm_ficha: 'test2'}])

  useEffect(() => {
    axios.get(`http://localhost:3333/users/${localStorage.getItem('id')}`)
      .then(res => {
        setUserName(res.data[0].nm_user)
      })
      .catch(err => {
      })
    axios.get(`http://localhost:3333/users/${localStorage.getItem('id')}/fichas`)
      .then(res => {
        setFichas(res.data)
      })
      .catch(err => {
      })
  }, []);


  return (
    <div className="w-screen h-screen bg-[#AA36FF] pt-12 px-16">
      <div className="h-full w-full bg-white flex flex-col">
        <div className="h-2/6 overflow-hidden flex bg-[url('https://ordemparanormal.com.br/wp-content/uploads/2021/09/TRSlNehdWzs-HD.jpg')] bg-cover">
          <div className="h-full w-full flex justify-end items-center pb-8 px-4">
            <button className="bg-[#A52EFF] h-12 w-24 rounded-full"><div>Editar</div></button>
          </div>
        </div>


        <div className="w-3/12 flex flex-col absolute justify-center items-center gap-4 pr-8 pt-28">
          <img className="w-40" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          <p className="font-semibold text-2xl text-black">@{userName}USER123</p>
          <div className="w-full p-4">
            <div className="bg-[#F7EBFF] rounded-2xl p-8  "> 
              <p className="font-Inder text-lg text-center text-black">“testando”</p>  
            </div>
          </div> 
        </div>

        <div className="h-full">
            <div className="h-4/5  flex flex-row bg-white">
              <div className="h-full w-3/12 flex flex-col border-r-2 pt-12">
                
              </div>
              <div className="w-9/12 flex flex-ROW h-full px-12 pt-10 pb-14 gap-5">
                <div className="h-full w-1/2 space-y-2">
                  <p className="text-black pl-4 font-Inder">SUAS CAMPANHAS</p>
                  <div className="h-full w-full bg-[#EDD9FA] rounded-[20px]">

                  </div>
                </div>

                <div className="h-full w-1/2 space-y-2">
                  <p className="text-black pl-4 font-Inder">SUAS FICHAS</p>
                  <div className="h-full w-full bg-[#EDD9FA] rounded-[20px]">

                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}











{/* <div className="w-full h-1/5 overflow-hidden flex bg-[url('https://ordemparanormal.com.br/wp-content/uploads/2021/09/TRSlNehdWzs-HD.jpg')] bg-cover">
        <div className="w-3/12 flex flex-col absolute justify-center items-center gap-4 pt-10">
          <img className="w-40" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          <p className="font-semibold text-2xl text-black">@{userName}USER123</p>
        </div>
        <div className="h-full w-full flex justify-end items-center pb-8 px-4">
          <button className="bg-[#A52EFF] h-12 w-24 rounded-full"><div>Editar</div></button>
        </div>
      </div>
      <div className="h-4/5  flex flex-row bg-white">
        <div className="h-full w-3/12 flex flex-col border-r-2 ">
          
        </div>
        <div className="w-9/12 flex flex-ROW h-full px-12 pt-10 pb-14 gap-5">
          <div className="h-full w-1/2 space-y-2">
            <p className="text-black pl-4 font-Inder">SUAS CAMPANHAS</p>
            <div className="h-full w-full bg-[#EDD9FA] rounded-[20px]">

            </div>
          </div>

          <div className="h-full w-1/2 space-y-2">
            <p className="text-black pl-4 font-Inder">SUAS FICHAS</p>
            <div className="h-full w-full bg-[#EDD9FA] rounded-[20px]">

            </div>
          </div>
        </div>
        {
          //  <div className="h-full w-9/12 space-y-2 p-5 overflow-auto">
          //   <div className="flex flex-row justify-between">
          //     <p className="font-bold text-2xl text-black">Fichas</p>
          //     <div>
          //       <button onClick={e => window.location = 'http://localhost:3000/registerFicha'} className="bg-green-700 p-3 rounded-xl">Criar</button>

          //     </div>
          //   </div>
          //   {fichas.length != 0 ? fichas.map(ficha => (
          //     <div key={ficha.cd_ficha} className="w-full p-2 h-32 space-y-3 rounded-md bg-purple-950 overflow-hidden ">
          //       <div className="flex justify-between">
          //         <p className="font-bold ">{ficha.nm_ficha}</p>
          //         <div className="space-x-2">
          //           <button onClick={e => {
          //             localStorage.setItem('id_ficha', ficha.cd_ficha)
          //             window.location = 'http://localhost:3000/updateFicha'
          //           }} className="bg-yellow-700 p-1 rounded-xl">Editar</button>
          //           <button onClick={e => {
          //             axios.delete(`http://localhost:3333/users/${localStorage.getItem('id')}/ficha/${ficha.cd_ficha}`)
          //             window.location = window.location
          //           }} className="bg-red-700 p-1 rounded-xl">Deletar</button>

          //         </div>

          //       </div>
          //       <p className="overflow-auto  h-20">{ficha.ds_ficha}</p>

          //     </div>
          //   )) : <p className="text-black">Você não tem fichas...</p>}

          // </div> 
        }

      </div> */}