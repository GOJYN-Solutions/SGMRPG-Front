import {useState, useEffect} from 'react'
import axios from 'axios'

export default function SheetCard({ficha, changeSheetLayout}) {

    const [fichaInfo, setFichaInfo] = useState(ficha)
    const [user, setUser] = useState({
      codigo: '',
      nick: '',
      email: '',
      desc: '',
      imagem: '',
      banner: '',
      birth: ''
    })
    const [auth, setAuth] = useState(false)

    useEffect(()=>{
      axios.get('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/profile',{
      'headers':{
          auth: localStorage.getItem('token')
      }
      }).then(res=>{
        setUser({
          codigo: res.data.items[0].cd_user,
          nick: res.data.items[0].nm_nick,
          email: res.data.items[0].nm_email,
          desc: res.data.items[0].ds_user,
          imagem: res.data.items[0].im_profile,
          banner: res.data.items[0].im_banner,
          birth: res.data.items[0].dt_birth
        })

        if(res.data.items[0].cd_user == fichaInfo.cd_user)
          setAuth(true)
      })
    },[auth])

    async function atualizaFicha(){
      axios.put(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/ficha/profile/${fichaInfo.cd_sheet}`,{
        nmSheet: fichaInfo.nm_sheet,
        nmType: fichaInfo.nm_type,
        icPublic: fichaInfo.ic_public,
        dsSheet: fichaInfo.ds_sheet
      },{
        'headers':{
          auth: localStorage.getItem('token')
        }
      }).then(res=>{
        alert("Ação concluida com sucesso!")
        changeSheetLayout()
        window.location.href = window.location.href
      })
    }
    
    async function deletaFicha(){
      axios.delete(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/ficha/profile/${fichaInfo.cd_sheet}`,{
        'headers':{
          auth: localStorage.getItem('token')
        }
      }).then(res=>{
        alert(res.data.resp)
        changeSheetLayout()
        window.location.href = window.location.href
      })
    }

    return(
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
        }}>
            {auth &&
              <div>
                <img 
                  src="https://raw.githubusercontent.com/feathericons/feather/db2364f996e407cb933a37b6cafc96659debf771/icons/edit.svg" 
                  style={{display:'inline', marginRight: 15, cursor: 'pointer'}} 
                  onClick={()=>{
                    atualizaFicha()
                  }}
                />

                <img 
                  src="https://raw.githubusercontent.com/feathericons/feather/db2364f996e407cb933a37b6cafc96659debf771/icons/trash-2.svg" 
                  style={{display:'inline', cursor: 'pointer'}}
                  onClick={()=>{
                    deletaFicha()
                  }}
                />
              </div>
            }

            <input 
              style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 25, marginBottom: 25}}
              type="text" value={fichaInfo.nm_sheet} 
              onChange={e=>{setFichaInfo({...fichaInfo, nm_sheet: e.target.value})}}
              readOnly={!auth}
            />
            {/* <p 
              style={{color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 25}}
            >{fichaInfo.nm_sheet}</p> */}

            <p 
              style={{color: 'black', fontSize: 18, textAlign: 'left', marginTop: 10, marginBottom: 10}}
            >Descrição</p>

            <textarea cols="30" rows="10"
              style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 300, color: 'black', padding: 10, resize: 'none'}}
              value={fichaInfo.ds_sheet}
              onChange={e=>{setFichaInfo({...fichaInfo, ds_sheet: e.target.value})}}
              readOnly={!auth}
            >
            </textarea>

            {/* <input 
              style={{color: 'black', fontSize: 15, marginTop: 25, marginBottom: 25, display: 'inline'}}
              type="text" value={fichaInfo.nm_type} 
              onChange={e=>{setFichaInfo({...fichaInfo, nm_type: e.target.value})}}
            /> */}

            <select 
              style={{color: 'black', fontSize: 15, marginTop: 25, marginBottom: 25, display: 'inline'}}
              value={fichaInfo.nm_type} 
              onChange={e=>{setFichaInfo({...fichaInfo, nm_type: e.target.value})}}
            >
              {!auth &&
                  <option style={{color:'black'}} value="personagem">{fichaInfo.nm_type}</option>
              }
              {auth &&
                <>
                  <option style={{color:'black'}} value="personagem">Personagem</option>
                  <option style={{color:'black'}} value="item">Item</option>
                </>
              }
            </select>

            <label style={{float: 'right', padding: 25}}>
              <p style={{color: 'black', fontSize: 15, fontWeight: 'normal', display: 'inline'}} >público:</p>
              <input type="checkbox" checked={fichaInfo.ic_public=="0"?false:true} style={{transform: 'translate(5px,2px)'}} 
                onChange={e=>{if(auth) setFichaInfo({...fichaInfo, ic_public: e.target.checked?"1":"0"})}}
                onclick="return false;"
              />
            </label>
            
        </div>
    )

}
  
  