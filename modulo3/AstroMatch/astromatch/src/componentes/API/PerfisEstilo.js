import styled from "styled-components";


export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
background: ${props => `url(${props.fundo}) no-repeat` };
background-size: 100% 100%;
background-color: white;
width: 300px;
height: 400px;


h2, h4{

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  text-shadow: 2px 2px black;
  margin-left: 5px;
}


`