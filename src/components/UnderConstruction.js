import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import Header from "./Header";

class UnderConstruction extends Component {

    render() {
        return (
            <>
                <Header description={'under construction'}/>
                <div className="about-me-details text-white text-center">
                    <p>Our team is working hard<br/><span className="highlight-text">to be online asap</span></p>
                </div>
            </>
        )
    }
}

export default withTranslation()(UnderConstruction);
