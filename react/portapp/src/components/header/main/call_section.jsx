import React from "react";

export default function CallSection() {
    return (
         <React.Fragment>
            {/*  <!-- Call Action Section --> */}
            <section className="small-section bg-dark-lighter light-content">
                <div className="container relative">
                    <div className="row wow fadeInUpShort">
                        <div className="col-lg-5 offset-lg-2">
                            <h3 className="call-action-1-heading">Like My Work?</h3>
                            <div className="call-action-1-decription mb-0 pb-md-20">
                                Want to share your thoughts and connect?
                            </div>                                        
                        </div>
                        <div className="col-lg-3 pt-10 text-lg-end">
                            <div className="local-scroll">
                                <a href="#contact" className="btn btn-mod btn-w btn-large btn-round">Start Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  <!-- End Call Action Section --> */}
        </React.Fragment>

    );
}