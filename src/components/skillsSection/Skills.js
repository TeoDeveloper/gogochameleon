import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import SkillCard from '../SkillCard'
import WorkCard from '../WorkCard'
import Button from "../Button";

class Skills extends Component {

    renderWorks = t => {
        return(
            <>
                <div id="experienceSection"></div>
                <div id="experience" className="experience-section">
                    <div className="container experience-section-container">
                        <div className="col-md-12 skills-title">
                            <h2 className="section-title">
                                <span className="lang-how-work"
                                      dangerouslySetInnerHTML={{__html: this.props.t("skillsSection.worksTitle")}}/><br/>

                            </h2>
                            <div className="experience-title-section-bg"></div>
                        </div>
                        <div className="container experience-cards-container d-flex justify-content-center align-items-center flex-row flex-wrap">
                            {this.props.works.map( work => <WorkCard key={work.id}
                                                                     work={work}/>)}
                        </div>
                    </div>
                    <Button description={t(`form.mind`)}
                            cta={t(`form.sectionTitle`)}
                            href={'#contactSection'}
                            smootScroll={this.props.smootScroll}
                            action={'contact button clicked'}
                            hash={'#contactSection'}/>
                </div>
            </>
        )
    }

    renderSkills = () => {
        return(
            <>
                <div id="skillsSection"></div>
                <div id="services" className="skills-section">
                    <div className="skills-section-bg"></div>
                    <div className="container skills-section-container">
                        <div className="col-md-12 skills-title">
                            <h2 className="section-title"
                                dangerouslySetInnerHTML={{__html: this.props.t("skillsSection.skillsTitle")}}/>
                            <div className="skills-title-section-bg"></div>
                        </div>
                        <div className="container skills-cards-container d-flex flex-row flex-wrap">
                            {this.props.skills.map( skill => <SkillCard key={skill.id}
                                                                        skill={skill}/> )}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    renderSection = (displayModes, t) => {
        switch (displayModes) {
            case 'skills':
                return this.renderSkills();
            case 'works':
            default:
                return this.renderWorks(t);
        }
    }

    render() {
        const { displayModes, t } = this.props;
        return (
            this.renderSection(displayModes, t)
        )
    }
}

const mapStateToProps = state => {
    return {
    skills: state.skillsSection.skills,
    works: state.skillsSection.works,
}
}

export default connect(mapStateToProps)(withTranslation()(Skills));
