import React from "react";
import { useHttp } from "../hooks/useHttp";

function MovieDetailsSelector(props) {
  let [data, load] = useHttp("movie/299534?");

  const movieDetails = () => {
    let content = <span>jsjfsdjfg</span>;
    return content;
  };

  const getDetails =
    data && load === false ? movieDetails() : <p>`loading ${props}...`</p>;
  return getDetails;
}

export default MovieDetailsSelector;
