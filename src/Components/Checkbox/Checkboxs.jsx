import { Checkbox, Typography } from "@material-tailwind/react";
import { BsCheck } from 'react-icons/bs'


export default function Checkboxs({label, labelStyle}) {

    console.log(label)
    
    let checkboxStyle = {
        className: 'h-7 w-7 text-base',
        label: `flex font-medium font-inter text-xl ${labelStyle}`,
        color: 'white'
    }


    if(label) return (
        <div>
            <Checkbox
                onChange={e=>console.log(e.target.labels[1].textContent)}
                ripple={false}
                className={checkboxStyle.className}
                color="white"
                label={
                    <Typography color="white" className={checkboxStyle.label}>
                        {label}
                    </Typography>
                }
                icon={
                    <BsCheck className='p-1'/>
                }
            />
        </div>
    );
  }