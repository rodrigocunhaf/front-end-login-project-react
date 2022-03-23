import React, { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import Button from '../../UI/Button/Button';
import style from './Navigation.module.css'

const Navigation = ( ) => {

    const context = useContext(AuthContext);

    return (
        <ul className={style.ul}>
            <li>Admin</li>
            <li>My Account</li>
            <li><Button buttonName={'Logout'} isLocked={false} action={context.logout}/></li>
        </ul>
    );
};

export default Navigation;