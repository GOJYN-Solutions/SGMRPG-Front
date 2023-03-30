import { useEffect, useState } from "react"
import axios from 'axios'
//http://localhost:3333/users/1/fichas
export default function Profile() {

  const [userName, setUserName] = useState('')
  const [fichas, setFichas] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3333/users/${localStorage.getItem('id')}`)
      .then(res => {
        setUserName(res.data[0].nm_user)
      })
      .catch(err => {
        console.log(err)
      })
    axios.get(`http://localhost:3333/users/${localStorage.getItem('id')}/fichas`)
      .then(res => {
        console.log(res.data)
        setFichas(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);


  return (
    <div className="w-screen h-screen pt-10 ">
      <div className="w-full h-1/5 overflow-hidden flex p-5 justify-end bg-[url('https://ordemparanormal.com.br/wp-content/uploads/2021/09/TRSlNehdWzs-HD.jpg')] bg-cover">
        <button className="bg-red-900 h-12 w-24 rounded-full "><div>Editar</div></button>
      </div>
      <div className="h-4/5 flex flex-row">
        <div className="h-full p-3 w-3/12 flex flex-col gap-y-3 items-center bg-purple-500">
          <div className="w-36">
            <img className="" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          </div>
          <div>
            <p className="capitalize ">{userName}</p>
          </div>
        </div>
        <div className="h-full w-9/12 bg-purple-600 space-y-2 p-5 overflow-auto">
          <p className="font-bold text-2xl">Fichas</p>
          {
            fichas.map(ficha => (
              <div className="w-full p-2 h-32 space-y-3 rounded-md bg-purple-950 overflow-hidden ">
                <p className="font-bold ">{ficha.nm_ficha}</p>
                <p className="overflow-auto  h-20">xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            ))
            
          }
          <div className="w-full p-2 h-32 space-y-3 rounded-md bg-purple-950 overflow-hidden ">
                <p className="font-bold ">a</p>
                <p className="overflow-auto  h-20">xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
        </div>

      </div>
    </div>
  )

}