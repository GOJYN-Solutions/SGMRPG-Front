import { useEffect, useState } from "react"
import axios from 'axios'

import Navbar from "../components/Navbar"
import HomepageModal from "../components/HomepageModal/HomepageModal"


export default function Homepage() {

    let purple = "text-[#A52EFF]"
    let ball = "w-44 h-44 rounded-full p-10"

    let smallBall = "w-24 h-24 rounded-full p-5"

    const [modal, setModal] = useState(0)
    const [color, setColor] = useState("A52EFF")

    useEffect(()=>{
      switch (modal) {
          case 2:
              setColor("E6BCFF")
              break;

          case 1:
              setColor("D89CFD")
              break;
      
          default:
              setColor("A52EFF")
              break;
      }

  }, [modal])

    return(
      <div className="overflow-hidden">
        <Navbar />
        <div className="pt-14 h-screen w-screen flex">
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col gap-5">
              <div className={`${ball} bg-[#E6BCFF]`} >
                <img  src="/imagens/d20Icon.svg" alt="" />
              </div>
              <div className={`${ball} bg-[#A52EFF]`}>
                <img src="/imagens/interrogationIcon.svg" alt="" />
              </div>
            </div>
            <div className={`${ball} bg-[#D89CFD]`}>
              <img src="/imagens/letterIcon.svg" alt="" />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center pb-36">
            <p className="text-4xl font-normal text-black font-Inder">
              O <span className={purple}>S</span>ISTEMA <span className={purple}>G</span>ERENCIADOR DE <br /> <span className={purple}>M</span>ESAS DE <span className={purple}>RPG</span> DA <span className={purple}>GOJYN</span>
            </p>
            <p className="text-2xl font-normal text-black mt-5 font-Inder">
              EXPLORE NOSSO SITE E DESCUBRA <br/> NOVAS POSSIBILIDADES PARA SUAS AVENTURAS!
            </p>
          </div>
        </div>
        <div className="h-screen pt-14">
          <div className="flex absolute px-20">
            <p className="text-white font-bold font-Inder text-2xl bg-[#6F00C2] rounded-2xl py-2 px-10">O QUE SÃO...</p>
          </div>
          <div className={`h-screen bg-[#${color}] mt-5 px-12 pt-20 pb-32 flex items-center justify-center`}>
            <div className="h-full w-1/6 flex flex-col items-center justify-center gap-10">
              <button onClick={()=>{setModal(2)}}>
                <div className={`${smallBall} bg-[#E6BCFF]`} >
                  <img  src="/imagens/d20Icon.svg" alt="" />
                </div>
              </button>
              <button onClick={()=>{setModal(1)}}>
                <div className={`${smallBall} bg-[#D89CFD]`}>
                  <img src="/imagens/letterIcon.svg" alt="" />
                </div>
              </button>
              <button onClick={()=>{setModal(0)}}>
                <div className={`${smallBall} bg-[#A52EFF]`}>
                  <img src="/imagens/interrogationIcon.svg" alt="" />
                </div>
              </button>
            </div>
            <div className="bg-[#AE43FF] h-full w-5/6 rounded-3xl">
              <HomepageModal modal={modal}/>
            </div>
          </div>
        </div>
      </div>
      
    )
  
  }