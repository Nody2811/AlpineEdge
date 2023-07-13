import React from 'react'
import Main from '../../components/Main'
import styles from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import testimonials from './testimonialsData';
import StarsRating from "react-star-rate";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const stringToRate = (_str) => {
    const newStr = _str.split("/");
    return parseFloat(newStr[0]) / 2;
}

const TestimonialsSection = () => {
  return (
    <div className={styles.testimonialSec}>
        <Main 
            className={styles.testimonialMain}
            subtitle='Testimonials'
            title='Our Clients Say'
            align='center'
            isDark={true}
        />
        <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
        >
            {testimonials.map((item, i) => (
                <SwiperSlide key={i} className={styles.slide}>
                   <p>{item.quote}</p>
                    <div className={styles.rate}>
                        <StarsRating
                            value={stringToRate(item.rate)}
                            disabled={true}
                        />
                        <p>{item.rate}</p>
                    </div>
                   <span></span>
                   <div className={styles.person}>
                    <h2>{item.name}</h2>
                    <p>{item.username}</p>
                   </div>
                </SwiperSlide>
            ))}   
        </Swiper>
    </div>
  )
}

export default TestimonialsSection