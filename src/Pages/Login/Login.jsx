import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import ReactTyped from "react-typed";
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import { GoogleIcon } from '../../Components/Icons/GoogleIcon';
import NavBar from '../../Components/Navbar/Navbar';
import axios from 'axios';

export default function Login() {

  const [user, setUser] = useState({
    login: '',
    password: ''
  })

  let typeText = 'text-[3.70vh] text-white font-nonito '

  const submitForm = () =>{
    var validacao = /\S+@\S+\.\S+/;
    axios.put('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/login', 
    {
      nick: validacao.test(user.login) ? '' : user.login,
      email: validacao.test(user.login) ? user.login : '',
      pwd: user.password
    })
    .then((resp) => {
      console.log(resp.data)
      if(resp.data.token){
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('nick', user.login)
        window.location.reload(false);}
      else alert(resp.data.erro)
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  return (
    <div className='h-screen overflow-y-hidden'>
      <NavBar/>
      <div className="h-full items-center bg-gradient-to-b from-[#7F04DF] gap-[2vh] to-[#313F96] flex flex-row ">
        <div className="w-1/2 h-full flex gap-[2vh] pl-[32vh] pt-[30vh] flex-col z-10">       
          <div className='flex flex-col gap-[1vh] '>
            <ReactTyped className={typeText} strings={["Um sistema feito para"]} typeSpeed={100} startDelay={1000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-[1.85vh]'>
              <div className='w-[5.18vh] h-[1vh] bg-white'></div>
              <div className='w-[10.37vh] h-[1.11vh] bg-white'></div>
              <div className='w-[7.40vh] h-[1.11vh] bg-white'></div>
              <div className='w-[7.40vh] h-[1.11vh] bg-white'></div>
            </div>
          </div>
          <div className='flex flex-col gap-[1vh]'>
            <ReactTyped className={typeText} strings={["quem ama"]} typeSpeed={100} startDelay={2000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-[1.85vh]'>
              <div className='w-[8.88vh] h-[1.11vh] bg-white'></div>
              <div className='w-[8.88vh] h-[1.11vh] bg-white'></div>
            </div>
          </div>
          <div className='flex flex-col gap-[1vh]'>
            <ReactTyped className={typeText} strings={["viver de fantasia."]} typeSpeed={100} startDelay={3000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-[1.85vh]'>
              <div className='w-[8.88vh] h-[1.11vh] bg-white'></div>
              <div className='w-[5.18vh] h-[1.11vh] bg-white'></div>
              <div className='w-[11.85vh] h-[1.11vh] bg-white'></div>
            </div>
          </div>        
        
        </div>     
        
        <div className="w-[62.68vh] h-[73.61vh] flex flex-col justify-center items-center bg-white rounded-[3vh]">
          <div className="flex  flex-col gap-[1vh]">
            <p className="text-[3.70vh] mb-[0.5vh] font-nonito">LOGIN</p>
            <div className="flex flex-col gap-[1.5vh]">
                <Input classNameDiv={'w-[37.22vh]'} value={user.login} placeholder="Email ou User" 
                    onChange={e => setUser({...user, login: e.target.value})}/>
                <Input classNameDiv={'w-[37.22vh]'} type="password" value={user.password} placeholder="Senha" 
                onChange={e => setUser({...user, password: e.target.value})} />
            </div>
            <div className="flex  mx-[1vh] justify-between">
              <Link className='text-[1.50vh] font-nonito underline text-[#7A08DB]' to='/forgotpassword'>Esqueceu a senha?</Link>
              <p className="text-[1.50vh] font-nonito">Não possui uma conta? <Link className='text-[1.50vh] text-[#7A08DB] underline font-normal' to='/register'>CADASTRE-SE</Link></p>
              
            </div>
            <div className="flex flex-col items-center justify-center mt-[5vh] gap-[5vh]">
              <ButtonForm className={'bg-[#7A08DB] text-white w-[25.64vh] rounded-[1.85vh]'} onClick={e=>submitForm()} text={'ENTRAR'}/>
              <button className="flex p-[1vh] gap-[1vh] items-center border border-black rounded-[3vh] font-inter text-sm">
                <div className='w-[2.5vh]'><GoogleIcon/></div>
                <p className='text-[1.4vh] font-extrabold'>Entre com sua conta Google</p>
              </button>
          </div>
          </div>       
        </div>
        
        <div className='h-[48.70vh] ml-[33vh] mt-[1vh] z-0 absolute'>
          <svg width="100%" height="100%" viewBox="0 0 487 526" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M238.219 2.1679L480.269 133.445L485.184 392.953L249.291 524.999L412.232 364.672L241.746 75.9193L476.543 134.782L411.564 364.168L485.58 393.262M237.57 2.16113L1.62877 144.123L7.4426 404.202L251.251 524.919L80.8877 371.523L236.557 75.8573L5.41066 145.293L81.364 371.826L7.47062 405.455M79.9941 372.505L412.134 365.08M237.553 0.350045L239.26 76.7374" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
          </svg>
        </div>
        <div className='h-[15.37vh] ml-[20vh] mb-[58vh] absolute '>
          <svg width="100%" height="100%" viewBox="0 0 194 166" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.5457 1.84729L150.052 4.68684L192.599 85.1353L139.631 163.743L165.296 87.812L66.3041 24.374L149.097 5.69419L165.007 87.7597L192.772 85.1695M53.3414 1.94779L1.92592 83.6662L44.8446 164.151L140.232 163.408L62.6686 142.317L64.6702 25.1746L3.29445 83.4346L62.8656 142.336L45.0514 164.539M62.5441 142.765L165.33 87.9551M53.0498 1.38364L65.6554 25.0228" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
          </svg>
        </div>
        <div className='h-[8.33vh] mb-[50vh] absolute pl-[76vh]'>
          <svg width="100%" height="100%" viewBox="0 0 94 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.6199 1.69859L91.9259 34.2236L81.21 77.4764L36.2242 88.8921L70.3689 69.5451L54.9276 14.0855L91.2486 34.2798L70.2805 69.4318L81.2619 77.5453M57.5125 1.66861L12.0782 14.7264L1.48588 58.1138L36.5528 88.9659L15.1174 55.9581L54.0699 13.8447L12.6533 15.0884L15.1829 56.0295L1.43484 58.3229M14.9256 56.0812L70.3345 69.6084M57.5901 1.36752L54.479 14.1108" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
          </svg>
        </div>
        <div className='h-[12.40vh] pl-[70vh] absolute mt-[65vh]'>
          <svg width="100%" height="100%" viewBox="0 0 139 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.7925 1.13249L137.425 50.0848L121.297 115.183L53.5907 132.364L104.981 103.246L81.7405 19.7757L136.406 50.1694L104.848 103.075L121.375 115.287M85.6309 1.08737L17.2493 20.7402L1.3072 86.0411L54.0853 132.476L21.8235 82.7967L80.4496 19.4132L18.115 21.285L21.9222 82.9041L1.23037 86.3558M21.5348 82.982L104.929 103.341M85.7478 0.634197L81.0654 19.8136" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
          </svg>
        </div>
        <div className='h-[8.14vh] absolute pl-[25vh] mt-[60vh]'>
          <svg width="100%" height="100%" viewBox="0 0 95 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.6551 1.8759L79.0454 10.9711L93.1596 53.2371L61.2824 86.9697L79.7567 52.345L37.0152 13.7786L78.5035 11.3812L79.6212 52.2967L93.2403 53.2675M32.5483 1.9081L1.17183 37.2677L15.4625 79.5812L61.5995 86.8561L25.82 70.4604L36.1619 14.0346L1.85143 37.2653L25.9135 70.4856L15.5314 79.7851M25.7239 70.6671L79.7615 52.4168M32.4526 1.61225L36.6499 14.0401" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}