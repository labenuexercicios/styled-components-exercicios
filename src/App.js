import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import Todos from "./Componentes/DivStyled";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
        <Todos.HeaderStyled>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Todos.HeaderStyled>

        <Todos.MainStyled>
          <Todos.NavStyled>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </Todos.NavStyled>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Todos.MainStyled>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
