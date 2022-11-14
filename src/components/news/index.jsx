import { CardNews, MainNews } from "./styles";
import Link from "next/link";
import { useContext } from "react";
import { NewsContext } from "../../context/newsContext";

const News = () => {

  const { news } = useContext(NewsContext);
  const setNews = (event) => {
    window.localStorage.setItem("NetNews", event.target.id);
  };
  
  return (
    <MainNews>
      <ul>
        {news.length ? (
          news.map((element) => {
            return (
              <CardNews key={element.id}>
                <Link href={`/news`}>
                  <img src={element.image} onClick={setNews} id={element.id} />
                </Link>
                <div>
                  <h2>{element.title.slice(0, 30)}...</h2>
                  <div>
                    <span>Escrito por: {element.author}</span>
                    <span>{element.date.split(" ")[0]}</span>
                  </div>
                  <p>{element.description.slice(0, 100)}...</p>
                </div>
              </CardNews>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </MainNews>
  );
};

export default News;
