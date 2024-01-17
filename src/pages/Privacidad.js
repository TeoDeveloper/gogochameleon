import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../styles/Navbar.css";
import SimplifyNavbar from "../components/SimplifyNavbar";

class Privacidad extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <SimplifyNavbar />
        <div className="container">
          <div className="text-white"
          dangerouslySetInnerHTML={{__html: t('privacyPolicy.text')}}></div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Privacidad);
