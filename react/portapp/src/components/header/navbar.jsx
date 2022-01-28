import "./header.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    // <!-- Navigation panel -->
    <nav className="main-nav sticky wow-menubar">
        <div className="full-wrapper relative clearfix">
            
            {/* <!-- Logo ( * your text or image into link tag *) --> */}
            <div className="nav-logo-wrap local-scroll">
                <a href="index.html" className="logo">
                    <img src="images/logo-dark.png" alt="Company logo" width="188" height="37" />
                </a>
            </div>
            
            {/* <!-- Main Menu --> */}
            <div className="inner-nav desktop-nav">
                <ul className="clearlist">
                    
                    {/* <!-- Item With Sub --> */}
                    <li>
                    <Link className="link" to="/"> Home </Link>
                    </li>
                    {/* <!-- End Item With Sub --> */}
                    
                    {/* <!-- Item With Sub --> */}
                    <li>
                    <Link className="link" to="/projects">Projects </Link>
                    </li>
                    {/* <!-- End Item With Sub --> */}
                  
                    {/* <!-- Item With Sub --> */}
                    <li>
                        <a href="#" className="mn-has-sub active">Customer Reviews </a>
                    </li>
                    {/* <!-- End Item With Sub --> */}
                   
                    {/* <!-- Divider --> */}
                    <li><a>&nbsp;</a></li>
                    {/* <!-- End Divider --> */}
               
                    
                    {/* <!-- Login --> */}
                    <li>
                        <Link className="link" to="/auth">LogIn</Link>    
                    </li>
                </ul>
            </div>
            {/* <!-- End Main Menu --> */}
        </div>
    </nav>
    // <!-- End Navigation panel -->

  );
}