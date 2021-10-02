import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

class Cookie extends Component {

    constructor() {
        super();

        this.state = {
            showCookie: !localStorage.getItem('value'),
        }
    }

    closeCookie = () => {
        localStorage.setItem('value', !this.state.showCookie);
        this.setState({showCookie: !this.state.showCookie});
    }

    render() {
        const { t } = this.props;
        return (
            <>
                {this.state.showCookie ?
                    <div className='cookie-container'>
                        <div className="card cookie d-inline-block">
                            <div className="card-body">
                                <div className='container'>
                                    <FontAwesomeIcon className={'icon-cookie'} icon={faCookieBite}/>
                                    <span className='close-cookie text-18 fw900 quicksand'
                                          onClick={ () => this.closeCookie() }
                                          dangerouslySetInnerHTML={{__html: t('GDPR.x')}}/>
                                    <h5 className="text-14 fw600"
                                        dangerouslySetInnerHTML={{__html: t('GDPR.ourCookies')}}/>
                                    <p className="card-text text-12"
                                       dangerouslySetInnerHTML={{__html: t('GDPR.generalCookies')}}>
                                    </p>
                                    <span className="badge badge-pill"
                                          onClick={ () => this.closeCookie() }
                                          dangerouslySetInnerHTML={{__html: t('GDPR.ok')}}/>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }
            </>
        )
    }
}

export default withTranslation()(Cookie);
