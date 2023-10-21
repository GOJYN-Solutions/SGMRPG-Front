export default function ButtonForm({onClick, text, className}){

    let style = "w-[22.22vh] h-[5.92vh] text-[1.85vh] rounded-[2.22vh] font-nonito"

    return(
        <button className={`${className} ${style} `} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}