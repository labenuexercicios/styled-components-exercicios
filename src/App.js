import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { TelaInteira, Header, Main, MenuVertical, BotaoMenuVertical, PainelDeVideos, Footer } from "./AppStyle.js";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    width: 100%;
    padding: 0;
    margin: 0;
  }
`

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <TelaInteira>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical>
            <ul>
              <BotaoMenuVertical>Início</BotaoMenuVertical>
              <BotaoMenuVertical>Em alta</BotaoMenuVertical>
              <BotaoMenuVertical>Inscrições</BotaoMenuVertical>
              <hr />
              <BotaoMenuVertical>Originais</BotaoMenuVertical>
              <BotaoMenuVertical>Histórico</BotaoMenuVertical>
            </ul>
          </MenuVertical>

          <PainelDeVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelDeVideos>
        </Main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </TelaInteira>
    </div>
  );
}
