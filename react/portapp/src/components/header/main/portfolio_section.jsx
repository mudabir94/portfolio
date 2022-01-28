import React from "react";

export default function PortfolioSection() {
    return (
        <React.Fragment>
        {/*  <!-- Portfolio Section --> */}
        <section className="page-section pb-0">
            <div className="full-wrapper relative">
                
                {/* <!-- Works Filter -->                     */}
                <div className="works-filter text-center" role="tablist">
                    <a href="#" className="filter active" role="tab" aria-selected="true" data-filter="*">All works</a>
                    <a href="#branding" className="filter" role="tab" aria-selected="false" data-filter=".branding">Branding</a>
                    <a href="#design" className="filter" role="tab" aria-selected="false" data-filter=".design">Design</a>
                    <a href="#photography" className="filter" role="tab" aria-selected="false" data-filter=".photography">Photography</a>
                </div>                    
                {/* <!-- End Works Filter --> */}
                
                {/* <!-- Works Grid --> */}
                <ul className="works-grid work-grid-3 work-grid-gut clearfix hover-white hide-titles" id="work-grid">
                    
                    {/* <!-- Work Item (Lightbox) --> */}
                    <li className="work-item mix photography">
                        <a href="images/portfolio/full-project-1.jpg" className="work-lightbox-link mfp-image">
                            <div className="work-img">
                                <div className="work-img-bg"></div>
                                <img src="images/portfolio/projects-thumb.gif" data-original="images/portfolio/projects-1.jpg" alt="Work Description" className="img-lazy-work" />
                            </div>
                            <div className="work-intro">
                                <h3 className="work-title">Green Leaf</h3>
                                <div className="work-descr">
                                    Lightbox 
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* <!-- End Work Item --> */}
                </ul>
                {/* <!-- End Works Grid --> */}
                
            </div>
        </section>
        </React.Fragment>
    );
}