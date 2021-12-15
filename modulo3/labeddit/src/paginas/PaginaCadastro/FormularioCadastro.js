import React from "react";
import useForm from "../../hooks/useForm";
import { ContainerFormulario } from "./styled";
import { Button, TextField } from "@mui/material";
import { cadastro } from "../../requisicoes/usuario";
import { useNavigate } from "react-router-dom";

const FormularioCadastro = () => {
    const  [form, onChange, clear]  = useForm({ username:"", email: "", password: "" })

    const navigate = useNavigate()

    const enviarCadastro = (event ) => {
        event.preventDefault()
        cadastro(form, clear, navigate)

    }

    return (

            <ContainerFormulario>
                <form onSubmit={enviarCadastro}>
                    <TextField
                        variant={"outlined"}
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label="Nome do usuário(a)"
                        required
                        fullWidth
                        margin="dense"
                        size="small"
                 
                    />
                    <TextField
                        variant={"outlined"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label="E-mail"
                        required
                        fullWidth
                        margin="dense"
                        type={"email"}
                        size="small"
                    />
                    <TextField
                        variant={"outlined"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label="Senha"
                        required
                        fullWidth
                        margin="dense"
                        type={"password"}
                        size="small"
                    />
                   

                    <Button type={"submit"} variant="contained" fullWidth>Cadastrar</Button>
                </form>       
            </ContainerFormulario>
        
    )
}

export default FormularioCadastro