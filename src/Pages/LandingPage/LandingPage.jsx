import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Roll1, Roll2, Roll3, Roll4, Roll5, Roll6} from '../../Components/Icons/Rolls';
import NavBar from '../../Components/Navbar/Navbar';

export default function LandingPage() {
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className=''>     
      <div className="">
          <NavBar buttons={true}/>      
          <div className='flex bg-blue-[#E0DCDC] h-[82vh]'>
            <div className='w-1/2 h-full  flex items-center justify-center'>
              <div className='flex flex-col gap-[1.85vh] pr-[8.5vh]'>                
                <div className={`w-[23vh] h-[4.8917vh] absolute mt-[18.5vh]`}>
                  <div
                    className="h-full bg-[#CB9BF1] rounded ease-in duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <p className='font-nonito tracking-tight text-[5.55vh] l text-[#313F96] z-10'>
                  O <b className='font-normal text-[#7D06DD] '>sistema</b> para quem deseja <br/> se divertir livre dos <br/> problemas.
                  </p>
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

      <div className='py-[12vh] bg-gradient-to-b from-[#7F04DF] rounded-b-[15vh] to-[#313F96] flex flex-col gap-[5vh] items-center justify-center'>
          <p className='font-inter font-[3vh] text-[2.314vh] text-white relative '>Experimente algumas das nossas principais ferramentas...</p>
          <div className='flex justify-center bg-black'>
          </div>
          <div className='flex items-center gap-[11.5vh]'>
            <div className='w-[28.98vh] h-[40.64vh] bg-white rounded-[2vh] pt-[9vh] flex flex-col items-center justify-start gap-[3vh]'>
              <div className='flex flex-col gap-[2vh] items-center justify-center'>
                <div className='w-[8.36vh]'>
                  <svg width="100%" height="100%" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.9335 21.2561L92.3184 31.7595M48.9335 21.2561L2 31.7595M48.9335 21.2561L48.9335 2M92.3184 31.7595L75.8344 63.4754M92.3184 31.7595L48.9335 2M92.3184 31.7595L92.3184 71.5074M75.8344 63.4754L48.9335 92.6171M75.8344 63.4754L92.3184 71.5074M48.9335 92.6171L19.9721 63.4754M48.9335 92.6171L92.3184 71.5074M48.9335 92.6171L2 71.5074M19.9721 63.4754L2 31.7595M19.9721 63.4754L2 71.5074M2 31.7595L48.9335 2M2 31.7595L2 71.5074" stroke="url(#paint0_linear_249_87)" stroke-width="3"/>
                    <path d="M75.5161 63.7709L47.9667 20.9154L20.4172 63.7709L75.5161 63.7709Z" stroke="url(#paint1_linear_249_87)" stroke-width="3"/>
                    <defs>
                    <linearGradient id="paint0_linear_249_87" x1="47.1592" y1="2" x2="47.1592" y2="92.6171" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_249_87" x1="47.9667" y1="20.9154" x2="47.9667" y2="63.7709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#7F04DF] to-[#313F96] font-semibold font-nonito text-[2.314vh]'>DADOS</p>
              </div>            
              <p className='font-inter font-bold text-[#313F96] text-[1.39vh]'>Rode diferentes tipos de dados.</p>
            </div>
            <div className='w-[28.98vh] h-[40.64vh] mb-[7vh] bg-white rounded-[2vh] pt-[9vh] flex flex-col items-center justify-start gap-[3vh]'>
              <div className='flex flex-col gap-[2vh] items-center justify-center'>
                <div className='w-[8.36vh]'>
                  <svg width="100%" height="100%" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.9335 21.2561L92.3184 31.7595M48.9335 21.2561L2 31.7595M48.9335 21.2561L48.9335 2M92.3184 31.7595L75.8344 63.4754M92.3184 31.7595L48.9335 2M92.3184 31.7595L92.3184 71.5074M75.8344 63.4754L48.9335 92.6171M75.8344 63.4754L92.3184 71.5074M48.9335 92.6171L19.9721 63.4754M48.9335 92.6171L92.3184 71.5074M48.9335 92.6171L2 71.5074M19.9721 63.4754L2 31.7595M19.9721 63.4754L2 71.5074M2 31.7595L48.9335 2M2 31.7595L2 71.5074" stroke="url(#paint0_linear_249_87)" stroke-width="3"/>
                    <path d="M75.5161 63.7709L47.9667 20.9154L20.4172 63.7709L75.5161 63.7709Z" stroke="url(#paint1_linear_249_87)" stroke-width="3"/>
                    <defs>
                    <linearGradient id="paint0_linear_249_87" x1="47.1592" y1="2" x2="47.1592" y2="92.6171" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_249_87" x1="47.9667" y1="20.9154" x2="47.9667" y2="63.7709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#7F04DF] to-[#313F96] font-semibold font-nonito text-[2.314vh]'>DADOS</p>
              </div>            
              <p className='font-inter font-bold text-[#313F96] text-[1.39vh]'>Rode diferentes tipos de dados.</p>
            </div>
            <div className='w-[28.98vh] h-[40.64vh] bg-white rounded-[2vh] pt-[9vh] flex flex-col items-center justify-start gap-[3vh]'>
              <div className='flex flex-col gap-[2vh] items-center justify-center'>
                <div className='w-[8.36vh]'>
                  <svg width="100%" height="100%" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.9335 21.2561L92.3184 31.7595M48.9335 21.2561L2 31.7595M48.9335 21.2561L48.9335 2M92.3184 31.7595L75.8344 63.4754M92.3184 31.7595L48.9335 2M92.3184 31.7595L92.3184 71.5074M75.8344 63.4754L48.9335 92.6171M75.8344 63.4754L92.3184 71.5074M48.9335 92.6171L19.9721 63.4754M48.9335 92.6171L92.3184 71.5074M48.9335 92.6171L2 71.5074M19.9721 63.4754L2 31.7595M19.9721 63.4754L2 71.5074M2 31.7595L48.9335 2M2 31.7595L2 71.5074" stroke="url(#paint0_linear_249_87)" stroke-width="3"/>
                    <path d="M75.5161 63.7709L47.9667 20.9154L20.4172 63.7709L75.5161 63.7709Z" stroke="url(#paint1_linear_249_87)" stroke-width="3"/>
                    <defs>
                    <linearGradient id="paint0_linear_249_87" x1="47.1592" y1="2" x2="47.1592" y2="92.6171" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_249_87" x1="47.9667" y1="20.9154" x2="47.9667" y2="63.7709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7F04DF"/>
                    <stop offset="1" stop-color="#313F96"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className='text-transparent bg-clip-text bg-gradient-to-b from-[#7F04DF] to-[#313F96] font-semibold font-nonito text-[2.314vh]'>DADOS</p>
              </div>            
              <p className='font-inter font-bold text-[#313F96] text-[1.39vh]'>Rode diferentes tipos de dados.</p>
            </div>
          </div>
          <p className='font-inter pt-[3.70vh] text-[2.314vh] text-white text-center leading-[4vh]'>
            Entre <b className='font-[0vh]'>muitas outras </b> que proporcionarão uma grande aventura fora das <br/> complexidades!
          </p>
      </div>

      <div className='flex py-[20vh] gap-[7vh] justify-center z-0'>      
      <div className='absolute w-full mt-[40vh]  flex justify-end z-0'>
            <svg width="42.96vh" viewBox="0 0 464 489" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M471.134 192.431L306.739 145.576L204.146 293.557L252.424 421.019L416.803 436.163L519.412 319.893L471.134 192.431Z" fill="url(#paint0_linear_287_69)"/>
              <path d="M330.128 207.326L471.134 192.431M330.128 207.326L204.146 293.557M330.128 207.326L306.739 145.576M471.134 192.431L460.929 312.593M471.134 192.431L306.739 145.576M471.134 192.431L519.412 319.893M460.929 312.593L416.803 436.163M460.929 312.593L519.412 319.893M416.803 436.163L295.795 375.14M416.803 436.163L519.412 319.893M416.803 436.163L252.424 421.019M295.795 375.14L204.146 293.557M295.795 375.14L252.424 421.019M204.146 293.557L306.739 145.576M204.146 293.557L252.424 421.019" stroke="white" stroke-width="3"/>
              <path d="M460 313L330.661 208.16L293.315 370.41L460 313Z" fill="url(#paint1_linear_287_69)" stroke="white" stroke-width="3"/>
              <path d="M151.658 152.744L69.4111 129.303L18.0836 203.338L42.2372 267.107L124.476 274.684L175.812 216.514L151.658 152.744Z" fill="url(#paint2_linear_287_69)"/>
              <path d="M81.1124 160.196L151.658 152.744M81.1124 160.196L18.0836 203.338M81.1124 160.196L69.4111 129.303M151.658 152.744L146.552 212.861M151.658 152.744L69.4111 129.303M151.658 152.744L175.812 216.514M146.552 212.861L124.476 274.684M146.552 212.861L175.812 216.514M124.476 274.684L63.9359 244.154M124.476 274.684L175.812 216.514M124.476 274.684L42.2372 267.107M63.9359 244.154L18.0836 203.338M63.9359 244.154L42.2372 267.107M18.0836 203.338L69.4111 129.303M18.0836 203.338L42.2372 267.107" stroke="white" stroke-width="3"/>
              <path d="M146.26 213.514L79.4741 160.191L64.7724 244.379L146.26 213.514Z" fill="url(#paint3_linear_287_69)" stroke="white" stroke-width="3"/>
              <path d="M266.047 63.1546L240.971 18.264L187.691 28.0073L170.911 65.4152L202.718 103.546L249.268 100.563L266.047 63.1546Z" fill="url(#paint4_linear_287_69)"/>
              <path d="M232.843 36.3865L266.047 63.1547M232.843 36.3865L187.691 28.0073M232.843 36.3865L240.971 18.264M266.047 63.1547L238.358 86.5887M266.047 63.1547L240.971 18.264M266.047 63.1547L249.268 100.563M238.358 86.5887L202.718 103.546M238.358 86.5887L249.268 100.563M202.718 103.546L189.894 64.8499M202.718 103.546L249.268 100.563M202.718 103.546L170.911 65.4152M189.894 64.8499L187.691 28.0073M189.894 64.8499L170.911 65.4152M187.691 28.0073L240.971 18.264M187.691 28.0073L170.911 65.4152" stroke="white" stroke-width="3"/>
              <path d="M237.956 86.7426L232.147 35.6893L190.155 65.301L237.956 86.7426Z" fill="url(#paint5_linear_287_69)" stroke="white" stroke-width="3"/>
              <defs>
              <linearGradient id="paint0_linear_287_69" x1="301.494" y1="147.563" x2="411.558" y2="438.15" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              <linearGradient id="paint1_linear_287_69" x1="330.661" y1="208.16" x2="376.657" y2="341.705" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              <linearGradient id="paint2_linear_287_69" x1="66.787" y1="130.297" x2="121.852" y2="275.678" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              <linearGradient id="paint3_linear_287_69" x1="79.4741" y1="160.191" x2="105.516" y2="228.946" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              <linearGradient id="paint4_linear_287_69" x1="239.432" y1="17.5736" x2="201.178" y2="102.856" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              <linearGradient id="paint5_linear_287_69" x1="232.147" y1="35.6893" x2="214.056" y2="76.0218" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7D06DD"/>
              <stop offset="1" stop-color="#313F96"/>
              </linearGradient>
              </defs>
            </svg>
      </div>   
          <div className='w-[74.16vh] h-[54.35vh] bg-[#FF0000] rounded-[2vh]'>
            <div className='flex items-end justify-center w-full py-[6vh] gap-[1vh] h-full'>
              <div className='w-[1.20vh] h-[1.20vh] rounded-full bg-[#D9D9D9]'></div>
              <div className='w-[1.20vh] h-[1.20vh] rounded-full bg-[#D9D9D9]'></div>
              <div className='w-[1.20vh] h-[1.20vh] rounded-full bg-[#D9D9D9]'></div>
              <div className='w-[1.20vh] h-[1.20vh] rounded-full bg-[#D9D9D9]'></div>
            </div>
          </div>

          <div className='w-[54.90vh] space-y-[2vh] pt-[3vh]'>
            <p className='text-[3vh] font-nonito font-extrabold text-[#313F96] tracking-[0.4vh]'>MESAS</p>
            <p className='text-[2.31vh] font-inter text-[#313F96]'>
              Junte seus amigos em uma mesa, onde você será <br/> capaz de criar várias campanhas para se divertir, <br/> além de se comunicar e organizar com maior <br/> facilidade suas próximas campanhas.
            </p>
          </div>
          
      </div>

      <div className='bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-col items-center justify-center w-full relative h-[97.22vh] z-20 gap-[7vh]'>
        <p className='text-[3vh] font-nonito text-white leading-[5vh] letter tracking-[0.4vh]'>SOBRE NÓS</p>

        <div className='w-[94.81vh] h-[38.42vh] bg-blue-gray-100 rounded-[2vh]'>
          <img className='w-full h-full rounded-[2vh] object-cover ' src="/fatecimagem/fatec.jpg" alt="" />
        </div>

        <p className='font-inter text-[2.03vh] text-white text-center leading-[3.2vh]'>
          Somos um grupo de faculdade em busca de sua formação, criamos o projeto Runesys como nosso TCC.<br/>
          Desde a escolha do tema, temos estudado e estamos nos empenhando cada vez mais para que este software possa ajudar <br/> vários nerds fedidos por aí, que querem se divertir sem a necessidade de tanta dor de cabeça e confusão com os dados <br/> gerados durante as sessões.
        </p>
      </div>
      

      <div className='w-full h-[97.40vh] flex flex-col items-center justify-center gap-[13vh]'>
        <p className='text-[3vh] font-nonito leading-[5vh] letter tracking-[0.4vh] text-[#313F96] font-extrabold pb-[4vh]'>DESENVOLVEDORES</p>
        <div className='flex gap-[8vh]'>
          <div className='w-[31.38vh] h-[48.42vh] bg-gradient-to-b from-[#7F04DF] to-[#313F96] rounded-[2vh] flex flex-col items-center justify-center gap-[2vh]'>
            <p className='font-inter font-extrabold text-[1.85vh] text-white'>JENNYFER MARINHO</p>
            <div className='w-[21.82vh] h-[21.05vh] bg-blue-gray-500 rounded-full'></div>
            <p className='font-inter font-semibold text-[2.31vh] text-white'>Designer</p>
            <p className='font-inter text-[1.85vh] text-center text-white'>Estudante, 20 anos, fez as <br/> principais telas do <br/> sistema.</p>
          </div>
          <div className='w-[31.38vh] h-[48.42vh] bg-gradient-to-b from-[#7F04DF] to-[#313F96] rounded-[2vh] flex flex-col items-center justify-center gap-[2vh]'>
            <p className='font-inter font-extrabold text-[1.85vh] text-white'>JENNYFER MARINHO</p>
            <div className='w-[21.82vh] h-[21.05vh] bg-blue-gray-500 rounded-full'></div>
            <p className='font-inter font-semibold text-[2.31vh] text-white'>Designer</p>
            <p className='font-inter text-[1.85vh] text-center text-white'>Estudante, 20 anos, fez as <br/> principais telas do <br/> sistema.</p>
          </div><div className='w-[31.38vh] h-[48.42vh] bg-gradient-to-b from-[#7F04DF] to-[#313F96] rounded-[2vh] flex flex-col items-center justify-center gap-[2vh]'>
            <p className='font-inter font-extrabold text-[1.85vh] text-white'>JENNYFER MARINHO</p>
            <div className='w-[21.82vh] h-[21.05vh] bg-blue-gray-500 rounded-full'></div>
            <p className='font-inter font-semibold text-[2.31vh] text-white'>Designer</p>
            <p className='font-inter text-[1.85vh] text-center text-white'>Estudante, 20 anos, fez as <br/> principais telas do <br/> sistema.</p>
          </div><div className='w-[31.38vh] h-[48.42vh] bg-gradient-to-b from-[#7F04DF] to-[#313F96] rounded-[2vh] flex flex-col items-center justify-center gap-[2vh]'>
            <p className='font-inter font-extrabold text-[1.85vh] text-white'>JENNYFER MARINHO</p>
            <div className='w-[21.82vh] h-[21.05vh] bg-blue-gray-500 rounded-full'></div>
            <p className='font-inter font-semibold text-[2.31vh] text-white'>Designer</p>
            <p className='font-inter text-[1.85vh] text-center text-white'>Estudante, 20 anos, fez as <br/> principais telas do <br/> sistema.</p>
          </div>
        </div>
      </div>

      <div className='w-full h-[19.07vh] bg-[#313F96]'></div>
    </div>
  );
}

