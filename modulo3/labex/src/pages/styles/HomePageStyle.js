import styled from "styled-components";
import fundo from "../home/img/fundo.jpg"

export const HomePageStyle = styled.div`
*{
    margin:0;
    padding: 0;
}

display: flex;
flex-direction: column;
align-items: center;

img{
    height: 85vh;
    width: 95vw;
    border-radius: 40px 40px 0 0;
    margin-top: 4vh;
}

`

export const Header = styled.header`

*{
    margin: 0;
    padding: 0;
}

border-bottom: 2px solid black;
height: 8vh;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

.botão-home{
    
    background-color: transparent;
    color:black;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

`

