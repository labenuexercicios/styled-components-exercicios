import React from "react";
import { Header1 } from "./style";

function Header() {
    return (
        <Header1>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header1>
    )
}

export default Header