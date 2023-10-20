import { common } from '@mui/material/colors';
import { BsCheck } from 'react-icons/bs'
import { ChakraProvider } from '@chakra-ui/react'
import { Checkbox} from '@chakra-ui/react'



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
                <ChakraProvider><Checkbox size='lg' className={checkboxStyle.label} spacing={5}>{label}</Checkbox></ChakraProvider>
            </div>
            <p className={checkboxStyle.label}></p>
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