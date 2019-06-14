import React, { useState } from "react";
import "../../scss/Search.scss";
import { useHttp } from "../../hooks/useHttp";
import SearchBox from "./SearchBox";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import MovieDetailsPage from "../../components/MovieDetailsPage";

function Search() {
  let [watchVal, setWatchVal] = useState();
  let [data, load] = useHttp("search/movie?", `&query=${watchVal}`);

  const getEnter = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      console.log("enter");
    }
  };

  const clearSearchVal = e => {
    e.target.closest(".SearchTo").querySelector(".Search").value = "";
    setWatchVal();
  };

  const getSearchVal = () => {
    return (
      <Router>
        <div className="SearchTo">
          <input
            className="Search"
            placeholder="Search"
            onChange={e => {
              if (e.target.value !== "") setWatchVal(e.target.value);
              if (e.target.value === "") setWatchVal();
              console.log(e.target.value);
            }}
            onKeyUp={e => {
              if (e.target.value === "") setWatchVal();
            }}
            onKeyDown={getEnter}
            type="text"
          />

          <div className="searchResults">
            {data.results.slice(0, 5).map((i, l) => {
              return (
                <Link
                  onClick={clearSearchVal}
                  key={l}
                  to={{ pathname: "/" + i.id }}
                >
                  <SearchBox key={l} name={i.original_title} />
                </Link>
              );
            })}
          </div>
        </div>

        <Route path={"/:id"} component={MovieDetailsPage} />
      </Router>
    );
  };

  return data && load === false ? getSearchVal() : <p>Loading...</p>;
}

export default Search;
