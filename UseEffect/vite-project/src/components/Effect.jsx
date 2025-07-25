import React, { useEffect, useState } from "react";

export default function Effect() {
  let [data, setData] = useState([]);

  useEffect(function() {
    async function callApi() {

      let resp = await fetch("https://api.tvmaze.com/search/shows?q=girls");


      let finaldata = await resp.json();
      console.log(finaldata, "data final");

      setData(finaldata);
    }
    callApi();
  }, []); //in this dependency array we can write states nd props

  //   api calling is done inside useEffect

  return (
    <div>
      Effect :
      <div>
        
          {data.map(function (item, index) {
            return <h1>{item.score}</h1>;
          })}
        
      </div>
    </div>
  );
}
