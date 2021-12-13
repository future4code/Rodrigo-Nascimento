import styled from "styled-components";
import estrelas from "../home/img/estrelas.jpg"

export const Container = styled.div`

background-image: url(${estrelas}) ;
background-size: cover;
background-repeat: no-repeat;
height: 97.9vh;
font-family:'Roboto',sans-serif;


h2{
    display: flex;
    justify-content: center;
    color: white;
}
`


export const Formulario = styled.form`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;


input, select {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button{
display: inline-block;
padding: 0.35em 1.2em;
border: 0.1em solid #FFFFFF;
margin: 0 0.3em 0.3em 0;
border-radius: 0.12em;
box-sizing: border-box;
text-decoration: none;
font-family:'Roboto',sans-serif;
font-size:large;
color: black;
text-align:center;
transition: all 0.2s;
background-color: white;

`



