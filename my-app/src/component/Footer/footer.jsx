import React from "react";
import {Link} from 'react-router-dom';
// onClick={openRegistrationModal}
function Footer (props){
    return(
        <footer className="footer">
                <ul className="footer-links">
                    <li><a href="#">Our Products</a></li>
                    <li>
                        <a href="#">
                            Register Your Library With Us 
                        </a>
                    </li>
                    <li>
                        <Link to="/more-services">More Services</Link>
                    </li>
                    <li><a href="#">Follow Us</a></li>
                </ul>
            </footer>
    )
}
export default Footer;
