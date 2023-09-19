import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'

export default function Login() {

  const [inputs, setInputs] = useState('2xl:h-12 2xl:text-lg xl:text-base xl:h-8 px-5 font-nonito  placeholder-[#CBCBCB] rounded-full bg-[#F8F8F8]');


  return (
    <div className="h-screen text-4xl px-32 py-20 gap-5 items-center bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-row ">
      <div className="w-1/2 h-full bg-white">

      </div>

      <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center bg-white rounded-3xl">
        <div className="flex flex-col gap-10">
          <p className="2xl:text-5xl xl:text-4xl font-nonito">LOGIN</p>
          <div className="gap-5 flex flex-col">
            <input type="text" className={inputs} placeholder="Email ou User"/>
            <input type="text" className={inputs} placeholder="Senha"/>
          </div>
          <div className="px-2 gap-20 flex justify-between">
            <p className="2xl:text-sm xl:text-xs font-nonito underline text-[#7A08DB]">Esqueceu a senha?</p>
            <p className="2xl:text-sm xl:text-xs font-nonito">Não possui uma conta? <b className="text-[#7A08DB] underline font-normal">CADASTRE-SE</b></p>
          </div>
          <div className="flex items-center justify-center">
            <button className="2xl:my-5 2xl:text-2xl xl:text-xl 2xl:p-5 xl:p-3 w-72 bg-[#7A08DB] text-white rounded-3xl font-nonito ">
              ENTRAR
            </button>
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