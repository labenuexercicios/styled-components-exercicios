import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import { GlobalStyled, TelaInteira, Header, Main, MenuVertical, PainelDeVideos, Footer } from "./GlobalStyled";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
      <GlobalStyled />
      <div>
        <TelaInteira>
          <Header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
          </Header>

          <Main>
            <MenuVertical>
              <ul>
                <li className="botoes-meunu-vertical">Início</li>
                <li className="botoes-meunu-vertical">Em alta</li>
                <li className="botoes-meunu-vertical">Inscrições</li>
                <hr />
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
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
            <h4>Oi! Eu moro no Footer!</h4>
          </Footer>
        </TelaInteira>
      </div>
    </>
  );
}
