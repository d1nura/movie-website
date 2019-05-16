import { useState, useEffect } from "react";

export const useHttp = url => {
  let [data, setData] = useState([]);
  const apikey = "api_key=ead55bd575a94d055e5af19545cf3da3";
  const constUrl = "https://api.themoviedb.org/3/";

  useEffect(() => {
    console.log(constUrl + url + apikey);
    fetch(constUrl + url + apikey)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [url]);

  return [data];
};
