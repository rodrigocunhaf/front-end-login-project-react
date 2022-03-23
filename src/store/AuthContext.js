import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ( props) => {

    const [isLogged, setLogin ] = useState(false)

    const login = ( ) => {
        setLogin(true);
    };

    const logout = ( ) => {
        setLogin(false)
    };

    return <AuthContext.Provider value={{
        isLogged,
        login,
        logout
    }}>
                {props.children}
            </AuthContext.Provider>
};
