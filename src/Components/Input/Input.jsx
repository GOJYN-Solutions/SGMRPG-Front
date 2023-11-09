export default function Input({className, classNameDiv, onChange, value, placeholder, type, optional}){

    let inputs = 'h-[4.27vh] w-full bg-white pl-[2.85vh] text-[1.65vh] font-nonito placeholder-[#989FCA] rounded-[1.85vh] text-start bg-[#F8F8F8]'

    return(
        <>
            <div className={classNameDiv}>
                <input 
                    
                    type={type ? type : 'text'} 
                    className={`${inputs} ${className} ${classNameDiv} border-[0.1vh] border-[#7A08DB]`} 
                    value={value} placeholder={placeholder}
                    onChange={onChange} required>
                        
                </input>
            </div>
            {(optional && value=='') && (
                <div className={`text-[#FF8080] absolute mx-[8.5vh] my-[0.9vh] text-[1.65vh]`}>
                   *
                </div>
            )}
                    
        </>
    )
}