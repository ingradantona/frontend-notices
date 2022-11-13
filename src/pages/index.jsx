import Header from "../components/header";
import News from "../components/news";

export default function Home({ news }) {
  return (
    <>
      <Header />
      <News news={news}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://noticesjsonserver.herokuapp.com/notices"
  );

  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
};
