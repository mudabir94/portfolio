import HomeSection from "./home_section";
import PortfolioSection from "./portfolio_section";
import CallSection from "./call_section";
import ServiceSection from "./services_section";
import Login from "./../../Auth/login";

export default function main(props) {
    const page= props.pagename
    if (page==="auth"){
        return (
            <main id="main">   
                <HomeSection />
                <Login/>
                <CallSection />
            </main>
        )
    }else{
        return (
            <main id="main">   
                <HomeSection />
                {/* <PortfolioSection /> */}
                <CallSection />
                <ServiceSection/>

            </main>
        )
    }
    
 
}