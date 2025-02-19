import IconDoceGelato from "../assets/Images/LogoDoceGelato.png"

function HeaderInferior() {
  return (
    <div className="BarraMenu">
                <a className="BarraMenu_Img" href={"/"}>
                   <img tabIndex={4} src={IconDoceGelato} alt="Logotipo do DoceGelato" />
                </a>
                <ul className="BarraMenu_Links">
                    <li tabIndex={5}><a href={`#Sorvetes`}>Sorvete</a></li>
                    <li tabIndex={6}><a href={`#Milks`}>Milkshake</a></li>
                    <li tabIndex={7}><a href={`#Picole`}>Picolé</a></li>
                </ul>
                <div className="BarraMenu_Pesquisa" aria-label="Campo de pesquisa">
                    <input tabIndex={8} placeholder="PESQUISE POR ALGO" type="text" name="Pesquisa" id="Pesquisa" />
                    <label htmlFor="Pesquisa">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
                    </label>
                </div>
    </div>
  )
}

export default HeaderInferior