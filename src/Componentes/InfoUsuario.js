import React from "react";
import img from "./img/pngwing.com.png"

export function InfoUsuario(props){
    return(
        <div className="usuario">
            <img className="video-img" src={img}></img>
            <span>{props.usuario}</span>
        </div>
    )
}