import React, { Component, Children } from 'react';
import { withTranslation } from 'react-i18next'

class Dialog extends Component {

    render() {
        const {closeIcon = false, title = '', openDialog, children} = this.props;
        return (
            <>
                <div className='cookie-settings-container d-flex align-items-center justify-content-center flex-column'>
                    <div className='card' style={{maxWidth: '80%', maxHeight: '80%', position: 'relative'}}>
                        {title || closeIcon ?
                            <div className='text-18 font-weight-bold d-flex justify-content-between' style={{margin: '10px 30px 10px 20px'}}>
                                {title ? title : ''}
                                {closeIcon ? <span style={{cursor: "pointer"}} onClick={() => openDialog()}>X</span> : ''}
                            </div> : ''
                        }
                        <div className='card-body' style={{overflowY: 'scroll'}}>
                            {Children.map(children, child => child)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(Dialog);
