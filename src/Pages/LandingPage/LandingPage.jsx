import { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import {Roll1, Roll2, Roll3, Roll4, Roll5, Roll6} from '../../Components/Icons/Rolls';

export default function LandingPage() {
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

  return (
    <>  
        <div className="">
            <div className='flex justify-between items-center px-[3.70vh] h-[5.74vh] w-full'>
              <div className='flex gap-[0.74vh] text-[1.85vh]'>
                <div className='w-[3.24vh] h-[2.96vh] bg-[#7D06DD] rounded-full'></div>
                <p className='flex items-center font-nonito text-[#7E05DE]'>Runesys</p>
              </div>
              <div className='flex gap-[0.74vh] text-[1.85vh]'>
                <Link className=' ' to='/register'>
                  <div className='flex items-center justify-center rounded-[0.92vh] w-[12.83vh] h-[4.01vh] bg-white border-[#7D06DD] border-[0.3vh]'>
                    <p className='font-bold text-[1.26vh] text-[#7D06DD] '>CADASTRE-SE</p>
                  </div>
                </Link>
                <Link className=' ' to='/login'>
                  <div className='flex items-center justify-center rounded-[0.92vh] w-[10.95vh] h-[4.01vh] bg-[#7D06DD]'>
                    <p className='font-bold text-[1.26vh] text-white '>ENTRAR</p>
                  </div>
                </Link>
              </div>              
            </div>        
            <div className='flex bg-blue-[#E0DCDC] h-[82vh]'>
              <div className='w-1/2 h-full  flex items-center justify-center'>
                <div className='flex flex-col gap-[1.85vh] pr-[8.5vh]'>
                  <p className='font-nonito tracking-tight text-[5.55vh] text-[#313F96]'>O <b className='font-normal text-[#7D06DD]'>sistema</b> para quem deseja <br/> se divertir livre dos <br/> problemas.</p>
                  <p className='text-[2.35vh] font-inter text-[#313F96]'>O sistema para quem deseja se divertir livre dos <br/> problemas.</p>
                </div>
              </div>
              <div className='w-1/2 h-full '> 
                <div className='px-[20vh] py-[9vh] absolute z-10'>
                  <div className='h-[37.60vh]'>
                    <Roll1/>
                  </div>
                </div>    
                <div className='px-[4.2vh] py-[39vh] absolute z-10'>
                  <div className='h-[30vh]'>
                    <Roll2/>
                  </div>
                </div>        
                <div className='px-[31vh] py-[57vh] absolute z-10'>
                  <div className='h-[18vh]'>
                    <Roll3/>
                  </div>
                </div>
                <div className='pl-[53.5vh] py-[52vh] flex justify-end absolute z-10'>
                  <div className='h-[14vh]'>
                    <Roll4/>
                  </div>
                </div>
                <div className='px-[9vh] py-[14vh] absolute'>
                  <div className='h-[16.5vh]'>
                    <Roll5/>
                  </div>
                </div>
                <div className='pl-[50.5vh] py-[26.5vh] flex justify-end absolute'>
                  <div className='h-[18vh]'>
                    <Roll6/>
                  </div>
                </div>   
              </div>
            </div>   
        </div>
    </>
  );
}