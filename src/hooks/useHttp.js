import { useState, useEffect } from "react";

export const useHttp = url => {
  let [data, setData] = useState(null);
  let [load, setLoad] = useState(false);
  const apikey = "api_key=ead55bd575a94d055e5af19545cf3da3";
  const constUrl = "https://api.themoviedb.org/3/";

  useEffect(() => {
    fetch(constUrl + url + apikey)
      .then(res => res.json(), { mode: "cors" })
      .then(data => {
        setLoad(false);
        setData(data);
        console.log("rendering...");
      })
      .catch(err => console.log(err));
  }, [url]);

  return [data, load];
};
