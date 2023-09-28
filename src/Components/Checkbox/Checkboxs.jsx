import Checkbox from '@mui/material/Checkbox';
import { common } from '@mui/material/colors';
import { BsCheck } from 'react-icons/bs'



export default function Checkboxs({label, labelStyle, checked}) {

    console.log(label)
    
    let checkboxStyle = {
        className: 'h-7 w-7 text-base',
        label: `flex font-medium font-inter text-xl ${labelStyle}`,
        color: 'white'
    }


    if(label) return (
        <div className='flex items-center'>
            <div className=''>
                <Checkbox
                    sx={{ 
                        '& .MuiSvgIcon-root': { fontSize: 30 }, 
                        color: common['white'],
                        '&.Mui-checked': {
                            color: common['white'],
                        }                   
                    }}
                    checked={checked}
                />
            </div>
            <p className={checkboxStyle.label}>{label}</p>
        </div>
    );
  }
//   <Checkbox
//   onChange={e=>console.log(e.target.labels[1].textContent)}
//   ripple={false}
//   className={checkboxStyle.className}
//   color="white"
//   label={
//       <Typography color="white" className={checkboxStyle.label}>
//           {label}
//       </Typography>
//   }
//   icon={
//       <BsCheck className='p-1'/>
//   }
// />