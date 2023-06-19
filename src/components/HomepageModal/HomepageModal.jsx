import { useEffect, useState } from "react";

export default function HomepageModal({modal}) {
    console.log(modal)

    const [cont, setCont] = useState('q')

    useEffect(()=>{
        switch (modal) {
            case 2:
                setCont(
                    <div className="h-full flex justify-between gap-10">
                        <img className="w-2/5 rounded-3xl  object-cover" src="/imagens/mesaRPG.jpg" alt="" />
                        <div className="w-3/5 flex flex-col gap-5">
                            <p className="text-3xl font-bold font-Inder">MESAS DE RPG 2</p>
                            <p className="text-lg text-left">
                                Mesas de RPG são bla bla, ble blo, pi , po pop op op op op o po po po po po p aassadsafsafkjanfjksanfklasmklsamfklas afsafasfasfasfkaspkasfjmapsfmkçasfmç afafsajfioasjfuiashfuioasjfioajofsajfioas3
                            </p>
                        </div>
                    </div>
                )
                break;

            case 1:
                setCont(
                    <div className="h-full flex justify-between gap-10">
                        <img className="w-2/5 rounded-3xl  object-cover" src="/imagens/mesaRPG.jpg" alt="" />
                        <div className="w-3/5 flex flex-col gap-5">
                            <p className="text-3xl font-bold font-Inder">MESAS DE RPG 1</p>
                            <p className="text-lg text-left">
                                Mesas de RPG são bla bla, ble blo, pi , po pop op op op op o po po po po po p aassadsafsafkjanfjksanfklasmklsamfklas afsafasfasfasfkaspkasfjmapsfmkçasfmç afafsajfioasjfuiashfuioasjfioajofsajfioas3
                            </p>
                        </div>
                    </div>
                )
                break;
        
            default:
                setCont(
                    <div className="h-full flex justify-between gap-10">
                        <img className="w-2/5 rounded-3xl  object-cover" src="/imagens/mesaRPG.jpg" alt="" />
                        <div className="w-3/5 flex flex-col gap-5">
                            <p className="text-3xl font-bold font-Inder">MESAS DE RPG 0</p>
                            <p className="text-lg text-left">
                                Mesas de RPG são bla bla, ble blo, pi , po pop op op op op o po po po po po p aassadsafsafkjanfjksanfklasmklsamfklas afsafasfasfasfkaspkasfjmapsfmkçasfmç afafsajfioasjfuiashfuioasjfioajofsajfioas3
                            </p>
                        </div>
                    </div>
                )
                break;
        }
    }, [modal])

    return(
      <div className="p-10 h-full ">
        {
            cont
        }
      </div>
    )
  
  }