import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import ImagenCrypto from "./img/imagen-criptos.png"
import Formulario from "./components/Formulario"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  };
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display:block;
`


const Heading = styled.h1`^
  font-family: "lato", sans-serif;
  color: #FFF;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto; 
  }


`

function App() {


  const [monedas, setMonedas] = useState({});

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      
      const cotizarCrypto = async () => {
        url= "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD";
        const response= (await fetch(url)).json();
        return response;
      }




    }
  }, [monedas]);


  return (
    <Contenedor>
      <Imagen
        src={ImagenCrypto}
        alt="Imagen de criptomonedas"
      />
      <div>
        <Heading>Check Your Favorite Crypto </Heading>
        <Formulario
          setMonedas={setMonedas}
        ></Formulario>
      </div>

    </Contenedor>
  )
}

export default App
