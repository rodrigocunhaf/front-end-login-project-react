import React from 'react';
import ReactDOM from 'react-dom';
import style from "./Footer.module.css";
import logo from "../../assets/images/icons/user-logo.png"

const Footer = (  ) => {

    const jsx = <React.Fragment>
                        <div className={style.container}>
                            <img src={logo} className={style.logoImage} alt='logo project'/>
                            <h2 className={style.title}>Login Project</h2>
                        </div>
                </React.Fragment>

    return ReactDOM.createPortal(jsx, document.getElementById('footer'));
};

export default Footer;