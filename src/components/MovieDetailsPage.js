import React from "react";
import "../css/movieDetailsPage.scss";

function MovieDetailsPage({ match }) {
  console.log(match.params.id);
  let content = (
    <div id="m">
      <h1>Movie</h1>
      <h3>{match.params.id}</h3>
    </div>
  );
  return content;
}

export default MovieDetailsPage;
