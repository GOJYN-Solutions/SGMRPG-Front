import { useEffect, useRef, useState } from 'react';
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Roll10, Roll7, Roll8, Roll9 } from '../../Components/Icons/Rolls';
import Datepicker from "react-tailwindcss-datepicker"; 
import phonelib from 'phonelib'
import { Link } from 'react-router-dom';
import NavBar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import moment from 'moment';


export default function Register() {

    const [errors, setErrors] = useState([])

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
        if (!isNaN(value) && user.tel.length < 11 || value.length < user.tel.length) setUser({...user, tel: value})
    }
    console.log(errors)

    const submitForm = () => {
        setErrors([])
        let erros = []
        var validacao = /\S+@\S+\.\S+/;        
        var phoneNumber = {
            phone: user.tel,
            country: 'BR'
        }        
        phonelib.isValid(phoneNumber, function(err, result){
            if (!result.isValid) erros.push("Telefone Invalido")
        });

        if (user.password != user.confirmPassword) erros.push("As senhas devem ser iguais")
        if (!validacao.test(user.email)) erros.push("Email invalido")
        
        if(moment(user.birth.startDate).isAfter(moment())){
            erros.push("Digite uma data de nascimento valida")
        }

        if (erros.length > 0) {
            setErrors(erros) 
            return('')
        }
        

        axios.post('https://ga2d803698dd4bc-adbsgmrpg.adb.sa-saopaulo-1.oraclecloudapps.com/ords/wksp_gojyn/user/register', 
            {
                nick: user.nick,
                email: user.email,
                pwd: user.password,
                descr: "",
                birth: moment(user.birth.startDate).format("DD/MM/YYYY")
            })
            .then((resp) => {
                console.log(resp.data)
                if(resp.data.token){
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('nick', user.nick)
                window.location.reload(false);}
                else setErrors([resp.data.erro])
            })
            .catch((erro) => {
                console.log(erro)
            })
            
    }

  return (
    <div className='overflow-hidden h-screen'>
        <NavBar/> 
        <div className="h-full w-screen rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-col items-center justify-center">            
            <div className='w-[114.72vh] flex flex-row '>            
                <div className='w-1/2 p-[3.70vh] justify-center flex flex-col bg-white rounded-l-[1.11vh] z-20'>
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
                                    <Datepicker 
                                        inputClassName="w-[37.22vh] h-[4.27vh] w-full bg-white pl-[2.85vh] text-[1.65vh] font-nonito placeholder-[#989FCA] rounded-[1.85vh] text-start bg-[#F8F8F8] border-[0.1vh] border-[#7A08DB]"
                                        useRange={false} 
                                        asSingle={true} 
                                        value={user.birth} 
                                        onChange={e => setUser({...user, birth: e})}
                                        displayFormat={"DD/MM/YYYY"}
                                        placeholder='Data de Nascimento'
                                        popoverDirection="top" 
                                    
                                    /> 
                                    <div className='flex flex-col gap-[1vh] z-0 '>
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
                                    <div className='w-full pl-[3.5vh]'>                                    
                                        {
                                            errors.map(erro => (
                                                <p className="font-inter text-[1.7vh] text-[#EB0000]">{erro}</p>  
                                            ))
                                        }
                                    </div>
                                </div>
                                    
                            </div>
                            <div className='flex justify-center '>
                                <ButtonForm className={'bg-[#313F96] text-white'} onClick={e=>submitForm(user)} text={'CADASTRAR'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 p-[3.70vh] justify-center flex flex-col bg-gradient-to-t from-[#7F04DF] to-[#313F96] rounded-r-[1.11vh]'>
                     <div className='flex w-full h-full p-[3.70vh] flex-col justify-between'>
                        
                       
                        <div className='h-full flex flex-col pt-[6vh] pl-[4vh]'> 
                                                                          
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
        </div>
    </div>
  );
}