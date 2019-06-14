import React, { useContext } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "../scss/HeroContent.scss";
import { SelectImgUrl } from "./SelectImgUrl";
import GenreSelector from "./GenreSelector";
import MovieDetailsSelector from "./MovieDetailsSelector";
import { PageContext } from "../components/PageContext";
import MovieDetailsPage from "./MovieDetailsPage";

function HeroComponent() {
  let getContext = useContext(PageContext);

  const returnData = () => {
    let d = getContext.results.slice(0, 1)[0];
    let imgUrl = SelectImgUrl("w1280/" + d.backdrop_path);

    const content = (
      <Router>
        <div id="hero">
          <div id="heroPic" style={imgUrl} />
          <div id="heroContent">
            <div className="togetherTop">
              <span id="releasedYear">
                {[...d.release_date].slice(0, 4)}
                <span id="genre">
                  <GenreSelector id={d.genre_ids} />
                </span>
              </span>

              <div id="vote">
                <p>
                  <sub id="voteAvg">{d.vote_average}</sub>
                </p>
                <p>
                  <sup>
                    <span>/</span>10
                  </sup>
                </p>
              </div>
            </div>

            <h1>
              {d.title}{" "}
              <span id="runtime">
                <MovieDetailsSelector getId={d.id} setDetails="runtime" />
              </span>
            </h1>
            <Link to={{ pathname: "/" + d.id }}>
              <p id="watchTrailer">
                <i className="fas fa-play-circle" />
                Read More
              </p>
            </Link>
          </div>
          <Route path={"/:id"} component={MovieDetailsPage} />
        </div>
      </Router>
    );
    return content;
  };

  return returnData();
}

export default HeroComponent;
