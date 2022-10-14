import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

const MainStyled = styled.main`
  min-height: 80%;
  display: flex;
`;

const NavStyled = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

export default { HeaderStyled, MainStyled, NavStyled };
