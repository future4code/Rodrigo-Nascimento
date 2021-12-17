import React from "react";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";
import useGet from "../../hooks/useGet";
import { BASE_URL } from "../../constantes/urls"
import { AdicionarPostagem, CartaoDePostagem, ContainerPaginaFeed } from "./styled";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Add, AddBoxRounded, ArrowDownwardRounded, ArrowUpwardRounded, PostAddOutlined } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import { irParaCriarPost, irParaFeedPostagem } from "../../rotas/coordenadas";
import FormularioPostagem from "./FormularioPostagem";
import { Badge } from "@mui/material";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import { votoPositivo, votoNegativo } from "../../requisicoes/posts";
import { useState } from "react";
import { useEffect } from "react";


const PaginaFeed = () => {
    usePaginaProtegida()
    const [voto, setVoto] = useState(0)
    const postagens = useGet([], `${BASE_URL}/posts`)


   

    const navigate = useNavigate()

    const onClickCartao = (id) => {
        irParaFeedPostagem(navigate, id)
    }

    const votarPositivo = (id) => {
        votoPositivo(id)
        setVoto(1)
        
 
    }
    const votarNegativo = (id) => {
        votoNegativo(id)
        setVoto(-1)
        

    }
    useEffect(() => {
        
        
    },[postagens, votoPositivo, votoNegativo])


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
                                    <CommentRoundedIcon color="action" />
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
                    <IconButton size="small">
                        {post.voteSum}
                    </IconButton>
                    <IconButton size="small" onClick={() => votarNegativo(post.id)}>
                        <ArrowDownwardRounded />
                    </IconButton>
                </Card>
            </CartaoDePostagem>
        )
    })

    return (
        <ContainerPaginaFeed>
            <FormularioPostagem />
            {postsMap}
        </ContainerPaginaFeed>

    )
}

export default PaginaFeed