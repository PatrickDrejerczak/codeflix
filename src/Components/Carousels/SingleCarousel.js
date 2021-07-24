import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'; import './style.css'
import './style.css'
const SingleCarousel = ({ popularMovies, popularTV, trending, actionMovies, adventureMovies, comedyMovies }) => {

    console.log(popularTV);
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="container"
            >
                {trending ? trending.map((show) => {
                    return <SwiperSlide>
                        {show.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        {show.media_type == "tv" ? <h5>{show.name}</h5> : <h5>{show.title}</h5>}

                    </SwiperSlide>
                }) : <h3>Loading</h3>}
                {popularMovies ? popularMovies.map((movie) => {

                    return <SwiperSlide>
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        <h5>{movie.title}</h5>

                    </SwiperSlide>
                }) : <h3>Loading</h3>}

                {popularTV ? popularTV.map((tv) => {
                    return <SwiperSlide>
                        {tv.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        <h5>{tv.name}</h5>
                    </SwiperSlide>
                }) : <h3>Loading</h3>}



                {actionMovies ? actionMovies.map((movie) => {
                    return <SwiperSlide>
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : <h3>Loading</h3>}

                {comedyMovies ? comedyMovies.map((movie) => {
                    return <SwiperSlide>
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : <h3>Loading</h3>}

                {adventureMovies ? adventureMovies.map((movie) => {
                    return <SwiperSlide>
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}
                        
                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : <h3>Loading</h3>}
            </Swiper>

        </>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default SingleCarousel
