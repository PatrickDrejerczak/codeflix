import React from "react";

const FavoritePage = () => {
  const storage = localStorage.getItem("favorite");
  const data = JSON.parse(storage);
  return (
    <ul>
      {data ? (
        data.map((el) => <li key={el.id}>{el.title}</li>)
      ) : (
        <h2>Please add favorite</h2>
      )}
    </ul>
  );
};

export default FavoritePage;
