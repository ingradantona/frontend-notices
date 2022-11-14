import { Main } from "./styled";

const MainNews = ({ news }) => {
    return (
        <Main>
            <img src={news.image}/>
            <h2>{news.title}</h2>
            <div>
                <span>Escrito por: {news.author}</span>
                <span>{news.date.split(" ")[0]}</span>
            </div>
            <p>{news.description}</p>
        </Main>
    );
  };
  
  export default MainNews;