import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constantes/urls";
import useGet from "../../hooks/useGet";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";
import PaginaFeed from "../PaginaFeed/PaginaFeed";
import { criaComentario } from "../../requisicoes/posts"
import useForm from "../../hooks/useForm";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import CriaComentario from "../../requisicoes/comentarios";




const PaginaFeedPostagem = () => {
    usePaginaProtegida()

    const params = useParams()
    const [form, onChange, clear] = useForm({body: ""})
    const navigate = useNavigate()
    const [comentarios, isLoading] = useGet([], `${BASE_URL}/posts/${params.id}/comments`)
    const [novoComentario, setNovoComentario] = useState([])



    
        const comentariosMap = comentarios && comentarios.map((coment) =>{
            return( 
                <div>
                    {coment.body}
                    {coment.username}
                </div>
            )
        })
        
   
        console.log(novoComentario, "isso é o novo comentário")
    
        

    

    const teste = () => {
        console.log("abrobrinha")
        

    }
    
    const enviarComentario = (event) => {
        event.preventDefault()
        criaComentario(params, form, clear, navigate)
       
        
    }
    
    

    

    // const comentariosMap = 

    return (

        <div>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && comentarios.length > 0 && comentariosMap}
            {/* {comentariosMap} */}
            {/* {novoComentario} */}
            {novoComentario}

            <form onSubmit={enviarComentario}>
                <TextField
                    variant={"outlined"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label="Comentário"
                    // required
                    // fullWidth
                    margin="dense"
                    size="small"
                />
                <Button onClick={teste}type={"submit"} color="secundary" variant="contained">Comentar</Button>
            </form>
          
        </div>

    )
}

export default PaginaFeedPostagem