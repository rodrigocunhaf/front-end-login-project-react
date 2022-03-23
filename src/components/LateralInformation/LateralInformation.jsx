import React from "react";
import style from './LateralInformation.module.css'
import image from '../../assets/images/icons/user-logo.png';
import Button from "../../UI/Button/Button";

const LateralInformation = ( ) => {

    return ( <section className={style.container}>
                <div className={style.box}>
                    <div>
                        <div className={style.boxImage}>
                            <img className={style.image} src={image}/>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                            <Button buttonName={'Button 1'}/>
                            </li>
                            <li>
                                <Button buttonName={'Button 2'}/>
                            </li>
                            <li>
                                <Button buttonName={'Button 3'}/>
                            </li>
                            <li>
                                <Button buttonName={'Button 4'}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>)
};

export default LateralInformation;