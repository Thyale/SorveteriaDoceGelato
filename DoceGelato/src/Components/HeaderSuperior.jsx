import Swal from "sweetalert2";
import IconWhatsApp from "../assets/Images/IconWhats.png"
import ImgUser from "../assets/Images/ImgLoginRealizado.png"

const HeaderSuperior = () => {
    //Recuperamos o usuario registrado e logado para pegar o nome 
    let usuarioRecuperado = JSON.parse(localStorage.getItem("Usuario"));

    //pegamos o valor do local storage que mostrar se foi feito o login (1)
    const loginSalvo = localStorage.getItem("LoginRealizado");

    //Ao clicar em login, se o usuario ja estiver cadastrado, ele vai mostrar a mensagem que ja está logado e não vai para a rota de login.
    function MsmUserCadastado(){
        if(loginSalvo == "1"){
            Swal.fire({
                title: `Oops`,
                text: 'O usuário já está cadastrado!',
                showConfirmButton: false,
                timer: 3000, 
                timerProgressBar: true,
              });
        }
    }

  return (
    <div className="BarraSuperior">
                <a tabIndex={1} aria-label="Botão de link que dará para o WhatsApp da empresa" className="BarraSuperior_BtnWhats" href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20sua%20empresa." target="_blank">
                    <img src={IconWhatsApp} alt="Icon Ilustrativo do whatsapp" />
                    <p>Fale com a gente no WhatsApp</p>
                </a>
                <div className="BarraSuperior_Container">
                        { //Vai alternar se o login ja estiver feito ou não
                          loginSalvo === "1" ? (
                            <a tabIndex={2} aria-label="Botão de link que dará para o Login e registro" className="BarraSuperior_Container_LoginEndCart" href="#">
                            <p>{usuarioRecuperado.nomeUsuario}</p>
                              <img onClick={MsmUserCadastado} className="ImgLoginRelizado" src={ImgUser} alt="Usuário logado" />
                            </a>
                        ) : (
                            <a tabIndex={2} aria-label="Botão de link que dará para o Login e registro" className="BarraSuperior_Container_LoginEndCart" href={"/Login"}>
                            <p>Login/Registro</p>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                            </a>
                        )
                        }
                    <a tabIndex={3} aria-label="Botão de link que dará para o carrinho de compras" className="BarraSuperior_Container_LoginEndCart"href={"/Cart"}>
                        <p>Carrinho</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
                    </a>
                </div>
    </div>
  )
}

export default HeaderSuperior