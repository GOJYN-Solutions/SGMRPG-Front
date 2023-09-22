import { useState } from 'react';
import Checkboxs from '../../Components/Checkbox/Checkboxs';
import { FiPlus } from 'react-icons/fi'
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';

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
    <div className="h-screen w-screen px-40 py-20 rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-row ">
    
            <div className='h-full w-1/2 p-5 flex flex-col justify-center items-center bg-white rounded-l-3xl'>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center'>
                      <p className='font-nonito text-[5vh]'>CADASTRE-SE</p>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-10'>
                            <div>
                                <button className='w-32 h-32 rounded-full flex  items-center justify-center'>
                                    <FiPlus className='w-full h-full p-5' color='white'/>
                                </button>
                            </div>
                            <Input className={"w-full"} value={user.nick} placeholder="Nickname/User" 
                                onChange={e => setUser({...user, nick: e.target.value})}/>
                        </div>
                    </div>
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
                            
                    <Checkboxs checked={false} label={"Termo de Uso"} labelStyle={'text-[#CBCBCB]'}/>
                    
                    <div className='flex justify-center '>
                      <ButtonForm className={'bg-[#313F96]'} onClick={e=>alert(JSON.stringify(user))} text={'CADASTRAR'}/>
                    </div>
                </div>
            </div>
 
            <div className='h-full w-1/2 justify-center flex flex-col bg-[#313F96] rounded-r-3xl'>
                <div>
                    <div className='px-20'>
                        <p className='text-end font-nonito text-[5vh] leading-tight text-white'>ESCOLHA SEUS PRINCIPAIS INTERESSES...</p> 
                    </div>
                    <div className='h-full w-full items-center flex flex-col justify-center'>  
                        <div className='text-3xl'>
                            <div>
                                {
                                    user.choices.map(choice =>(
                                        <Checkboxs checked={choice.checked} label={choice.label}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
  );
}