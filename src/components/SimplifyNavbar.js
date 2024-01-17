import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logoGGC from "../images/gogochameleon-logo.svg";
import LanguageSelect from "./languageSelect/LanguageSelect";

class SimplifyNavbar extends Component {
  render() {
    return (
      <>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-header navbar-mobile bg-dark"
        >
          <div className="navbar-container container d-flex justify-content-between align-items-center flex-wrap">
            <div className="nav-mobile-structure d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="navbar-brand">
                  <div className="navbar-brand-logo">
                    <img src={logoGGC} width="40" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <LanguageSelect />
          </div>
        </nav>
      </>
    );
  }
}

export default withTranslation()(SimplifyNavbar);
