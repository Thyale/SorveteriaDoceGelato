import { useState } from "react"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function Login(){

    //Variáveis que vão armazenar o que foi escrito nos inputs de Login
    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    //Criei a variavel que vai está inicialmente com valor 0 e vai mudar pra 1 quando o login for relizado com sucesso
    const [LoginRealizado, setLoginRealizado] = useState(
        localStorage.getItem("LoginRealizado") || "0"
    );

    let usuarioRecuperado = JSON.parse(localStorage.getItem("Usuario"));

    const navigate = useNavigate();
    //Recuperei os dados salvos do objeto de Usuario, do localstorage, e comparei com o que foi escrito no login. Se tiver igual ao objeto ele aparece a mensagem de login realizado com sucesso e muda a variavel de login para 1. Se não foi igual ele fala que pode ter algum dado errado ou o usuario não ta cadastrado e manda para o registro.
    function VerificarLoginUser() {
        if (usuarioRecuperado && usuarioRecuperado.emailUsuario === emailLogin && usuarioRecuperado.senhaUsuario === senhaLogin) {
          Swal.fire({
            title: `Seja bem-vindo ${usuarioRecuperado.nomeUsuario}`,
            text: 'Vamos direcionar para o Home',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000, 
            timerProgressBar: true,
          });          
          setLoginRealizado("1"); // Atualiza o estado
          localStorage.setItem("LoginRealizado", "1"); // Salva no localStorage
          navigate("/");
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Senha incorreta ou usuário não cadastrado',
            icon: 'error', 
            showConfirmButton: false,
            timer: 2000, 
            timerProgressBar: true,
          });
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