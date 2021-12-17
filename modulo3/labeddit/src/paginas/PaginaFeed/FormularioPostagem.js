import { Button, TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ContainerFormulario } from "./styled";
import { criaPost } from "../../requisicoes/posts";

const FormularioPostagem = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const navigate = useNavigate()

    const enviarPost = (event) => {
        event.preventDefault()
        criaPost(form, clear, navigate)
        
    }

    return (

        <div>
            <form onSubmit={enviarPost}>
                <TextField
                    variant={"outlined"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label="Título"
                    required
                    fullWidth
                    margin="dense"
                    size="small"
                />
                <TextField
                    variant={"outlined"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label="Post"
                    required
                    fullWidth
                    margin="dense"
                    size="small"
                />
                <Button type={"submit"} color="secundary" variant="contained">Postar</Button>
            </form>
        </div>             
    )
}

export default FormularioPostagem