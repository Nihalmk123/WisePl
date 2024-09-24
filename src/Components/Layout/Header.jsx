import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBCard, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import wisePl from '../../assets/WisePl.png';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <header className="header">
        <div className="topbar clearfix">
          <div className="container" >
            <div className="row-fluid" >
              <div className="col-md-6 col-sm-6 text-left">
                <p>
                  <strong><i className="fa fa-phone" /></strong> +65 8945 6089 &nbsp;&nbsp;
                  <strong><i className="fa fa-envelope" /></strong> <a href="mailto:#">info@yoursite.com</a>
                </p>
              </div>
              <div className="col-md-6 col-sm-6 hidden-xs text-right">
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
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="logo-normal">
                <a className="navbar-brand" href="index.html"><img src={wisePl} alt="WisePl_logo" style={{width:"20%", borderRadius:"5px"}} /></a>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li className="dropdown yamm-fw yamm-half">
                  <Link to="/programs" data-toggle="dropdown" className="dropdown-toggle active">Programs <b className="fa fa-angle-down" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="#">All Programs</Link></li>
                    <li><Link to="#">Maths</Link></li>
                    <li><Link to="#">Chemistry</Link></li>
                    <li><Link to="#">Physics</Link></li>
                  </ul>
                </li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
                <li><a onClick={toggleModal} style={{ cursor: 'pointer' }}>Signin</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Modal for Signin */}
      <MDBModal show={showModal} setShow={setShowModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="modal-title">Sign In</h5>
              <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCard>
                <MDBCardTitle className="text-center">Welcome Back</MDBCardTitle>
                <MDBCardText className="text-center">
                  Please sign in to continue.
                </MDBCardText>
                <MDBBtn color="primary" block>Sign In with Email</MDBBtn>
              </MDBCard>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      
    </>
  );
}

export default Header;
