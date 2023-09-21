import { useState } from 'react';
import { Checkbox, Typography, ThemeProvider } from "@material-tailwind/react";
import { BsCheck } from 'react-icons/bs'




export default function Register() {

    const theme = {
        checkbox: {
          defaultProps: {
            color: "blue",
            label: undefined,
            icon: undefined,
            ripple: true,
            className: "",
            disabled: false,
            containerProps: undefined,
            labelProps: undefined,
            iconProps: undefined,
          },
          valid: {
            colors: [
              "blue-gray",
              "gray",
              "brown",
              "deep-orange",
              "orange",
              "amber",
              "yellow",
              "lime",
              "light-green",
              "green",
              "teal",
              "cyan",
              "light-blue",
              "blue",
              "indigo",
              "deep-purple",
              "purple",
              "pink",
              "red",
            ],
          },
          styles: {
            base: {
              root: {
                display: "inline-flex",
                alignItems: "items-center",
              },
              container: {
                position: "relative",
                display: "flex",
                alignItems: "items-center",
                cursor: "cursor-pointer",
                p: "p-3",
                borderRadius: "rounded-full",
              },
              input: {
                peer: "peer",
                position: "relative",
                appearance: "appearance-none",
                width: "w-5",
                height: "h-5",
                borderWidth: "border",
                borderRadius: "rounded-md",
                borderColor: "border-blue-gray-200",
                cursor: "cursor-pointer",
                transition: "transition-all",
                before: {
                  content: "before:content['']",
                  display: "before:block",
                  bg: "before:bg-blue-gray-500",
                  width: "before:w-12",
                  height: "before:h-12",
                  borderRadius: "before:rounded-full",
                  position: "before:absolute",
                  top: "before:top-2/4",
                  left: "before:left-2/4",
                  transform: "before:-translate-y-2/4 before:-translate-x-2/4",
                  opacity: "before:opacity-0 hover:before:opacity-10",
                  transition: "before:transition-opacity",
                },
              },
              label: {
                color: "text-gray-700",
                fontWeight: "font-light",
                userSelect: "select-none",
                cursor: "cursor-pointer",
                mt: "mt-px",
              },
              icon: {
                color: "text-white",
                position: "absolute",
                top: "top-2/4",
                left: "left-2/4",
                translate: "-translate-y-2/4 -translate-x-2/4",
                pointerEvents: "pointer-events-none",
                opacity: "opacity-0 peer-checked:opacity-100",
                transition: "transition-opacity",
              },
              disabled: {
                opacity: "opacity-50",
                pointerEvents: "pointer-events-none",
              },
            },
          },
        },
      };

    let checkboxStyle = {
        className: 'h-7 w-7 text-base',
        label: 'flex font-medium font-inter text-xl checked:bg-red-500 checked:border-amber-500 checked:before:bg-amber-500',
        color: 'white'
    }

    const [items, setItems] = useState(['item 1', 'item 2']);
    function addItem() {
      const newItem = 'item 3';
      const newItems = [...items, newItem];
      setItems(newItems);
    }


  return (
    <div className="h-screen px-40 py-20 rounded gap-5 bg-gradient-to-b from-[#7F04DF] to-[#313F96] flex flex-row ">
        <div className='w-full h-full flex'>
            <div className='h-full w-1/2 bg-white rounded-l-3xl'>
                        <div>
                <button onClick={addItem}>Adicionar item</button>
                <ul>
                    {items.map(item => <li key={item}>{item}</li>)}
                </ul>
                </div>
            </div>
 
            <div className='h-full w-1/2 justify-center flex flex-col bg-[#313F96] rounded-r-3xl'>
                <div>
                    <div className='px-20'>
                        <p className='text-end font-nonito text-[5vh] leading-tight text-white'>ESCOLHA SEUS PRINCIPAIS INTERESSES...</p> 
                    </div>
                    <div className='h-full w-full items-center flex flex-col justify-center'>  
                        <div className='text-3xl'>
                            <div>
                                <ThemeProvider value={theme}>
                                    <Checkbox
                                        defaultChecked
                                        ripple={false}
                                        className={checkboxStyle.className}
                                        color={checkboxStyle.color}
                                        label={
                                            <Typography color="white" className={checkboxStyle.label}>
                                            Dungeons & Dragons
                                            </Typography>
                                        }
                                        icon={
                                            <BsCheck className='p-1'/>
                                        }
                                    />
                                </ThemeProvider>
                            </div>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    ripple={false}
                                    className={checkboxStyle.className}
                                    color={checkboxStyle.color}
                                    label={
                                        <Typography color="white" className={checkboxStyle.label}>
                                        Tormenta
                                        </Typography>
                                    }
                                     icon={
                                        <BsCheck className='p-1'/>
                                    }
                                />
                            </div>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    ripple={false}
                                    className={checkboxStyle.className}
                                    color={checkboxStyle.color}
                                    label={
                                        <Typography color="white" className={checkboxStyle.label}>
                                        Ordem Paranormal
                                        </Typography>
                                    }
                                     icon={
                                        <BsCheck className='p-1'/>
                                    }
                                />
                            </div>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    ripple={false}
                                    className={checkboxStyle.className}
                                    color={checkboxStyle.color}
                                    label={
                                        <Typography color="white" className={checkboxStyle.label}>
                                        Personalizado
                                        </Typography>
                                    }
                                     icon={
                                        <BsCheck className='p-1'/>
                                    }
                                />
                            </div>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    ripple={false}
                                    className={checkboxStyle.className}
                                    color={checkboxStyle.color}
                                    label={
                                        <Typography color="white" className={checkboxStyle.label}>
                                        Dungeons & Dragons
                                        </Typography>
                                    }
                                     icon={
                                        <BsCheck className='p-1'/>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}