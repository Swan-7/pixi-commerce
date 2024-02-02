import React from 'react';
import Hero from './Hero';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchMove: true,
    
    };

    return (
        <Slider {...settings} className='mx-auto w-[97.5%] mb-32'>
            <Hero />
            <Hero />
            <Hero />
            <Hero />
        </Slider>
    );
};

export default Carousel;
