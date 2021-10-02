import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import mixitup from "mixitup";
import { SRLWrapper } from "simple-react-lightbox";

import img1 from '../images/portfolio/1.jpg';
import img2 from '../images/portfolio/2.jpg';
import img3 from '../images/portfolio/3.jpg';
import img4 from '../images/portfolio/4.jpg';
import img5 from '../images/portfolio/5.jpg';
import img6 from '../images/portfolio/6.jpg';

const images = [
    {id: 0, imageName: img1, classes: 'mix web print'},
    {id: 1, imageName: img2, classes: 'mix web code'},
    {id: 2, imageName: img3, classes: 'mix web'},
    {id: 3, imageName: img4, classes: 'mix print code'},
    {id: 4, imageName: img5, classes: 'mix print'},
    {id: 5, imageName: img6, classes: 'mix code'},
]

class Gallery extends Component {

    renderGallery = image => {
        return (
            <div key={image.id} className={`${image.classes} col-lg-4 col-md-6 col-sm-6 col-12 work-list-ard-section`}>
                <div className="work-sample-section">
                    <a href={image.imageName}>
                        <img src={image.imageName} alt={image.classes}/>
                    </a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <div id="workSection"></div>
                <div id="works" className="work-section">
                    <div className="container work-section-container">
                        <div className="col-md-12 work-title">
                            <h2 className="section-title"
                                dangerouslySetInnerHTML={{__html: 'Gallery'}}/>
                            <div className="work-title-section-bg">
                            </div>
                        </div>
                        <div className="container work-samples-container">
                            <div className="col-md-12 work-list-controls-section">
                                <ul className="work-list-controls d-flex justify-content-center align-items-center flex-row">
                                    <TagButton tag={'all'} name={'all'}/>
                                    <TagButton tag={'.web'} name={'web'}/>
                                    <TagButton tag={'.print'} name={'print'}/>
                                    <TagButton tag={'.code'} name={'code'}/>
                                </ul>
                            </div>
                            <SRLWrapper>
                                <div id="work-list" className="container work-list-container d-flex flex-row flex-wrap">
                                    {images.map(image => this.renderGallery(image))}
                                </div>
                            </SRLWrapper>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        mixitup('#work-list', {
            selectors: {
                control: '[data-mixitup-control]'
            }
        });
    }
}

const TagButton = ({name, tag}) => {
    return (
        <li className={`work-list-control-filter`}>
            <div className="work-filter"  data-mixitup-control={true} data-filter={tag}>{name}</div>
        </li>
    )
}

export default withTranslation()(Gallery);
