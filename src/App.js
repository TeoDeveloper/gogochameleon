import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import $ from 'jquery'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import logoGGC from './images/gogochameleon-logo.svg';
import SimpleReactLightbox from 'simple-react-lightbox'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/skillsSection/Skills";
import BrandExperience from "./components/BrandExperience";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import UnderConstruction from "./components/UnderConstruction";
import Cookie from "./components/Cookie";
import GDPRDialog from "./components/GDPRDialog";

let body = $("body");
class App extends Component {

    constructor() {
        super();

        this.state = {
            underConstructionMode: false,
            thankYouName: '',
            overlayStatus: false,
            GDPRDialogOpen: false,
        }
    }

    handleDialogStatus = () => {
        if(this.state.GDPRDialogOpen) {
            body.removeClass("overflow-hidden");
        } else {
            body.addClass("overflow-hidden");
        }
        this.setState({GDPRDialogOpen: !this.state.GDPRDialogOpen});
    }

    onSubmit = ({firstName}, e) => {
        e.preventDefault();
        const message = $('#form').serialize();
        $.ajax({
            url: "https://formspree.io/f/xoqporbb",
            method: "POST",
            data: {
                message: message
            },
            dataType: "json"
        });
        this.setState({
            overlayStatus: !this.state.overlayStatus,
            thankYouName: firstName.toUpperCase(),
        });
        body.addClass("overflow-hidden");
        setTimeout(
            function() {
                body.removeClass("overflow-hidden");
                this.setState({
                    overlayStatus: !this.state.overlayStatus,
                    thankYouName: ''
                });
            }.bind(this),
            3000
        );
    }

    goTo = (e, hash) => {
        if (hash) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ($(hash).offset().top) - (($(window).width() <= 992) ? 30 : 80)
            }, 800, function() {
            });
        }
    }

    render(){
        const { t } = this.props;
        return(
            <>
                {this.state.GDPRDialogOpen ? <GDPRDialog handleDialog={this.handleDialogStatus}/> : ''}
                { this.state.underConstructionMode ?
                    <UnderConstruction/> :
                    <>
                        { this.state.overlayStatus ?
                            <div className={`overlay w-100 h-100`}>
                                <div className="wrapper">
                                    <div className="get-in-touch-section d-flex vh-100">
                                        <div className="container get-in-touch-section-container text-center p-5 d-flex justify-content-center align-items-center flex-column">
                                            <FontAwesomeIcon className={'send-success color-bgprimary'} icon={faPaperPlane} />
                                            <p className="text-white fw700">{t('overlay_email.thank_you')} {this.state.thankYouName}!<br/>{t('overlay_email.message_sent')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                        }
                        <Navbar smootScroll={this.goTo}/>
                        <div id="top"></div>
                        <div className="wrapper">
                            <Header description={'digital agency'}/>
                            <About/>
                            <Skills displayModes={'skills'}/>
                            <Skills displayModes={'works'}
                                    smootScroll={this.goTo}/>
                            <SimpleReactLightbox>
                                <Gallery/>
                            </SimpleReactLightbox>
                            {/*<Review/>
                            */}
                            <BrandExperience/>
                            <Map smootScroll={this.goTo}
                                 hash={'#header'}/>
                            <Cookie handleDialog={this.handleDialogStatus}/>
                            <div className="footer-section">
                                <div className="container footer-container">
                                    <p className="text-14 fw600 color-primary montserrat">
                                        <span dangerouslySetInnerHTML={{__html: 'Proyecto de '}}/>
                                        <img className="logo" src={logoGGC} width="20" alt={'logo_eye'}/>
                                        <span dangerouslySetInnerHTML={{__html: ' GOGOCHAMELEON SL'}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </>
        );
    }
    componentDidMount() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 20) {
                $('#navbar').addClass('header-scrolled');
            } else {
                $('#navbar').removeClass('header-scrolled');
            }
        });
    }
}

export default withTranslation()(App)
