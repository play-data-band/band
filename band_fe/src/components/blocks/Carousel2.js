import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import {FreeMode, Pagination} from 'swiper/modules';

import classes from "../../styles/blocks/Carousel.module.css";
import piano from "../../asset/images/piano.jpeg";

export default function Carousel2(props) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {props.data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={classes.slideWrap}>
              <div className={classes.topSection}>
                <img src={piano} />
              </div>
              <div className={classes.bottomSection}>
                <p className={classes.bottomSectionTopText}>{item.desc.substring(0, 5)}</p>
                <p className={classes.bottomSectionBotText}>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
