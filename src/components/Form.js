import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { faArrowAltCircleUp, faMapMarker, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../images/get-in-touch-section/profile.png';
import plane from '../images/get-in-touch-section/plane.png';
import phone from '../images/get-in-touch-section/phone.png';

export default function Form(props) {
    const { register, formState: { errors, isSubmitSuccessful}, handleSubmit, reset } = useForm();
    const { t } = useTranslation();

    useEffect(() => {
        if( isSubmitSuccessful ) reset()
    })

    return (
        <>
            <div id="contactSection"></div>
            <div id="contact" className="get-in-touch-section">
                <div className="one-click-top d-none d-md-block" onClick={e => props.smootScroll(e, props.hash)}>
                    <FontAwesomeIcon className={'click-top color-bgprimary'} icon={faArrowAltCircleUp} />
                </div>
                <div className="container get-in-touch-section-container d-flex justify-content-center align-items-center flex-column">
                    <div className="col-md-12 get-in-touch-title">
                        <h2 className="section-title">{t('form.sectionTitle')}</h2>
                    </div>
                    <div className="container form-list-container d-flex justify-content-center align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6 form-section">
                            <div className="col-md-12 form-section-title">
                                <div className="form-section-title-bg">
                                    <img src={profile} />
                                </div>
                                <h3>{t('form.mind')}</h3>
                                <p>{t('form.form_email')}<a className="form-mailto" href="mailto:name@domain.com"> email</a>
                                </p>
                                <p className="contact-point">
                                    <FontAwesomeIcon className={'color-bgprimary'} icon={faMapMarker} /> we are here
                                </p>
                            </div>
                            <div className="col-md-12 form-div">
                                <p className={'text-white'}>{!!errors}</p>
                                <form id={'form'} onSubmit={handleSubmit(props.onValidate)} noValidate={true}>
                                    <div className="form-group-top d-flex flex-column flex-lg-row">
                                        <div className="col-lg-6 form-group form-field-first d-flex justify-content-center align-items-center text-center">
                                            <input type="text"
                                                   placeholder={(errors && errors.firstName) ? t('form.error.name') : t('form.placeholder.firstName')}
                                                   className={`${(errors && errors.firstName) ? 'invalid-field' : ''} form-control form-field`}
                                                   {...register("firstName", { required: true })} />
                                        </div>
                                        <div
                                            className="col-lg-6 form-group form-field-second d-flex justify-content-center align-items-center text-center">
                                            <input type="email"
                                                   placeholder={(errors && errors.email) ? t('form.error.email') : t('form.placeholder.email')}
                                                   className={`${(errors && errors.email) ? 'invalid-field' : ''} form-control form-field`}
                                                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
                                            <input id="website"
                                                   {...register("website")} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group d-flex justify-content-center align-items-center text-center">
                                        <input type="text"
                                               placeholder={t('form.placeholder.subject')}
                                               className="form-field"
                                               {...register("subject")} />
                                    </div>
                                    <div className="col-md-12 form-group d-flex justify-content-center align-items-center text-center">
                                        <textarea className={`${(errors && errors.message) ? 'invalid-field' : ''} form-field`}
                                                  placeholder={(errors && errors.message) ? t('form.error.message') : t('form.placeholder.message')}
                                                  {...register("message", { required: true })} />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <input type="checkbox"
                                               style={{cursor: "pointer"}}
                                               id="privacyAcceptance"
                                               {...register("privacyAcceptance", { required: true })} />
                                        <label style={{marginBottom: 0, cursor: "pointer"}}
                                               onClick={() => props.handleDialog()}
                                               className={`${(errors && errors.privacyAcceptance) ? 'color-primary' : ''} text-white text-12`}
                                               htmlFor="privacyAcceptance">&nbsp;&nbsp;Check me out*</label>
                                    </div>
                                    <br/>
                                    <div className="col-md-12 form-group d-flex justify-content-center align-items-center text-center">
                                        <button type="submit"
                                                id="sendMessage"
                                                className="theme-btn subtheme-btn">
                                            <FontAwesomeIcon icon={faPaperPlane} /> {t('form.sendLabel')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-6 form-header-img">
                            <img className="w-100" src={plane} />
                            <div className="form-header-img-bg">
                                <img className="w-100" src={phone} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}