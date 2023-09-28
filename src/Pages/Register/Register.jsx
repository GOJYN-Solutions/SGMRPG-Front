import { useState } from 'react';
import Checkboxs from '../../Components/Checkbox/Checkboxs';
import { FiPlus } from 'react-icons/fi'
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';


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
        <div className="h-screen w-screen px-40 py-20 rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-row ">

            <div className='h-full w-1/2 justify-center flex flex-col bg-white rounded-l-3xl'>
                <div className='flex w-full h-full p-10 flex-col justify-between'>
                    <div className='h-1/6 flex justify-center'>
                        <p className='2xl:text-4xl xl:text-3xl font-nonito'>CADASTRE-SE</p>
                    </div>
                    <div className='h-full flex flex-col gap-5'>
                        <div className=''>
                            <div className='flex items-center gap-5'>
                                <div className='p-[1px] bg-gradient-to-b from-[#7F04DF] to-[#313F96] rounded-full'>
                                    <button className='w-36 h-36 border-2 bg-[#F8F8F8] rounded-full flex  items-center justify-center'>
                                        <FiPlus className='w-full h-full p-5' color='#E7E7E7'/>
                                    </button>
                                </div>
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
                                <Input type='password' className={"w-full"} value={user.confirmPassword} placeholder="Confirme a senha" 
                                    onChange={e => setUser({...user, confirmPassword: e.target.value})}/>
                            </div>

                            
                            <Input type='password' className={"w-full"} value={user.password} placeholder="Senha" 
                                    onChange={e => setUser({...user, password: e.target.value})}/>
                            <Input type='password' className={"w-full"} value={user.confirmPassword} placeholder="Confirme a senha" 
                                    onChange={e => setUser({...user, confirmPassword: e.target.value})}/>
                        </div>

                        <div className='flex items-center'>
                            <Checkbox defaultChecked color="default" 
                                sx={{ 
                                    '& .MuiSvgIcon-root': { fontSize: 30 }, 
                                    color: grey[300],
                                    '&.Mui-checked': {
                                        color: grey[300],
                                    }                   
                                }}
                            />
                            <p className='flex font-nonito text-xl text-[#CBCBCB]'>Termo de Uso</p>
                        </div>
                        
                        <div className='flex justify-center '>
                            <ButtonForm className={'bg-[#313F96]'} onClick={e=>alert(JSON.stringify(user))} text={'CADASTRAR'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-full w-1/2 justify-center flex flex-col bg-[#313F96] rounded-r-3xl'>
                <div className='flex w-full h-full p-10 flex-col justify-between'>
                    <div className='h-1/6 flex justify-center'>
                        <p className='text-end 2xl:text-4xl xl:text-3xl font-nonito leading-tight text-white'>ESCOLHA SEUS PRINCIPAIS INTERESSES...</p>
                    </div>
                    <div className='h-full flex items-start flex-col justify-center'>  
                        <div>
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