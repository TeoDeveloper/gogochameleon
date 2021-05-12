import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import Dialog from "./Dialog";

class GDPRDialog extends Component {

    render() {
        const { t } = this.props;
        return (
            <Dialog closeIcon
                    title={t('GDPR.gdprTitle')}
                    openDialog={this.props.handleDialog}>
                    <span className="text-12">
                        {t('GDPR.cookies')}<br/>
                        {t('GDPR.cookiesDescription')}<br/><br/>
                        {t('GDPR.ourCookies')}<br/>
                        {t('GDPR.purposes.line1')}<br/><br/>
                        {t('GDPR.purposes.line2')}<br/>
                        {t('GDPR.purposes.line3')}<br/>
                        {t('GDPR.purposes.line4')}<br/>
                        {t('GDPR.thirdParty.line1')}<br/>
                        {t('GDPR.thirdParty.line2')}<br/><br/>
                        {t('GDPR.managing.line1')}<br/>
                        {t('GDPR.managing.line2')}<br/><br/>
                        {t('GDPR.consent')}<br/><br/>
                        {t('GDPR.linkInfo')}<br/>
                        {t('GDPR.browserList.edgeIE.title')}<br/><br/>
                        {t('GDPR.browserList.edgeIE.description')}<br/><br/>
                        {t('GDPR.browserList.Chrome.title')}<br/>
                        {t('GDPR.browserList.Chrome.description')}<br/><br/>
                        {t('GDPR.browserList.Mozilla.title')}<br/>
                        {t('GDPR.browserList.Mozilla.description')}<br/><br/>
                        {t('GDPR.browserList.Safari.title')}<br/>
                        {t('GDPR.browserList.Safari.description')}<br/><br/>
                        {t('GDPR.moreInformation.description')}<br/><br/>
                        {t('GDPR.moreInformation.siteList.one')}<br/>
                        {t('GDPR.moreInformation.siteList.two')}<br/>
                        {t('GDPR.moreInformation.siteList.three')}<br/>
                        {t('GDPR.moreInformation.siteList.four')}<br/>
                        {t('GDPR.general.title')}<br/>
                        {t('GDPR.general.line1')}<br/><br/>
                        {t('GDPR.general.line1')}<br/>
                    </span>
            </Dialog>
        )
    }
}

export default withTranslation()(GDPRDialog);