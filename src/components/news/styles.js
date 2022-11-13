import styled from "styled-components";

export const MainNews = styled.main`
  & ul {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const CardNews = styled.li`
  width: 600px;
  height: 280px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.grey2};
  box-shadow: 5px 3px 21px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(1.03);
    transition: 1s;
  }

  & > img {
    height: 240px;
    width: 285px;
    border-radius: 10px;
    box-shadow: 5px 3px 21px 0px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h2 {
      font-size: 32px;
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme.colors.grey0};
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > span {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        color: ${(props) => props.theme.colors.grey0};
      }
    }

    & > p {
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        color: ${(props) => props.theme.colors.grey0};
        line-height: 20px;
        text-align: justify;
    }
  }
`;
