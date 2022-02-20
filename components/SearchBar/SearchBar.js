import classes from "./SearchBar.module.css";

export default function Search(props) {
  return (
    <section className={classes.searchContainer}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter movie title..."
        autoComplete="false"
        onChange={props.handleChange}
        value={props.searchText}
      />
      <button onClick={props.handleSubmit}>Search</button>
    </section>
  );
}
