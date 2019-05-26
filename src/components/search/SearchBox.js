import React from "react";
import "../../scss/SearchBox.scss";

function SearchBox(props) {
  return (
    <div className="searchData">
      <p>{props.name}</p>
    </div>
  );
}

export default SearchBox;
