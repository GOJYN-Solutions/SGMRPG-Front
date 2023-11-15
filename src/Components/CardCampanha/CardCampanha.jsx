export default function CardCampanha({active, title, slots, genders, age, isPrivate, notActive, imgURL}){

        console.log(genders)
    
    genders.map(gender => {
        console.log(gender)
    })

    return(
        <div className='h-[26.01vh] w-[37.96vh] bg-white rounded-[1vh]'>
            <div className='h-[16.4815vh] w-[37.963vh] bg-black rounded-[1vh] rounded-b-none'>
                <div className='w-[3.5185vh] h-[3.4259vh] bg-black absolute flex items-center justify-center  rounded-[0.9259vh] mt-[1.5vh] ml-[2.5vh] z-10'>
                    <p className='font-nonito text-[1.8519vh] text-white'>{age}</p>
                </div>
                    <div className={`w-[2.037vh] h-[2.037vh] absolute flex items-center justify-center rounded-full mt-[1.5vh] ml-[34vh] z-10`} style={{ backgroundColor: active }}>
                </div>
                
                <div className=" w-full h-full flex items-center justify-center bg-[#C6C6C6] rounded-t-[1vh]">

                    {imgURL ? 
                            <img className={`h-full w-full ${notActive ? "saturate-0 z-10" : ""} object-cover rounded-t-[1vh] z-0`} src={imgURL} alt="" />
                        :
                            
                            <svg width="80%" height="80%" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.40625" y="0.322754" width="90.2732" height="90.2732" fill="url(#pattern0)"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_783_145" transform="scale(0.0078125)"/>
                                </pattern>
                                <image id="image0_783_145" width="128" height="128" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cKHhABHCzfd+kAABCHSURBVHja7Z1rWBRHusffam5yFDRRiAZZ0SyQ9ZIAch7cQU1IzIoCM4g4YDRREdH4GDUmkSggkigrLEaPq0eMBBQ1yiw6NDcvaHjWKN5yiCYBPYqahGBQIgEZ5TLM1PnA4iJh+jLTM93jqd83mLequuv9d1V1ddVbAAQCgUAgEAgEAoFAIBCskWRMUcmYovik4WVMkCZqby8vWllU5Jfx6JHfzdZWurWsjN7r68slLRL74gmmUXArIAA1HTsGtYMGPfFDUGsrqAMDFfO++YYpPWkBrJiCWwEB1OvHj//O+QAA5Y6OoExPZ8uDtABWilo9fjx1sawMJjzzjEGjMR0dlS84OqYgvd6QCWkBrBBOzgcAcNXp2PKyFftmCPzg7HwAAOfjx1PA8NMPQFoAq6LgVkCAzapTpzg5372piapdvZrNjIwBrAQ+Tz5a2dysPzV1avioCxdYbcW+MQI75nI+ABGA5DGn8wFMFEBBhrs7kikU8FNICPzTwwPuuLtDTP/+YleaWKAErRY7V1cjt7Q0+T8OHjQ1v+73fLx14EDWso1wPoCRAij2dHPTy9avx4sXLIAGGxvhqvDpAZ9dsiQ8fdcuY9PzcT4AAKoKC5OvLS7mWw5vAdAyuRyS9u+HDicnYavs6QJFazS6P3h4zPjf+/f5puXrfAAASGtogNcXLFB8UlLCpyxer4GF6959F91Qq4nz2cGHBgxATjIZ33RGOR8AIN7FBabRdMG+2Fg+yTgLgJbJ5bBz61acxe9zI4E7Rju/mwYbG/RCZmaBf1gY1yScuoBiTzc33barV8mTzx0UrdG07R0xQqlsbORib7Lze+J//77tirFjQ/Lr69lMOT3NOpeUFOJ8fuCFq1aJ4nwAgK8HD+68s2EDF1PWFqDrVe/2bTLa58CYjg64VlWFTyQmhm8rLeWSRHDn/4uuV1IPD0XFnTtMdqwfg5BMoWB1vmdtLXJ67z0cdeKEoqKlRcgbeZox5j0fza2uxqenTKG8Nm3CW7y8DNnjjXZ2aKdSCbB1K1O+7F3AB9OnM/7uWVvb/r2Pj9z98GHifO4YO8mjqGhpCbdVq9s2/fnPKOnnnxkTOr32GlverAJA9S+8wPi703vvce3rCF0IMcOnVDY24o9XrWJKiytfeoktf1YB4B3DhjH+HnXihOWqzvoRcnrXbvTx44wZfOPqylYGexfAMvonzT531Orx49Huo0eFmtuf7vXgAWMm5Y6ObOWQSR0LYe6vesZCBGABpOp8ACIAsyNl5wMQAZgVqTsfgAjAbFiD8wGIAMyCtTgfgAhAcKzJ+QBEAILCa90+AOBh9+/jaTU1Yl4zEYBA8JnkeUz8qFE2OrValWdvL9Z1EwEIAK/tWr3AmydNcvj1nXfEunYiABMxxfmP0SYmll53dhbj+okATIBvn2+QkUOGdC6PiRHjHogAjITXSp7shw+BxpjJBA8IDxfjPogAjIDvJ1285fXXYeTf/sZoOCowUJUn7LIwLlh1fICSyKFDtaMUCqrU1RU7X7lS//bRo4uXaLXmLNPY7/mqvKqqftFLl+JDAwb0aRxoa+s4wMMD4MoVS9ah1bYAdMGsWZ3amhoUmJmJN378McTT9NDcS5do2fPPm6tMUxZzKKM0GuxaUcGURke7uVm6Hq1SAGrs4wM39u373UbU+Jdfhh00bY73akFW8qzSaJjSUR+yL+AQGqsTQDm2tbXxy8oCLweHPg1+8vd3oNavF7JMwZZxXRs9mjHtaeYl3ObA6gTQsjspCa8fP57JBi2Nj6dlQUFClCeU84v8Jk6E4BdfZEqv+4Vlla8ZsCoBqLGPD2xbs4bNDmdRFNzNyVHjPuLn8YCX82P1evRMaGhfzi+97uKiH5GdzZjBz7dvh39QW2v+WnwSqxFAOba1pWZ+/jneaGfHKcGnI0bYvBofb2x5fHfs4CyKwlVpaYXBEyb0vOaCzhkztC4XL8J8T0/GDA7QtGVq8kms5jXwASQmwjw/Pz5p8DPz5wOwtxi9MXa7FlbJZADnztEl9+6B5717LaPc3RGXPGiMYXFuLlRwKERgrEIA9F5fXzRu7Vq8kWdCryFDMEYIIeZZuJ4Y9VWvN8WurrDF1ZVrocjx4EE5S0xfcyH5LqAc29oCnZXFuenvASq7coWP8wWb2+eDe1OTbntCgsXK64XkBdCyOymJb9P/mMK//pWrqSBPPk9QrF4P6rlzZ6AffrBUmb2RtADovb6+XEb9kKZSQei9e4//LnrwANLeeUfufvgwl3L4PPloZXMz2sBt6zcjZzs7QRkXxzemj9BIVgCqPHt7aN+zh7XpTztzpvLs7NmOPqNGURqZTC8PCoLq4cMVFZmZXMrhu10LvIODwy6GhqKajz5CscxxeA3ms6mxkfpDcLB8x+efi1K5PZDsINBhTFIS3GTZ3dr06BGVFxPTFQ794UOYc+4czOFeBt8FnOAdHCw/dv58V1iNtLTiuSUlOrxuHaBZs7iUhxK0WvxyTo6NW3JyyDL28C2WQJICUGMfHzQuPp511K9ZuzbM/cYNY8oQYoYvdP/338N+pbIweMIE+J+ICBwZFgbt3t6gQP+OvHK9vR3tungRmmnaZmd+fkjkjz+KXb9P3BubAc2ykEHR82YFQJVnb+/QfOkSPMf89CNlRUXbvsmTlUr2mPi9MWcEzl2ZdnZum11dO//z2Wft19fXT/dqaBCyfnpjqn8k1wJwbfpRzfz5Snf+zjemz+ezbr9rPUJdHdyoq4MvRKlCXkhqEKjGPj4omsP0rZFNv9F9/lOMZFoAVZ69PaXNzWUb9Xc1/du3883fEoGX+2JXpp3d856jR6Mcne6R/OpVY7oscyKZFqDf6XXr4Oi4cYxG3U0/z0oUy/mFLnPnDs2tq9NrLl/Wzfruu34bfviBTxRPSyAJAaixjw/8k/14EzxpzRq+Tb9Yzi/YFxuLw3JzId7F5fH1fzJ8OHrtyJGCpilTzFWXfBFdAHya/m9G8mv6zT3gM0Rhamgo+m7nTuhrBB5oa4ucDhwoiRw61AzVyRvRBeDw1bx5XJt+pvPvesN3xw5eodV2XjL9Hb3gVkAAvnDoEATaGh5fFbu6dkbm5GAs7Cu0MYguAJgYEcFqw3PUb9R2rZFDhtgM2LPHFKcUnB49mppTWsrp1BTH4GD69rvvmlx/JiK+APJZVsL2P326cunf/841O5P26m37y1+MdUqxp5sbWlBaij969lmuadDh9HQ19vExuu4EQHQBoOfOnDH4Y/bDh/AfCxdybfqF2KiJDqenF7qwR9jsiSpv4EDdh6Wl8OmIEbwK83JwoCJUKlWegc0iFkB0AbS98umn4Nn3Ykjs/f77Chm3AAqC7NIFAPBycMDLvvhCpeK2Rl+lcnR0+K/iYrapa4PM9/R0KNy82bRaNB7RBaBUNjaiM9OmodjLlx//8/avv/I5dInXSh77lhbWz7g+Y8Y4bE1NZctKpbKxcQg8dAjiJ040rRLi4gpOR0YKUqE8EV0AAADyuKoqeYOvr63WwwPdHTvWecWwYVydz/dVD3u/8QaetmULa8YvrlhRsNxwpHSMEepXkpkJX8vlQtQBGrB7d0k+zy5EACQhgG5CIn/8UR5XVRWEOju52PNdydM9yWOXmJAAaSybMBUIUQezsor8hgzp6+fCwJQUHMF+QBNK0GrhzWXLUDTztjCoHTRI99G+fSqVZQ/mkJQA+GBK4OXpXu3teNObb0JQaytTOpw1bJg+KCur9/8LVi9eDPFJSawXSWMMSXFxioc7dugvLF/OZo43T5pkP9SyC0StUgBChGILn1xdjTI4fHmcrFDQyxYt6v6TlsnlKHzHDi7XiYo+/FAetWcPAED4Szk56MQXrB+IqZnJyWr86quWqkurE4CQcfjCUrZvhwMcTtus3bKFlnl7F1585RWAvDwu5yfh4RkZ8oYnR/dtk5cuhZ9v32ZMl0VR1NXcXJWK+3yCKViVAIzt8w3aIIxt9YsWQRrLqp2Y/v2hPj8fomga4vv1Y73Qc/v3K/x+/3FLGdXcTA2aMwfOsoxxbri7O9hzW9RqKlYjAKEPW+gmJL++HmXPm8cWwwe2jB3Lac/AzFOn2n0XLjS0ISVszrlz4JKSwpoPmjWL3mv+wFFWIQBzh1+Vv3j0KPrjZ5+ZfKFlly61HwgPV0Z1dDCZVX6Qmgpffvkla35Htm0r8mPeUm4qkheApWLvovxVq+DYtWtGX2hnTQ3KCwtTRrG87gFACtLrbUrffhv8WQ6WjunfX39epSrHHLodI5G0ACwZeDms8tEj6sKcOTCG+entE6c7d/QRb7whb7h7l2uS0Bt1dfi5f79dGOTouHEta9lnJY1FsgIQI+p2WGVlJfgnJ/NKVPTggT4oJMSY/X3htmo1qmKf8cR3V64sTA0NNeXeDCFJAYgZcr3yt/R0Tv0zAMCYjg6cMXPmDNTjOwZPnNasXAl3v/2W0UiBEC7Ozj4ymPkIP2OQnACEftXjSwrS66mvFiwA96YmRkMXnQ5cZ88OH3TypCnlBaG2NpTw1luQ1tbGaBjv4mJLCb+KSFICEGsBZ2/CKn/6CQ6wRPD+YNkyhfORI0KUJ2/49ls0hcOi2KypU4uU0dFC3qtkBCAV53ej2HzoEDT1vQgVByQmct19zBXOs5Iwe7aQ5UpCAFJzfjfyt5cvxyNjYqDq/HnwrK2FmadO4U/k8vChG/kGq2EFIYztNsTEgBNzrEAcKuwUseg7g6TqfIAupwDk5ADk5MDaf/3za/OVN92roaGgad48yvP4cZxFGXg4hY0lJGoLIGXni0X4oJMn8X+npfVZB9Eajf7u1q1ClieaAIjzDVMZmZgIC1NT4Xp7++M6iLp5E/1p2rQZq2/eFLIsUboA4nxmulZBJyQU/ykjQ5fq40O1NTd/3Xr5Mp+NMVxhFQBK0GoNbtsyYtqUOJ87oaG//QZQXt5VGeYpg7ULwM7V1QZ/vFZVxacw4nzpwSoA5Nb3gAQAAJ9ITORaEHG+NGEVgPwfBw/is0uW9FzViqI1GiiLiwvfxi1eHnG+dOHcs6i9Bw9GTjIZFYFx2x8rKpTKxkYu6YjzzYupQaLMuj2ZON+8qPIGDnTox/DRyr6lRTGN+UBKs80DEOebn37NU6cyGhTW1bHlYRYBEOebH7X34MGwnWVT6Vvsk0aCC4A437yUXnd2LvxMqbRxuHwZfzJ8OKOxP3sgakHHAMaetEEwA2c7O23UHh6hN5i7AcGmgsWIt08wDMrIygrVW2gMIMpJGwSDoJXNzTYRHDafgAACIE++tECxej0smjs3JJ9bOHqTxgCkz5cWKFavx4+WL1c85LZ7GcCEFoA4X1qglc3NeIlczsf5AEa2AIIFZCKYztnOTqjLztYdW78+4v4vv/BNzlsA5MkXFxSt0YB/bS1Ou3UL/EtKbMYUFrK96jHmx8dYzB07BPPA/Wsgcf5TCScBEOc/vbDOBKq9vbyoESdPAsV+FDtxvvXB+hpIvbx5M9QS5z+tMHYByZii/Fo0GihnjptLnG+9sE8E7aIYbYjzrRtG56YgvR6WffWVod+J860f9hZAtXp1nyFV3ZuaiPP/n0Dv9fWlW8vK6Jr2dlrW2kq/X1BQVOvpKfZ1ESwMxghJ4aAjAoFAIBAIBAKBQCAQCEbxf5VRFZCsS1GaAAAAAElFTkSuQmCC"/>
                                </defs>
                            </svg> 

                    }

                    
                </div>
            </div>

            <div className=' flex flex-col'>
                <div className='h-1/2 flex justify-between pl-[2.9vh] pr-[2vh] pt-[1.7vh] '>
                    <div className='h-full flex items-center justify-center gap-[0.5vh] '>
                        {isPrivate &&
                            <div className='w-[1.8vh] pb-[0.4vh]'>
                                <img src="/icons/cadeado.ico" alt="" />
                            </div>
                        }
                        <p className='font-nonito text-[1.8519vh] truncate w-[23vh]'>{title}</p>
                    </div>

                    <div className='h-full flex items-center justify-centers gap-[0.5vh] '>
                        <div className='w-[2.2vh] pb-[0.2vh]'>
                            <img src="/icons/pessoas.png" alt="" />
                        </div>
                        <p className='font-nonito text-[1.8519vh] '>{slots}</p>
                    </div>
                </div>
                <div className='h-1/2 flex pl-[2.5vh] pt-[1vh] gap-[0.5vh]'>
                    {
                        genders.map(gender => (
                            <div style={{background: gender.color}} className={` rounded-r-[1.8519vh] rounded-l-[1.8519vh] px-[1.5vh] py-[0.2vh] flex items-center justify-center`}>
                                <p className='font-inter text-[1.2037vh] text-white'>{gender.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
                