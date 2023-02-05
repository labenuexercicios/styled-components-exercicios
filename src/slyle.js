import styled from "styled-components"
import CardVideo from "./Componentes/CardVideo"



export const Header = styled.header`
background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`


export const Main = styled.main`
min-height: 80%;
  display: flex;

`

export const Menu = styled.nav`
 flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;

`
export const CardDeVideo = styled.div`
display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;

`