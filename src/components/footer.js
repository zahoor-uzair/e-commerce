import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        Welcome to our eCommerce store! We offer a wide range of products to fulfill your shopping needs. Shop with us and experience the best online shopping experience.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>
                        Email: info@example.com<br />
                        Phone: +1234567890
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="/"><FacebookIcon /></a>
                        <a href="/"><TwitterIcon /></a>
                        <a href="/"><InstagramIcon /></a>
                        {/* <a href="/"><PinterestIcon /></a> */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 My eCommerce Store. All rights reserved.</p>
            </div>
        </footer >
    );
};

export default Footer;
