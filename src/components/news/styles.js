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
  width: 550px;
  height: 280px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.grey2};
  box-shadow: 5px 3px 21px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02);
    transition: 1s;
  }

  & > a > img {
    height: 240px;
    width: 285px;
    border-radius: 10px;
    box-shadow: 5px 3px 21px 0px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    cursor: pointer;
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

  @media screen and (max-width: 900px) {
    & > div {
      & > h2 {
        font-size: 25px;
      }

      & > p {
        font-size: 15px;
        line-height: 18px;
      }
    }
  }

  @media screen and (max-width: 650px) {
    & > a > img {
      width: 180px;
    }
    & > div {
      & > h2 {
        font-size: 22px;
      }

      & > p {
        font-size: 13px;
        line-height: 16px;
      }
    }
  }
`;
