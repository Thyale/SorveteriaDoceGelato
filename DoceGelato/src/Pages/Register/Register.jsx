export default function Register() {
  return (
    <section className="Register">
      <div className="Register_ContainerForm">
        <h1>Registro</h1>
        <form action="">
          <label htmlFor="user">User</label>
          <input className="InputRegister" type="text" name="user" id="user" />
          <label htmlFor="email">Email</label>
          <input className="InputRegister" type="email" name="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input className="InputRegister" type="password" name="senha" id="senha" />
          <input className="Btn_Registro" type="button" value="Registre-se" />
        </form>
        <p className="Text_Login">Já tem cadastro? <a href={"/Login"}>Login</a></p>
      </div>
    </section>
  );
}
