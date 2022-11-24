import Footercss from '../css/Footer.css'

const Footer=()=>{
    return(
        <>

            <div className="bg-dark h-100 text-light d-flex justify-content-around " >
                <div className="footer-text mt-2" >
                    <div className="image-box d-flex  align-center" >
                        <img src={require("../assets/college-graduation.png")} alt="edu-logo"  />
                        <h4 className="mx-1 h4 footer-list" >Education Hub</h4>
                       
                    </div>
                    <div>
                        <div className="mt-3" >
                            <p className='fw-light fs-6 lh-sm'>Designed and built with all the</p> 
                            <p className='fw-light fs-6 lh-sm'>love in the world by the Bootstrap team</p> 
                            <p className="fw-light fs-6 lh-sm">with the help of our contributors.</p>   
                        </div>

                        <div>
                            <p>School licensed MIT, docs CC BY 3.0.</p>
                            <p>Currently In AHEMDABAD</p>
                            <p>Founded By SHUKLA'S</p>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-links mt-2" >
                    <h4 className="">Links</h4>
                    <ul className="list-unstyled" >
                        <li className="fw-light footer-list mt-2" >Home</li>
                        <li className="fw-light footer-list mt-2">Docs</li>
                        <li className="fw-light footer-list mt-2">Example</li>
                        <li className="fw-light footer-list mt-2">Themes</li>
                        <li className="fw-light footer-list mt-2">Blog</li>
                        <li className="fw-light footer-list mt-2">Swag Store</li>
                    </ul>
                </div>
                <div className="footer-guides mt-2" >
                <h4 className="">Guides</h4>
                    <ul className="list-unstyled" >
                        <li className="fw-light footer-list mt-2" >Getting Started</li>
                        <li className="fw-light footer-list mt-2">Started Templates</li>
                        <li className="fw-light footer-list mt-2">Webpack</li>
                        <li className="fw-light footer-list mt-2">Parcel</li>
                       
                    </ul>
                </div>
                <div className="footer-projects mt-2" >
                <h4 className="">Projects</h4>
                    <ul className="list-unstyled" >
                        <li className="fw-light footer-list mt-2" >School Work</li>
                        <li className="fw-light footer-list mt-2">Science Projects</li>
                        <li className="fw-light footer-list mt-2">Annual Events</li>
                        <li className="fw-light footer-list mt-2">Technical Events</li>
                       
                    </ul>
                </div>
                <div className="footer-community" >
                <h4 className="">Community</h4>
                    <ul className="list-unstyled" >
                        <li className="fw-light footer-list mt-2" >Issue</li>
                        <li className="fw-light footer-list mt-2">Discussion</li>
                        <li className="fw-light footer-list mt-2">School Founders</li>
                        <li className="fw-light footer-list mt-2">Open Collective</li>
                       
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer;