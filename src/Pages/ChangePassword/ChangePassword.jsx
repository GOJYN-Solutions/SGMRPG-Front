import { useState, useRef} from 'react';
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import phonelib from 'phonelib'




export default function Register() {

    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    
    const sumitForm = () => {
       alert(password == confirmpassword)
        
    };





  return (
    <>      
        <div className="h-screen w-screen flex items-center justify-center px-40 py-20 rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] ">
            
            <div className='w-1/2 py-16 bg-white rounded-2xl'>
                <div className='h-full gap-10 flex flex-col items-center justify-center'>
                        <p className='text-[3.70vh] font-nonito'>ALTERAR SENHA</p>
                        <p className='text-[1.38vh] text-center'>A senha deve possuir no minímo 6 caracteres, um <br/> caractere maiúsculo e um digíto. </p>
                        <div className='w-[20.93vw] flex flex-col gap-[1.5vh]'>
                            <Input type={'password'} className={"w-full"} value={password} placeholder="Nova senha" 
                                onChange={e => setPassword(e.target.value)}/>
                            <Input type={'password'} className={"w-full"} value={confirmpassword} placeholder="Confirme sua senha" 
                                onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        <ButtonForm className={'bg-[#7A08DB] text-white'} onClick={e=>sumitForm()} text={'Voltar para Login'}/>
                </div> 
            </div>
        </div>
    </>
  );
}