import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import Dialog from "./Dialog";
import $ from "jquery";

let body = $("body");
class Cookie extends Component {

    constructor() {
        super();

        this.state = {
            showCookie: !localStorage.getItem('value'),
            showCookieSettings: false,
        }
    }

    closeCookie = () => {
        localStorage.setItem('value', !this.state.showCookie);
        this.setState({showCookie: !this.state.showCookie});
    }

    handleCookieSettings = () => {
        if(this.state.showCookieSettings) {
            body.removeClass("overflow-hidden");
        } else {
            body.addClass("overflow-hidden");
        }
        this.setState({showCookieSettings: !this.state.showCookieSettings})
    }

    saveCookieSettings = () => {
        this.setState({
            showCookieSettings: !this.state.showCookieSettings,
            showCookie: !localStorage.getItem('value'),
        })
    }

    render() {
        const { t } = this.props;
        return (
            <>
                {this.state.showCookieSettings ?
                    <Dialog closeIcon
                            title={t('GDPR.gdprCookie')}
                            openDialog={this.handleCookieSettings}>
                    <span className="text-12"
                          dangerouslySetInnerHTML={{__html: t('GDPR.cookie')}}>
                    </span>
                    </Dialog> : ''
                }
                {this.state.showCookie ?
                    <div className='cookie-container'>
                        <div className="card cookie d-inline-block">
                            <div className="card-body">
                                <div className='container'>
                                    <FontAwesomeIcon className={'icon-cookie'} icon={faCookieBite}/>
                                    <span className='close-cookie text-18 fw900 quicksand'
                                          onClick={ () => this.closeCookie() }
                                          dangerouslySetInnerHTML={{__html: t('GDPR.x')}}/>
                                    <p className="card-text text-12">
                                        <span className='color-bgprimary montserrat fw600' dangerouslySetInnerHTML={{__html: 'GoGoChameleon.com'}}/>
                                        <span dangerouslySetInnerHTML={{__html: t('GDPR.respect')}}/>
                                        <span onClick={() => this.props.handleDialog()} style={{cursor: 'pointer'}} className='fw600'
                                              dangerouslySetInnerHTML={{__html: 'Privacy Policy'}}/>
                                        <span dangerouslySetInnerHTML={{__html: t('GDPR.and')}}/>
                                        <span onClick={ () => this.handleCookieSettings() } style={{cursor: 'pointer'}} className='fw600'
                                              dangerouslySetInnerHTML={{__html: 'Cookie Policy'}}/>
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
