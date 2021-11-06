import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Button extends Component {

    renderIcon = iconType => {
        let icon;
        switch (iconType) {
            case 'send':
            default:
                icon = faPaperPlane;
        }
        return icon;
    }

    render() {
        const {description,
            href,
            iconType,
            cta = '! missing cta',
            type = 'button',
            onValidation,
            smootScroll,
            hash = '',
            action = ''} = this.props;
        return (
            <>
                {!!description ?
                    <div className="col-md-12 skills-section-footer quicksand text-18 fw700 text-center color-bgprimary">
                        <p dangerouslySetInnerHTML={{__html: description}}/>
                    </div> : '' }
                <button type={type}
                        className="col-md-12 header-btn-section about-me-section-btn text-center d-flex justify-content-center align-items-center"
                        onClick={onValidation ? () => onValidation() : e => smootScroll(e, hash, action)}>
                    <a href={href} className="theme-btn subtheme-btn">
                        {!!iconType ? <FontAwesomeIcon icon={this.renderIcon(iconType)} /> : ''} {cta}
                    </a>
                </button>
            </>
        )
    }
}

export default withTranslation()(Button);
