import styled from "styled-components";
import Perfis from "./Perfis";



export const Container = styled.div`

border: 2px solid black;
border-radius: 2vw;
/* width: 20vw; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
background: ${props => `url(${props.fundo}) no-repeat` };
background-size: 100% 100%;
/* background-position: center top;
background-size: cover; */
width: 400px;
height: 500px;
/* filter: blur(1px); */


/* img{
  
  border: solid 10px pink;
  border-radius: 25px;
  width: 15vw;
  height: 27vh;
  margin-top: 4vh;
} */

h2, h4{
  /* margin-top: 2vh; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  text-shadow: 1px 1px black;  
}


`

