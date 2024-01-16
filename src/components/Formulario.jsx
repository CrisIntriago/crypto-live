import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = ({setMonedas}) => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas("Select your FIAT currency", monedas);
    const [cryptocurrency, SelectCryptocurrency] = useSelectMonedas("Select your favorite crypto", cryptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const response = await fetch(url);
            const resultado = await response.json();

            const arrayCrypto = resultado.Data.map(crypto => {

                const object = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }

                return object;
            })

            setCryptos(arrayCrypto);

        }
        consultarAPI();

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([moneda, cryptocurrency].includes("")) {
            console.log("Error");
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            cryptocurrency
        })

    }

    return (
        <>
            {error && <Error>All fields are required</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCryptocurrency />
                <InputSubmit type="submit" value="cotizar" />
            </form>
        </>
    )
}

export default Formulario
