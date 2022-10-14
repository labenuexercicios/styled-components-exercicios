import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo/CardVideo";
import { GlobalStyled } from "./GlobalStyled";
import { ContainerStyled, Header, Main, MenuVertical, BotoesMenuVertical, PainelDeVideos, Footer, H4} from "./Styled";



export default function App() {
    const reproduzVideo = () => {
      alert("o vídeo está sendo reproduzido");
    };

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Vídeo 1",
  };

  const video2 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "Vídeo 2",
  };

  const video3 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Vídeo 3",
  };

  const video4 = {
    imagem: "https://picsum.photos/400/400?a=4",
    titulo: "Vídeo 4",
  };

  const video5 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "Vídeo 5",
  };

  const video6 = {
    imagem: "https://picsum.photos/400/400?a=6",
    titulo: "Vídeo 6",
  };

  const video7 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "Vídeo 7",
  };

  const video8 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "Vídeo 8",
  };
  return (
    <div>
      <GlobalStyled/>
      <ContainerStyled>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>
        <Main>
          <MenuVertical>
            <ul>
              <BotoesMenuVertical>Início</BotoesMenuVertical>
              <BotoesMenuVertical>Em alta</BotoesMenuVertical>
              <BotoesMenuVertical>Inscrições</BotoesMenuVertical>
              <hr />
              <BotoesMenuVertical>Originais</BotoesMenuVertical>
              <BotoesMenuVertical>Histórico</BotoesMenuVertical>
            </ul>
          </MenuVertical>

          <PainelDeVideos>
            <CardVideo video={video1} reproduzVideo={reproduzVideo} />
            <CardVideo video={video2} reproduzVideo={reproduzVideo} />
            <CardVideo video={video3} reproduzVideo={reproduzVideo} />
            <CardVideo video={video4} reproduzVideo={reproduzVideo} />
            <CardVideo video={video5} reproduzVideo={reproduzVideo} />
            <CardVideo video={video6} reproduzVideo={reproduzVideo} />
            <CardVideo video={video7} reproduzVideo={reproduzVideo} />
            <CardVideo video={video8} reproduzVideo={reproduzVideo} />
          </PainelDeVideos>
        </Main>

        <Footer>
          <H4>Oi! Eu moro no footer!</H4>
        </Footer>
      </ContainerStyled>
    </div>
  );
}
