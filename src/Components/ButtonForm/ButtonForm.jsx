export default function ButtonForm({onClick, text, className}){

    let style = "2xl:px-20 2xl:text-xl xl:text-xl xl:p-3 text-white rounded-3xl font-nonito"

    return(
        <button className={`${style} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}