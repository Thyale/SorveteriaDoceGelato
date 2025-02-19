import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FiveStars from "./FiveStars";
import FavoritosMorango from "../assets/Images/ImgProdutoSorveteMorango.png"

export default function Cart(){
    const navigate = useNavigate();

    //pegamos o valor do local storage que mostrar se foi feito o login (1)
    const loginSalvo = localStorage.getItem("LoginRealizado");

    //Ao clicar em finalizar a compra, se o usuario ja estiver cadastrado, ele vai direto para o pagamento e e se nao tiver ele vai para o login.
    function Pagamento(){
        if(loginSalvo == "1"){
            Swal.fire({
                title: 'Pagamento Realizado!',
                text: 'Sua compra foi concluída com sucesso.',
                icon: 'success',
                imageUrl: './src/assets/QrCodePagamento.png',
                imageWidth: 170,  
                imageHeight: 200,
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF6DB9',
              })
        }else{
            Swal.fire({
                title: 'Erro!',
                text: 'Para continuar é preciso realizar o Login',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF6DB9',
            })
            navigate("/Login");
        }
    }

    return(
        <section className="SectionCart">
            <div className="SectionCart_Container">
                <h1>Carrinho</h1>

                <div className="SectionCart_Container_Produtos">

                    <div className="SectionCart_Container_Produtos_Item">
                        <div className="SectionCart_Container_Produtos_Item_Dados">
                            <img src={FavoritosMorango} alt="Imagem Fictícia de produto vendido, sorvete"  />
                            <div>
                                <h2>Sorvete de Morango</h2>
                                <FiveStars/>
                                <p>R$13,99</p>
                            </div>
                        </div>
                        <div className="SectionCart_Container_Produtos_Item_Quantidade">
                            <button id="btnAdicionar">+</button>
                            <p>00</p>
                            <button id="btnRetirar">-</button>
                        </div>
                    </div>

                </div>

                <div className="SectionCart_Container_Valores">
                    <div>
                        <p>Quantidade de itens</p>
                        <p>0 Itens</p>
                    </div>
                    <div>
                        <p>Frete</p>
                        <p>R$0,00</p>
                    </div>
                    <div>
                        <p>valor dos itens</p>
                        <p>R$0,00</p>
                    </div>
                    <div id="DivTotalCart">
                        <p>Valor total da compra</p>
                        <p>R$0,00</p>
                    </div>
                    <button onClick={Pagamento}>Finalizar a compra</button>
                </div>
            </div>
        </section>
    )
}