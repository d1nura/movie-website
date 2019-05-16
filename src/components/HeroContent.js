import React from "react";
import { useHttp } from "../hooks/useHttp";

function HeroComponent() {
  //let [data, setData] = useState(null);

  let [data] = useHttp("movie/550?");

  console.log(data);
  const content = (
    <div>
      <h1>{data.original_title}</h1>
    </div>
  );

  return content;
}

export default HeroComponent;
