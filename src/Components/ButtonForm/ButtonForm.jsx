export default function ButtonForm({onClick, text, className}){

    let style = "w-60 h-16 text-xl rounded-3xl font-nonito"

    return(
        <button className={`${className} ${style} `} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}