import React, { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import style from "./Button.module.css"

const Button = (props ) => {

    const context = useContext(AuthContext);

        return <button type='submit' disabled={props.isLocked} onClick={props.action}>{ props.buttonName}</button>

};

export default Button;
