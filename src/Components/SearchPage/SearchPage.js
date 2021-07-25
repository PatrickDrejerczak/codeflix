import React from "react";
import { useEffect, useState } from "react";

const SearchPage = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <div>
      <h1>SearchResult</h1>
      <p>{searchResult}</p>
    </div>
  );
};

export default SearchPage;
