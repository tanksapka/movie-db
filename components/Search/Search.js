import { useState } from "react";
import classes from "./Search.module.css";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit() {
    console.log(searchText);
  }

  return (
    <section className={classes.searchContainer}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter movie title..."
        autoComplete="false"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </section>
  );
}
