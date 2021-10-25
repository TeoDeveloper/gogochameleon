import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { faArrowAltCircleUp, faMapMarker, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../images/get-in-touch-section/profile.png';
import {useForm} from "react-hook-form";

export default function Map(props) {
    const { register, formState: { errors, isSubmitSuccessful}, handleSubmit, reset } = useForm();
    const { t } = useTranslation();

    useEffect(() => {
        if( isSubmitSuccessful ) reset();
    })

    return (
        <>
            <div id="contactSection"></div>
            <div id="contact" className="get-in-touch-section">
                <div className="one-click-top d-none d-md-block"
                     onClick={e => props.smootScroll(e, props.hash)}>
                    <FontAwesomeIcon className={'click-top color-bgprimary'} icon={faArrowAltCircleUp} />
                </div>
                <div className="container get-in-touch-section-container d-flex justify-content-center align-items-center flex-column">
                    <div className="col-md-12 get-in-touch-title">
                        <h2 className="section-title"
                            dangerouslySetInnerHTML={{__html: t(`form.sectionTitle`)}}/>
                    </div>
                    <div className='form-section-title d-block text-left col-12 mt-5'>
                        <h3 dangerouslySetInnerHTML={{__html: t(`form.mind`)}}/>
                    </div>
                    <div className="container form-list-container d-block d-lg-flex" style={{padding: 0}}>
                        <div className="col-12 col-lg-6 form-div">
                            <div className='form-section-title'>
                                <p className="contact-point mb-3">
                                    <span className="d-block d-lg-none mb-3">
                                        <FontAwesomeIcon className={'color-bgprimary'} icon={faMapMarker} />
                                        <span dangerouslySetInnerHTML={{__html: t(`contact.address`)}}/>
                                    </span>
                                    {/*<FontAwesomeIcon className={'color-bgprimary'} icon={faPhone} />&nbsp;
                                    <a className="text-white hover-primary"
                                       href="tel:+12354569874"
                                       dangerouslySetInnerHTML={{__html: t(`contact.phone`)}}
                                    />&nbsp;&nbsp;&nbsp;*/}
                                    <span className='d-none d-lg-block'>
                                        <span dangerouslySetInnerHTML={{__html: t(`form.form_email`)}}/><a className="form-mailto" href="mailto:gogochameleonsl@gmail.com">email</a>
                                        <span dangerouslySetInnerHTML={{__html: t(`form.send-form`)}}/>
                                    </span>
                                    <span className='d-block d-lg-none'>
                                    <span className="d-block d-md-inline mt-2 mt-md-0">
                                        <FontAwesomeIcon className={'color-bgprimary'} icon={faPaperPlane} />&nbsp;
                                        <a href="mailto:abc@example.com"
                                           className="text-white hover-primary"
                                           target={"_blank"}
                                           rel="noreferrer"
                                           dangerouslySetInnerHTML={{__html: t(`contact.mail`)}}
                                        />
                                    </span></span><br className='d-block d-lg-none'/>
                                </p>
                            </div>
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
                                           className={`${(errors && errors.privacyAcceptance) ? 'color-primary' : ''} text-white text-12`}
                                           htmlFor="privacyAcceptance">
                                        <span dangerouslySetInnerHTML={{__html: t(`contact.checkPolicy`)}}/>
                                        <span className='hover-primary' style={{textDecoration: 'underline'}} onClick={() => props.handleDialog()}
                                              dangerouslySetInnerHTML={{__html: t(`contact.policy`)}}/>
                                        <span dangerouslySetInnerHTML={{__html: '*'}}/>
                                    </label>
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
                        <div className="d-none d-lg-block col-12 col-lg-6 form-div pl-lg-5">
                            <div className="col-md-12 form-section-title">
                                <div className="form-section-title-bg">
                                    <img src={profile} alt="form-section-title-bg" />
                                </div>
                                <p className="contact-point">
                                    <FontAwesomeIcon className={'color-bgprimary'} icon={faMapMarker} />
                                    <span dangerouslySetInnerHTML={{__html: t(`contact.address`)}}/>
                                </p>
                            </div>
                            <div className="col-md-12 mt-3" style={{padding: 0}}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236380.8751558968!2d-15.661235027802087!3d27.959770022106177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40855504bf07c1%3A0x2ec916c8a5acdb16!2sGran%20Canaria!5e0!3m2!1sit!2ses!4v1635183541441!5m2!1sit!2ses"
                                    width={'100%'}
                                    title={"map of maspalomas"}
                                    height={"350"}
                                    style={{border:0}}
                                    lazy={"lazy"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
