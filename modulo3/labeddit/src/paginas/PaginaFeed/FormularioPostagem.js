import React from "react";
import { Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { InputPostagem } from "./styled";
import { criaPost } from "../../requisicoes/posts";


const FormularioPostagem = (props) => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const navigate = useNavigate();

  const enviarPost = (event) => {
    event.preventDefault();
    criaPost(form, clear, navigate, props.getPostagens);
  };

  return (
    <form onSubmit={enviarPost}>
      <InputPostagem
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
      <InputPostagem
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
      <Button 
        type={"submit"} 
        color="secundary" 
        variant="contained"
        size="small"
        fullWidth="true"
      >
        Postar
      </Button>
    </form>
  );
};

export default FormularioPostagem;
