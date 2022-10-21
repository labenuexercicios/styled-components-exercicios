import styled from "styled-components";

export const Main1 = styled.main`
  min-height: 80%;
  display: flex;

  .painel-de-videos {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
  }

  .menu-vertical {
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
  }

  .botoes-meunu-vertical {
    list-style-type: none;
  }

  .box-pagina-principal {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
  }

  .box-pagina-principal > img {
    width: 100%;
    height: 200px;
  }
`;
