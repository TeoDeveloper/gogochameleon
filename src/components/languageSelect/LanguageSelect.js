import React, { Component } from 'react';
import i18n from "i18next";
import { connect } from 'react-redux';


class LanguageSelect extends Component {

    changeLanguage = e => i18n.changeLanguage(e.target.value.toLowerCase());

    renderLang = (value, idx) => {
        return(
            <option key={idx} value={value}
                    dangerouslySetInnerHTML={{__html: value}}/>
        )
    }
    render(){
        const { langList } = this.props;
        return (
            <>
                <select className="country_select" onChange={ e => this.changeLanguage(e) }>
                    { langList.map( (value, index) => this.renderLang(value, index) ) }
                </select>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        langList: state.multiLang.languageList
    }
}

export default connect(mapStateToProps)(LanguageSelect)

