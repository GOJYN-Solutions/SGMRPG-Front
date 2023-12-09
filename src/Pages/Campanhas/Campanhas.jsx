import { Link } from "react-router-dom";
import { Arrow } from "../../Components/Icons/Arrow";
import Navbar from "../../Components/Navbar/Navbar";
import CardFicha from "../../Components/CardFicha/CardFicha";
import Input from "../../Components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import CardCampanha from "../../Components/CardCampanha/CardCampanha";

export default function() {

    const [campanhas, setCampanhas] = useState([])
    const [fichas, setFichas] = useState([])
    const [modal2, setModal2] = useState(false)
    const [campCount, setCampCount] = useState()


    // console.log(campanhas)
    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campaignModel/allUserCampaign?auth=${localStorage.getItem('token')}`)
        .then(resp => {
                setCampanhas(resp.data.items) 
                console.log(resp.data.items)     
            })
        .catch(error =>{console.log(error)})
    }, [])
    
    function getFichas(count){
        console.log(campanhas[count].cd_campaignmodel)

        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campaignModel/userCampaignModelSheets/${campanhas[count].cd_campaignmodel}?auth=${localStorage.getItem('token')}}`)
            .then(resp => {
                    setFichas(resp.data.items) 
                    console.log(resp.data.items)     
                })
            .catch(error =>{console.log(error)})
    }  

    // campanhas.map(campanha=>{console.log(campanha)})

    const modalFicha = (i) => {
        
        if(modal2) {    
            // fields.map(field =>{
            //     console.log(field)
            // })       
            return(
                    <>
                        <div className="w-full h-[94.26vh] absolute flex items-center justify-center z-20">
                            <div className="w-[77.3148vh] absolute bg-white rounded-[1.8519vh] flex flex-col gap-[1vh]">
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
                                            <div className="flex justify-between pr-[2vh]">
                                                <p className="font-nonito text-[3.2407vh] pl-[1.5vh]">{`${campanhas[campCount].nm_campaign}`} <b className="font-normal text-[2.3148vh]">{`Idade: ${campanhas[campCount].qt_minimal_age}`}</b></p>                                                
                                            </div>
                                            <div className="flex flex-col gap-[0.5vh]">
                                                <p className="font-inter font-bold text-[1.6667vh] text-[#313F96]">Descrição:</p>
                                                <div className="w-[33.2407vh] h-[11.8519vh] bg-[#E0E2EF] rounded-[1.8519vh]"><pre className="text-[#75767A] w-full overflow-auto text font-inter break-words text-[1.65vh] whitespace-pre-wrap py-[1vh] px-[2vh]">{campanhas[campCount].ds_campaign}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[25vh] h-[63.3333vh] ">
                                        <p className="font-nonito text-[2.3148vh] mb-[2vh]">Fichas vinculadas</p>
                                        <div className="flex flex-col gap-[1vh] ">
                                            
                                    
                                            {
                                                fichas.map(ficha => (
                                                    <div className="flex items-center gap-[1vh] ">
                                                        <div className="bg-[#E0E2EF] rounded-full px-[1vh] py-[0.2vh] flex ">
                                                            <p className="font-inter font-semibold text-[1.6667vh] text-[#313F96]">{ficha.nm_sheet}</p>
                                                        </div>
                                                        <p className="font-inter font-black text-[1.6667vh]">{`${ficha.nm_type}`}</p>
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
                    <p className="font-nonito text-[3.4259vh] text-white">MINHAS CAMPANHAS</p>
                    <Link className=' ' to='/modelos'> 
                        <div className="flex gap-[1.5vh] pr-[2.4vh] pb-[0.5vh]">
                                <p className="font-inter text-[1.8519vh] text-white"><b className="font-thin">Explorar</b> <b>MINHAS FICHAS</b> </p>
                                <div className="w-[2.5926vh]">
                                    <Arrow/>
                                </div>
                        </div>
                    </Link>
                </div>
                <div className="w-[143.6111vh] h-[88.1481vh] flex flex-col justify-end">
                    <div className="w-[143.6111vh] h-[82.2222vh] flex flex-col bg-white rounded-t-[1vh]">
                        <div className="w-full h-[11.1111vh] flex items-center justify-center gap-[2vh]">
                            <p className="font-inter text-[1.5vh] text-[#A52EFF] font-[1000] pt-[0.3vh]">FILTRAR</p>
                            <Input font={'font-inter'} placeholder={'Nome'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                            <Input font={'font-inter'} placeholder={'Tipo'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                            <Input font={'font-inter'} placeholder={'Classe'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                            <Input font={'font-inter'} placeholder={'Usuário'} className={'h-[3.5vh] w-[15vh] text-[#ADADAD] text-[1.39vh]'}/>
                        </div>
                        <div className=" flex items-center justify-center">                        
                            <div className="flex flex-col justify-between w-[118.4259vh] h-[60.5556vh]">
                                
                                <div className="flex gap-[4vh]"> 
                                    {

                                        campanhas.map((campanha, i) => {

                                            if(i<3) return(  
                                                <div className="hover: cursor-pointer" onClick={e=>(setModal2(!modal2), setCampCount(i), getFichas(i))} >
                                                    <CardCampanha 
                                                        isPrivate={false}
                                                        age={`+${campanha.qt_minimal_age}`}
                                                        title={campanha.nm_campaign}
                                                        active={'#FF0000'}
                                                        genders={[
                                                                    {title: "Fantasia", color: "#817EEF"}, 
                                                                    {title: "Oneshot", color: "#EFAE7E"},
                                                                    {title: "+", color: "#EF7EE4"}
                                                                ]}
                                                            imgURL={"/imagemcampanha/campanha.jpg"}
                                                            
                                                    />

                                                </div>
                                            )

                                            
                                        })
                                    }
                                    
                                                     
                                    
                                    
                                    
                                </div>
                                <div className="flex gap-[4vh]">
                                    {/* {
                                        campanhas.map((campanha, i)=> {
                                            if(i>3 && i<=7) return(                                                
                                                <CardCampanha name={campanha.nm_sheet} age={campanha.qt_age} gender={campanha.nm_genre} type={campanha.nm_type} description={campanha.ds_sheet}/>
                                            )
                                        })                                        
                                    } */}
                                </div>
                            </div>  
                        </div>  
                        <div className="h-[10.5vh] flex items-center justify-center">
                            <p className="font-inter text-[2.3vh]">{'< '}<b className="font-normal text-[#A52EFF]">1</b> de <b className="font-normal text-[#A52EFF]">10</b>{' >'}</p>
                        </div>
                    </div>
                </div>

                {modalFicha(campCount)}        
                
            </div>
        </div>
    )
}