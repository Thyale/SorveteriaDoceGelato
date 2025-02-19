import HomeProdutos from "./HomeProdutos"
import HomeSwiper from "./HomeSwiper"

import FavoritosLimaoSiciliano from "../assets/Images/ImgProdutoSorveteLimao.png"
import FavoritosMorango from "../assets/Images/ImgProdutoSorveteMorango.png"
import FavoritosChocolate from "../assets/Images/ImgProdutoSorveteChocolate.png"

import MilksCaramelo from "../assets/Images/ImgProdutoMilkCaramelo.png"
import MilksMorango from "../assets/Images/ImgProdutoMilkMorango.png"
import MilksChocolate from "../assets/Images/ImgProdutoMilkchocolate.png"

import PicoleCrocanteBaunilha from "../assets/Images/ImgProdutoPicoleBaunilha.png"
import PicoleTangerina from "../assets/Images/ImgProdutoPicoleTangerina.png"
import PicoleCrocanteMorango from "../assets/Images/ImgProdutoPicoleMorango.png"

import ImgSobreHome from "../assets/Images/ImgSectionSobreHome.png"
import ImgMapaBrasil from "../assets/Images/ImgMapaBrasil.png"

export default function Home(){
    return(
        <main>

            <HomeSwiper/>

            <section id='Sorvetes' className='HomeSorvetes'>
                <h1>Explore nossos <br></br> <strong>Favoritos</strong></h1>
                <div className='HomeSorvetes_Container'>
                    <HomeProdutos name="Sorvete de Limão Siciliano" image={FavoritosLimaoSiciliano} price="15.99"/>
                    <HomeProdutos name="Sorvete de Morango" image={FavoritosMorango} price="13.99"/>
                    <HomeProdutos name="Sorvete de Chocolate" image={FavoritosChocolate} price="9.99"/>
                </div>
            </section>

            <section className='HomeSobre'>
                <img src={ImgSobreHome} alt="Imagem Ilustrativa de uma crian;a segurando um sorvete" />
                <div>
                    <h1>Sorveteria Doce Gelato</h1>
                    <p>A Sorveteria Doce Gelato é o lugar onde sabores únicos ganham vida. Com receitas artesanais preparadas com os melhores ingredientes, oferecemos uma variedade de opções irresistíveis que agradam a todos os gostos, incluindo sorvetes cremosos, refrescantes e alternativas veganas. Nosso compromisso é transformar cada visita em uma experiência deliciosa e memorável.</p>
                    <button tabIndex={12}>Saiba mais sobre nossa história</button>
                </div>
            </section>

            <section id='Milks' className='HomeSorvetes'>
                <h1>Sessão de <br></br> <strong>Milkshakes</strong></h1>
                <div className='HomeSorvetes_Container'>
                    <HomeProdutos name="Milkshake de Caramelo" image={MilksCaramelo} price="15.99" idname="ImgGrande"/>
                    <HomeProdutos name="Milkshake de Chocolate" image={MilksChocolate} price="15.99" idname="ImgGrande"/>
                    <HomeProdutos name="Milkshake de Morango" image={MilksMorango} price="15.99"/>
                </div>
            </section>  

            <section className='HomeLojas'>
                <img src={ImgMapaBrasil} alt="Imagem Ilustrativa de uma crian;a segurando um sorvete" />
                <div>
                    <h1>A Sorveteria Doce Gelo está presente nos melhores pontos da cidade, trazendo sabor e refrescância para você.</h1>
                    <p>Nossas lojas estão localizadas no centro, na orla e em shoppings, sempre prontas para te receber. Cada unidade oferece um ambiente aconchegante para aproveitar nossos sorvetes artesanais. Venha nos visitar e descubra o sabor que faz a diferença!</p>
                </div>
            </section>

            <section id='Picole' className='HomeSorvetes'>
                <h1>Sessão de <br></br> <strong>Picolé</strong></h1>
                <div className='HomeSorvetes_Container'>
                    <HomeProdutos name="Picolé Crocante com Baunilha" image={PicoleCrocanteBaunilha} price="4.99" idname="ImgGrande"/>
                    <HomeProdutos name="Picolé de Tangerina com Limão" image={PicoleTangerina} price="2.99" idname="ImgGrande"/>
                    <HomeProdutos name="Picolé Crocante com Morango" image={PicoleCrocanteMorango} price="4.99" idname="ImgGrande"/>
                </div>
            </section> 

            <section className='HomeNews'>
                <div>
                    <h1>Assine Nosso newsletter</h1>
                    <input placeholder='+DDD 81 9 0000-0000' type="text" name="newsletter" id="newsletter" />
                    <button>Assinar</button>
                </div>
            </section>
        </main>
    )
}