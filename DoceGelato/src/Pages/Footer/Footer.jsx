export default function Footer(){
    return(
        <footer>
            <a className="ImgFooter" href={"/"}>
                <img src="/src/assets/LogoDoceGelato.png" alt="Logotipo do DoceGelato" />
            </a>
            <div className="ContainerLinksFooter">
                <div className="ContainerLinksFooter_Divs">
                    <h1>Links Externos</h1>
                    <ul>
                        <li>Ifood</li>
                        <li>Reclame aqui</li>
                        <li>Blog</li>
                        <li>Parcerias</li>
                    </ul>
                </div>
                <div className="ContainerLinksFooter_Divs">
                    <h1>Redes Sociais</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>
                <div className="ContainerLinksFooter_Divs">
                    <h1>Contato</h1>
                    <ul>
                        <li>(81) 98765-4321</li>
                        <li>contato@docegelo.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}