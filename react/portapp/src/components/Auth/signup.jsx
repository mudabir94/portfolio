import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import API from '../../api-service';
import {useCookies} from 'react-cookie';


function SignUp() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const signUpUser = () => {
        var name= username
        API.signUpUser({name,email, password})
          .then( (res) => window.location.href='/login')
          .catch( error => console.log(error))
      }


    return (
        <React.Fragment>
            {/* <!-- Registry Form -->*/}
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        
                       
                            <div className="clearfix">
                                
                                {/* <!-- Email --> */}
                                <div className="form-group">
                                    <label htmlhtmlFor="reg-email">Email</label>
                                    <input id="username" type="text" placeholder="email" 
                                        value={email}
                                        onChange={ evt=> setEmail(evt.target.value)}
                                        />
                                </div>
                                
                                {/* <!-- Username --> */}
                                <div className="form-group">
                                    <label htmlhtmlFor="reg-username">Username</label>
                                    <input id="username" type="text" placeholder="username" 
                                        value={username}
                                        onChange={ evt=> setUsername(evt.target.value)}
                                        />                                
                                </div>
                                
                                {/* <!-- Password --> */}
                                <div className="form-group">
                                    <label htmlFor="reg-password">Password</label>
                                    <input  id="password" type="password"
                                        placeholder="password" 
                                        value={password}
                                        onChange={ evt=> setPassword(evt.target.value)}/>
                                </div>
                                
                                {/* <!-- Re-enter Password --> */}
                                {/* <div className="form-group">
                                    <label htmlFor="reg-confirm-password">Confirm Password</label>
                                    <input type="password" name="reg-confirm-password" id="reg-confirm-password" className="input-lg round form-control" placeholder="Confirm password" pattern=".{5,100}" required aria-required="true"/>
                                </div> */}
                                    
                            </div>
                            
                            {/* <!-- Send Button --> */}
                            <div className="pt-10">
                                <button
                                 className="submit_btn btn btn-mod btn-large btn-round btn-full" 
                                 id="reg-btn"
                                 onClick={signUpUser}>
                                    Register
                                </button>
                            </div>
                            <div className="pt-10">
                                <Link classNameName="link" to="/login">
                                    Login
                                </Link>
                            </div>
                            
                        
                    </div>
                </div>
            {/* <!-- End Registry Form --> */}
                            
        </React.Fragment>

    );
  }
  
  export default SignUp;