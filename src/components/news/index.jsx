import { CardNews, MainNews } from "./styles";

const News = ({ news }) => {
  return (
    <MainNews>
      <ul>
        {news.length ? (
          news.map((element) => {
            return (
                <CardNews key={element.id}>
                    <img src={element.image}/>
                    <div>
                        <h2>{element.title.slice(0,40)}...</h2>
                        <div>
                            <span>Escrito por: {element.author}</span>
                            <span>{element.date.split(" ")[0]}</span>
                        </div>
                        <p>{
                            element.description.slice(0,120)
                        }...</p>
                    </div>
                </CardNews>
            )
          })
        ) : (
          <>
          </>
        )}
      </ul>
    </MainNews>
  );
};

export default News;
