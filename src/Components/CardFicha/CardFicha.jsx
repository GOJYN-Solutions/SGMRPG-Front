export default function CardFicha ({name, age, description, type, gender}) {
    
    const genderIcon = () => {
        
        if(gender == 'f') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/></svg>
            )
        }

        if(gender == 'm') {
                return(
                    <svg className="mb-[20vh]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
                )
        }

    }

    return (
        <div className='w-[27.08vh] h-[25.9204vh] bg-white rounded-[0.8444vh] '>
            <div className='h-[15.6481vh] rounded-t-[0.8444vh]'>
                {type == 'Item' &&
                    <img className='h-full w-full object-cover' src="/imagemcampanha/item.jpg" alt="" />
                }
                {type == 'Personagem' &&
                    <img className='h-full w-full object-cover' src="/imagemcampanha/Personagem.png" alt="" />
                }
            </div>
            <div className='flex flex-col pl-[1.5vh] pr-[2.5vh] pt-[2vh] '>
                <div className='flex justify-between items-center'>
                    <p className='font-nonito text-[2vh]'>{name}, <span className='text-[1.6vh]'>{age}</span></p>
                    <div className='flex gap-[1vh]'>
                        <div className='h-[2vh]'>
                            {genderIcon()}
                        </div>                                        
                        <p className='font-nonito text-[1.4vh] text-[#808080]'>{type}</p>
                    </div>
                </div>
                <p className='h-[4.7222vh] font-inter  text-[1.2963vh] font-semibold overflow-hidden text-clip'>
                    {description}
                </p>
            </div>            
        </div>
    )
}