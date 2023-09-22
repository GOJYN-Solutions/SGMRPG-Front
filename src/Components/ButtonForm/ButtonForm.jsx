export default function ButtonForm({onClick, text, className}){

    let style = "2xl:my-5 2xl:text-2xl xl:text-xl 2xl:p-5 xl:p-3 w-72 text-white rounded-3xl font-nonito"

    return(
        <button className={`${style} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}