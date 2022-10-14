import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import { Busca, Header, Lista, Main } from "./styles";

export default function App() {
  const card1 = {
    titulo: "Vídeo 1",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };


  return (
    <div>
      <div className="tela-inteira">
        <Header>
          <h1>LabeTube</h1>
          <Busca type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <main>
          <nav className="menu-vertical">
            <Lista>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </Lista>
          </nav>

          <Main className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </Main>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
