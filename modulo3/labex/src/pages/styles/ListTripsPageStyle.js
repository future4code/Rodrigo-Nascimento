import styled from "styled-components";
import fundo from "../home/img/fundo.jpg"


export const Cards = styled.div`

border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 30vh;
width: 30vw;
border-radius: 10px;
margin-top: 4vh;
background-image: url(${fundo});
background-repeat: no-repeat;
background-size: cover;
color: white;
box-shadow: 0 0 0.5em white;

p{
    margin-left: 1.5vw;
    font-size: 0.9em ;
}

`

export const DivCards = styled.div`

margin-top: 12vh;
margin-left: 3vw;

`

export const Background = styled.div`

background-color: black;
font-family:'Roboto',sans-serif;


`