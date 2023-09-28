import { useState } from 'react';
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';




export default function Register() {

    const [user, setUser] = useState({
        email: '',
        tel: ''
    })

  return (
    <>
       
        <div className="h-screen w-screen flex items-center justify-center px-40 py-20 rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] ">
        
            <div className='h-fit py-24 w-1/2 flex flex-col bg-white rounded-3xl'>
                
                <div className='flex flex-col gap-20'>

                    <p className='2xl:text-4xl xl:text-3xl text-center font-nonito'>ESQUECEU A SENHA?</p>
                    
                    <div className='flex flex-col items-center gap-5'>
                        <div className='w-1/2'>
                            <Input value={user.email} placeholder="Email" 
                                onChange={e => setUser({...user, email: e.target.value})}/>
                        </div>
                        <p className='2xl:text-2xl xl:text-xl text-center font-nonito'>OU</p>
                        <div className='w-1/2'>
                            <Input value={user.tel} placeholder="Telefone" 
                                onChange={e => setUser({...user, tel: e.target.value})}/>
                        </div>
                    </div>
                        <div className='flex justify-center'>
                            <ButtonForm className={'bg-[#313F96]'} onClick={e=>alert(JSON.stringify(user))} text={'ENVIAR'}/>
                        </div>
                </div>
                                 
            </div>
   
        </div>
    </>
  );
}