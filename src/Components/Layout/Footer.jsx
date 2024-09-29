import React from 'react';
import WisePlLogo from "../../assets/WisePl.png";

const Footer = () => {
  return (
    <>
      <div className="copyrights">
        <div className="container">
          <div className="clearfix">
            <div className="pull-left">
              <div className="">
                <a href="#"><img src={WisePlLogo} alt="Logo" style={{ width: "9%", borderRadius: "5px" }} /></a>
              </div>
            </div>
            <div className="pull-right">
              <div className="footer-links">
                {/* Additional links can be added here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="section noover" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="widget clearfix">
                <h3 className="widget-title" style={{ color: "#fff" }}>Subscribe to Our Newsletter</h3>
                <div className="newsletter-widget">
                  <p style={{ color: "#fff" }}>
                    You can opt out of our newsletters at any time.<br />
                    See our <a href="#" style={{ color: "#007bff" }}>privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="widget clearfix">
                <h3 className="widget-title" style={{ color: "#fff" }}>Join Us Today</h3>
                <p style={{ color: "#fff" }}>Would you like to earn your profits by joining our team? Join us without losing time.</p>
                <a href="#" className="readmore">Become a Teacher</a>
              </div>
            </div>

            <div className="col-lg-2 col-md-2">
              <div className="widget clearfix">
                <h3 className="widget-title" style={{ color: "#fff" }}>Programs</h3>
                <ul className="list-unstyled">
                  <li><a href="#" style={{ color: "#fff" }}>English</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Mathematics</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Physics</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Chemistry</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="widget clearfix">
                <h3 className="widget-title" style={{ color: "#fff" }}>Contact Us</h3>
                <p style={{ color: "#fff" }}>Phone: +65-8945 6089</p>
                <p style={{ color: "#fff" }}>Phone: +65-6272 7061</p>
                <div className="social-icons">
                  <div className="social">
                    <a className="facebook" href="#" data-tooltip="tooltip" data-placement="bottom" title="Facebook">
                      <i className="fab fa-facebook" style={{ backgroundColor: "none" }} />
                    </a>
                    <a className="instagram" href="#" data-tooltip="tooltip" data-placement="bottom" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="tiktok" href="#" data-tooltip="tooltip" data-placement="bottom" title="TikTok">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a className="youtube" href="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM" data-tooltip="tooltip" data-placement="bottom" title="YouTube">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
