import Link from "next/link";
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
  ButtonBack,
} from "./style";

const HeaderNews = () => {
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
        <ButtonBack>
          <Link href={`/`}>Voltar</Link>
        </ButtonBack>
      </HeaderStyled>
      <Line />
    </>
  );
};

export default HeaderNews;
