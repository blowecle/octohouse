import React from "react";
import '../../css/footer.css';

const Footer = () => {
    return (
            <div className="footer-container">
                <div className="footer-artists">
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">PHOTOS BY</div>
                        <div className="footer-artist">JAMES RUIZ</div>
                        <div className="footer-artist">PERRY HALL</div>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">WEBSITE BY</div>
                        <div className="footer-artist">BRANDON LOWE</div>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description">DESIGN BY</div>
                        <div className="footer-artist">EVAN FARIAS</div>
                    </div>
                    <div className="footer-artist-container">
                        <div className="footer-artist-description"></div>
                        <div className="footer-artist"></div>
                    </div>
                </div>
                <div className="footer-info">1005 S. 3RD ST AUSTIN, TX 78704</div>
            </div>
    )
}

export default Footer;