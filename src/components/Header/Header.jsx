import React from 'react';
import ReactDOM from 'react-dom';
import style from "./Header.module.css";
import logo from "../../assets/images/icons/user-logo.png"


const Header = (  ) => {

    const jsx = <React.Fragment>
                    <div className={style.container}>
                        <div className={style.box}>
                            <div className={style.containerTitleImage}>
                                <img src={logo} className={style.logoImage} alt="logo project"/>
                                <h1 className={style.title}>
                                    Login Project
                                </h1>
                            </div>
                        </div>
                    </div>
                </React.Fragment>

    return ReactDOM.createPortal(jsx, document.getElementById('header'));
};

export default Header;


