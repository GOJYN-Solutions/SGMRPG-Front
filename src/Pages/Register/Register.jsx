import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi'
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import { grey } from '@mui/material/colors';
import { ChakraProvider } from '@chakra-ui/react'
import { Checkbox} from '@chakra-ui/react'
import Checkboxs from '../../Components/Checkbox/Checkboxs';



// setFriends(
//     friends.map((friend) =>
//         // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
//         friend.id === 2
//             ? { ...friend, name: "Changed Name" }
//             : { ...friend }
//     )



export default function Register() {

    const [user, setUser] = useState({
        nick: '',
        email: '',
        password: '',
        confirmPassword: '',
        birth: '',
        tel: '',

        choices: [{
        }, {
            checked: false,
            label: 'Dungeons & Dragons'
        }, {
            checked: false,
            label: 'Tormenta'
        }, {
            checked: false,
            label: 'Ordem Paranormal'
        }, {
            checked: false,
            label: 'Personalizado'
        },{
            checked: false,
            label: 'Dungeons & Dragons'
        }]
    })

    

    

  return (
    <>
        <div className="h-screen w-screen rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex items-center justify-center">
            <div className='flex flex-row '>            
                <div className='w-1/2 p-10 justify-center flex flex-col bg-white rounded-l-xl'>
                    <div className='flex gap-16 p-10 flex-col justify-between '>
                        <div className='h-1/6 flex justify-center '>
                            <p className='2xl:text-4xl xl:text-3xl font-nonito'>CADASTRE-SE</p>
                        </div>
                        <div className='h-full flex flex-col gap-10 '>
                            <div className='flex flex-col gap-5'>
                                <div className=''>
                                    <div className='flex items-center gap-5'>
                                        <Input className={"w-full"} value={user.nick} placeholder="Nickname/User" 
                                            onChange={e => setUser({...user, nick: e.target.value})}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>

                                    <Input className={"w-full"} value={user.email} placeholder="Email" 
                                                onChange={e => setUser({...user, email: e.target.value})}/>
                                
                                            
                                    <div className='flex gap-5'>
                                        <Input type='password' className={"w-full"} value={user.password} placeholder="Senha" 
                                            onChange={e => setUser({...user, password: e.target.value})}/>
                                        <Input type='password' className={"px-5"} value={user.confirmPassword} placeholder="Confirme a senha" 
                                            onChange={e => setUser({...user, confirmPassword: e.target.value})}/>
                                    </div>

                                    
                                    <Input type='date' className={"w-full"} value={user.password} placeholder="Data de Nascimento" 
                                            onChange={e => setUser({...user, birth: e.target.value})}/>
                                    <div className='flex flex-col gap-2'>
                                        <Input type="number" className={"w-full"} value={user.tel} placeholder="Telefone"  
                                                onChange={e => setUser({...user, tel: e.target.value})}/>
                                        
                                        <p className='flex font-nonito text-base text-[#313F96] px-6 gap-1'>
                                            <b className='text-red-900'>*</b>Campo opcional.
                                            
                                        </p>    
                                    </div>
                                </div>
                                    
                                <div className='flex items-center gap-4 px-6'>
                                    
                                <   ChakraProvider><Checkbox size='lg' spacing={5}></Checkbox></ChakraProvider>

                                    <p className='flex font-nonito text-xl text-[#313F96]'>Concordo com o Termo de Uso</p>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <ButtonForm className={'bg-[#313F96] text-white'} onClick={e=>alert(JSON.stringify(user))} text={'CADASTRAR'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 p-10 justify-center flex flex-col bg-gradient-to-t from-[#7F04DF] to-[#313F96] rounded-r-xl'>
                    <div className='flex w-full h-full p-10 flex-col justify-between'>
                        
                            <p className='text-end 2xl:text-4xl xl:text-3xl font-nonito leading-tight text-white'>ESCOLHA SEUS <br/> PRINCIPAIS <br/> INTERESSES...</p>
                       
                        <div className='h-full gap-2 flex items-start flex-col justify-center'>  
                          
                            {
                                    user.choices.map(choice =>(
                                        <Checkboxs labelStyle={'text-white'} label={choice.label}/>
                                    ))
                                }
                           
                        </div>
                    </div>
                </div> 
            </div>       
        </div>
    </>
  );
}