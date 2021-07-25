import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/index.js";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";
import './style.css'
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
  const [modalShow, setModalShow] = useState(false);
  const [movie, setMovie] = useState({});
  const [clipID, setClipID] = useState("");
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

  useEffect(async () => {
    //get comedy movies
    let url;
    if (movie.name) {
      url = `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=${myKey}&language=en-US`
    }
    else {
      url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${myKey}&language=en-US`
    }
    try {
      let result = await getData(url);
      let results = result.results;
      if (results != undefined) {
        let id = results[0].key
        setClipID(id);
      }
    }
    catch (error) {
      console.log(error)
    }

  }, [movie]);

  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        contentClassName="modal-background"
      >
        <Modal.Body>
          <div className="pd">
            <YoutubeEmbed width="700" height="480" embedId={`${clipID}`} />
            {movie ? <>
              {(movie.name) ? <h2>{movie.name}</h2> : <h2>{movie.title}</h2>}
              <p>{movie.overview}</p>
            </> : ""}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {movie ? <>
            <h6 style={{position: "absolute", left: "10px"}}>MovieDB Rating: {movie.vote_average}</h6>
            {(movie.name) ? <Link as={Link} to={`tv/${movie.id}`}>
              <Button variant="danger"> View Detail </Button>
            </Link> : <Link as={Link} to={`movie/${movie.id}`}>
              <Button variant="danger"> View Detail </Button>
            </Link>}
          </> : ""}

        </Modal.Footer>
      </Modal>
      <Header />
      <SearchBar />
      <Carousels
        popularMovies={popularMovies}
        popularTV={popularTV}
        trending={trending}
        actionMovies={actionMovies}
        adventureMovies={adventureMovies}
        comedyMovies={comedyMovies}
        setModalShow={setModalShow}
        setMovie={setMovie}
      />
      <Footer />
    </>
  );
};

export default HomePage;
