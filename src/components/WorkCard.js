import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WorkCard extends Component {

    render() {
        const {icon, title, type} = this.props.work;
        const { t } = this.props;
        return (
            <div className={`col-lg-6 col-md-12 experience-info-section d-flex justify-content-center align-items-center flex-column ${type}`}>
                <div className="col-md-12 experience-details-card d-flex justify-content-center align-items-start flex-row">
                    <div className="col-2 experience-details-card-icon-section">
                        <div className="experience-details-card-icon">
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    </div>
                    <div className="col-10 experience-details-card-content d-flex justify-content-start align-items-start flex-column">
                        <h3 dangerouslySetInnerHTML={{__html: title}}/>
                        <ul>
                            <li dangerouslySetInnerHTML={{__html: t(`worksSection.${type}`)}}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(WorkCard);
