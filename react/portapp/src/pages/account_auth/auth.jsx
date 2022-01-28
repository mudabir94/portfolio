import React from "react";
import Header from './../../components/header/header'
import Main from './../../components/header/main/main'
import Footer from './../../components/footer/footer'

function Auth() {

    return (
        <React.Fragment>
            <Header></Header>
            <Main pagename='auth'></Main>
            <Footer></Footer>
        </React.Fragment>

    );
  }
  
  export default Auth;