export default function Navbar() {

    if(localStorage.getItem('id')){
        return(
            <header>
            <nav class="navbar flex flex-row justify-between  border-solid border-2 px-6">
                <div className="flex fles-col items-center">
                <img className="logo " src="imagens/logo.png"/>
                <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>
                </div>
                <p className="text-black"> <button onClick={e => {
                    localStorage.clear()
                    window.location.href = 'http://localhost:3000/login'
                }}>Sair</button> </p>
            </nav>
        </header>
        )
    }
    else{
        return(
        <header>
            <nav class="navbar justify-between border-solid border-2">
                <div className="flex flex-row items-center">
                    <img class="logo" src="imagens/logo.png"/>
                    <p className="text-black"><span className="bold text-black">SGMRPG </span> by GOJYN Solutions</p>     
                </div>     
                <button className="text-white mr-4 bg-[#AE00FF] p-2 px-4 rounded-lg" 
                    onClick={e => {
                        localStorage.clear()
                        window.location.href = 'http://localhost:3000/login'
                    }}>Login</button>
            </nav>
        </header>
        )
    }

    
  
  }
  
  