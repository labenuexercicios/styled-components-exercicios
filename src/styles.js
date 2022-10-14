import styled from "styled-components"

export const Busca = styled.input `
background-color: snow;
border-radius: 10px;
cursor: pointer;
`
export const Header = styled.header`
    display: block;
    font-size: 1em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
`
export const Lista = styled.nav`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
export const Main = styled.section`
flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 10px;
    row-gap: 10px;
    grid-column-gap: 10px;
    -webkit-column-gap: 10px;
    column-gap: 10px;
    margin: 10px;
    width: 100%;
    height: 200px;
    margin-left: 20px;
    margin-left: 20px;
`