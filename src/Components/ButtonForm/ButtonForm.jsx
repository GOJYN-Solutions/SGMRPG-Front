export default function ButtonForm({onClick, text, className}){

    let style = "w-40 h-14 text-xl text-white rounded-3xl font-nonito"

    return(
        <button className={`${style} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}