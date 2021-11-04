import React from 'react';
import styled from 'styled-components';

const CardPequenoEstilo = styled.div`

display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 40px;
img{
width: 30px;
margin-right: 10px;
}
p{
margin-left: 10px
}
div{
display: flex;
align-items: flex-end;
}

`
function CardPequeno(props) {
    return (
        <CardPequenoEstilo>
            <img src={props.imagem}/>
            <h4>{props.titulo}</h4>
            <div>
                <p>{props.descricao}</p>
            </div>
        </CardPequenoEstilo>
    )
}

export default CardPequeno;


