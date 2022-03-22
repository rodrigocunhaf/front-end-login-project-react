import React from "react";
import style from "./Button.module.css"

const Button = (props ) => {

    const jsx = <div className={style.container}>
                    <button disabled={props.isLocked}>Login</button>
                </div>

    return jsx;
};

export default Button;
