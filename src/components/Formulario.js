import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCryptomoneda from '../hooks/useCryptomoneda';
import Axios from 'axios';
import Error from './Error'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%100px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ({setCoin, setCrypto}) => {

    //list state of cryptocoins
    const [cryptolist, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        { codigo: 'DOP', nombre: 'Peso Dominicano'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //state useCoin
    const [coin, SelectCoin] = useCoin('Elige tu moneda', '', MONEDAS);

    //state useCryptomoneda
    const [cryptomoneda, SelectCrypto] = useCryptomoneda('Elige tu criptomoneda', '', cryptolist);

    //API QUERY
    useEffect(() => {
        const queryAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await Axios.get(url);
            setCryptos(result.data.Data);
        }

        queryAPI();
    }, []);

    //submit action
    const cotizarMoneda = e => {
        e.preventDefault();

        //validation
        if(coin === "" || cryptomoneda === ""){
            setError(true);
            return;
        }

        //passing the data to principal component
        setError(false);
        setCoin(coin);
        setCrypto(cryptomoneda);
    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error message='Todos los campos son obligatorios' /> : null}

            <SelectCoin />

            <SelectCrypto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;