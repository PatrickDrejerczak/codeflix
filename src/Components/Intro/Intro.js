import React from 'react'
import './style.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Link } from 'react-router-dom';
const Intro = ({ movie, setMovie, setModalShow }) => {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const playButtonHandle = () => {
        setMovie(movie)
        setModalShow(true)
    }
    return (
        <header className="banner"
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="banner__contents">
                {/**Tittle */}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button onClick={playButtonHandle} className="banner__button play"><PlayArrowIcon />Play</button>
                    <Link as={Link} to={`movie/${movie.id}`}>

                        <button className="banner__button info"><InfoOutlinedIcon fontSize="small" paddingRight={20} marginRight={100} /><div className="space"></div> More Information</button>
                    </Link>
                </div>
                {/**DIV > 2 BUTTONS */}

                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                {/*Description*/}
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Intro
