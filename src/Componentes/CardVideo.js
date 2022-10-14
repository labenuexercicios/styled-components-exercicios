import { EstiloVideos } from "./EstiloVideos";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <EstiloVideos onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </EstiloVideos>
  );
}

export default CardVideo;
