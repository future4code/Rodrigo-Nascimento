import styledComponents from "styled-components";

export const HomeContainer = styledComponents.div`

display: flex;
justify-content: space-between;
background-color: #EFEFEF;
height: 100vh;
width: 100vw;


.left-side{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #6BEFA3;
  width: 30vw;
  // border: 1px solid black;
  // border-radius: 0px 0px -200px;
  
  img{
    width: 20px;
    height: 20px;
  }
}
`

