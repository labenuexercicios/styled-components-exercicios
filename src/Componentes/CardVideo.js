import React from "react";
import { InfoUsuario } from "./InfoUsuario";
import styled from 'styled-components'

const TituloColor = styled.h4`
font-family: Roboto;
border: 1px solid white;
border-radius: 5px;
`
const ImagemColor = styled.img`
border: 1px solid white;
border-radius: 50px;
`
export function CardVideo(props){
        function reproduzVideo() {
            alert("O vídeo está sendo reproduzido");
        }
        console.log(props)
    return (
       
            <div className="box-pagina-principal" onClick={reproduzVideo}>

              <ImagemColor src={props.imagem} alt="" />


              <TituloColor>{props.titulo}</TituloColor>
              <InfoUsuario  usuario = {props.usuario} />
            </div>
    )
}