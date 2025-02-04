export default function Cart(){
    return(
        <section className="SectionCart">
            <div className="SectionCart_Container">
                <h1>Carrinho</h1>

                <div className="SectionCart_Container_Produtos">

                    <div className="SectionCart_Container_Produtos_Item">
                        <div className="SectionCart_Container_Produtos_Item_Dados">
                            <img src="./src/assets/ImgProdutoSorveteMorango.png" alt="Imagem Fictícia de produto vendido, sorvete"  />
                            <div>
                                <h2>Sorvete de Morango</h2>
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bibi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bibi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bibi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bibi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bibi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                </div>
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
                    <button>Finalizar a compra</button>
                </div>
            </div>
        </section>
    )
}