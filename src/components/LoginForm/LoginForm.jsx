import React, { useEffect, useState } from "react";
import style from"./LoginForm.module.css";
import Button from "../../UI/Button/Button";
import validator from 'validator';
import ValidationBox from "./ValidationBox";


const LoginForm = ( props) => {
    
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername ] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword ] = useState(false);

    const [visibleUsername, setVisibleUsername] =   useState(false);
    const [visiblePassword, setVisiblePassword] =   useState(false);

    
    const setUsernameForm = ( event ) => {
        setUsername(event.target.value);
    };

    const setPasswordForm = ( event ) => {
        setPassword(event.target.value);
    };

    const onSubmitForm = (event ) => {
        event.preventDefault();
        console.log('submited')
    }

    const onBlurUsername = ( ) => {
        if ( username.length === 0){
            setTimeout ( () => {
                setVisibleUsername(true)
                setValidUsername(false);     
            },500);
        }
    }

    const onBlurPassword = ( ) => {
        if ( password.length < 8){
            setTimeout ( () => {
            setVisiblePassword(true)
            setValidPassword(false);
            },500);
        }
    }

    useEffect (() => {

        if (validator.isEmail(username) && !validator.contains(username, ' ')){
            setValidUsername(true);
            setVisibleUsername(true)

        } else if (!validator.isEmail(username) && username.length > 0){
            setValidUsername(false)
            setVisibleUsername(true)   
        }

        if (validator.contains(password, ' ') || password.length < 8 && password !== ''){
            setVisiblePassword(true)
            setValidPassword(false)
            
        } else if (!validator.contains(password, ' ') && password.length >= 8 ) {
            setVisiblePassword(true)
            setValidPassword(true)
        }

    },[username, password]);


    return ( 
                <section className={style.container}>
                    <form className={style.box} onSubmit={onSubmitForm}>
                        <div className={style.boxInput}>
                            <label 
                                className={`${style.inputBlock}`}>Email
                                    <input
                                        type={"text"}
                                         className={`${style.inputBlock} ${ validUsername === false && !validator.isEmail(username) && username.length > 0 && style.inputError}`}
                                         onBlur={onBlurUsername}
                                         onChange={setUsernameForm}
                                         autocomplete="off"
                                         value={username}
                                         />
                                        <ValidationBox visible={visibleUsername} validUsername={validUsername} type={'username'}/>
                            </label>
                            <label className={`${style.inputBlock}`}>Password
                                    <input
                                         type={"password"}
                                         className={`${style.inputBlock} ${ validPassword === false && password > 0 && style.inputError}`}
                                         onBlur={onBlurPassword}
                                         onChange={setPasswordForm}
                                         value={password}
                                         />
                                         <ValidationBox visible={visiblePassword} validPassword={validPassword} type={'password'}/>
                                         
                            </label>
                        </div>
                        <Button isLocked={validPassword === true && validUsername === true ? false : true}/>
                    </form>
                </section>)

};

export default LoginForm;