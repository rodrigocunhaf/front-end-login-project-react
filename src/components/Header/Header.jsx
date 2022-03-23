import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from "./Header.module.css";
import logo from "../../assets/images/icons/user-logo.png"
import Navigation from '../Navigation/Navigation';
import { AuthContext } from '../../store/AuthContext';


const Header = ( ) => {

    const context = useContext(AuthContext);

    const jsx = <React.Fragment>
                    <div className={style.container}>
                        <div className={style.box}>
                            <div className={style.containerTitleImage}>
                                <img src={logo} className={style.logoImage} alt="logo project"/>
                                <h1 className={style.title}>
                                    Login Project
                                </h1>
                            </div>
                            { context.isLogged === true && <Navigation/>}
                        </div>
                    </div>
                </React.Fragment>

    return ReactDOM.createPortal(jsx, document.getElementById('header'));
};

export default Header;


