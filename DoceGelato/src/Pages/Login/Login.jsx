export default function Login(){
    return(
        <section className="Login">
            <div className="Login_ContainerForm">
               <h1>Login</h1>
               <form action="">
                   <label htmlFor="email">Email</label>
                   <input className="InputUser" type="email" name="email" id="email" />
                   <label htmlFor="senha">Senha</label>
                   <input className="InputUser" type="password" name="senha" id="senha" />
                   <p className="Text_EsqueceuSenha">Esqueceu a senha? <a href="#">Clique aqui</a></p>
                   <input className="Btn_login" type="button" value="Login" />
               </form>
               <p className="Text_Registro">Não tem cadastro? <a href={"/Register"}>Registre-se</a></p>
            </div>
        </section>
    )
}