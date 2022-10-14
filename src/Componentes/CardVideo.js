import styled from "styled-components";

const CardVideoMae = styled.div`
  height: 200px;
  width: 150px;
  display: flex;
  border: 3px solid black;
  text-align:center;
`;

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardVideoMae className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </CardVideoMae>
  );
}

export default CardVideo;
