import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import Dialog from "./Dialog";

class GDPRDialog extends Component {

    render() {
        const { t } = this.props;
        return (
            <Dialog closeIcon
                    title={t('GDPR.gdprPrivacy')}
                    openDialog={this.props.handleDialog}>
                    <span className="text-12"
                          dangerouslySetInnerHTML={{__html: t('GDPR.privacy')}}>
                    </span>
            </Dialog>
        )
    }
}

export default withTranslation()(GDPRDialog);
