import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import '../styles/Navbar.css'
import logoGGC from '../images/gogochameleon-logo.svg';
import LanguageSelect from "./languageSelect/LanguageSelect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import $ from "jquery";

class Navbar extends Component {
    state = {
        isOpen: false,
        navItem: ['aboutSection', 'skillsSection', 'experienceSection', 'workSection', 'reviewsSection', 'contactSection']
    };

    openMenu = () => this.setState({isOpen: !this.state.isOpen});

    renderItem = ( itemHash, idx, translate ) => {
        return (
            <li key={idx} className="nav-item">
                <a className="nav-link text-white hover-primary"
                   href={`#${itemHash}`}
                   onClick={ e => this.props.smootScroll(e, `#${itemHash}`) }
                   dangerouslySetInnerHTML={{__html: translate(`menu.${itemHash}`)}}/>
            </li>
        );
    }

    render(){
        const { isOpen, navItem } = this.state;
        const { t } = this.props;
        return(
            <>
                <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile bg-dark">
                    <div className="navbar-container container d-flex justify-content-between align-items-center flex-wrap">
                        <div className="nav-mobile-structure d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <button className={`navbar-icon ${isOpen ? 'open' : ''}`}
                                        onClick={this.openMenu}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarNav"
                                        aria-controls="navbarNav"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="navbar-brand">
                                <div className="navbar-brand-logo">
                                    <img src={logoGGC} width="40" alt="logo"/>
                                    {/*<p className="d-none d-lg-block montserrat text-16 color-bgprimary fw800"
                                       dangerouslySetInnerHTML={{__html: 'GoGoChameleon'}}/>*/}
                                </div>
                                </div>
                            </div>

                        </div>
                        <div className="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                            <ul className="navbar-nav menu-navbar-nav quicksand text-15">
                                {navItem.map((value, index) => this.renderItem(value, index, t))}
                            </ul>
                        </div>
                        <div>
                            <a className='d-none d-lg-block text-decoration-none text-18 text-white linkedin-icon'
                               style={{marginLeft: '10px'}}
                               target='_blank' href='https://www.linkedin.com/in/matteomarinodev/'
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                        <LanguageSelect/>
                    </div>
                </nav>
            </>
        );
    }
    componentDidMount() {
        const that = this;
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
            that.setState({isOpen: !that.state.isOpen});
        });
    }
}

export default withTranslation()(Navbar);
