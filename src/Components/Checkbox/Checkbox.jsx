import { useEffect, useState } from "react";


export default function Checkbox({label, labelStyle, checked, onChange, classname}) {

    const [test, setTest] = useState(`after:bg-[url('${checked ? './img/teste.svg' : './img/unCheckedIcon.svg'}')]`)

    if(label) return (
        <div className='flex items-center gap-[1vh]'>
            <input type="checkbox" id="checkbox" checked={checked} onChange={onChange} class={
             `
             ${classname}
            relative 
            left-0 
            h-[1.5vh] w-[1.5vh] 
            shrink-0 
            appearance-none 
            rounded-[0.3vh] 
            outline-none 
            after:absolute 
            after:left-0 
            after:top-0 
            after:h-full 
            after:w-full                                             
            after:bg-[length:120%] 
            after:bg-center 
            after:bg-no-repeat 
            after:content-[''] 
            checked:bg-[#313F96] 
            ring-[0.5vh] ring-[#313F96]

            
           
           ${test}
            
            `  }
             />

            <label class={labelStyle}>{label}</label>
        </div>
    );
  }