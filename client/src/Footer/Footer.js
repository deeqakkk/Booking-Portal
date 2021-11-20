import React from "react";
import "./Footer.css";

const Footer = () => {
return (
	<>
    <footer>
    <div className="content" style={{paddingTop:"30px", paddingBottom:"30px"}}>
        <div className="left box">
        <i class="fas fa-map-marker-alt fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{float:"left", marginLeft:"10px"}}>
            <h3>Find Us</h3>
            <p>Address goes here</p>
        </div>
        </div>
        <div className="middle box">
        <i class="fas fa-phone fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{float:"left", marginLeft:"10px"}}>
            <h3>Call Us</h3>
            <p>+91-7057962948</p>
        </div>
        </div>
        <div className="right box">
        <i class="fas fa-envelope-open fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{float:"left", marginLeft:"10px"}}>
            <h3>Mail Us</h3>
            <p>Hello@Fly0kart.com</p>
        </div>
        </div>
    </div>
    <hr />

    <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic footer-widget-heading"><h3>About us</h3></div>
         <div class="logoContainer"><div class="logoTextF"><h1 class="logoH1">Fly0kart.com</h1></div>
         <div class="logoImage">
             <img src="/static/media/flyokart-plane-svg.42974c30.svg" alt="logo" class="logoSvg" />
        </div>
        </div>
         <p>FLY0KART is a Global Technology Company with the Heart of a Startup. Fly0kart we keep our customers at HEART.</p>
       </div>
       <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
        </div>
       {/* <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div className="email">
           <a href="#"><i className="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div> */}
    </div>
    <div className="middle box">
       <div className="topic footer-widget-heading"><h3>Our Services</h3></div>
       <div><a href="#">Service 1</a></div>
       <div><a href="#">Service 2</a></div>
       <div><a href="#">Service 3</a></div>
       <div><a href="#">Service 4</a></div>
       <div><a href="#">Service 5</a></div>
    </div>
    <div className="right box">
       <div className="footer-widget">
        <div className="footer-widget-heading">
            <h3 className="topic">Subscribe</h3>
        </div>
        <div className="footer-text">
            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
        </div>
        <div className="subscribe-form">
            <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane"></i></button>
            </form>
        </div>

        {/* <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
        </div> */}
    </div>
    </div>
    </div>
    <div className="bottom">
        <p>Copyright ©{(new Date().getFullYear())} <a href="#">Fly0Kart</a> All rights reserved</p>
    </div>

   
    </footer>
    </>
);
};
export default Footer;
