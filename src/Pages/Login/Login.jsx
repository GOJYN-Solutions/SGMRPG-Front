import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import ReactTyped from "react-typed";
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';

export default function Login() {

  const [user, setUser] = useState({
    login: '',
    password: ''
  })

  let typeText = '2xl:text-5xl xl:text-4xl text-white font-nonito'


  return (
    <div className="h-screen text-4xl px-40 py-20 gap-5 items-center bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-row ">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="gap-20 flex flex-col  justify-center">
          <div className='flex flex-col gap-6 '>
            <ReactTyped className={typeText} strings={["Um sistema feito para"]} typeSpeed={100} startDelay={1000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-5'>
              <div className='w-14 2xl:h-3 h-2 bg-white'></div>
              <div className='w-36 2xl:h-3 h-2 bg-white'></div>
              <div className='w-24 2xl:h-3 h-2 bg-white'></div>
              <div className='w-20 2xl:h-3 2xl:block xl:hidden h-2 bg-white'></div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <ReactTyped className={typeText} strings={["quem ama"]} typeSpeed={100} startDelay={2000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-5'>
              <div className='w-24 2xl:h-3 h-2 bg-white'></div>
              <div className='w-24 2xl:h-3 h-2 bg-white'></div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <ReactTyped className={typeText} strings={["viver de fantasia."]} typeSpeed={100} startDelay={3000} backDelay={5000} backSpeed={200} loop/>
            <div className='flex gap-5'>
              <div className='w-24 2xl:h-3 h-2 bg-white'></div>
              <div className='w-14 2xl:h-3 h-2 bg-white'></div>
              <div className='w-32 2xl:h-3 h-2 bg-white'></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center bg-white rounded-3xl">
        <div className="flex flex-col gap-10">
          <p className="2xl:text-5xl xl:text-4xl font-nonito">LOGIN</p>
          <div className="gap-5 flex flex-col">
              <Input value={user.login} placeholder="Email ou User" 
              onChange={e => setUser({...user, login: e.target.value})}/>
              <Input type="password" value={user.password} placeholder="Senha" 
              onChange={e => setUser({...user, password: e.target.value})} />
          </div>
          <div className="px-2 gap-20 flex justify-between">
            <Link className='className="2xl:text-sm xl:text-xs font-nonito underline text-[#7A08DB]' to='/password'>Esqueceu a senha?</Link>
            <p className="2xl:text-sm xl:text-xs font-nonito">Não possui uma conta? <Link className='text-[#7A08DB] underline font-normal' to='/register'>CADASTRE-SE</Link></p>
            
          </div>
          <div className="flex items-center justify-center">
            <ButtonForm className={'bg-[#7A08DB]'} onClick={e=>alert(`Login:${user.login} password:${user.password}`)} text={'ENTRAR'}/>
          </div>
        </div>
        <button className="flex items-center p-3 gap-2 border border-black rounded-3xl font-inter text-sm">
          <FcGoogle size={25}/>
          Entre com sua conta Google
        </button>
      </div>
    </div>
  );
}