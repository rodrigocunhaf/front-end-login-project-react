import React from 'react';
import Header from '../Header/Header';
import style from "./Main.module.css"
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import Box from '../../UI/Box/Box';


function Main() {

  return (
    <React.Fragment>
        <Header/>
          <Box>
              <LoginForm/>
          </Box>
        <Footer/>
    </React.Fragment>
  );
}

export default Main;
