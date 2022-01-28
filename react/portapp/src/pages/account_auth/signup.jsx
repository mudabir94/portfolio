import React from "react";
import Header from './../../components/header/header'
import Footer from './../../components/footer/footer'
import SIGNUP from "./../../components/Auth/signup";

function signUp() {

    return (
        <React.Fragment>
            <Header></Header>
            <SIGNUP></SIGNUP>
            <Footer></Footer>
        </React.Fragment>

    );
  }
  
  export default signUp;