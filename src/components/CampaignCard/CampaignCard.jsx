import {useState, useEffect} from 'react'
import axios from 'axios'

export default function CampaignCard({campanha, changeCampaignLayout}) {
    const [campaignInfo, setCampaignInfo] = useState(campanha)
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

        if(res.data.items[0].cd_user == campaignInfo.cd_user)
          setAuth(true)
      })
    },[auth])

    async function atualizaCampanha(){

      axios.put(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/profile/${campaignInfo.cd_campaign}`,{
        nmCampaign: campaignInfo.nm_campaign,
        dsCampaign: campaignInfo.ds_campaign,
        qtMinAge: campaignInfo.qt_minimal_age,
        dsStory: campaignInfo.ds_story,
        icPublic: campaignInfo.ic_public
      },{
        'headers':{
          auth: localStorage.getItem('token')
        }
      }).then(res=>{
        alert(res.data.resp)
      })
    }
    
    async function deletaCampaign(){
      axios.delete(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campanha/profile/${campaignInfo.cd_campaign}`,{
        'headers':{
          auth: localStorage.getItem('token')
        }
      }).then(res=>{
        alert(res.data.resp)
        changeCampaignLayout()
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
                    atualizaCampanha()
                  }}
                />

                <img 
                  src="https://raw.githubusercontent.com/feathericons/feather/db2364f996e407cb933a37b6cafc96659debf771/icons/trash-2.svg" 
                  style={{display:'inline', cursor: 'pointer'}}
                  onClick={()=>{
                    deletaCampaign()
                  }}
                />
              </div>
            }

            <input 
              style={{color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 25, marginBottom: 25}}
              type="text" value={campaignInfo.nm_campaign} 
              onChange={e=>{setCampaignInfo({...campaignInfo, nm_campaign: e.target.value})}}
              readOnly={!auth}
            />

            <textarea cols="30" rows="10"
            maxLength={70}
              style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 300, color: 'black', padding: 10, resize: 'none'}}
              value={campaignInfo.ds_campaign}
              onChange={e=>{setCampaignInfo({...campaignInfo, ds_campaign: e.target.value})}}
              readOnly={!auth}
            >
            </textarea>

            <p 
              style={{color: 'black', fontSize: 18, textAlign: 'left', marginTop: 10, marginBottom: 10}}
            >HISTÓRIA</p>

            <textarea cols="30" rows="10"
              style={{backgroundColor: '#FBF4FF', borderRadius: 5, width: '100%', height: 300, color: 'black', padding: 10, resize: 'none'}}
              value={campaignInfo.ds_story}
              onChange={e=>{setCampaignInfo({...campaignInfo, ds_story: e.target.value})}}
              readOnly={!auth}
            >
            </textarea>

            <input 
              style={{color: 'black', fontSize: 15, marginTop: 25, marginBottom: 25, display: 'inline', borderRadius: 10, padding: 5}}
              type="text" value={campaignInfo.qt_minimal_age} 
              onChange={e=>{setCampaignInfo({...campaignInfo, qt_minimal_age: e.target.value})}}
              readOnly={!auth}
            />

            

            <label style={{float: 'right', padding: 25}}>
              <p style={{color: 'black', fontSize: 15, fontWeight: 'normal', display: 'inline'}} >público:</p>
              <input type="checkbox" checked={campaignInfo.ic_public=="0"?false:true} style={{transform: 'translate(5px,2px)'}} 
                onChange={e=>{if(auth) setCampaignInfo({...campaignInfo, ic_public: e.target.checked?"1":"0"})}}
                onclick="return false;"
              />
            </label>
            
        </div>
    )

}
  
  