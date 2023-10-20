export default function Input({className, onChange, value, placeholder, type}){

    let inputs = '2xl:h-10 2xl:text-lg txl:h-10 xl:text-base w-full px-10 font-nonito placeholder-[#CBCBCB] rounded-3xl bg-[#F8F8F8]'

    return(
        <div className="p-0.5 w-full rounded-3xl bg-gradient-to-b from-[#7F04DF] to-[#313F96]">
            <input 
                type={type ? type : 'text'} 
                className={`${inputs} ${className}`} 
                value={value} placeholder={placeholder}
                onChange={onChange} required/>
        </div>
    )
}