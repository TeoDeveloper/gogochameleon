import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SkillCard extends Component {

    render() {
        const {icon, title, description} = this.props.skill;
        return (
            <>
                <div className="col-md-4 col-sm-6 col-12 skills-card">
                    <div className="skills-card-img-section background-two color-bgprimary">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <h3 className="skills-card-title">{title}</h3>
                    <p>{description}</p>
                </div>
            </>
        );
    }
}

export default SkillCard;
