import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/reviewer1.png';
import img2 from '../images/reviewer2.png';
import img3 from '../images/reviewer3.png';

const carouselSettings = {
    emulateTouch: true,
    infiniteLoop: true,
    autoPlay: true,
    interval: 15000,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
};

class Review extends Component {

    state = {
        isGrabbed: false,
        reviewers: [
            {
                id: 0,
                name: 'Jason Matthews',
                role: 'Managing Director at Company',
                quoteIcon: faQuoteLeft,
                iconStar: faStar,
                starNumber: 5,
                img: img1,
                review: 'Well, what can I say? The person who purchased this template by Codefest&trade; has excellent taste! You should purchase a copy for yourself too.'
            },
            {
                id: 1,
                name: 'Christopher Davis',
                role: 'Creative Director at Agency',
                quoteIcon: faQuoteLeft,
                iconStar: faStar,
                starNumber: 5,
                img: img2,
                review: 'Well, what can I say? The person who purchased this template by Codefest&trade; has excellent taste! You should purchase a copy for yourself too.'
            },
            {
                id: 2,
                name: 'Mark Hunderson',
                role: 'Product Developer at Business',
                quoteIcon: faQuoteLeft,
                iconStar: faStar,
                starNumber: 5,
                img: img3,
                review: 'Well, what can I say? The person who purchased this template by Codefest&trade; has excellent taste! You should purchase a copy for yourself too.'
            },
        ]
    }

    renderStars = (iconStar, starNumber) => {
        const stars = [];
        for (let i = 0; i < starNumber; i++) {
            stars.push( <FontAwesomeIcon key={i} icon={iconStar} /> );
        }
        return stars;
    }

    handleMouseStatus = e => {
        e.preventDefault();
        this.setState({isGrabbed: !this.state.isGrabbed});
    }

    renderReview = item => {
        const { id, name, role, quoteIcon, iconStar, starNumber, img, review } = item;
        return(
            <div key={id} className="item">
                <div className={`reviews-card-section ${this.state.isGrabbed ? 'grabbed' : ''}`}
                     onMouseDown={ e => this.handleMouseStatus(e) }
                     onMouseUp={ e => this.handleMouseStatus(e) }>
                    <div className="reviews-card d-flex justify-content-center align-items-center flex-column">
                        <div
                            className="reviews-card-top-card d-flex justify-content-center align-items-center flex-column">
                            <div className="reviews-card-img-quote">
                                <FontAwesomeIcon icon={quoteIcon} />
                            </div>
                            <div className="reviews-card-img-section">
                                <img src={img}/>
                            </div>
                            <div className="reviews-card-title">
                                <h3>{name}</h3>
                                <p className="text-white">{role}</p>
                            </div>
                        </div>
                        <div className="reviews-card-details-section">
                            <div className="dropdownArrow"></div>
                            <div className="mb-2 stars">
                                { this.renderStars(iconStar, starNumber) }
                            </div>
                            <p>{review}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { reviewers } = this.state;
        return (
            <>
                <div id="reviewsSection"></div>
                <div id="reviews" className="reviews-section">
                    <div className="container reviews-section-container">
                        <div className="col-md-12 reviews-title">
                            <h2 className="section-title">Dicono di me</h2>
                            <div className="reviews-title-section-bg">
                            </div>
                        </div>
                        <div className="container reviews-slider-container">
                            <div className="owl-carousel owl-theme reviews-carousel">
                                <Carousel {...carouselSettings} >
                                    { reviewers.map(this.renderReview) }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}


export default withTranslation()(Review);
