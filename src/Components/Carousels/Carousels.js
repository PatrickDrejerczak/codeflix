import React from 'react'
import './style.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import SingleCarousel from './SingleCarousel';

const Carousels = ({ popularMovies, popularTV, trending, actionMovies, adventureMovies, comedyMovies, setModalShow,setMovie}) => {
    return (
        <div className="background-black">
            <h2>Trending Now</h2>
            <SingleCarousel key={"trending"} trending={trending} setModalShow={setModalShow}
        setMovie={setMovie}/>
            <br></br>
            <h2 id={"movie"}>Movie</h2>
            <SingleCarousel key={"movie"} popularMovies={popularMovies} setModalShow={setModalShow} setMovie={setMovie}/>
            <br></br>


            <h2 id={"tv"}>TV Shows</h2>
            <SingleCarousel key={"tv"} popularTV={popularTV} setModalShow={setModalShow} setMovie={setMovie}/>
            <br></br>


            <h2 id={"action"}>Action</h2>
            <SingleCarousel key={"action"} actionMovies={actionMovies} setModalShow={setModalShow} setMovie={setMovie}/>
            <br></br>

            <h2 id={"adventure"}>Adventure</h2>
            <SingleCarousel key={"adventure"} adventureMovies={adventureMovies} setModalShow={setModalShow} setMovie={setMovie}/>
            <br></br>

            <h2 id={"comedy"}>Comedy</h2>
            <SingleCarousel key={"comedy"} comedyMovies={comedyMovies} setModalShow={setModalShow} setMovie={setMovie}/>
            <br></br>
        </div>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default Carousels