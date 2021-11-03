import React from 'react';
import styled from 'styled-components';


import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


const AppPadrao = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`
const AppDiv = styled.div`
width: 40vw;
margin: 10px 0;
h3 {
  text-align: center;
  margin-bottom: 20px;
}
h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`

function App() {
  return (
    <AppPadrao>
      <AppDiv>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="http://www.smashbros.com/images/og/kirby.jpg"
          nome="Rodrigo Santos do Nascimento"
          descricao="Oi, eu sou Rodrigo. Moro no estado de Pernambuco e adoro o frio."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </AppDiv>


      <AppDiv>
        <CardPequeno
          imagem="https://static.vecteezy.com/ti/vetor-gratis/t2/572974-icone-de-localizacao-do-sinal-de-alfinete-gr%C3%A1tis-vetor.jpg"
          titulo="Endereço:"
          descricao="rodrigo, 00"
        />
      </AppDiv>

      <AppDiv>
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6igVW7FvsL3VvLcho6zGgsI7ioQMwF2lC4jetZ33680swkjrmnmHfY41DjnFp8_GWwg&usqp=CAU"
          titulo="Email:"
          descricao="rodrigo.rodrigo"
        />
      </AppDiv>



      <AppDiv>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Estudante"
          descricao="Formado em psicologia e atualmente estudante da Labenu."
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </AppDiv>

      <AppDiv>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </AppDiv>
    </AppPadrao>
  );
}

export default App;
