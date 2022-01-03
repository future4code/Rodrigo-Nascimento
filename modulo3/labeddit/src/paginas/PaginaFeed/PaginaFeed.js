import React, { useState } from "react";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";
import useGet from "../../hooks/useGet";
import { BASE_URL } from "../../constantes/urls";
import { CartaoDePostagem, ContainerPaginaFeed } from "./styled";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { irParaFeedPostagem } from "../../rotas/coordenadas";
import FormularioPostagem from "./FormularioPostagem";
import { Badge, Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { votoPositivo, votoNegativo, deletaVoto } from "../../requisicoes/posts";

const PaginaFeed = () => {
  usePaginaProtegida();
  const [voto, setVoto] = useState(0);
  const [postagens, getPostagens, isLoading] = useGet([], `${BASE_URL}/posts`);

  const navigate = useNavigate();

  const onClickCartao = (id) => {
    irParaFeedPostagem(navigate, id);
  };

  const votarPositivo = (id) => {
    votoPositivo(id);
    setVoto(1);
  };

  const votarNegativo = (id, color) => {
    votoNegativo(id);
    setVoto(-1);
  };

  const votoNeutro = (id) => {
    // deletaVoto(id)
    setVoto(0);
  };

  const corVoto = (color) => {
    if (voto === 0) {
      color="primary"
    } else if (voto === -1){
      color="error"
    } else {
      color="secondary"
    }
  }
  
  const postsMap = postagens.map((post) => {
    return (
      <CartaoDePostagem key={post.id}>
        <Card sx={{ width: 325 }}>
          <CardHeader
            title={post.title}
            subheader={post.username}
            onClick={() => onClickCartao(post.id)}
            action={
              <IconButton size="small">
                <Badge badgeContent={post.commentCount} color="primary">
                  <ChatBubbleRoundedIcon color="action" />
                </Badge>
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <IconButton size="small" onClick={() => votarPositivo(post.id)}>
            <ArrowUpwardRounded />
          </IconButton>
          <IconButton size="small">{post.voteSum}</IconButton>
          <IconButton size="small" onClick={() => votarNegativo(post.id)}>
            <ArrowDownwardRounded/>
          </IconButton>
        </Card>
      </CartaoDePostagem>
    );
  });

  return (
    <ContainerPaginaFeed>
      <FormularioPostagem getPostagens={getPostagens} />
      {isLoading && <p>Carregando...</p>}
      {!isLoading && postsMap.length > 0 && postsMap}
    </ContainerPaginaFeed>
  );
};

export default PaginaFeed;
