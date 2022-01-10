import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constantes/urls";
import useGet from "../../hooks/useGet";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";
import { criaComentario } from "../../requisicoes/posts";
import useForm from "../../hooks/useForm";
import { Button, CardActions } from "@mui/material";
import { InputPost, ContainerEnviar } from "./styled";
import { CartaoPost } from "./styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";


const PaginaFeedPostagem = () => {
  usePaginaProtegida()

  const params = useParams();
  const [form, onChange, clear] = useForm({ body: "" })
  const [comentarios, getPostagens, isLoading] = useGet([],`${BASE_URL}/posts/${params.id}/comments`)
  const [postId] = useGet([], `${BASE_URL}/posts/`)

  const postMap = postId.map((post) => {
    if (post.id === params.id) {
      return (
        <CartaoPost key={post.id}>
          <Card sx={{ width: 375 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {post.title}
                <Typography variant="h5" component="div">
                  {post.body}
                </Typography>
              </Typography>
              <Typography variant="body2">{post.username}</Typography>
            </CardContent>
            <IconButton size="small" >
              <ArrowUpwardRounded />
            </IconButton>
            <IconButton size="small">{post.voteSum}</IconButton>
            <IconButton size="small" >
              <ArrowDownwardRounded />
            </IconButton>
          </Card>
        </CartaoPost>
      )
    }
  })

  const comentariosMap =
    comentarios &&
    comentarios.map((coment) => {
      return (
        <CartaoPost key={coment.id}>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {coment.username}
              </Typography>
              <Typography variant="body2">{coment.body}</Typography>
            </CardContent>
            <CardActions>
              <IconButton size="small" >
                <ArrowUpwardRounded />
              </IconButton>
              <IconButton size="small">{coment.voteSum}</IconButton>
              <IconButton size="small" >
                <ArrowDownwardRounded />
              </IconButton>
            </CardActions>
          </Card>
        </CartaoPost>
      )
    })

  const enviarComentario = (event) => {
    event.preventDefault();
    criaComentario(params, form, clear, getPostagens);
  }

  return (
    <ContainerEnviar>
      {postMap}
      {isLoading && <p>Carregando...</p>}
      {!isLoading && comentarios.length > 0 && comentariosMap}
      <form onSubmit={enviarComentario}>
        <InputPost
          variant={"outlined"}
          name={"body"}
          value={form.body}
          onChange={onChange}
          label="Comentário"
          required
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
          Comentar
        </Button>
      </form>
    </ContainerEnviar>
  )
}

export default PaginaFeedPostagem;
