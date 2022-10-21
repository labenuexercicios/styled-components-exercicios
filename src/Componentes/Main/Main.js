import React from "react";
import CardVideo from "../CardVideo/CardVideo"
import Nav from "../Nav/Nav";
import { Main1 } from "./style";

function Main() {

    const card1 = {
        titulo: "Título do vídeo",
        imagemDoVideo: "https://picsum.photos/400/400?a=1",
        textoAlternativo: "descrição da imagem"
      };

    return (
        <Main1>
        <Nav/>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Main1>
    )   
}

export default Main