import Navbar from '../../Components/Navbar/Navbar.jsx'

export default function () {

    return(
        <div className='h-screen'>
            <Navbar navbarLogada={true}/>
            <div className='h-[94.26vh] bg-gradient-to-b to-[#313F96] from-[#7A08DB] flex  justify-center pt-[2.5vh]'>
                <div className='w-[162.037vh] h-[91.7593vh] bg-white rounded-t-[1vh]'>
                    <div className='h-[29.0741vh] bg-[#646FB0] m-0 rounded-t-[1vh]'>
                        <div className='ml-[14.3vh] mt-[11.4vh] absolute rounded-full w-[30.2778vh] h-[30.2778vh] bg-[red]'>
                        </div>
                        <div className='flex justify-end pt-[2.5vh] pr-[4vh]'>
                            <div className='w-[9.2593vh] h-[4.1667vh] bg-[#4B5384] rounded-full flex items-center justify-center'>
                                <p className='font-nonito text-[1.8519vh] font-[50] text-white'>Editar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}