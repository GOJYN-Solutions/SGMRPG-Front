import { Link } from "react-router-dom";

export default function NavBar({buttons}) {
    return (
      <div className='flex justify-between items-center px-[3.70vh] h-[5.74vh] w-full'>
            <Link className=' ' to='/'>
                <div className='flex gap-[0.74vh] text-[1.85vh]'>
                  <div className='w-[3.24vh] h-[2.96vh] bg-[#7D06DD] rounded-full'></div>
                  <p className='flex items-center font-nonito text-[#7E05DE]'>Runesys</p>
                </div>
            </Link>
            {buttons && <div className='flex gap-[0.74vh] text-[1.85vh]'>
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
            </div>}              
        </div>   
    );
  }