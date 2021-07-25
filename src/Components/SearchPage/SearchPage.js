import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  console.log(useParams());
  const { keyword } = useParams();
  console.log(keyword);
  let [searchData, setSearchData] = useState({});

  useEffect(() => {
    const getData = async () => {
      let url;
      if (keyword) {
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=a789c89d7c354c64afc320506517b71f`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a789c89d7c354c64afc320506517b71f`;
      }

      const data = await fetch(url);
      const result = await data.json();
      setSearchData(result);
    };
    getData();
  }, [keyword]);
  console.log(searchData);
  return (
    <div>
      {searchData.articles
        ? searchData.articles?.map((e) => {
            return (
              <div>
                <h1>{e.title}</h1>
                <h1>{e.author}</h1>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default SearchPage;
