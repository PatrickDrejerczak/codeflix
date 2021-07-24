import React from 'react'
import './style.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SingleCarousel from './SingleCarousel';

const Carousels = ({ popularMovies, popularTV, trending, actionMovies}) => {
    return (
        <>
            <h2>Trending</h2>
            <SingleCarousel key={"trending"} trending={trending} />
            <br></br>
            <h2>Movie</h2>
            <SingleCarousel key={"movie"} popularMovies={popularMovies} />
            <br></br>


            <h2>TV Shows</h2>
            <SingleCarousel key={"tv"} popularTV={popularTV} />
            <br></br>


            <h2>Action</h2>
            <SingleCarousel key={"action"} actionMovies={actionMovies}/>
            <br></br>
            <SingleCarousel />
        </>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default Carousels
