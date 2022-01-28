import React from "react";

export default function HomeSection() {
    return (
            <React.Fragment>
                {/* <!-- Home Section --> */}
                <section className="small-section bg-dark-alfa-50 bg-scroll light-content" data-background="images/full-width-images/section-bg-19.jpg" id="home">
                    <div className="container relative">
                    
                        <div className="row">
                            
                            <div className="col-md-8">
                                <div className="wow fadeInUpShort" data-wow-delay=".1s">
                                    <h1 className="hs-line-7 mb-20 mb-xs-10">Mudabir Ahmad</h1>
                                </div>
                                <div className="wow fadeInUpShort" data-wow-delay=".2s">
                                    <p className="hs-line-6 opacity-075 mb-20 mb-xs-0">
                                        
                                        Software Engineer, DevOp & Machine Learning Specialist
                                    </p>
                                </div>
                            </div>
                            
                         
                        </div>
                    
                    </div>
                </section>
                {/* <!-- End Home Section -->  */}
            </React.Fragment>
    );
}