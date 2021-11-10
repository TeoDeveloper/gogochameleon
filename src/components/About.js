import React  from 'react';
import { useTranslation } from 'react-i18next'
import { faMugHot, faCogs, faBed, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img_aboutme from '../images/img_aboutme.png';

export const About = () => {
    const { t } = useTranslation();
    const renderCard = card => {
        const {id, icon, number, description} = card;
        return (
            <div key={id} className="achievement-card color-bgprimary d-flex justify-content-center align-items-start flex-column">
                <div className="achievement-card-img-section">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="achievement-card-title color-bgprimary">
                    <h3 className="color-bgprimary" dangerouslySetInnerHTML={{__html: number}}/>
                    <p className="color-bgprimary" dangerouslySetInnerHTML={{__html: description}}/>
                </div>
            </div>
        );
    }


    const achievementCards = [
        {id: 0, number: '321', description: 'Coffee Drunk', icon: faMugHot},
        {id: 1, number: '1,281+', description: 'Powerful Emotions', icon: faCogs},
        {id: 2, number: '2,072', description: 'Lost Sleep Hours', icon: faBed},
        {id: 3, number: '10K+', description: 'Self-Satisfaction', icon: faHandPeace},
    ];

    return (
        <>
            <div id="aboutSection"></div>
            <div>
                <div className="container">
                    <div className="about-me-block">
                        <div className="about-me-details text-white text-center text-lg-left quicksand text-16 d-flex justify-content-center align-items-center flex-column flex-lg-row">
                            <img className="img-about" src={img_aboutme} alt={'img_aboutme'}/>
                            <div>
                                <p className='text-15'>
                                    {t("aboutme_details.part1")}
                                    <strong>{t("aboutme_details.digital_designer_from")}</strong>
                                    {t("aboutme_details.part2")}
                                    <span className='montserrat fw800 color-primary'
                                          dangerouslySetInnerHTML={{__html: 'GoGoChameleon'}}/>
                                    <span dangerouslySetInnerHTML={{__html: t("aboutme_details.part3")}}/><br/>
                                    <span dangerouslySetInnerHTML={{__html: t("aboutme_details.part4")}}/>
                                </p>
                                <p className="text-white text-12 d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <span className="color-primary poppins fw600"
                                          dangerouslySetInnerHTML={{__html: '|'}}/>
                                    <span>&nbsp;</span>
                                    <span dangerouslySetInnerHTML={{__html: t("aboutme_details.about_working")}}/>
                                    <a className='text-decoration-none text-18 text-white linkedin-icon'
                                       target='_blank' href='https://www.linkedin.com/in/matteomarinodev/'
                                       rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-me-achievement-section text-center d-flex justify-content-center align-items-start flex-wrap">
                {achievementCards.map(renderCard)}
            </div>
        </>
    )
}

export default About;
