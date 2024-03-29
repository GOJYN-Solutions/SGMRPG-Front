import { Link } from "react-router-dom";
import { Arrow } from "../../Components/Icons/Arrow";
import Navbar from "../../Components/Navbar/Navbar";
import CardFicha from "../../Components/CardFicha/CardFicha";
import Input from "../../Components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";

export default function() {

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [fichas, setFichas] = useState([])
    const [ficha, setFicha] = useState({
        nome: '',
        idade: '',
        genero: '',
        classe: '',
        tipo: 'Personagem',
        desc: '',
    })
    const [fields, setFields] = useState([])
     const [fichaCard, setFichaCard] = useState({        
        cd_sheetmodel: '',
        nm_type: '',
        nm_sheet: '',
        ds_sheet: '',
        im_sheet: '',
        qt_age: '',
        nm_genre: '',
        nm_class: '',
        cd_user: '',
        nm_nick: ''
    })

    const registrarFicha = () => {
        axios.post('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/sheetModel/create', {
            "auth": localStorage.getItem('token'),
            "sheetName": ficha.nome,
            "sheetDesc": ficha.desc,
            "sheetImage": '',
            "sheetType": ficha.tipo,
            "sheetAge": ficha.idade,
            "sheetGenre": ficha.genero,
            "sheetClass": ficha.classe,
            "sheetPublic": "1"
        })
        .then(resp=>{
            window.location.reload(false);
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/sheetModel/userAll/${localStorage.getItem('token')}`)
        .then(resp => {
                setFichas(resp.data.items)      
            })
        .catch(error =>{console.log(error)})
    }, []) 
    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/field/userSheet/${fichaCard.cd_sheetmodel}}?auth=${localStorage.getItem('token')}`)
            .then(resp=>{
                setFields(resp.data.items)            
            })
            .catch(error =>{console.log(error)})
    }, [fichaCard])
    
    





    
    const modalFicha = () => {
        
        if(modal2) {    
            fields.map(field =>{
                console.log(field)
            })       
            return(
                    <>
                        <div className="w-full h-[94.26vh] absolute flex items-center justify-center z-20">
                            <div className="w-[77.3148vh] h-[78.6111vh] absolute bg-white rounded-[1.8519vh] flex flex-col gap-[1vh]">
                                <div className="flex justify-end">
                                    <div onClick={e=>setModal2(!modal2)} className="h-[3.2vh] w-[5vh] hover:cursor-pointer rounded-tr-[1.8519vh] bg-[#E0E2EF] flex items-center justify-center">
                                        <div className="w-[0.8333vh] h-[1.2963vh]">                                        
                                            <svg width="100%" height="100%" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.21649 6.95082L0 0H2.85567L4.49485 4.47541H4.59794L6.23711 0H9L5.7732 6.95902L9 14H6.24742L4.57732 9.5H4.40206L2.65979 14H0L3.21649 6.95082Z" fill="#313F96"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between px-[6vh]">                                
                                    <div className="h-full w-fit">
                                        <div className="flex flex-col gap-[2vh]">
                                            <div className="w-[34.2593vh] h-[41.9444vh] border-black border-[0.2vh] rounded-[1vh]">
                                                {fichaCard.nm_type == 'Item' &&
                                                    <img className='h-full w-full object-cover' src="/imagemcampanha/item.jpg" alt="" />
                                                }
                                                {fichaCard.nm_type == 'Personagem' &&
                                                    <img className='h-full w-full object-cover' src="/imagemcampanha/Personagem 2.png" alt="" />
                                                }                                    
                                            </div>
                                            <div className="flex justify-between pr-[2vh]">
                                                <p className="font-nonito text-[3.2407vh] pl-[1.5vh]">{`${fichaCard.nm_sheet}${fichaCard.qt_age ? ',' : ''}`} <b className="font-normal text-[2.3148vh]">{`${fichaCard.qt_age != null ? `${fichaCard.qt_age} ANOS` : ''}`}</b></p>
                                                <div className="w-[4vh]"> 
                                                    {fichaCard.nm_genre == 'f' &&                                           
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/></svg>
                                                    }
                                                    {fichaCard.nm_genre == 'm' &&                                           
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
                                                    }
                                                </div>
                                                
                                            </div>
                                            <div className="flex items-center justify-start gap-[1vh]">
                                                <div className="w-[7.5926vh] h-[3.1481vh] bg-[#E0E2EF] rounded-full flex items-center justify-center">
                                                    <p className="font-inter text-[#313F96] text-[1.7vh] font-semibold">Classe:</p>
                                                </div>
                                                <p className="font-inter text-[1.6667vh] font-semibold">{fichaCard.nm_class}</p>
                                            </div>
                                            <div className="flex flex-col gap-[0.5vh]">
                                                <p className="font-inter font-bold text-[1.6667vh] text-[#313F96]">Descrição:</p>
                                                <div className="w-[33.2407vh] h-[11.8519vh] bg-[#E0E2EF] rounded-[1.8519vh]"><pre className="text-[#75767A] w-full overflow-auto text font-inter break-words text-[1.65vh] whitespace-pre-wrap py-[1vh] px-[2vh]">{fichaCard.ds_sheet}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[25vh] h-[63.3333vh] ">
                                        <p className="font-nonito text-[2.3148vh] mb-[2vh]">Outros atributos</p>
                                        <div className="flex flex-col gap-[1vh] ">
                                            {
                                                fields.map(field => (
                                                    <div className="flex items-center gap-[1vh] ">
                                                        <div className="bg-[#E0E2EF] w-1/2 rounded-full px-[1vh] py-[0.2vh] flex ">
                                                            <p className="font-inter font-semibold text-[1.6667vh] text-[#313F96]">{field.nm_field}:</p>
                                                        </div>
                                                        <p className="w-1/2 font-inter font-black text-[1.6667vh]">{`${field.qt_value}`}</p>
                                                    </div>
                                                ))    
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[94.26vh] absolute flex items-center justify-center opacity-50 bg-black z-10">                            
                        </div>
                    </>
                )
        
        }
    } 

    return(
        <div className='h-screen'>
            <Navbar navbarLogada={true}/>
            <div className='h-[94.26vh] bg-gradient-to-b to-[#313F96] from-[#7A08DB] flex flex-col items-center justify-end pt-[2.5vh]'>
                <div className="flex items-end justify-between w-[143.6111vh] h-full pb-[1vh]">
                    <p className="font-nonito text-[3.4259vh] text-white">MINHAS FICHAS</p>
                    <Link className='' to='/campanhas'> 
                        <div className="flex gap-[1.5vh] pr-[2.4vh] pb-[0.5vh]">
                                <p className="font-inter text-[1.8519vh] text-white"><b className="font-thin">Explorar</b> <b>MINHAS CAMPANHAS</b> </p>
                                <div className="w-[2.5926vh]">
                                    <Arrow/>
                                </div>
                        </div>
                    </Link>
                </div>
                <div className="w-[143.6111vh] h-[88.1481vh] flex flex-col justify-end">
                    <div className="w-[143.6111vh] h-[82.2222vh] flex flex-col bg-white rounded-t-[1vh]">
                        <div className="w-full h-[11.1111vh] flex items-center justify-center px-[10vh] gap-[20vh]">
                            <div className="flex items-center justify-center gap-[2vh]">
                                <p className="font-inter text-[1.5vh] text-[#A52EFF] font-[1000] pt-[0.3vh]">FILTRAR</p>
                                <Input font={'font-inter'} placeholder={'Nome'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                                <Input font={'font-inter'} placeholder={'Tipo'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                                <Input font={'font-inter'} placeholder={'Classe'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                                <Input font={'font-inter'} placeholder={'Usuário'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                            </div>                            
                            <button onClick={e=>{setModal(!modal)}} className="w-[16.6667vh] h-[5vh] rounded-[2vh] bg-[#7D06DD]">
                                <p className="font-nonito text-[2.3148vh] text-white">NOVA FICHA</p>
                            </button>
                        </div>
                        <div className=" flex items-center justify-center">                        
                            <div className="flex flex-col justify-between w-[118.4259vh] h-[60.5556vh]">
                                <div className="flex gap-[4vh]">                           
                                    {
                                        fichas.map((ficha, i)=> {
                                            if(i<=3) return(
                                                <div className="hover:cursor-pointer" onClick={e=>{setFichaCard(ficha)}}>
                                                    <div onClick={e=>{setModal2(!modal2)}}>
                                                        <CardFicha name={ficha.nm_sheet} age={ficha.qt_age} gender={ficha.nm_genre} type={ficha.nm_type} description={ficha.ds_sheet}/>
                                                    </div>
                                                </div>
                                            )
                                        })                                        
                                    }
                                </div>
                                <div className="flex gap-[4vh]">
                                    {
                                        fichas.map((ficha, i)=> {
                                            if(i>3 && i<=7) return(
                                                <div className="hover:cursor-pointer" onClick={e=>{setFichaCard(ficha)}}>
                                                    <div onClick={e=>{setModal2(!modal2)}}>
                                                        <CardFicha name={ficha.nm_sheet} age={ficha.qt_age} gender={ficha.nm_genre} type={ficha.nm_type} description={ficha.ds_sheet}/>
                                                    </div>
                                                </div>
                                            )
                                        })                                        
                                    }
                                </div>
                            </div>  
                        </div>  
                        <div className="h-[10.5vh] flex items-center justify-center">
                            <p className="font-inter text-[2.3vh]">{'< '}<b className="font-normal text-[#A52EFF]">1</b> de <b className="font-normal text-[#A52EFF]">10</b>{' >'}</p>
                        </div>
                    </div>
                </div>

                {modal && (
                    <>
                        <div className="w-full h-[94.26vh] absolute flex items-center justify-center z-20">
                            <div className="w-[47.963vh] h-[82.5vh] absolute bg-white rounded-[1.8519vh] flex flex-col gap-[1vh]">
                                <div className="flex justify-end">
                                    <div onClick={e=>setModal(!modal)} className="h-[3.2vh] w-[5vh] hover:cursor-pointer rounded-tr-[1.8519vh] bg-[#E0E2EF] flex items-center justify-center">
                                        <div className="w-[0.8333vh] h-[1.2963vh]">                                        
                                            <svg width="100%" height="100%" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.21649 6.95082L0 0H2.85567L4.49485 4.47541H4.59794L6.23711 0H9L5.7732 6.95902L9 14H6.24742L4.57732 9.5H4.40206L2.65979 14H0L3.21649 6.95082Z" fill="#313F96"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-[6vh] gap-[1vh]">                                
                                    <div className="h-[41.9444vh] bg-[#CBCFE5] rounded-[1vh]">
                                        {ficha.tipo == 'Item' &&
                                            <img className='h-full w-full object-cover opacity-10' src="/imagemcampanha/item.jpg" alt="" />
                                        }
                                        {ficha.tipo == 'Personagem' &&
                                            <img className='h-full w-full object-cover opacity-10' src="/imagemcampanha/Personagem 2.png" alt="" />
                                        }                                   
                                    </div>
                                    <div className="flex gap-[2vh]">
                                        <div>
                                            <p className="font-inter text-[#313F96] font-black text-[1.6667vh] pl-[1vh]">Nome</p>
                                            <Input value={ficha.nome} onChange={e=>setFicha({...ficha, nome: e.target.value})} font={'font-inter'} placeholder={'Nome'} classNameDiv={'border-[#CBCFE5]'} className={'h-[3.5vh] px-[2vh] w-[12.6852vh] bg-[#cbcfe5b7] placeholder-[#92939B] rounded-[1vh] text-[1.39vh]'}/>                                        
                                        </div>
                                        <div>
                                            <p className="font-inter text-[#313F96] font-black text-[1.6667vh] pl-[1vh]">Idade</p>
                                            <Input value={ficha.idade} onChange={e=>setFicha({...ficha, idade: e.target.value})} font={'font-inter'} placeholder={'Idade'} classNameDiv={'border-[#CBCFE5]'} className={'h-[3.5vh] px-[2vh] w-[13vh] bg-[#cbcfe5b7] placeholder-[#92939B] rounded-[1vh] text-[1.39vh]'}/>                                        
                                        </div>    
                                        <div>                                        
                                            <p className="font-inter text-[#313F96] font-black text-[1.6667vh] pl-[0.4vh]">Gênero</p>                                                                                
                                            <select value={ficha.genero} onChange={e=>setFicha({...ficha, genero: e.target.value})} id="countries" class="bg-[#cbcfe5b7] border w-[6.2963vh] h-[3.2407vh] text-[1.3889vh] font-inter font-black border-gray-300 text-gray-900 rounded-lg block ">
                                                <option value=""></option>
                                                <option value="F">F</option>
                                                <option value="M">M</option>
                                            </select>   
                                        </div>                                     
                                    </div>
                                    <div className="flex gap-[1vh]">
                                        <div className="w-[7.5926vh] h-[3.1481vh] bg-[#cbcfe5b7] flex items-center justify-center rounded-full">
                                            <p className="font-inter font-black text-[1.6667vh] text-[#313F96]">Classe:</p>
                                        </div>
                                        <div>                                            
                                            <Input value={ficha.classe} onChange={e=>setFicha({...ficha, classe: e.target.value})} font={'font-inter'} placeholder={'Valor'} classNameDiv={'border-[#CBCFE5]'} className={'h-[3.5vh] w-[9.3519vh] px-[2vh] bg-[#cbcfe5b7] placeholder-[#92939B] rounded-[1vh] text-[1.39vh]'}/>                                        
                                        </div>
                                        <div className="w-[18vh] flex justify-end items-center gap-[1vh]">
                                            <p className="font-inter text-[#313F96] font-black text-[1.6667vh]">Tipo:</p>
                                            <select value={ficha.tipo} onChange={e=>setFicha({...ficha, tipo: e.target.value})} id="countries" class="bg-[#cbcfe5b7] border h-[3.2407vh] text-[1.3889vh] font-inter font-black border-gray-300 text-gray-900 rounded-lg block ">
                                                <option value="Personagem">Personagem</option>
                                                <option value="Item">Item</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-inter text-[1.6667vh] font-black text-[#313F96]">Descrição:</p>
                                        <textarea value={ficha.desc} onChange={e=>setFicha({...ficha, desc: e.target.value})} placeholder='Adicione uma descrição...' maxLength={80} rows="2" style={{resize: 'none'}} className='bg-[#EAECF5] p-[2vh] rounded-[1.8519vh] w-full h-[11.8519vh]  font-inter text-[1.65vh]' name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="flex justify-between">
                                        <button onClick={e=>setModal(!modal)} className="border-[0.4vh] px-[1vh] border-[#313F96] h-[4.5vh] rounded-full">
                                            <p className="font-inter text-[1.6667vh] font-[900] px-[1vh] text-[#313F96]">Cancelar</p>
                                        </button>

                                        <button onClick={e=>registrarFicha()} className="bg-[#313F96] h-[4.5vh] p-[1vh] rounded-full">
                                            <p className="font-inter text-[1.6667vh] font-[500] px-[1vh] text-white">Salvar</p>
                                        </button>                                        
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[94.26vh] absolute flex items-center justify-center opacity-50 bg-black z-10">                            
                        </div>
                    </>                    
                )}
                {modalFicha()}
            </div>
        </div>
    )
}