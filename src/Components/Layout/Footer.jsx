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
                <a href="#"><img src={WisePlLogo} alt="Logo" style={{ width: "20%", borderRadius: "5px" }} /></a>
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
                  <form className="form-inline" role="search">
                    <div className="form-1">
                      <input type="email" className="form-control" placeholder="Enter email here.." />
                      <button type="submit" className="btn" style={{backgroundColor:'#F7C04A'}}><i className="fa fa-paper-plane-o" /></button>
                    </div>
                  </form>
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
                <h3 className="widget-title" style={{ color: "#fff" }}>Support</h3>
                <ul className="list-unstyled">
                  <li><a href="#" style={{ color: "#fff" }}>Terms of Use</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Copyrights</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Create a Ticket</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Pricing & Plans</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Carrier</a></li>
                  <li><a href="#" style={{ color: "#fff" }}>Trademark</a></li>
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
                  <a className="facebook" href="#" data-tooltip="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook" /></a>
                  <a className="twitter" href="#" data-tooltip="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter" /></a>
                  <a className="google" href="#" data-tooltip="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus" /></a>
                  <a className="linkedin" href="#" data-tooltip="tooltip" data-placement="bottom" title="Linkedin"><i className="fa fa-linkedin" /></a>
                  <a className="google" href="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM" data-tooltip="tooltip" data-placement="YouTube" title="Google Plus"><i className="fa fa-youtube" /></a>
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
