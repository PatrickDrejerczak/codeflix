import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousels from "../../Components/Carousels/Carousels";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";
import Intro from "../../Components/Intro/Intro"
import "./style.css";
const myKey = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [trending, setTrending] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [movie, setMovie] = useState({});
  const [clipID, setClipID] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const getData = async (url) => {
    let result = await fetch(url);
    let data = await result.json();
    return data.results;
  };
  const [randomMovie, setRandomMovie]=useState({});

  useEffect(() => {
    let urlCollection = [
      {
        setPopularMovies:
          "https://api.themoviedb.org/3/movie/popular?api_key=" +
          `${myKey}` +
          "&language=en-US&page=1",
      },
      {
        setPopularTV:
          "https://api.themoviedb.org/3/tv/popular?api_key=" +
          `${myKey}` +
          "&language=en-US&page=1",
      },
      {
        setTrending:
          "https://api.themoviedb.org/3/trending/all/week?api_key=" +
          `${myKey}` +
          "&language=en-US&page=1",
      },
      {
        setActionMovies:
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
          `${myKey}` +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28",
      },
      {
        setAdventureMovies:
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
          `${myKey}` +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=12",
      },

      {
        setComedyMovies:
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
          `${myKey}` +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35",
      },
    ];
    urlCollection.map(async (url) => {
      let moviesList = await getData(Object.values(url)[0]);
      console.log(moviesList);
      if (Object.keys(url)[0] === "setPopularMovies") {
        console.log("hahah");
        setPopularMovies(moviesList);
      }
      if (Object.keys(url)[0] === "setPopularTV") {
        setPopularTV(moviesList);
      }
      if (Object.keys(url)[0] === "setTrending") {
        setRandomMovie(moviesList[Math.floor(Math.random()*moviesList.length)]);
        setTrending(moviesList);
      }
      if (Object.keys(url)[0] === "setActionMovies") {
        setActionMovies(moviesList);
      }
      if (Object.keys(url)[0] === "setAdventureMovies") {
        setAdventureMovies(moviesList);
      }
      if (Object.keys(url)[0] === "setComedyMovies") {
        setComedyMovies(moviesList);
      }
    });
  }, []);

  useEffect(() => {
    //get comedy movies
    let url;
    if (movie.name) {
      url = `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=${myKey}&language=en-US`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${myKey}&language=en-US`;
    }
    try {
      async function fetchData() {
        let results = await getData(url);
        console.log(results)
  
        if (results !== undefined) {
          let id = results[0].key;
          console.log(id)
          setClipID(id);
        }
      }
      fetchData();
     
    } catch (error) {
      console.log(error);
    }
  }, [movie]);
  const handleFavorite = () => {
    setFavoriteList([...favoriteList, movie]);
  };
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favoriteList));
  }, [favoriteList]);

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
            {movie ? (
              <>
                {movie.name ? <h2>{movie.name}</h2> : <h2>{movie.title}</h2>}
                <p>{movie.overview}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {movie ? (
            <>
              <h6 style={{ position: "absolute", left: "10px" }}>
                MovieDB Rating: {movie.vote_average}
              </h6>
              {movie.name ? (
                <>
                  <Link as={Link} to={`tv/${movie.id}`}>
                    <Button variant="danger"> View Detail </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link as={Link} to={`movie/${movie.id}`}>
                    <Button variant="danger"> View Detail </Button>
                  </Link>
                </>
              )}
              <Button onClick={() => handleFavorite()}>Add to favorite</Button>
            </>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
      <Header />
      <Intro movie={randomMovie}/>
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
