import React, { useEffect, useState } from "react";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/index.js";
const myKey = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const getData = async (url) => {
    const data = await fetch(url);
    const result = await data.json();
    return await result;
  };
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [trending, setTrending] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  useEffect(async () => {
    //get popular movies list
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
      `${myKey}` +
      "&language=en-US&page=1";
    let result = await getData(url);
    let moviesList = result.results;
    setPopularMovies(moviesList);
  }, []);

  useEffect(async () => {
    //get tv list
    let url =
      "https://api.themoviedb.org/3/tv/popular?api_key=" +
      `${myKey}` +
      "&language=en-US&page=1";
    let result = await getData(url);
    let tvList = result.results;
    setPopularTV(tvList);
  }, []);

  useEffect(async () => {
    //get trending list
    let url =
      "https://api.themoviedb.org/3/trending/all/week?api_key=" +
      `${myKey}` +
      "&language=en-US&page=1";
    let result = await getData(url);
    let trendingList = result.results;
    setTrending(trendingList);
  }, []);

  useEffect(async () => {
    //get action movies
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      `${myKey}` +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28";
    let result = await getData(url);
    let actionList = result.results;
    setActionMovies(actionList);
  }, []);

  useEffect(async () => {
    //get adventure movies
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      `${myKey}` +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=12";
    let result = await getData(url);
    let adventureList = result.results;
    setAdventureMovies(adventureList);
  }, []);

  useEffect(async () => {
    //get comedy movies
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      `${myKey}` +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35";
    let result = await getData(url);
    let comedyList = result.results;
    setComedyMovies(comedyList);
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <Carousels
        popularMovies={popularMovies}
        popularTV={popularTV}
        trending={trending}
        actionMovies={actionMovies}
        adventureMovies={adventureMovies}
        comedyMovies={comedyMovies}
      />
      <Footer />
    </>
  );
};

export default HomePage;
