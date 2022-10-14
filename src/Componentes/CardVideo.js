import styled from "styled-components";
import {BoxPaginaPrincipal, Imagem, Titulo4} from "./CardVideoStyle.js"



function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <Titulo4>{props.titulo}</Titulo4>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
