
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import { useState, useEffect } from 'react'
import { Gift } from '../../Components/Icons/Gift.jsx'
import { NoImage } from '../../Components/Icons/NoImage.jsx'
import moment from 'moment/moment.js'

export default function () {

    const [edit, setEdit] = useState(true)

    const [user, setUser] = useState({
        nm_nick: '',
        dt_birth: '',
        ds_user: ''
        
    })    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/read?auth=${localStorage.getItem('token')}`)
            .then(resp => {
                if(resp.data.items.length == 0) {
                    localStorage.clear()   
                    window.location.reload(false);        
                }
                setUser(resp.data.items[0])
                setUser(user=> ({...user, dt_birth: moment(resp.data.items[0].dt_birth).add(1, 'days').format("DD/MM/YYYY")}))
            
            })
    },[])

    const changeDesc = () => {
        axios.put('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/update', {
            auth: localStorage.getItem('token'),
            descr: user.ds_user
        })
        .then(resp => {
             window.location.reload(false);
        })
    }

    console.log(user.ds_user)
    return(
        <div className='h-screen'>
            <Navbar navbarLogada={true}/>
            <div className='h-[94.26vh] bg-gradient-to-b to-[#313F96] from-[#7A08DB] flex  justify-center pt-[2.5vh]'>
                <div className='w-[9.1667vh] mt-[10vh] absolute'>
                    <NoImage/>
                </div> 
                {!edit &&
                    <div className='backdrop-blur-[1.8px] ml-[50vh] mt-[30vh] w-[100vh] h-[50vh] absolute'>
                    </div>
                } 
                 <div className='w-[162.037vh] h-[91.7593vh] bg-white rounded-t-[1vh] flex flex-col'>
                    <div className='h-[29.0741vh] m-0 rounded-t-[1vh]' style={{background:`${edit ? '#646FB0' : '#464E7B'}`}}>                        
                        <div className='ml-[14.3vh] mt-[11.4vh] absolute rounded-full w-[30.2778vh] h-[30.2778vh] bg-[red]'>
                        </div>
                        <div className='flex justify-end pt-[2.5vh] pr-[4vh]'>
                            {edit &&
                                <button onClick={e=>setEdit(!edit)}>
                                    <div className='w-[9.2593vh] h-[4.1667vh] bg-[#4B5384] rounded-full flex items-center justify-center'>
                                        <p className='font-nonito text-[1.8519vh] font-[50] text-white'>Editar</p>
                                    </div>
                                </button>
                            }
                            {!edit &&
                                <div className='flex flex-col gap-[1vh]'>
                                    <button onClick={e => changeDesc()}>
                                        <div className='w-[9.2593vh] h-[4.1667vh] bg-[#357A6E] rounded-full flex items-center justify-center'>
                                            <p className='font-nonito text-[1.8519vh] font-[50] text-white'>Salvar</p>
                                        </div>
                                    </button>
                                    <button onClick={e=>setEdit(!edit)}>
                                        <div className='w-[9.2593vh] h-[4.1667vh] bg-[#743B5C] rounded-full flex items-center justify-center'>
                                            <p className='font-nonito text-[1.8519vh] font-[50] text-white'>Cancelar</p>
                                        </div>
                                    </button>
                                </div>
                            }
                        </div>                                              
                    </div>
                    <div className='w-full h-[62.7778vh] flex '>
                        <div className='w-[47.6852vh] h-[62.7778vh]  flex flex-col items-center pt-[14vh] gap-[2vh]'>
                            <p className=' font-nonito text-[2.9vh] pl-[10vh]'>@{user.nm_nick}</p>
                            <div className='flex  pl-[11vh] gap-[1vh]'>
                                <div className='bg-[#CCD0E5] w-[12.5926vh] h-[3.2407vh] rounded-full gap-[0.5vh] flex items-center justify-center'>
                                    <div className='w-[2vh]'>
                                        <Gift/>
                                    </div>
                                    <div className='pt-[0.2vh]'>
                                        <p className='font-inter text-[1.5vh] text-[#6F607B] h-full'>{user.dt_birth}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[11vh] w-[36.6667vh] bg-[#EAECF5] rounded-[0.9259vh] h-[21.4815vh] py-[2.5vh] px-[2.4vh]'>
                                {edit &&
                                    <pre className='text-[#75767A] font-inter text-[2vh]'>
                                        {user.ds_user}
                                    </pre>
                                }
                                {!edit &&
                                    <textarea onChange={e=> setUser(user=> ({...user, ds_user:e.target.value}))} maxLength={80} rows="2" className='bg-[#EAECF5] w-full h-full text-[#75767A] font-inter text-[2vh]' value={user.ds_user} name="" id="" cols="30" rows="10"></textarea>
                                }       
                            </div>
                            
                        </div> 
                        <div className='w-full pt-[4vh] pl-[9vh]'>
                            <div className='flex gap-[4vh]'>
                                <div className='flex flex-col items-center gap-[9vh] w-[47.037vh] h-[42.7778vh] border-[0.2vh] border-[#7F04DF] rounded-[0.9vh]'>
                                    <div className='flex flex-col pt-[3vh] gap-[3.3vh]'>                                        
                                        <p className='font-nonito text-[1.8519vh] text-[#7D06DD]'>Camapanhas</p>
                                        <p className='font-inter text-[1.3889vh]'>Você ainda não participa de nenhuma campanha...</p>
                                    </div>
                                    <button>
                                        <div className='ml-[2vh] w-[17.6852vh] h-[6.0185vh] rounded-[0.8vh] bg-[#7D06DD] flex items-center justify-center'>
                                            <p className='font-inter text-[1.3889vh] text-center text-white'>Participe de uma <br/> campanha</p>
                                        </div>
                                    </button>
                                </div>
                                <div className='flex flex-col items-center gap-[7vh] w-[47.037vh] h-[42.7778vh] border-[0.2vh] border-[#313F96] rounded-[0.9vh]'>
                                    <div className='flex flex-col pt-[3vh] pr-[14vh] gap-[3.3vh]'>                                        
                                        <p className='font-nonito text-[1.8519vh] text-[#313F96]'>Modelos</p>
                                        <p className='font-inter text-[1.3889vh]'>Ainda não há modelos criados...</p>
                                    </div>
                                    <div className='flex flex-col gap-[1vh]'>
                                        <button>
                                            <div className='ml-[2vh] w-[17.6852vh] h-[6.0185vh] rounded-[0.8vh] bg-[#313F96] flex items-center justify-center'>
                                                <p className='font-nonito text-[1.49vh] text-center text-white'>Crie seu primeiro <br/> modelo de ficha</p>
                                            </div>
                                        </button>
                                        <button>
                                            <div className='ml-[2vh] w-[17.6852vh] h-[6.0185vh] rounded-[0.8vh] bg-[#313F96] flex items-center justify-center'>
                                                <p className='font-nonito text-[1.49vh] text-center text-white'>Crie seu primeiro <br/> modelo de ficha</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}