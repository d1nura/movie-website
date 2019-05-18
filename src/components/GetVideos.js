import React from "react";
import { useHttp } from "../hooks/useHttp";

function GetVideos(props) {
  let [data, load] = useHttp(`movie/${props.id}/videos?`);

  const setVidoes = () => {
    let key = data.results.slice(0, 1)[0].key;
    console.log(`https://www.youtube.com/embed/${key}`);
    const content = (
      <iframe title="trailer" src={`https://www.youtube.com/embed/${key}`} />
    );
    return content;
  };

  let returnVid =
    data && load === false ? setVidoes() : <p>loading video...</p>;

  return returnVid;
}

export default GetVideos;
