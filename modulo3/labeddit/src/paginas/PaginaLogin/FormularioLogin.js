import React from "react";
import useForm from "../../hooks/useForm";
import { ContainerFormulario } from "./styled";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../requisicoes/usuario";
import { irParaFeed } from "../../rotas/coordenadas";

const FormularioLogin = () => {
    const [form, onChange, clear]  = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    
    const enviarLogin = (event ) => {
        event.preventDefault()
        login(form, clear, navigate)
    }

    return (

            <ContainerFormulario>
                <form onSubmit={enviarLogin}>
                    <TextField
                        variant={"outlined"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label="E-mail"
                        required
                        fullWidth
                        margin="normal"
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

                    <Button type={"submit"} variant="contained" fullWidth>Entrar</Button>
                </form>       
            </ContainerFormulario>
        
    )
}

export default FormularioLogin