import { useState, useRef} from 'react';
import Input from '../../Components/Input/Input';
import ButtonForm from '../../Components/ButtonForm/ButtonForm';
import phonelib from 'phonelib'
import { Link } from 'react-router-dom';




export default function Register() {

    const [input, setInput] = useState('')
    const [modal, setModal] = useState()
    const [code, setCode] = useState('')

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);


    
    const submitInput = () => {
        
        let test = false
        var validacao = /\S+@\S+\.\S+/;

        var phoneNumber = {
            phone: input,
            country: 'BR'
        }
        
        phonelib.isValid(phoneNumber, function(err, result){
            console.log(result.isValid)
            if (result.isValid) setModal('tel')            
        });
                
        if(validacao.test(input)) setModal('email')
    };

    const codeOnChange = (value, nextInput, i) => {
        const arrayCode = code.split('');
        arrayCode[i] = value;
        setCode(arrayCode.join(''))
        if (nextInput && value !== '') {
            nextInput.current.focus();
            nextInput.current.setSelectionRange(0, 0);
        }
        if(!nextInput && value !== ''){
            inputRef4.current.blur();
        }   
    };

    const onFocusInput = () => {
        console.log(code.length)
        if(code.length == 4) setCode('')
    }

    const switchModal = () => {
        switch (modal) {
            case 'email':
                return(
                    <div className='h-full gap-10 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-nonito'>ESQUECEU A SENHA?</p>
                        <p className='text-xl text-center'>Enviamos um e-mail a sua caixa de <br/> entrada para a redefinição de senha.</p>
                        <div className='flex gap-5'>
                            <ButtonForm className={'bg-[#7A08DB] text-white'} onClick={e=>submitInput()} text={'Reenviar Email'}/>
                            <ButtonForm className={'bg-white border-[#7A08DB]  border-2 text-[#7A08DB]'} onClick={e=>submitInput()} text={'Voltar para Login'}/>
                        </div>
                    </div> 
                )
            break

            case 'tel':
                return(
                    <div className='h-full gap-10 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-nonito'>ESQUECEU A SENHA?</p>
                        <p className='text-xl text-center'>Enviamos um código via SMS para o seu telefone. <br/> Por favor, confirme o código abaixo:</p>
                        <div className='flex items-center gap-4'>
                        <div className={`p-0.5 rounded-3xl bg-gradient-to-b from-[#7F04DF] to-[#313F96]`}>
                            <input onFocus={e=> {onFocusInput()}}  ref={inputRef1} value={code[0] ? code[0] : ''}  onChange={(e) => {codeOnChange(e.target.value, inputRef2, 0)}} className='h-24 text-lg w-20 font-nonito placeholder-[#CBCBCB] rounded-3xl text-center bg-[#F8F8F8]' type="text" />
                        </div> 
                        <div className={`p-0.5 rounded-3xl bg-gradient-to-b from-[#7F04DF] to-[#313F96]`}>
                            <input onFocus={e=> {onFocusInput()}} ref={inputRef2} value={code[1] ? code[1] : ''} onChange={(e) => {codeOnChange(e.target.value, inputRef3, 1)}} className='h-24 text-lg w-20 font-nonito placeholder-[#CBCBCB] rounded-3xl text-center bg-[#F8F8F8]' type="text" />
                        </div>  
                        <div className={`p-0.5 rounded-3xl bg-gradient-to-b from-[#7F04DF] to-[#313F96]`}>
                            <input onFocus={e=> {onFocusInput()}} ref={inputRef3} value={code[2] ? code[2] : ''} onChange={(e) => {codeOnChange(e.target.value, inputRef4, 2)}} className='h-24 text-lg w-20 font-nonito placeholder-[#CBCBCB] rounded-3xl text-center bg-[#F8F8F8]' type="text" />
                        </div>  
                        <div className={`p-0.5 rounded-3xl bg-gradient-to-b from-[#7F04DF] to-[#313F96]`}>
                            <input onFocus={e=> {onFocusInput()}} ref={inputRef4} value={code[3] ? code[3] : ''} onChange={(e) => {codeOnChange(e.target.value, false, 3)}}  className='h-24 text-lg w-20 font-nonito placeholder-[#CBCBCB] rounded-3xl text-center bg-[#F8F8F8]' type="text" />
                        </div>                              
                        </div>
                        <div className='flex gap-5'>
                            <ButtonForm className={'bg-[#7A08DB] text-white'} onClick={e=>submitInput()} text={'Confirmar Código'}/>
                            <ButtonForm className={'bg-white border-[#7A08DB]  border-2 text-[#7A08DB]'} onClick={e=>submitInput()} text={'Reenviar Código'}/>
                        </div>
                    </div> 
                )
            break
        
            default:
                return(
                    <div className='h-full gap-10 flex flex-col items-center justify-center'>
                        <p className='text-5xl font-nonito'>ESQUECEU A SENHA?</p>
                        <p className=''>Insira seu e-mail ou telefone cadastrado(s).</p>
                        <Input className={"pr-40"} classNameDiv={" "} value={input} placeholder="Email ou Telefone" 
                                                    onChange={e => setInput(e.target.value)}/>
                        <ButtonForm className={'bg-[#7A08DB] text-white'} onClick={e=>submitInput()} text={'ENVIAR'}/>
                    </div> 
                )
            break
        }
    }

  return (
    <>      
        <div className="h-screen w-screen flex items-center justify-center px-40 py-20 rounded bg-gradient-to-b from-[#7F04DF] to-[#313F96] ">
            <div className='w-1/2 py-16 bg-white rounded-2xl'>
                
                    {switchModal()}
            </div>
        </div>
    </>
  );
}