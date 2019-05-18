import React from "react";
import { useHttp } from "../hooks/useHttp";
import "../css/MovieSet/movieSet.scss";

function MovieSet() {
  let [data, load] = useHttp("movie/popular?");

  const setPopular = () => {
    let d = data.results.slice(1, data.results.length);
    console.log(d[0]);

    let content = (
      <div id="movieSet">
        <div id="imgGrid">
          {d.map((i, p) => {
            return (
              <div key={p} id="divImg">
                <img
                  id="movieImgID"
                  alt="movie posters"
                  src={`https://image.tmdb.org/t/p/w500/${
                    i.poster_path
                  }?api_key=ead55bd575a94d055e5af19545cf3da3`}
                />
                <p id="vAvg">{parseFloat(i.vote_average).toFixed(1)}</p>
                <p>{i.title}</p>

                <p id="date">{[...i.release_date].slice(0, 4)}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
    return content;
  };

  let popData = data && load === false ? setPopular() : <p>loading...</p>;
  return popData;
}

export default MovieSet;

/*<img
id="movieImgID"
alt="movie posters"
src={`https://image.tmdb.org/t/p/w500/${
  i.poster_path
}?api_key=ead55bd575a94d055e5af19545cf3da3`}
/>*/
