import React, { useContext } from "react";
import "../scss/Cast.scss";
import { useHttp } from "../hooks/useHttp";
import { Context } from "../components/useContext";
import facescan from "../assets/images/facescan.svg";

function Cast() {
  let c = useContext(Context);
  let [data, load] = useHttp(`movie/${c.id}/credits?`);
  ///console.log(data);
  const setCast = () => {
    return (
      <div className="Cast">
        <h2>Cast</h2>
        <div id="flexCast">
          {data.cast.slice(0, 8).map((i, l) => {
            return (
              <div key={l} id="castBox">
                {i.profile_path ? (
                  <img
                    alt="cast"
                    style={{ width: "5vw" }}
                    src={`https://image.tmdb.org/t/p/w200/${
                      i.profile_path
                    }?api_key=ead55bd575a94d055e5af19545cf3da3`}
                  />
                ) : (
                  <img
                    id="faceScan"
                    alt="face"
                    src={facescan}
                    style={{ width: "5vw", height: "7.5vw" }}
                  />
                )}
                <p>{i.name}</p>
                <p id="character">({i.character})</p>
              </div>
            );
          })}
        </div>
        <div className="Crew">
          <h2>Crew</h2>
          <div id="flexCast">
            {data.crew.slice(0, 4).map((i, l) => {
              return (
                <div key={l} id="castBox">
                  {i.profile_path ? (
                    <img
                      alt="crew"
                      style={{ width: "6vw" }}
                      src={`https://image.tmdb.org/t/p/w200/${
                        i.profile_path
                      }?api_key=ead55bd575a94d055e5af19545cf3da3`}
                    />
                  ) : (
                    <img
                      id="faceScan"
                      alt="face"
                      src={facescan}
                      style={{ width: "5vw", height: "9vw" }}
                    />
                  )}
                  <p>{i.name}</p>
                  <p id="job">({i.job})</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return data && load === false ? setCast() : <p>loading cast...</p>;
}

export default Cast;
