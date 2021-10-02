import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { withTranslation } from 'react-i18next'
import SwiperCore, { Autoplay, Navigation } from "swiper";

import unieuro from '../images/brand-experience/unieuro.png';
import lm from '../images/brand-experience/lm.png';
import mrn from '../images/brand-experience/mrn.png';
import ici from '../images/brand-experience/ici.png';

import kv from '../images/brand-experience/kv.png';
import db from '../images/brand-experience/db.png';
import citroen from '../images/brand-experience/citroen.png';
import peugeot from '../images/brand-experience/peugeot.png';

import stba from '../images/brand-experience/stba.png';
import martini from '../images/brand-experience/martini.png';
import bacardi from '../images/brand-experience/bacardi.png';
import bombay from '../images/brand-experience/bombay.png';

const BrandExperience = () => {
    SwiperCore.use([Autoplay, Navigation]);
    const swiperOption = {
        autoHeight: true,
        loop: true,
        navigation: false,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        spaceBetween: 2,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 8,
            },
        }
    };

    return (
        <>
            <div id="reviewsSection"></div>
            <div id="reviews" className="reviews-section">
                <div className="container reviews-section-container">
                    <div className="col-md-12 reviews-title">
                        <h2 className="section-title"
                            dangerouslySetInnerHTML={{__html: 'Brand Experience'}}/>
                        <div className="reviews-title-section-bg">
                        </div>
                    </div>
                    <div className="container reviews-slider-container">
                        <div className="owl-carousel owl-theme reviews-carousel">
                            <Swiper
                                className="brand-carousel"
                                {...swiperOption}
                                style={{"--swiper-navigation-color": "#fff"}}
                            >
                                {[unieuro, lm, mrn, ici, kv, db, citroen, peugeot, stba, martini, bacardi, bombay ].map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <div className="single-brand d-flex justify-content-center align-items-center">
                                                <img src={single} alt="brand logo" width={90}/>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withTranslation()(BrandExperience);
