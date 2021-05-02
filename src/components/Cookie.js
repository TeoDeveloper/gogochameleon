import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

class Cookie extends Component {

    state = {
        showCookie: true,
        showCookieSettings: false,
    }

    closeCookie = () => this.setState({showCookie: !this.state.showCookie})

    handleCookieSettings = () => this.setState({showCookieSettings: !this.state.showCookieSettings})

    saveCookieSettings = () => {
        this.setState({
            showCookieSettings: !this.state.showCookieSettings,
            showCookie: !this.state.showCookie,
        })
    }

    render() {
        return (
            <>
                {this.state.showCookieSettings ?
                    <div className='cookie-settings-container d-flex align-items-center justify-content-center'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className="text-14 fw600">Cookie Settings</h5>
                                <div className="form-check d-flex align-items-start">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>
                                        <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                            <span className='fw600'>Necessary Cookies</span><br/>
                                            These cookies enable core functionality such as security, network management, and accessibility.<br/>
                                            These cookies can’t be switched off.
                                        </label>
                                </div>
                                <div className="form-check d-flex align-items-start">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <span className='fw600'>Analytics Cookies</span><br/>
                                            These cookies help us better understand how visitors interact with our website and help us discover errors.
                                        </label>
                                </div>
                                <span className="badge badge-pill badge-primary" onClick={ () => this.saveCookieSettings() }>Save</span>
                            </div>
                        </div>
                    </div> : ''
                }
                {this.state.showCookie ?
                    <div className='cookie-container'>
                        <div className="card cookie d-inline-block">
                            <div className="card-body">
                                <div className='container'>
                                    <FontAwesomeIcon className={'icon-cookie'} icon={faCookieBite}/>
                                    <span className='close-cookie text-18 fw900 quicksand' onClick={ () => this.closeCookie() }>X</span>
                                    <h5 className="text-14 fw600">Cookie use</h5>
                                    <p className="card-text text-12">We use cookies to ensure a smooth browsing experience. By accepting, you agree the use of cookies. Learn More</p>
                                    <span className="badge badge-pill" onClick={ () => this.closeCookie() }>Accept all</span>
                                    <span className="badge badge-pill" onClick={ () => this.handleCookieSettings() }>Settings</span>
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
