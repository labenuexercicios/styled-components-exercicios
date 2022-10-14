import React from "react";
import {H4, ImagemUsuario} from "./Styled";


function InfosUsuario(props){
    return(
        <div>
            <ImagemUsuario src={props.usuario.foto} alt="Imagem do usuario"/>
            <H4>Nome do Autor: {props.usuario.nome}</H4>
        </div>
        
    )
}
export default InfosUsuario