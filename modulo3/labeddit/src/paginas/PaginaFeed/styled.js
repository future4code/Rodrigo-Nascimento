import styled from "styled-components";
import Card from "@mui/material/Card";
import { Fab } from "@mui/material";

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
text-align: left;

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