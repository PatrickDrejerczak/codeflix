import React from "react";
import { useEffect, useState } from "react";
const myKey = process.env.REACT_APP_API_KEY;

console.log(myKey);
const App = () => {
  const [title, setTitle] = useState("");
  let url = "https://api.themoviedb.org/3/movie/550?api_key=" + myKey;
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setTitle(result.title);
    };
    getData();
  }, []);
  return;
  <></>;
};

export default App;
