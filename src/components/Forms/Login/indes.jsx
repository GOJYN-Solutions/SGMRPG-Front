import './style.css'

export default function LoginForm() {

    return(
        <main className="base">
            <div class="teste">teste</div>
            <div class="container">
                <div class="div-login">
                    <h1>LOGIN</h1>
                    <form class="form-login">
                        <input class="campo-login" type="text" placeholder="Nickname ou Email" autofocus/>
                        <input class="campo-login" type="password" placeholder="Senha"/>
                        <a href="https://www.youtube.com/watch?v=g3jCAyPai2Y" target="_blank">Esqueceu a senha?</a>
                        <button id= "btn-login">ENTRAR</button>
                    </form>
                    <div class="cadastro">
                        <p>Não possui uma conta?</p>
                        <button id="btn-cadastro">CADASTRE-SE</button>
                    </div>
                </div>
            </div>
        </main>
    )
  
  }
  
  