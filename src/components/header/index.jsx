import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import {
  HeaderStyled,
  Logo,
  ButtonTheme,
  DivLogo,
  FormSearch,
  Line,
  Title,
} from "./style";

const Header = () => {
  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <>
      <HeaderStyled>
        <DivLogo>
          <Logo>
            <div></div>
            <h3>NN</h3>
          </Logo>
          <p>Bem vindo!</p>
          <ButtonTheme onClick={changeTheme}>{theme}</ButtonTheme>
        </DivLogo>
        <FormSearch>
          <label>Sobre o que você quer ler hoje?</label>
          <select>
            <option value="all">Tudo um pouco...</option>
            <option value="films">Filmes</option>
            <option value="music">Músicas</option>
            <option value="artists">Artistas</option>
          </select>
        </FormSearch>
      </HeaderStyled>
      <Line />
      <Title>NET NEWS</Title>
      <Line />
    </>
  );
};

export default Header;
