import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
//import styled from "styled-components";
import { HeaderMae } from "./Componentes/Header";
import { MainMae } from "./Componentes/Main";
import { NavMae } from "./Componentes/Nav";
// const HeaderMae = styled.header`
//   background-color: blueviolet;
//   color: black;
// `;

// const MainMae = styled.main`
//   background-color: gray;
//   color: yellowgreen;
// `;

// const NavMae = styled.nav`
//   background-color: blue;
//   color: green;
// `;

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
        <HeaderMae>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderMae>

        <MainMae>
          <NavMae className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </NavMae>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </MainMae>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
