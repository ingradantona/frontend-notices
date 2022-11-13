import styled from "styled-components";
import bgLogo from "../../../public/assets/logo.png";

export const HeaderStyled = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  & > p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.grey0};
  }
`;

export const Logo = styled.div`
  position: relative;
  & > div {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-image: url(${bgLogo.src});
    background-size: cover;
  }
  & > h3 {
    position: absolute;
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.grey1};
    top: 16px;
    left: 16px;
  }
`;

export const ButtonTheme = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.grey0};
  background-color: ${(props) => props.theme.colors.emphasis0};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 3px 21px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;

  & > label {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.grey0};
  }

  & > select {
    width: 190px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.grey3};
    background-color: ${(props) => props.theme.colors.grey2};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${(props) => props.theme.colors.grey2};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 10px;
  font-weight: bold;
  font-size: 120px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.colors.grey0};
`;
