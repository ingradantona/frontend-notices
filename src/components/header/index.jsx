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
  return (
    <>
      <HeaderStyled>
        <DivLogo>
          <Logo>
            <div></div>
            <h3>ID</h3>
          </Logo>
          <p>Bem vindo Ingra D'Antona!</p>
          <ButtonTheme>Dark</ButtonTheme>
        </DivLogo>
        <FormSearch>
          <label>Sobre o que você quer ler hoje?</label>
          <select>
            <option value="all">
              Tudo um pouco...
            </option>
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
