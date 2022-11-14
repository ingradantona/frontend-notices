import styled from "styled-components";

export const Main = styled.main`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  & > h2 {
    font-size: 50px;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.grey0};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 20px;
      font-family: "Poppins", sans-serif;
      color: ${(props) => props.theme.colors.grey0};
    }
  }

  & > p {
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      color: ${(props) => props.theme.colors.grey0};
      line-height: 24px;
      text-align: justify;
    }
`;
