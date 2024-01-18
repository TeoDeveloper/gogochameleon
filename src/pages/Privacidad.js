import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../styles/Navbar.css";
import SimplifyNavbar from "../components/SimplifyNavbar";
import logoGGC from "../images/gogochameleon-logo.svg";

class Privacidad extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div>
          <SimplifyNavbar />
          <div className="container">
            <span
              dangerouslySetInnerHTML={{ __html: t("GDPR.gdprPrivacyWhite") }}
            ></span>
            <br/>
            <br/>
            <div
              className="text-white"
              dangerouslySetInnerHTML={{ __html: t("privacyPolicy.text") }}
            ></div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="footer-section">
          <div className="container footer-container">
            <p className="text-12 fw600 color-primary montserrat">
              <span dangerouslySetInnerHTML={{ __html: "Proyecto de " }} />
              <img className="logo" src={logoGGC} width="20" alt={"logo_eye"} />
              <span
                dangerouslySetInnerHTML={{
                  __html: " GOGOCHAMELEON SL © 2021",
                }}
              />
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(Privacidad);
