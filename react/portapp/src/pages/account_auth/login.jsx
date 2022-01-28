import React from "react";
import Header from './../../components/header/header'
import Footer from './../../components/footer/footer'
import LOGIN from "./../../components/Auth/login";

function Login() {

    return (
        <React.Fragment>
            <Header></Header>
            <LOGIN></LOGIN>
            <Footer></Footer>
        </React.Fragment>

    );
  }
  
  export default Login;