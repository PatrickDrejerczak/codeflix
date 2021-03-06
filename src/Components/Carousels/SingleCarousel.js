import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import image from "./notfound.jpeg";
import "./SingleCarousel.css";
const SingleCarousel = ({
  popularMovies,
  popularTV,
  trending,
  actionMovies,
  adventureMovies,
  comedyMovies,
  setModalShow,
  setMovie,
}) => {
  const handleSlideClicked = (object) => {
    console.log(object);
    setMovie(object);
    setModalShow(true);
  };
  console.log(popularTV);
  return (
    <>
      <Swiper
        spaceBetween={2}
        slidesPerGroup={6}
        slidesPerView={6}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="single_carousel"
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
          780: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          // when window width is >= 640px
          900: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
      >
        {trending
          ? trending.map((show) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(show);
                  }}
                  key={show.id}
                >
                  {show.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                      alt="should be sth"
                    ></img>
                  ) : (
                    <img
                      className={"image"}
                      src={image}
                      alt="should be sth"
                    ></img>
                  )}

                  {show.media_type === "tv" ? (
                    <h6>{show.name}</h6>
                  ) : (
                    <h6>{show.title}</h6>
                  )}
                </SwiperSlide>
              );
            })
          : ""}
        {popularMovies
          ? popularMovies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(movie);
                  }}
                  key={movie.id}
                >
                  {movie.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="sth"
                    ></img>
                  ) : (
                    <img className={"image"} src={image} alt="sth"></img>
                  )}

                  <h6>{movie.title}</h6>
                </SwiperSlide>
              );
            })
          : ""}

        {popularTV
          ? popularTV.map((tv) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(tv);
                  }}
                  key={tv.id}
                >
                  {tv.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
                      alt="sth"
                    ></img>
                  ) : (
                    <img className={"image"} src={image} alt="sth"></img>
                  )}

                  <h6>{tv.name}</h6>
                </SwiperSlide>
              );
            })
          : ""}

        {actionMovies
          ? actionMovies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(movie);
                  }}
                  key={movie.id}
                >
                  {movie.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="sth"
                    ></img>
                  ) : (
                    <img className={"image"} src={image} alt="sth"></img>
                  )}

                  <h6>{movie.title}</h6>
                </SwiperSlide>
              );
            })
          : ""}

        {comedyMovies
          ? comedyMovies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(movie);
                  }}
                  key={movie.id}
                >
                  {movie.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="sth"
                    ></img>
                  ) : (
                    <img className={"image"} src={image} alt="sth"></img>
                  )}

                  <h6>{movie.title}</h6>
                </SwiperSlide>
              );
            })
          : ""}

        {adventureMovies
          ? adventureMovies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    handleSlideClicked(movie);
                  }}
                  key={movie.id}
                >
                  {movie.backdrop_path ? (
                    <img
                      className={"image"}
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="sth"
                    ></img>
                  ) : (
                    <img className={"image"} src={image} alt="sth"></img>
                  )}

                  <h6>{movie.title}</h6>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </>
  );
};
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default SingleCarousel;
