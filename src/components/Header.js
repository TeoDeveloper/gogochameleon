import React, { Component } from 'react';
import logo from '../images/logo.svg';
import logoEye from '../images/logoEye.svg';
import pupil from '../images/pupil.svg';

class Header extends Component {
    render() {
        const { description = '' } = this.props;
        return (
            <>
                <div id="header" className="header-section">
                    <div className="container header-container d-flex justify-content-center align-items-center flex-column">
                        <img className="d-block d-lg-none mx-auto" src={logo} alt={'logo'}/>
                        <div className="d-none d-lg-block logo-container">
                            <img className="logo" src={logoEye} width="250" alt={'logo_eye'}/>
                            <div id="eye">
                                <img src={pupil} width="22" alt={'logo_pupil'}/>
                            </div>
                        </div>
                        <div className="header-title text-center">
                            <h2 className="montserrat fw900 color-bgprimary">GoGoChameleon</h2>
                            <h1 className="montserrat fw800 text-uppercase text-white border-top">{description.toUpperCase()}</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        const EYES = {};
        let mouseY, elY, obj;
        EYES.stack = [];
        EYES.follow = function(eye) {
            let el1 = document.getElementById(eye);
            let el2 = el1.getElementsByTagName("IMG");
            el2 = el2[0];
            el2.centre = (el1.offsetWidth - el2.offsetWidth) / 2;
            el2.style.margin = (el2.centre - 10) + "px 0 0 " + (el2.centre + 8) + "px";
            el1.maxDist = 6 * el1.offsetWidth;
            EYES.stack.push([el1, el2]);
        };

        EYES.mousemove = function(e) {
            if (!EYES.stack.length) {
                return;
            }

            let mouseX = mouseY = 0;
            if (!e) e = window.event;
            if (e.pageX || e.pageY) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            } else if (e.clientX || e.clientY) {
                mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            for (let e = 0, l = EYES.stack.length; e < l; e++) {
                let el = EYES.stack[e];
                let elX = elY = 0;
                if (el[0].offsetParent) {
                    obj = el[0];
                    do {
                        elX += obj.offsetLeft;

                        elY += obj.offsetTop;
                    } while (!!(obj = obj.offsetParent));
                }

                el[0].centreX = elX + Math.round(el[0].offsetWidth / 2);
                el[0].centreY = elY + Math.round(el[0].offsetHeight / 2);
                let difX = mouseX - el[0].centreX;
                let difY = mouseY - el[0].centreY;
                let dTan = Math.atan2(difX, difY);
                let dist = Math.sqrt((difX * difX) + (difY * difY));
                dist = Math.sin((dist > el[0].maxDist ? 1 : dist / el[0].maxDist));
                let newX = el[1].centre + Math.round(Math.sin(dTan) * el[1].centre * dist);
                let newY = el[1].centre + Math.round(Math.cos(dTan) * el[1].centre * dist);
                el[1].style.margin = newY + "px 0 0 " + newX + "px";
            }
        };

        if (window.attachEvent) document.attachEvent("onmousemove", EYES.mousemove);
        else document.addEventListener("mousemove", EYES.mousemove, false);

        (function() {
            EYES.follow ('eye');
        })();
    }
}

export default Header;
