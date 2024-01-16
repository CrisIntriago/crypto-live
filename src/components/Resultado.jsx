
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
     color: #FFF;
     font-family: "Lato", sans-serif;
     display:flex;
     align-items: center;
     gap:1rem;
     margin-top: 30px;
    `

const Texto = styled.p`
    font-size:18px;
    span{
        font-weight: 700;
    }
    `

const Precio = styled.p`
    font-size : 30px;
    span{
        font-weigth: 700;
    }

    `

const Imagen = styled.img`
    display:block;
    width: 120px;
    
`



const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <ResultadoDiv>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto img" />
            <div>
                <Precio>Today's price: <span>{PRICE}</span></Precio>
                <Texto>Today's highest price: <span>{HIGHDAY}</span></Texto>
                <Texto>Today's lowest price: <span>{LOWDAY}</span></Texto>
                <Texto>Today's variation: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Last Update <span>{LASTUPDATE}</span></Texto>
            </div>


        </ResultadoDiv>
    )
}

export default Resultado
