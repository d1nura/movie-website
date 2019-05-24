import React from "react";
import { useHttp } from "../hooks/useHttp";
import { ConvertMins } from "./ConvertMins";

function MovieDetailsSelector(props) {
  let [data, load] = useHttp(`movie/${props.getId}?`);

  //const setTime = () => {};
  //console.log(data);
  const movieDetails = () => {
    // console.log(data[props.setDetails]);
    if (props.setDetails === "runtime") {
      let content = ConvertMins(data[props.setDetails]) + "h";
      return content;
    } else {
      let content = data[props.setDetails];
      return content;
    }
  };

  const getDetails =
    data && load === false ? movieDetails() : <p>`loading ...`</p>;
  return getDetails;
}

export default MovieDetailsSelector;
