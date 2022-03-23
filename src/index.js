import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/components/Main/Main.jsx'
import  { AuthProvider } from "../src/store/AuthContext"

ReactDOM.render(<AuthProvider>
                    <Main/>
                </AuthProvider>
                    ,document.getElementById('main'));

