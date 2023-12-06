import { useState, useRef} from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import CardCampanha from '../../Components/CardCampanha/CardCampanha';
import { useEffect } from 'react';
import CardFicha from '../../Components/CardFicha/CardFicha';
import axios from 'axios';



export default function HomePage() {

    const [user, setUser] = useState({
        nm_nick: ''
    })    
    useEffect(()=>{
        axios.get(`https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/read?auth=${localStorage.getItem('token')}`)
            .then(resp => {
                if(resp.data.items.length == 0) {
                    localStorage.clear()   
                    window.location.reload(false);        
                }
                setUser(resp.data.items[0])
            })
    },[])

  return (
    <div className=''>             
        <NavBar navbarLogada={true}/>
        <div className='h-[83.33vh] '>
            <div className='w-full h-1/2 flex'>
                <div className='w-1/2 flex flex-col justify-center items-start pl-[12vh] pt-[7vh] gap-[2vh]'>
                    <p className='text-[5.55vh] font-nonito text-[#313F96]'>Seja bem vindo, <b className='font-normal text-[#7D06DD]'>@{user.nm_nick}</b>!</p>
                    <p className='text-[#313F96] font-inter text-[1.85vh] font-semibold '>Explore nosso site e descubra novas possibilidades para suas <br/> aventuras!</p>
                </div>
                <div className='w-1/2 pl-[4vh] pt-[2vh]'>
                    <div className='flex w-[67.31vh] absolute'>
                        <svg width="100%" height="100%" viewBox="0 0 727 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M412.562 254.553L457.966 251.081M412.562 254.553L371.319 281.064M412.562 254.553L405.628 234.513M457.966 251.081L453.573 289.56M457.966 251.081L405.628 234.513M457.966 251.081L472.28 292.447M453.573 289.56L438.26 328.818M453.573 289.56L472.28 292.447M438.26 328.818L399.982 308.105M438.26 328.818L472.28 292.447M438.26 328.818L385.633 322.429M399.982 308.105L371.319 281.064M399.982 308.105L385.633 322.429M371.319 281.064L405.628 234.513M371.319 281.064L385.633 322.429" stroke="#E0DCDC"/>
                            <path d="M453.373 289.973L411.511 254.519L400.514 308.264L453.373 289.973Z" stroke="#E0DCDC"/>
                            <path d="M663.132 102.079L708.667 101.746M663.132 102.079L620.159 125.684M663.132 102.079L657.595 81.6092M708.667 101.746L701.632 139.831M708.667 101.746L657.595 81.6092M708.667 101.746L720.095 144M701.632 139.831L683.649 177.94M701.632 139.831L720.095 144M683.649 177.94L646.89 154.637M683.649 177.94L720.095 144M683.649 177.94L631.587 167.938M646.89 154.637L620.159 125.684M646.89 154.637L631.587 167.938M620.159 125.684L657.595 81.6092M620.159 125.684L631.587 167.938" stroke="#E0DCDC"/>
                            <path d="M701.404 140.229L662.085 101.974L647.409 154.833L701.404 140.229Z" stroke="#E0DCDC"/>
                            <path d="M80.729 40.5221L123.228 69.333M80.729 40.5221L25.727 34.9609M80.729 40.5221L88.6787 17.9719M123.228 69.333L92.3394 100.201M123.228 69.333L88.6787 17.9719M123.228 69.333L106.818 115.881M92.3394 100.201L51.2684 124.091M92.3394 100.201L106.818 115.881M51.2684 124.091L32.0347 78.942M51.2684 124.091L106.818 115.881M51.2684 124.091L9.31754 81.5084M32.0347 78.942L25.727 34.9609M32.0347 78.942L9.31754 81.5084M25.727 34.9609L88.6787 17.9719M25.727 34.9609L9.31754 81.5084" stroke="#E0DCDC"/>
                            <path d="M91.873 100.426L79.8252 39.7546L32.3925 79.4569L91.873 100.426Z" stroke="#E0DCDC"/>
                            <path d="M677.07 320.444L707.54 320.293M677.07 320.444L648.278 336.172M677.07 320.444L673.397 306.738M707.54 320.293L702.773 345.766M707.54 320.293L673.397 306.738M707.54 320.293L715.121 348.585M702.773 345.766L690.68 371.238M702.773 345.766L715.121 348.585M690.68 371.238L666.119 355.587M690.68 371.238L715.121 348.585M690.68 371.238L655.859 364.464M666.119 355.587L648.278 336.172M666.119 355.587L655.859 364.464M648.278 336.172L673.397 306.738M648.278 336.172L655.859 364.464" stroke="#E0DCDC"/>
                            <path d="M702.62 346.032L676.37 320.372L666.467 355.719L702.62 346.032Z" stroke="#E0DCDC"/>
                            <path d="M359.423 107.446L204.76 47.4701L92.3932 181.288L127.646 308.769L285.128 338.102L394.675 234.928L359.423 107.446Z" fill="url(#paint0_linear_992_15)"/>
                            <path d="M221.838 109.229L359.423 107.446M221.838 109.229L92.3932 181.288M221.838 109.229L204.76 47.4701M359.423 107.446L338.816 222.644M359.423 107.446L204.76 47.4701M359.423 107.446L394.675 234.928M338.816 222.644L285.128 338.102M338.816 222.644L394.675 234.928M285.128 338.102L173.657 268.315M285.128 338.102L394.675 234.928M285.128 338.102L127.646 308.769M173.657 268.315L92.3932 181.288M173.657 268.315L127.646 308.769M92.3932 181.288L204.76 47.4701M92.3932 181.288L127.646 308.769" stroke="white" stroke-width="3"/>
                            <path d="M338.135 223.852L218.676 108.927L175.233 268.899L338.135 223.852Z" fill="url(#paint1_linear_992_15)" stroke="white" stroke-width="3"/>
                            <path d="M618.995 111.589L554.678 30.2862L451.756 66.7776L430.362 146.619L505.906 212.308L597.602 191.431L618.995 111.589Z" fill="url(#paint2_linear_992_15)"/>
                            <path d="M544.314 68.9658L618.995 111.589M544.314 68.9658L451.756 66.7776M544.314 68.9658L554.678 30.2862M618.995 111.589L571.402 167.118M618.995 111.589L554.678 30.2862M618.995 111.589L597.602 191.431M571.402 167.118L505.906 212.308M571.402 167.118L597.602 191.431M505.906 212.308L467.964 139.402M505.906 212.308L597.602 191.431M505.906 212.308L430.362 146.619M467.964 139.402L451.756 66.7776M467.964 139.402L430.362 146.619M451.756 66.7776L554.678 30.2862M451.756 66.7776L430.362 146.619" stroke="white" stroke-width="3"/>
                            <path d="M570.653 167.553L542.706 67.801L468.628 140.216L570.653 167.553Z" fill="url(#paint3_linear_992_15)" stroke="white" stroke-width="3"/>
                            <path d="M687.393 283.098L646.746 231.716L581.701 254.778L568.181 305.236L615.923 346.75L673.873 333.556L687.393 283.098Z" fill="url(#paint4_linear_992_15)"/>
                            <path d="M640.196 256.161L687.393 283.098M640.196 256.161L581.701 254.778M640.196 256.161L646.746 231.716M687.393 283.098L657.315 318.191M687.393 283.098L646.746 231.716M687.393 283.098L673.873 333.556M657.315 318.191L615.923 346.75M657.315 318.191L673.873 333.556M615.923 346.75L591.944 300.675M615.923 346.75L673.873 333.556M615.923 346.75L568.181 305.236M591.944 300.675L581.701 254.778M591.944 300.675L568.181 305.236M581.701 254.778L646.746 231.716M581.701 254.778L568.181 305.236" stroke="white" stroke-width="3"/>
                            <path d="M656.842 318.466L639.18 255.425L592.364 301.19L656.842 318.466Z" fill="url(#paint5_linear_992_15)" stroke="white" stroke-width="3"/>
                            <defs>
                            <linearGradient id="paint0_linear_992_15" x1="199.514" y1="48.9207" x2="279.883" y2="339.553" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_992_15" x1="218.676" y1="108.927" x2="256.684" y2="246.376" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_992_15" x1="551.393" y1="29.4059" x2="502.62" y2="211.428" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_992_15" x1="542.706" y1="67.801" x2="519.64" y2="153.885" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_992_15" x1="644.67" y1="231.16" x2="613.846" y2="346.194" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear_992_15" x1="639.18" y1="255.425" x2="624.603" y2="309.828" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7D06DD"/>
                            <stop offset="1" stop-color="#313F96"/>
                            </linearGradient>
                            </defs>
                        </svg>


                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center pb-[7vh] gap-[6.3vh] h-1/2'>
                <div className='w-fit h-fit bg-gradient-to-b from-[#7F04DF] to-[#313F96] p-[0.1vh] rounded-[1.5vh] '>
                    <div className='w-[46.94vh] bg-white h-[23.79vh] rounded-[1.5vh] pl-[5vh] pt-[6vh] flex flex-col gap-[1.5vh]'>
                        <p className='font-nonito text-[2.31vh] font-medium text-[#7D06DD]'>Criar campanha</p>
                        <p className='font-inter text-[1.38vh] font-bold w-[30.74vh]'>Crie uma campanha e divirta-se com  seus amigos!</p>
                    </div>
                </div>
                <div className='w-fit h-fit bg-gradient-to-b from-[#7F04DF] to-[#313F96] p-[0.1vh] rounded-[1.5vh] '>
                    <div className='w-[46.94vh] bg-white h-[23.79vh] rounded-[1.5vh] pl-[5vh] pt-[6vh] flex flex-col gap-[1.5vh]'>
                        <p className='font-nonito text-[2.31vh] font-medium text-[#7D06DD]'>Criar ficha</p>
                        <p className='font-inter text-[1.38vh] font-bold'>Crie fichas para utilizar em suas campanhas!</p>
                    </div>
                </div>
                <div className='w-fit h-fit bg-gradient-to-b from-[#7F04DF] to-[#313F96] p-[0.1vh] rounded-[1.5vh] '>
                    <div className='w-[46.94vh] bg-white h-[23.79vh] rounded-[1.5vh] pl-[5vh] pt-[6vh] flex flex-col gap-[1.5vh]'>
                        <p className='font-nonito text-[2.31vh] font-medium text-[#7D06DD]'>Ler guia de usuário</p>
                        <p className='font-inter text-[1.38vh] font-bold w-[30.74vh]'>Descubra como funciona nosso sistema lendo este rápido guia de usuário.</p>
                    </div>
                </div>
            </div>            
        </div>    
        <div className='h-[50.18vh] bg-gradient-to-b to-[#2C3786] from-[#461790] pt-[2vh] flex flex-col gap-[5vh]'>
            <div className='flex items-center pt-[3vh]'>
                <div className='h-[0.092vh] w-[37vh] bg-white'></div>
                <p className='font-nonito text-[2.31vh] text-white w-[40vh] ml-[4vh]'>Campanhas em andamento</p>
                <div className='h-[0.092vh] w-full bg-white'></div>
            </div>

            <div className='w-full flex items-start justify-center gap-[6vh]'>
                <CardCampanha 
                    isPrivate={true}
                    age={"+18"}
                    title={"Nome da campanha"}
                    slots={"9/10"}
                    active={'#0FF0A0'}
                    genders={[
                                {title: "Fantasia", color: "#817EEF"}, 
                                {title: "Oneshot", color: "#EFAE7E"},
                                {title: "Gay", color: "#EF7EE4"}
                            ]}
                        imgURL={"/imagemcampanha/campanha.jpg"}
                />

                <CardCampanha 
                    isPrivate={false}
                    age={"+18"}
                    title={"Nome da campanha"}
                    slots={"9/10"}
                    active={'#FF0000'}
                    genders={[
                                {title: "Fantasia", color: "#817EEF"}, 
                                {title: "Oneshot", color: "#EFAE7E"},
                                {title: "Gay", color: "#EF7EE4"}
                            ]}
                        imgURL={"/imagemcampanha/campanha.jpg"}
                />

                <CardCampanha                     
                    age={"+18"}
                    title={"Nome da campanha"}
                    slots={"10"}
                    active={true}
                    genders={[
                                {title: "Fantasia", color: "#817EEF"}, 
                                {title: "Oneshot", color: "#EFAE7E"},
                                {title: "Gay", color: "#EF7EE4"}
                            ]}
                        imgURL={"/imagemcampanha/campanha.jpg"}
                    notActive={true}
                />                
            </div>
        </div>
            <div className='h-[172.5926vh] flex flex-col items-center pt-[7vh] gap-[5vh]'>
                <p className='font-nonito text-[2.7778vh] font-semibold'>Explore alguns <b className='font-normal text-white px-[0.5vh] bg-[#646FB0]'> conteúdos em alta </b></p>
                <p className='font-inter text-[1.8519vh]'>Verifique alguns dos sla oq bla bla bla não quero saber.</p>
                <div className='bg-[#646FB0] rounded-[1.8519vh] py-[5vh] px-[10.5vh] flex flex-col gap-[10vh]'>
                    <div className='flex flex-col gap-[3.5vh] '>
                        <p className='text-white font-nonito text-[2.5333vh] '>Modelos de ficha</p>
                        <div className='flex gap-[5.5vh]'>   
                            <CardFicha name={"Isolda"} age={35} gender={'f'} type={'Druída'} description={"23456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567"}/>
                            <CardFicha name={"Cleber"} age={23} gender={'m'} type={'Olokinho'} description={'olokinho'}/>
                            <CardFicha name={"Cleber"} age={23} gender={'m'} type={'Olokinho'} description={'olokinho'}/>
                            <CardFicha name={"Cleber"} age={23} gender={'m'} type={'Olokinho'} description={'olokinho'}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[3.5vh] '>
                        <p className='text-white font-nonito text-[2.5333vh] '>Modelos de Campanha</p>
                        <div className='flex gap-[5.5vh]'>   
                            <CardCampanha 
                                isPrivate={false}
                                age={"+18"}
                                title={"Nome da campanha"}
                                slots={"9/10"}
                                active={true}
                                genders={[
                                            {title: "Fantasia", color: "#817EEF"}, 
                                            {title: "Oneshot", color: "#EFAE7E"},
                                            {title: "Gay", color: "#EF7EE4"}
                                        ]}
                            />
                            <CardCampanha 
                                isPrivate={false}
                                age={"+18"}
                                title={"Nome da campanha"}
                                slots={"9/10"}
                                active={true}
                                genders={[
                                            {title: "Fantasia", color: "#817EEF"}, 
                                            {title: "Oneshot", color: "#EFAE7E"},
                                            {title: "Gay", color: "#EF7EE4"}
                                        ]}
                                    imgURL={"/imagemcampanha/campanha.jpg"}
                            />
                            <CardCampanha 
                                isPrivate={false}
                                age={"+18"}
                                title={"Nome da campanha"}
                                slots={"9/10"}
                                active={true}
                                genders={[
                                            {title: "Fantasia", color: "#817EEF"}, 
                                            {title: "Oneshot", color: "#EFAE7E"},
                                            {title: "Gay", color: "#EF7EE4"}
                                        ]}
                                    imgURL={"/imagemcampanha/campanha.jpg"}

                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[3.5vh]'>
                        <p className='text-white font-nonito text-[2.5333vh] '>Campanhas</p>
                        <div className='h-[28.9815vh] flex items-center justify-center'>
                            <p className='font-inter text-[#B2B7D7] text-[1.6889vh]'>Não há campanhas em alta.</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className='w-full h-[18vh] mt-[2vh] bg-[#313F96]'></div>
    </div>
  );
}