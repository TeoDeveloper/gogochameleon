import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/LanguageSelect.css';
import './styles/Header.css'
import './styles/About.css'
import './styles/Button.css'
import './styles/Skills.css'
import './styles/Gallery.css'
import './styles/Review.css'
import './styles/Form.css'
import './styles/Cookie.css'
import './index.css';
import "swiper/components/navigation/";
import "swiper/swiper.scss";
import './styles/App.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'


import './i18n'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('GoGoChameleon')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
