import React, { useEffect, useReducer, useState } from "react";
import style from"./LoginForm.module.css";
import Button from "../../UI/Button/Button";
import validator from 'validator';
import ValidationBox from "./ValidationBox";



const reducerUsername = ( state , action) => {

    switch (action.dispatchType){
        case 'INPUT_USERNAME':
            return {...state, username: action.valor , validationVisible:true};

        
        case 'ON_BLUR_USERNAME':
            if (!validator.isEmail(state.username) ){
                return {...state, validUsername:false, validationVisible:true };
            } else {
                return {...state, validUsername:true, validationVisible:true };
            };
        
        case 'USER_VALIDATION':
            return {...state, validUsername:action.valor }

        default: 
            return {username:'', validUsername:false, validationVisible:false}
    }
};

const reducerPassword = ( state , action) => {

    switch ( action.dispatchType) {
        
        case  'INPUT_PASSWORD' :
            return { ...state, password: action.valor , validationVisible: true};

        case  'PASSWORD_VALIDATION' :
            return { ...state, validPassword: action.valor};

        case  'ON_BLUR_PASSWORD' :
            if ( state.password.length < 5 && !validator.contains(state.password, ' ')){
                return { ...state, validPassword: false , validationVisible: true}
            }
            else { 
                return { ...state, validPassword: true , validationVisible: true  }
            }
        default :
            return { password: '' , validPassword:false , validationVisible: false }
    }
}

const LoginForm = ( props) => {

    const [ formUsernameConfiguration, dispatchUsername] = useReducer( reducerUsername , { 
                                                                                            username:'' ,
                                                                                            validUsername: false,
                                                                                            validationVisible : false
                                                                                        });


    const [formPasswordConfiguration, dispatchPassword ] = useReducer (reducerPassword, {
                                                                                            password: '' , 
                                                                                            validPassword:false , 
                                                                                            validationVisible: false 
                                                                                        });

    const setUsername = ( event ) => {
        dispatchUsername({
            dispatchType:'INPUT_USERNAME',
            valor:event.target.value
        });
    };

    const isValidUsername = ( value) => {
        dispatchUsername ({
            dispatchType: 'USER_VALIDATION',
            valor: value
        });
    };

    const onBlurUsername = () => {
        dispatchUsername ({
            dispatchType:'ON_BLUR_USERNAME'
        });
    };


    const setPassword = ( event ) => {
        dispatchPassword ({
            dispatchType: 'INPUT_PASSWORD',
            valor: event.target.value
        });
    };

    const isValidPassword = ( value ) => {
        dispatchPassword ({
            dispatchType: 'PASSWORD_VALIDATION',
            valor:value
        });
    };

    const onBlurPassword = () => {
        dispatchPassword({
            dispatchType:'ON_BLUR_PASSWORD'
        });
    };

    //USERNAME
    const [ username ] = [formUsernameConfiguration.username ];
    const [ validUsername ] = [formUsernameConfiguration.validUsername ];
    const [ validationUsernameVisible ] = [formUsernameConfiguration.validationVisible ];

    //PASSWORD
    const [ password ] = [ formPasswordConfiguration.password];
    const [ validPassword ] =  [ formPasswordConfiguration.validPassword ]
    const [ validationPasswordVisible ] = [formPasswordConfiguration.validationVisible ];

    useEffect( () => {

        if ( !validator.isEmail(username)){
            isValidUsername(false);
        } else {
            isValidUsername(true);
        }

        if ( password.length > 5 && !validator.contains(password, ' ') ){
            isValidPassword(true);
        } else {
            isValidPassword(false);
        }

    }, [ username, password ]);


    return ( 
                <section className={style.container}>
                    <form className={style.box} >
                        <div className={style.boxInput}>
                            <label 
                                className={`${style.inputBlock}`}>Email
                                    <input
                                        className={`${style.inputBlock} ${ validUsername === false && 
                                                                            validationUsernameVisible === true &&
                                                                            style.inputError}`}
                                        type={"text"}
                                        onBlur={onBlurUsername}
                                        value={username}
                                        onChange={setUsername}
                                         />
                                        <ValidationBox visible={validationUsernameVisible} 
                                                       validUsername={validUsername} 
                                                       type={'username'}/>
                            </label>
                            <label 
                                className={`${style.inputBlock}`}>Password
                                    <input
                                        className={`${style.inputBlock} ${ validPassword === false && 
                                                                           validationPasswordVisible === true &&
                                                                           style.inputError}`}
                                        type={"password"}
                                        onBlur={onBlurPassword}
                                        onChange={setPassword}
                                        value={password}
                                        />
                                        <ValidationBox visible={validationPasswordVisible} 
                                                       validPassword={validPassword} 
                                                       type={'password'}/>
                            </label>
                            <Button isLocked={ validPassword === true && validUsername === true ? false : true}/>
                        </div>
                    </form>
                </section>)

};

export default LoginForm;