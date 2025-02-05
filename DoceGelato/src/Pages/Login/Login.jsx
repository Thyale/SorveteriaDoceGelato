import { useState } from "react"

export default function Login(){

    //Variáveis que vão armazenar o que foi escrito nos inputs de Login
    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    //Criei a variavel que vai está inicialmente com valor 0 e vai mudar pra 1 quando o login for relizado com sucesso
    const [LoginRealizado, setLoginRealizado] = useState(
        localStorage.getItem("LoginRealizado") || "0"
    );

    //Recuperei os dados salvos do objeto de Usuario, do localstorage, e comparei com o que foi escrito no login. Se tiver igual ao objeto ele aparece a mensagem de login realizado com sucesso e muda a variavel de login para 1. Se não foi igual ele fala que pode ter algum dado errado ou o usuario não ta cadastrado e manda para o registro.
    function VerificarLoginUser() {
        let usuarioRecuperado = JSON.parse(localStorage.getItem("Usuario"));
    
        if (usuarioRecuperado && usuarioRecuperado.emailUsuario === emailLogin && usuarioRecuperado.senhaUsuario === senhaLogin) {
          alert("Usuário reconhecido, volte para o home");
          setLoginRealizado("1"); // Atualiza o estado
          localStorage.setItem("LoginRealizado", "1"); // Salva no localStorage
          console.log(LoginRealizado)
        } else {
          alert("Não possui registro, faça agora");
        }
      }

    return(
        <section className="Login">
            <div className="Login_ContainerForm">
               <h1>Login</h1>
               <form action="">
                   <label htmlFor="email">Email</label>
                   <input onChange={(emaildigitado) => setEmailLogin(emaildigitado.target.value)} className="InputUser" type="email" name="email" id="email" />
                   <label htmlFor="senha">Senha</label>
                   <input onChange={(senhadigitada) => setSenhaLogin(senhadigitada.target.value)} className="InputUser" type="password" name="senha" id="senha" />
                   <p className="Text_EsqueceuSenha">Esqueceu a senha? <a href="#">Clique aqui</a></p>
                   <input onClick={VerificarLoginUser} className="Btn_login" type="button" value="Login" />
               </form>
               <p className="Text_Registro">Não tem cadastro? <a href={"/Register"}>Registre-se</a></p>
            </div>
        </section>
    )
}