import React, { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import Button from '../../UI/Button/Button';
import style from './Navigation.module.css'

const Navigation = ( ) => {

    const context = useContext(AuthContext);

    return (
        <ul className={style.ul}>
            <li><Button buttonName={'Admin'} isLocked={false} /></li>
            <li><Button buttonName={'My profile'} isLocked={false}/></li>
            <li><Button buttonName={'Logout'} isLocked={false} /></li>
        </ul>
    );
};

export default Navigation;