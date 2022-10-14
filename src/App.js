import React from "react";
import "./styles.css";
import {CardVideo} from "./componentes/CardVideo"
import styled from 'styled-components'

export default function App() {
  const titulo = "titulo do video";

const HeaderColor = styled.header`
    background-color: #4F0000;
    color: white;
    border: 3px solid white;
    `

const MainColor = styled.main`
    background-color: #1F1F1F;
    color: white;
    
`
const Navcolor = styled.nav`
    background-color: #484848;
`
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    
    <div>
      <div className="tela-inteira">
        <HeaderColor>
          <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
          </header>
        </HeaderColor>
        <MainColor>
          <main>
          <Navcolor>  
            <nav className="menu-vertical">
              <ul>
                <li className="botoes-meunu-vertical">Início</li>
                <li className="botoes-meunu-vertical">Em alta</li>
                <li className="botoes-meunu-vertical">Inscrições</li>
                <hr />
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
              </ul>
            </nav>
          </Navcolor>
          <section className="painel-de-videos">
            <CardVideo titulo="titulo-1" imagem = "https://picsum.photos/400/400?a=1" usuario = "usuario 1"/>
            <CardVideo titulo="titulo-2" imagem = "https://picsum.photos/400/400?a=2" usuario = "usuario 2"/>
            <CardVideo titulo="titulo-3" imagem = "https://picsum.photos/400/400?a=3" usuario = "usuario 3"/>
            <CardVideo titulo="titulo-4" imagem = "https://picsum.photos/400/400?a=4" usuario = "usuario 4"/>
            <CardVideo titulo="titulo-5" imagem = "https://picsum.photos/400/400?a=5" usuario = "usuario 5"/>
            <CardVideo titulo="titulo-6" imagem = "https://picsum.photos/400/400?a=6" usuario = "usuario 6"/>
            <CardVideo titulo="titulo-7" imagem = "https://picsum.photos/400/400?a=7" usuario = "usuario 7"/>
            <CardVideo titulo="titulo-8" imagem = "https://picsum.photos/400/400?a=8" usuario = "usuario 8"/>
          </section>
          </main>
        </MainColor>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
