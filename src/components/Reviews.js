import React, { useContext } from "react";
import "../scss/Reviews.scss";
import { Context } from "./useContext";
import { useHttp } from "../hooks/useHttp";

function Reviews() {
  let i = useContext(Context);
  let [data, load] = useHttp(`movie/${i.id}/reviews?`);
  //console.log(data);
  const setReviews = () => {
    return (
      <div className="Reviews">
        <h2>Reviews</h2>
        {data.results.length > 0 ? (
          data.results.slice(0, 4).map((i, l) => {
            return (
              <div key={l} id="review">
                <h3>-{i.author}</h3>
                <p>{i.content}</p>
              </div>
            );
          })
        ) : (
          <h3 style={{ marginTop: "4vh", color: "yellow" }}>No Reviews Yet.</h3>
        )}
      </div>
    );
  };

  return data && load === false ? setReviews() : <p>loading reviews...</p>;
}

export default Reviews;
