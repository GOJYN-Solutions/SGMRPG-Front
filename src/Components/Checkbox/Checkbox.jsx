import { useEffect, useState } from "react";


export default function Checkbox({label, labelStyle, checked, onChange, classname}) {

    const [base64, setBase64] = useState('')

    useEffect(()=>{
        if(!checked){
            setBase64('')
        }else{
            setBase64('PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMi4yNSAxMi4zMjEgNy4yNyA2LjQ5MWMuMTQzLjEyNy4zMjEuMTkuNDk5LjE5LjIwNiAwIC40MS0uMDg0LjU1OS0uMjQ5bDExLjIzLTEyLjUwMWMuMTI5LS4xNDMuMTkyLS4zMjEuMTkyLS41IDAtLjQxOS0uMzM4LS43NS0uNzQ5LS43NS0uMjA2IDAtLjQxMS4wODQtLjU1OS4yNDlsLTEwLjczMSAxMS45NDUtNi43MTEtNS45OTRjLS4xNDQtLjEyNy0uMzIyLS4xOS0uNS0uMTktLjQxNyAwLS43NS4zMzYtLjc1Ljc0OSAwIC4yMDYuMDg0LjQxMi4yNS41NiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+')
        }
    }, [checked])

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

            
            after:bg-[url('data:image/svg+xml;base64,${base64}')]
            
            `  }
             />

            <label class={labelStyle}>{label}</label>
        </div>
    );
  }