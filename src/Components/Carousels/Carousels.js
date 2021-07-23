import React from 'react'
import './style.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SingleCarousel from './SingleCarousel';

const Carousels = () => {
    return (
        <>
        <h2>Movie</h2>
        <SingleCarousel />
        <br></br>
        <h2>TV Shows</h2>
        <SingleCarousel />
        <br></br>
        <h2>Documentaries</h2>

        <SingleCarousel />
        <br></br>
        <SingleCarousel />
        </>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default Carousels
