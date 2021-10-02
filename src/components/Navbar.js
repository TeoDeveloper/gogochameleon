import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import '../styles/Navbar.css'
import logo from '../images/logo.svg';
import logoGGC from '../images/gogochameleon-logo.svg';
import LanguageSelect from "./languageSelect/LanguageSelect";

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
                                <span className="navbar-brand-logo">
                                    <img src={logoGGC} width="50" alt="logo"/>
                                    <p className="d-none d-lg-block montserrat text-16 color-bgprimary fw800"
                                       dangerouslySetInnerHTML={{__html: 'GoGoChameleon'}}/>
                                </span>
                                </div>
                            </div>

                        </div>
                        <div className="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                            <ul className="navbar-nav menu-navbar-nav quicksand text-15">
                                {navItem.map((value, index) => this.renderItem(value, index, t))}
                            </ul>
                        </div>
                        <LanguageSelect/>
                    </div>
                </nav>
            </>
        );
    }
}

export default withTranslation()(Navbar);
