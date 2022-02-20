import classes from "./TrendingMovies.module.css";
import TileContainer from "../TileContainer/TileContainer";

export default function TrendingMovies(props) {
  return (
    <div className={classes.trendingMoviesContainer}>
      <h2>Trending movies</h2>
      <TileContainer {...props} />
    </div>
  );
}
