import FiveStars from "./FiveStars";

function HomeProdutos({name, price, image, idname}) {
  return (
    <div className="HomeSorvetes_Container_div">
      <img 
        src={image}
        alt="Imagem Fictícia de produto vendido, sorvete"
        id={idname}
      />
      <h1>{name}</h1>
      <div className="HomeSorvetes_Container_div_Valor">
        <div>
          <div>
            <FiveStars/>
          </div>
          <p>R${price}</p>
        </div>
        <svg
          tabIndex={9}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </div>
    </div>
  );
}

export default HomeProdutos;
