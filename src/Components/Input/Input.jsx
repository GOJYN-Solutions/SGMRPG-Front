export default function Input({className, onChange, value, placeholder, type}){

    let inputs = '2xl:h-10 2xl:text-lg xl:h-10 xl:text-base  px-10 font-nonito placeholder-[#CBCBCB] rounded-3xl bg-[#F8F8F8]'

    return(
        <input type={type ? type : 'text'} className={`${inputs} ${className}`} value={value} placeholder={placeholder} 
              onChange={onChange} required/>
    )
}