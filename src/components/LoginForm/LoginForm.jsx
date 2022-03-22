import React, { useEffect, useState } from "react";
import style from"./LoginForm.module.css";
import Button from "../../UI/Button/Button";
import validator from 'validator';
import ValidationBox from "./ValidationBox";


const LoginForm = ( props) => {
    
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername ] = useState(true);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword ] = useState(true);

    const [visibleUsername, setVisibleUsername] =   useState(false);
    const [visiblePassword, setVisiblePassword] =   useState(false);

    const [isLocked, setLocked] =  useState(true);
    
    const setUsernameForm = ( event ) => {
        setUsername(event.target.value);
        if (!validator.isEmail(username) ){
            setValidUsername(false);
        } else {
            setValidUsername(true);
        }
    };

    const setPasswordForm = ( event ) => {
        setPassword(event.target.value);
        if (event.target.value.length < 10 ){
            setValidPassword(false);
        } else {
            setValidPassword(true);
        }
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

        let timer;

        if ( !validUsername && !!username ){
            setVisibleUsername(true);
            setValidUsername(false);
            
        };

        if ( validUsername && validator.isEmail(username)){
            setVisibleUsername(true);
            setValidUsername(true);

            if (validPassword === validUsername && password !== ''){
                setLocked(false);
            };
        };
        
        if ( !validPassword && !!password ){
            if ( !validPassword == validUsername ){
                setLocked(true);
            };

        };

        if ( validPassword && password){
            setVisiblePassword(true)
            setValidPassword(true)
            if (validPassword === validUsername && password !== ''){
                setLocked(false);
            };

            if ( !validPassword == validUsername ){
                setLocked(true);
            };
        };

    },[username, password]);


    return ( 
                <section className={style.container}>
                    <form className={style.box} onSubmit={onSubmitForm}>
                        <div className={style.boxInput}>
                            <label 
                                className={`${style.inputBlock}`}>Email
                                    <input
                                        type={"text"}
                                         className={`${style.inputBlock} ${ !validUsername && !validator.isEmail(username) && style.inputError}`}
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
                                         className={`${style.inputBlock} ${!validPassword && style.inputError}`}
                                         onBlur={onBlurPassword}
                                         onChange={setPasswordForm}
                                         value={password}
                                         />
                                         <ValidationBox visible={visiblePassword} validPassword={validPassword} type={'password'}/>
                                         
                            </label>
                        </div>
                        <Button isLocked={isLocked}/>
                    </form>
                </section>)

};

export default LoginForm;