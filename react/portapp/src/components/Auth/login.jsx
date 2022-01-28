import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import API from '../../api-service';
import {useCookies} from 'react-cookie';


function Login() {
    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    const [token,setToken]=useCookies(['mr-token'])


    useEffect(()=>{
        if (token['mr-token']) window.location.href='/';
    },[token])


    const loginClicked=()=>{
        API.loginUser({email,password})
        .then(resp => setToken('mr-token',true) )
        .catch(error => console.log(error))

    }
   
    return (
        <React.Fragment>
            {/* <!-- Login Form -->*/}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    
                        <div className="clearfix">
                            
                            {/* <!-- Name --> */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" placeholder="email" 
                                value={email}
                                onChange={ evt=> setEmail(evt.target.value)}
                                />
                            </div>
                            
                            {/* <!-- Password --> */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input  id="password" type="password"
                                    placeholder="password" 
                                    value={password}
                                    onChange={ evt=> setPassword(evt.target.value)}/>
                            </div>
                                
                        </div>
                        
                        <div className="clearfix">
                            
                            <div className="cf-left-col">
                                
                                {/* <!-- Inform Tip -->*/}
                                <div className="form-tip pt-20">
                                    <a href="">Forgot Password?</a>
                                </div>
                                
                            </div>
                            
                            <div className="cf-right-col">
                                
                                {/* <!-- Send Button --> */}
                                <div className="text-end pt-10">
                                    <button className="submit_btn btn btn-mod btn-large btn-round" 
                                    onClick={loginClicked}
                                    id="login-btn">Login</button>
                                </div>

                                <div className="text-end pt-10">
                                <Link className="link" to="/signup">
                                    Register
                                </Link>
                                </div>

                                
                                
                            </div>
                            
                        </div>
                        
                    
                </div>
            </div>
            {/* <!-- End Login Form --> */}
        </React.Fragment>

    );
  }
  
  export default Login;