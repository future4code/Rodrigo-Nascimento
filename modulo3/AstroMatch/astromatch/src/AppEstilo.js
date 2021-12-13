import styled from "styled-components";

const EstiloContainer = styled.div`

display: flex;
flex-direction: column;
background-color: white;
margin-left: 40vw;
align-items: center;
justify-content: center;
background-size: 100% 100%;
width: 400px;
height: 90vh;
background-color: white;

button{
    background-color: transparent;
    border: none;
    border-radius: 20px;
}

button:hover{
    box-shadow: 0 0 8px #ccc;  
}

button:active{
    opacity: 0.5;
}

header{
    display: flex;
    justify-content: space-between;
    width: 300px;
    border-radius: 15px 15px 0 0;
    background-color: #e5e5e5;
    img{
        height: 35px;
        width: 35px;
    }
}

`

export default EstiloContainer
