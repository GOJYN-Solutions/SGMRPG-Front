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
                            <p className="text-3xl font-bold font-Inder">MESAS DE RPG</p>
                            <p className="text-lg text-left">
                            Mesas de RPG são espaços onde grupos de pessoas se reúnem para jogar jogos de interpretação de papéis. Os jogadores assumem personagens fictícios e participam de aventuras imaginárias, enquanto um mestre do jogo coordena a história e as regras. As mesas podem ser físicas ou virtuais e proporcionam diversão, criatividade e interação social, permitindo que os jogadores explorem mundos fictícios e vivenciem experiências únicas.                            </p>
                        </div>
                    </div>
                )
                break;

            case 1:
                setCont(
                    <div className="h-full flex justify-between gap-10">
                        <img className="w-2/5 rounded-3xl  object-cover" src="https://i.redd.it/interessado-em-ter-seu-mapa-para-sua-campanha-de-rpg-me-v0-v9g41tnrc51a1.jpg?width=4440&format=pjpg&auto=webp&s=666a5b4d8359713439f3a52e6221d8bb47830273" alt="" />
                        <div className="w-3/5 flex flex-col gap-5">
                            <p className="text-3xl font-bold font-Inder">CAMPANHAS</p>
                            <p className="text-lg text-left">
                            Campanhas de RPG são narrativas prolongadas que se desenrolam em várias sessões de jogo. Os jogadores assumem personagens fictícios, enfrentam desafios, interagem com o mundo criado pelo mestre do jogo e influenciam o rumo da história. Essas campanhas oferecem uma experiência mais imersiva, permitindo o desenvolvimento dos personagens e a exploração de tramas complexas ao longo do tempo. São flexíveis e adaptáveis, proporcionando uma experiência personalizada e colaborativa.
                            </p>
                        </div>
                    </div>
                )
                break;
        
            default:
                setCont(
                    <div className="h-full flex justify-between gap-10">
                        <img className="w-2/5 rounded-3xl  object-cover" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg" alt="" style={{objectPosition: '80% 100%'}} />
                        <div className="w-3/5 flex flex-col gap-5">
                            <p className="text-3xl font-bold font-Inder">FICHAS</p>
                            <p className="text-lg text-left">
                            Fichas de RPG são documentos usados para representar e acompanhar informações essenciais dos personagens jogáveis em um jogo de interpretação de papéis. Elas contêm detalhes como nome, raça, classe, atributos, habilidades e inventário. As fichas ajudam os jogadores e o mestre a manter um registro organizado do progresso dos personagens, facilitando a tomada de decisões estratégicas. Elas são projetadas de acordo com o sistema de regras do jogo e podem evoluir ao longo da campanha, refletindo o crescimento dos personagens. As fichas são usadas para equilibrar desafios e acompanhar o progresso de NPCs. Resumidamente, as fichas de RPG são ferramentas importantes para o acompanhamento e interação dos jogadores com o mundo fictício do jogo.
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