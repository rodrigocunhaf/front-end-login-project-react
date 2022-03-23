import React, { useContext } from 'react';
import Header from '../Header/Header';
import style from "./Main.module.css"
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import Box from '../../UI/Box/Box';
import { AuthContext } from '../../store/AuthContext';
import LateralInformation from '../LateralInformation/LateralInformation';

const Main = () => {

  const context = useContext (AuthContext);

  return (
    <React.Fragment>
        <Header/>
           { context.isLogged === false && <Box>
              <LoginForm/>
            </Box>
           }
          {
            context.isLogged === true && 
            <LateralInformation/>
          }
        <Footer/>
    </React.Fragment>
  );
}

export default Main;
