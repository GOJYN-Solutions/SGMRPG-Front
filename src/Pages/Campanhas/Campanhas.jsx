import { Link } from "react-router-dom";
import { Arrow } from "../../Components/Icons/Arrow";
import Navbar from "../../Components/Navbar/Navbar";
import CardFicha from "../../Components/CardFicha/CardFicha";
import Input from "../../Components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import CardCampanha from "../../Components/CardCampanha/CardCampanha";

export default function() {

    

    const [modal, setModal] = useState(false)
    const [campanhas, setCampanhas] = useState([])

    console.log(campanhas)
    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/campaignModel/allUserCampaign?auth=${localStorage.getItem('token')}`)
        .then(resp => {
                setCampanhas(resp.data.items) 
                console.log(resp.data.items)     
            })
        .catch(error =>{console.log(error)})
    }, [])   

    campanhas.map(campanha=>{console.log(campanha)})


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
                                            />)
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

            </div>
        </div>
    )
}