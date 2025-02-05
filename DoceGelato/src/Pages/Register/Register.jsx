import { useState } from "react";

export default function Register() {

  //Criando o objeto CENTRAL de Usuário, vazio e salvamos no localStorage
  const Usuario = {
    nomeUsuario: "",
    emailUsuario: "",
    senhaUsuario: "",
  }
  localStorage.setItem("Usuario", JSON.stringify(Usuario));

  //Criei as variáveis pra salvar o que foi escrito no input de registro
  const [emailRegistro, setEmailRegistro] = useState("")
  const [senhaRegistro, setSenhaRegistro] = useState("")
  const [nomeRegistro, setNomeegistro] = useState("")

  // Ao clicar em salvar, vamos verificar se todos os campos foram preenchidos. Caso esteja tudo completo, nos pegamos o objeto que estava vazio e colocamos as novas informações escritas nos inputs, atualizamos ele e falamos que o user ja foi cadastrado e mandamos para o login. Se não tiver aparece a mensagem de preencher tudo antes de realizar o cadastro.
  function SalvandoUsuarioRegistrado() {

    if (!emailRegistro || !senhaRegistro || !nomeRegistro) {
      alert("Preencha todos os campos!");
    } else {
      let usuarioRecuperado = JSON.parse(localStorage.getItem("Usuario"));

      usuarioRecuperado.nomeUsuario = nomeRegistro;
      usuarioRecuperado.emailUsuario = emailRegistro;
      usuarioRecuperado.senhaUsuario = senhaRegistro;

      localStorage.setItem("Usuario", JSON.stringify(usuarioRecuperado));
      alert("Usuário cadastrado com sucesso! Volte e faça o login.");
    }    
  }  

  return (
    <section className="Register">
      <div className="Register_ContainerForm">
        <h1>Registro</h1>
        <form action="">
          <label htmlFor="user">User</label>
          <input onChange={(nomeregistrado) => setNomeegistro(nomeregistrado.target.value)} className="InputRegister" type="text" name="user" id="user" />
          <label htmlFor="email">Email</label>
          <input onChange={(emailregistrado) => setEmailRegistro(emailregistrado.target.value)} className="InputRegister" type="email" name="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input onChange={(senharegistrada)=>setSenhaRegistro(senharegistrada.target.value)} className="InputRegister" type="password" name="senha" id="senha" />
          <input onClick={SalvandoUsuarioRegistrado} className="Btn_Registro" type="button" value="Registre-se" />
        </form>
        <p className="Text_Login">Já tem cadastro? <a href={"/Login"}>Login</a></p>
      </div>
    </section>
  );
}
