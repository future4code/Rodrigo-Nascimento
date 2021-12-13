import styled from "styled-components";
import estrelas from "../home/img/estrelas.jpg"

export const ContainerLogin = styled.div`

.botão-enviar{

background-color: white;
color: black
}

h2{
    color: white;
    margin-top: 10vh;

}

*{
    margin: 0;
    padding: 0;
    font-family:'Roboto',sans-serif;
}

background: url(${estrelas}) ;
background-size: cover;
width:100%;
height: 97.8vh;
background-repeat: no-repeat;

button{
display: inline-block;
padding: 0.35em 1.2em;
border: 0.1em solid #FFFFFF;
margin: 0 0.3em 0.3em 0;
border-radius: 0.5em;
box-sizing: border-box;
text-decoration: none;
font-family:'Roboto',sans-serif;
font-size:medium;
color: white;
text-align:center;
transition: all 0.2s;
background-color: black;


:hover{

    color:#000000;
    background-color:#e5e5e5;

}

`