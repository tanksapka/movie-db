import classes from "./SearchArea.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

export default function SearchArea(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  async function handleSubmit() {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: searchText }),
    });
    const data = await response.json();
    setSearchResults(data);
    setSearchText("");
  }

  return (
    <div className={classes.searchAreaContainer}>
      <SearchBar searchText={searchText} handleChange={handleChange} handleSubmit={handleSubmit} />
      {searchResults && <SearchResults {...searchResults} />}
    </div>
  );
}
