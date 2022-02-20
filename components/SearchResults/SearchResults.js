import classes from "./SearchResults.module.css";
import TileContainer from "../TileContainer/TileContainer";

export default function SearchResults(props) {
  return (
    <div className={classes.searchResultsContainer}>
      <h2>
        Search results for <span>&quot;{props.expression}&quot;</span>
      </h2>
      <TileContainer
        items={props.results.map((item) => ({ ...item, fullTitle: `${item.title} ${item.description}` }))}
      />
    </div>
  );
}
