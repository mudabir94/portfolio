import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth from "./pages/account_auth/auth";
import Projects from "./pages/projects/projects";
import Login from "./pages/account_auth/login";
import Signup from "./pages/account_auth/signup";


import {Route,BrowserRouter,Routes} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import reportWebVitals from './reportWebVitals';


function Router(){

  return (
  <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/auth' element={<Auth/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>

            <Route exact path='/projects' element={<Projects/>}/>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(<Router/>,document.getElementById('root'));
reportWebVitals();
