import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-dark">

            <div className="footer-overlay"></div>

            <div className="footer-container">

                {/* LOGO + NEWSLETTER */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <span>DreamHome Realty</span>
                    </div>

                    <p className="newsletter-title">Subscribe Our Newsletter for Update</p>

                    <div className="newsletter-box">
                        <input type="email" placeholder="Enter Email Address" />
                        <button type="submit"><i className="btn fas fa-arrow-circle-right"></i></button>
                    </div>
                </div>

                {/* DISCOVER */}
                <div className="footer-column">
                    <h3>Discover</h3>
                    <ul>
                        <li><Link>Adelaide</Link></li>
                        <li><Link>Brisbane</Link></li>
                        <li><Link>Canberra</Link></li>
                        <li><Link>Darwin</Link></li>
                        <li><Link>Hobart</Link></li>
                        <li><Link>Melbourne</Link></li>
                        <li><Link>Perth</Link></li>
                        <li><Link>Sydney</Link></li>
                    </ul>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link>Buy Property</Link></li>
                        <li><Link>Sale Property</Link></li>
                        <li><Link>Rent Property</Link></li>
                        <li><Link>Latest News</Link></li>
                        <li><Link>FAQs</Link></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>

                    <p><i className="fa fa-map-marker"></i>4325 Maplewood Drive, Windsor Gardens, SA 5087</p>
                    <p><i className="fa fa-envelope"></i> info@DreamHomeRealty.com</p>
                    <p><i className="fa fa-phone"></i> +61 445666855</p>
                </div>

            </div>

            {/* SOCIAL + CURRENCY ROW */}
            <div className="footer-bottom pt-3">
                <span className="fa fa-dollar"> AUD</span> |
                <span className="fa fa-facebook-square"> Facebook</span> |
                <span className="fa fa-linkedin-square"> LinkedIn</span> |
                <span className="fa fa-youtube-square"> YouTube</span> |
                <span className="fa fa-instagram"> Instagram</span>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-copy">
                © 2025 DreamHome Realty. All rights reserved
            </div>

        </footer>
    );
}
