import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'; import './style.css'
import './style.css'
const SingleCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={7}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="container"
            >
                <SwiperSlide>
                    <div>h3</div>
                    <br></br>
                    <div>h4</div>
                    <div>h4</div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <SwiperSlide>Slide 10</SwiperSlide>
            </Swiper>

        </>
    )
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default SingleCarousel
