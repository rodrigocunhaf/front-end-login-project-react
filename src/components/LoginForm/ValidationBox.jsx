import React, { useEffect } from 'react';
import style from './ValidationBox.module.css';
import validator from 'validator';
import closeImage from "../../assets/images/icons/close.png";
import SucessImage  from "../../assets/images/icons/sucess.png";

const ValidationBox = ( props ) => {

    let jsx;

    if ( props.type === 'username') {
        jsx = <span >
                 {props.validUsername && <div className={!props.visible ? style.none : style.show}> <img className={style.image} src={SucessImage}/>validated email.</div>}
                { !props.validUsername && <div className={!props.visible ? style.none : style.show}><img className={style.image} src={closeImage}/>The email provided is invalid.</div>}
               </span>
    }
    else {
        jsx = <span >
                 {props.validPassword && <div className={!props.visible ? style.none : style.show}> <img className={style.image} src={SucessImage}/>validated password.</div>}
                { !props.validPassword && <div className={!props.visible ? style.none : style.show}><img className={style.image} src={closeImage}/>The password provided is invalid.</div>}
               </span>
    }

    return jsx
            
};

export default ValidationBox