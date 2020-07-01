import React from "react";
import styled from '@emotion/styled';

const DivResult = styled.div`
    background-color: #fff;
    color: #000;
    padding: 2rem;
    margin-top: 2rem;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;

    span{
        font-weight: bold;
    }
`;

const Cotizacion = ({ result }) => {
  //si el objeto llega vacio
  if (Object.keys(result).length === 0) return null;
  console.log(result);
  return (
    <DivResult>
      <Price>El precio es: <span>{result.PRICE}</span></Price>
      <Info>Precio mas alto del dia: <span>{result.HIGHDAY}</span></Info>
      <Info>Precio mas bajo del dia: <span>{result.LOWDAY}</span></Info>
      <Info>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info>
      <Info>Ultima actualizacion: <span>{result.LASTUPDATE}</span></Info>
    </DivResult>
  );
};

export default Cotizacion;
