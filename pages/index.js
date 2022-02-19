import { Fragment } from "react";
import TileContainer from "../components/TileContainer/TileContainer";
import Search from "../components/Search/Search";

export default function Home(props) {
  return (
    <Fragment>
      <Search />
      <TileContainer {...props} />
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
