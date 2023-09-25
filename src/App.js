import React from "react";
// import "./styles.css";
import Header from "./Componentes/Header/Header";
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import GlobalStyle from "./GlobalStyle";


export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <div className="tela-inteira">
 
        <Header/>

        <Main/>
        
        <Footer/>
      </div>
    </div>
  );
}