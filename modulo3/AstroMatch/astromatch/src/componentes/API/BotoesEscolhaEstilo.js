import styled from "styled-components";


export const BotoesEscolhaEstilo = styled.div`

display: flex;
justify-content: space-evenly;
background-color: #e5e5e5;
border-radius: 0 0 15px 15px;

button{
    background-color: transparent;
    border: none;
    border-radius: 10px;
}

button:hover{
    box-shadow: 0 0 5px #ccc;  
}

button:active{
    opacity: 0.5;
}

img{
    width: 40px;
    height: 40px;
}
`