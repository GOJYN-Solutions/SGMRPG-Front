export default function ButtonForm({onClick, text, className}){

    let style = "w-60 h-16 text-xl text-white rounded-3xl font-nonito"

    return(
        <button className={`${style} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}