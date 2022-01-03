import styled from "styled-components";
import { Fab, TextField } from "@mui/material";

export const ContainerPaginaFeed = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 30px;
`

export const CartaoDePostagem = styled.div`

display: flex;
flex-direction: column;
align-items: center;
max-width: 345px;
margin: 10px auto;

`

export const AdicionarPostagem = styled(Fab)` 

position: fixed;
right: 20px;
bottom: 20px;
z-index: 3;

`

export const ContainerFormulario = styled.div`

display: flex;

`

export const InputPostagem = styled(TextField)`

display: flex;


`
