import React from "react";
import InfosUsuario from "../InfosUsuario/InfosUsuario";
import {BoxPaginaPrincipal, H4, BoxImagemPrincipal} from "./Styled";


function CardVideo(props) {
  const usuario = {
    nome: "Dog na floresta",
    foto: "https://picsum.photos/id/1025/150/100",
  };   

  return (
    <div>
      <BoxPaginaPrincipal onClick={props.reproduzVideo}>
        <BoxImagemPrincipal src={props.video.imagem} alt="" />
        <H4>Titulo:{props.video.titulo}</H4>
        <InfosUsuario usuario={usuario} />
      </BoxPaginaPrincipal>
    </div>
  );
}
export default CardVideo;
