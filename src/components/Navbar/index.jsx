export default function Navbar() {

    if(localStorage.getItem('id')){
        return(
            <header>
            <nav class="navbar flex flex-row justify-between px-6">
                <div className="flex fles-col items-center">
                <img className="logo " src="imagens/logo.png"/>
                <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>
                </div>
                <p className="text-black"> <button onClick={e => {
                    localStorage.clear()
                    window.location.href = window.location.href
                }}>Sair</button> </p>
            </nav>
        </header>
        )
    }
    else{
        return(
        <header>
            <nav class="navbar">
                <img class="logo" src="imagens/logo.png"/>
                <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>            </nav>
        </header>
        )
    }

    
  
  }
  
  