import { Fragment } from "react";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";
import SearchArea from "../components/SearchArea/SearchArea";

export default function Home(props) {
  return (
    <Fragment>
      <SearchArea />
      <TrendingMovies {...props} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();

  return {
    props: data,
    revalidate: 10,
  };
}
