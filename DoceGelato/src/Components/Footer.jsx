import IconDoceGelato from "../assets/Images/LogoDoceGelato.png"

export default function Footer(){
    return(
        <footer>
            <a className="ImgFooter" href={"/"}>
                <img src={IconDoceGelato} alt="Logotipo do DoceGelato" />
            </a>
            <div className="ContainerLinksFooter">
                <div className="ContainerLinksFooter_Divs">
                    <h1>Links Externos</h1>
                    <ul>
                        <li tabIndex={19}>Ifood</li>
                        <li tabIndex={20}>Reclame aqui</li>
                        <li tabIndex={21}>Blog</li>
                        <li tabIndex={22}>Parcerias</li>
                    </ul>
                </div>
                <div className="ContainerLinksFooter_Divs">
                    <h1>Redes Sociais</h1>
                    <ul>
                        <li tabIndex={23}>Instagram</li>
                        <li tabIndex={24}>Facebook</li>
                    </ul>
                </div>
                <div className="ContainerLinksFooter_Divs">
                    <h1>Contato</h1>
                    <ul>
                        <li tabIndex={25}>(81) 98765-4321</li>
                        <li tabIndex={26}>contato@docegelo.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}