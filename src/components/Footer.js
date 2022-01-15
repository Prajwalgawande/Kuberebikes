import React from 'react'
import './footer.css'

export default function Footer() {
    return (<>
    
        <div className='footer'>
            <div className="touch">
                <h3>Get in Touch</h3>
                <li>Contact Us on +918950754626</li>
                <li>Email Us on info@kuberebikes.com</li>
            </div>
            <div className="touch">
                <h3>Quick Links</h3>
                <li>Home</li>
                <li>About Us</li>
                <li>Become a Dealer</li>
            </div>
            <div className="touch">
                <h3>Models</h3>
                <li>Juniper</li>
                <li>Festiva</li>
                <li>Vamos</li>
            </div>
        
        </div>
        <div className="footer-img">
         <img className='foot-img' src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-gateway-of-india-mumbai.jpg" alt="india-image" />
        </div>
        <div className="footer-resv">
            <p>© Kuber E-Bikes 2021 All rights reserved.</p>
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            <p>Made with in Kuber E-Bikes</p>
        </div>
        </>
    )
}
