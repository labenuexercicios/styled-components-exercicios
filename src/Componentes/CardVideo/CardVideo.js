import { BoxPaginaPrincipal } from "./style";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
