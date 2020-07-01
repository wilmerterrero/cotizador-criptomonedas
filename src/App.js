import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import img from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Axios from "axios";
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #ffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  //state coins
  const [coin, setCoin] = useState("");

  //state crypto
  const [crypto, setCrypto] = useState("");

  //state result
  const [result, setResult] = useState({});

  //state loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCrypto = async () => {
      //avoiding first api call
      if (coin === "") return;

      //querying the api for get the cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

      const result = await Axios.get(url);

      //showing the spinner
      setLoading(true);

      //hide the spinner
      setTimeout(() => {
        setLoading(false);

        //saving the cotizacion
        setResult(result.data.DISPLAY[crypto][coin]);
      }, 3000);

    };

    cotizarCrypto();
  }, [coin, crypto]);

  //show the spinner
  const componentSpinnerOCotizacion = (loading) ? <Spinner /> : <Cotizacion result = {result} />

  return (
    <Contenedor>
      <div>
        <Imagen src={img} alt="crypto" />
      </div>
      <div>
        <Heading>Cotiza cryptomonedas al instante</Heading>
        <Formulario setCoin={setCoin} setCrypto={setCrypto} />
        {componentSpinnerOCotizacion}
      </div>
    </Contenedor>
  );
}

export default App;
