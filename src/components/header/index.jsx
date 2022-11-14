import { useContext } from "react";
import { NewsContext } from "../../context/newsContext";
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

const Header = ({ data }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { news, setNews } = useContext(NewsContext);

  const filter = (event) => {
    const filterNews = data.filter(
      (element) => element.type === event.target.value
    );

    if (event.target.value == "all") {
      setNews(data);
    } else {
      setNews(filterNews);
    }
  };

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
          <select onChange={filter}>
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
