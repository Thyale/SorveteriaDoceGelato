import { useState } from "react"

export default function Login(){

    //Variáveis que vao ver o que foi digitado no login
    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    //Aqui eu vou fazer um if e um else, se o login for igual aos dados cadastrados no usuario registrado ele entra, se não for ele da a mensagem de que precisa ser feito o registro.
    function VerificarLoginUser(){
        let usuarioRecuperado = JSON.parse(localStorage.getItem("Usuario"));
        if(usuarioRecuperado.emailUsuario === emailLogin & usuarioRecuperado.senhaUsuario === senhaLogin){
            alert("Usuaio reconheido e entrando")
        }else{
            alert("não possiu registro, faça agora")
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