import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'; import './style.css'
import './style.css'
const SingleCarousel = ({ popularMovies, popularTV, trending, actionMovies, adventureMovies, comedyMovies, setModalShow,setMovie }) => {
    const handleSlideClicked = (object) => {
        console.log(object)
        setMovie(object)
        setModalShow(true)
    }
    console.log(popularTV);
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerGroup={5}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="container single_carousel"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,

                    },
                    // when window width is >= 640px
                    // when window width is >= 480px
                    240: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    540: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    600: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    // when window width is >= 640px
                    900: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                }}
            >
                {trending ? trending.map((show) => {
                    return (
                            <SwiperSlide onClick={() => {handleSlideClicked(show)}} key="1">
                                {show.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                                {show.media_type == "tv" ? <h5>{show.name}</h5> : <h5>{show.title}</h5>}

                            </SwiperSlide>
                )
                }) : ""}
                {popularMovies ? popularMovies.map((movie) => {

                    return <SwiperSlide onClick={() => {handleSlideClicked(movie)}} key="2">
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                        <h5>{movie.title}</h5>

                    </SwiperSlide>
                }) : ""}

                {popularTV ? popularTV.map((tv) => {
                    return <SwiperSlide onClick={() => {handleSlideClicked(tv)}} key="3">
                        {tv.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                        <h5>{tv.name}</h5>
                    </SwiperSlide>
                }) : ""}



                {actionMovies ? actionMovies.map((movie) => {
                    return <SwiperSlide onClick={() => {handleSlideClicked(movie)}} key="4">
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : ""}

                {comedyMovies ? comedyMovies.map((movie) => {
                    return <SwiperSlide onClick={() => {handleSlideClicked(movie)}} key="5">
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : ""}

                {adventureMovies ? adventureMovies.map((movie) => {
                    return <SwiperSlide onClick={() => {handleSlideClicked(movie)}} key="6">
                        {movie.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img> : <img src={`https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/40042/preview_40042.jpg`}></img>}

                        <h5>{movie.title}</h5>
                    </SwiperSlide>
                }) : ""}
            </Swiper>

        </>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default SingleCarousel
