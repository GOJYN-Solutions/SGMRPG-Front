import { useEffect, useRef, useState } from 'react';
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Roll10, Roll7, Roll8, Roll9 } from '../../Components/Icons/Rolls';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import ReactDatePicker,{registerLocale} from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { CalendarContainer } from 'react-datepicker';
registerLocale('ptBR', ptBR);


export default function Register() {

    const [user, setUser] = useState({
        nick: '',
        email: '',
        password: '',
        confirmPassword: '',
        birth: '',
        tel: '',
        terms: false,
        choices: []
    })

    const [choice1, setChoise1] = useState({
        checked: false,
        label: 'Dungeons & Dragons'
    })
    const [choice2, setChoise2] = useState({
        checked: false,
        label: 'Tormenta'
    })
    const [choice3, setChoise3] = useState({
        checked: false,
        label: 'Ordem Paranormal'
    })
    const [choice4, setChoise4] = useState({
        checked: false,
        label: 'Personalizado'
    })
    const [choice5, setChoise5] = useState({
        checked: false,
        label: 'Dungeons & Dragons'
    })

    const icon = "PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMi4yNSAxMi4zMjEgNy4yNyA2LjQ5MWMuMTQzLjEyNy4zMjEuMTkuNDk5LjE5LjIwNiAwIC40MS0uMDg0LjU1OS0uMjQ5bDExLjIzLTEyLjUwMWMuMTI5LS4xNDMuMTkyLS4zMjEuMTkyLS41IDAtLjQxOS0uMzM4LS43NS0uNzQ5LS43NS0uMjA2IDAtLjQxMS4wODQtLjU1OS4yNDlsLTEwLjczMSAxMS45NDUtNi43MTEtNS45OTRjLS4xNDQtLjEyNy0uMzIyLS4xOS0uNS0uMTktLjQxNyAwLS43NS4zMzYtLjc1Ljc0OSAwIC4yMDYuMDg0LjQxMi4yNS41NiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"

    const dateInput = useRef(null)

    const isTel = (value) => {
        console.log(value.length < user.tel.length, "<value")
        console.log(user.tel.length, "tel")
        if (!isNaN(value) && user.tel.length < 11 || value.length < user.tel.length) setUser({...user, tel: value})
    }
    

  return (
    <>
        <div className="h-screen w-screen rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex items-center justify-center">            
            <div className='w-[114.72vh] flex flex-row '>            
                <div className='w-1/2 p-[3.70vh] justify-center flex flex-col bg-white rounded-l-[1.11vh] z-10'>
                    <div className='flex gap-[5.92vh] p-[3.70vh] flex-col justify-between '>
                        <div className='h-1/6 flex justify-center '>
                            <p className='text-[3.80vh] font-nonito'>CADASTRE-SE</p>
                        </div>
                        <div className='h-full flex flex-col gap-[3.70vh] '>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col items-center gap-[1.5vh]'>
                                    <Input classNameDiv={"w-[37.22vh]"} value={user.nick} placeholder="Nickname/User" 
                                        onChange={e => setUser({...user, nick: e.target.value})}/>

                                    <Input classNameDiv={"w-[37.22vh]"} value={user.email} placeholder="Email" 
                                                onChange={e => setUser({...user, email: e.target.value})}/>
                                
                                            
                                    <div className='flex gap-[1.85vh]'>
                                        <Input type='password' classNameDiv={"w-[17.59vh]"} value={user.password} placeholder="Senha" 
                                            onChange={e => setUser({...user, password: e.target.value})}/>
                                        <Input type='password' classNameDiv={"w-[17.59vh]"} value={user.confirmPassword} placeholder="Confirme a senha" 
                                            onChange={e => setUser({...user, confirmPassword: e.target.value})}/>
                                    </div>                                    

                                    <div onClick={e=>console.log(dateInput.current)}><Input type='text' classNameDiv={"w-[37.22vh]"} value={user.birth} placeholder="Data de Nascimento" 
                                           onChange={e => setUser({...user, birth: e.target.value})}/></div>
                                    <div className='flex flex-col gap-[1vh]'>
                                        <Input type="text" classNameDiv={"w-[37.22vh]"} value={user.tel} placeholder="Telefone"  
                                        onChange={e => isTel(e.target.value)} optional={true}/>
                                        
                                        <p className='flex font-nonito text-[1.92vh] text-[#313F96] px-[2vh] gap-[0.37vh]'>
                                            <b className='text-red-900'>*</b>Campo opcional.
                                            
                                        </p>    
                                    </div>
                                    <div className='flex w-full items-center gap-[1vh] pl-[2vh] '>
                                        <Checkbox 
                                            labelStyle={"font-nonito text-[1.8vh] text-[#313F96]"} 
                                            label={"Concordo com o Termo de Uso"}
                                            checked={user.terms}
                                            onChange={e=> setUser({...user, terms: !user.terms})}
                                            classname={""}
                                            base64Icon={icon}
                                        />
                                    </div>
                                </div>
                                    
                            </div>
                            <div className='flex justify-center '>
                                <ButtonForm className={'bg-[#313F96] text-white'} onClick={e=>alert(JSON.stringify(user))} text={'CADASTRAR'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 p-[3.70vh] justify-center flex flex-col bg-gradient-to-t from-[#7F04DF] to-[#313F96] rounded-r-[1.11vh]'>
                     <div className='flex w-full h-full p-[3.70vh] flex-col justify-between'>
                        
                        <p className='text-end text-[3.80vh] font-nonito text-white leading-[5vh]'>ESCOLHA SEUS <br/> PRINCIPAIS <br/> ...INTERESSES</p>
                       
                        <div className='h-full flex flex-col pt-[6vh] pl-[4vh]'> 
                          <div className='space-y-[2vh]'>
                            <Checkbox 
                                labelStyle={'text-white text-[1.85vh] font-inter'} 
                                label={choice1.label} 
                                checked={choice1.checked}
                                onChange={e=>setChoise1({...choice1, checked:!choice1.checked})}
                                base64Icon={icon}
                                classname={"w-[2vh] h-[2vh] checked:bg-white ring-white ring-[0.25vh]"}/>

                            <Checkbox 
                                labelStyle={'text-white text-[1.85vh] font-inter'} 
                                label={choice2.label} 
                                checked={choice2.checked}
                                onChange={e=>setChoise2({...choice2, checked:!choice2.checked})}
                                base64Icon={icon}
                                classname={"w-[2vh] h-[2vh] checked:bg-white ring-white ring-[0.25vh]"}/>
                            
                            <Checkbox 
                                labelStyle={'text-white text-[1.85vh] font-inter'} 
                                label={choice3.label} 
                                checked={choice3.checked}
                                onChange={e=>setChoise3({...choice3, checked:!choice3.checked})}
                                base64Icon={icon}
                                classname={"w-[2vh] h-[2vh] checked:bg-white ring-white ring-[0.25vh]"}/>

                            <Checkbox 
                                labelStyle={'text-white text-[1.85vh] font-inter'} 
                                label={choice4.label} 
                                checked={choice4.checked}
                                onChange={e=>setChoise4({...choice4, checked:!choice4.checked})}
                                base64Icon={icon}
                                classname={"w-[2vh] h-[2vh] checked:bg-white ring-white ring-[0.25vh]"}/>

                            <Checkbox 
                                labelStyle={'text-white text-[1.85vh] font-inter'} 
                                label={choice5.label} 
                                checked={choice5.checked}
                                onChange={e=>setChoise5({...choice5, checked:!choice5.checked})}
                                base64Icon={icon}
                                classname={"w-[2vh] h-[2vh] checked:bg-white ring-white ring-[0.25vh]"}/>    
                            </div>                                                   
                        </div>
                    </div>

                    <div className='ml-[39vh] mt-[57vh]  absolute'>
                        <div className='h-[12.50vh]'>
                            <Roll7/>
                        </div>
                    </div>
                    <div className='ml-[28vh] mt-[45vh]  absolute'>
                        <div className='h-[9.65vh]'>
                            <Roll8/>
                        </div>
                    </div>
                    <div className='ml-[39vh] mt-[30vh]  absolute'>
                        <div className='h-[5vh]'>
                            <Roll9/>
                        </div>
                    </div>
                </div> 
                <div className='ml-[55.5vh] mt-[65.5vh] absolute'>
                    <div className='h-[6.06vh]'>
                        <Roll10/>
                    </div>
                </div>    
            </div> 
            <div className='absolute flex items-center justify-center h-full bg- w-full z-20'>
                <ReactDatePicker
                    
                    selected={user.birth}
                    onChange={date => setUser({...user, birth:date})}
                    name='date'
                    inline
                    locale="ptBR"
                />
            </div>      
        </div>
    </>
  );
}