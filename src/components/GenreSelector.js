import React, { useState } from "react";
import { useHttp } from "../hooks/useHttp";

function GenreSelector(props) {
  let [data, load] = useHttp("genre/movie/list?");
  let [gen, setGen] = useState([]);

  //console.log(data.results);
  const getGenre = () => {
    //if (data) {
    //console.log(props.id);
    let genArr = [];
    genArr.push(...props.id);
    console.log(data.genres);
    console.log(props.id);
    let l = 0;
    let t = true;
    while (t) {
      for (let i in data.genres) {
        //console.log(data.genres[0].id === props.id[0]);
        if (data.genres[i].id === props.id[l]) {
          console.log(data.genres[i].name, l);
          l++;
          t = false;
        }
        break;
      }
      console.log(t);
    }
    let content = (
      <div>
        <p>Genre{gen}</p>
      </div>
    );
    return content;
  };
  let getGenreData =
    data && load === false ? getGenre() : <p>loading genre...</p>;
  return getGenreData;
}

export default GenreSelector;
