import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import HomePageVideo from '../assets/preview.mp4';
import about_us from '../assets/about_us.jpg';
import who_we_are from '../assets/who_we_are.jpg';
import phy from '../assets/physics-lesson-presentation-feature-image.webp';
import chem from '../assets/Chemistry.png';
import math from '../assets/maths.jpg';
import eng from '../assets/eng.jpg';
import temp1 from '../assets/temp1.jpeg';
import temp2 from '../assets/temp2.jpeg';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';

const Home = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Layout>
      <section id="home" className="video-section js-height-full">
        {/* Video background */}
        <video autoPlay muted loop className="video-background">
          <source src={HomePageVideo} type="video/mp4" />
        </video>

        {/* Overlay for the video */}
        <div className="overlay"></div>

        <div className="home-text-wrapper relative container">
          <div className="home-message">
            <p><span style={{ color: "#F7C04A" }}>Wise</span> <span style={{ color: "#fff" }}>PL</span> <span style={{ color: "#F7C04A" }}></span></p>
            <small>
            Unlock your full potential with personalized learning designed for your success. At WisePl, we empower minds through innovative education, shaping brighter futures one student at a time. Discover the path to excellence with us!
            </small>
            <div className="btn-wrapper">
              <div className="text-center">
                <a href="#" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none" }}>Read More</a> &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn wow slideInRight" style={{ backgroundColor: "#F7C04A", border: "none" }}>Buy Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-bottom">
          <span>Explore <i className="fa fa-angle-down" /></span>
        </div>
      </section>


      <section className="section db" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h1 style={{ color: "white", textAlign: "center", marginBottom: "85px", color: "#3F497F" }}>Unrivalled Track Record of Success Since 1994</h1>
          <div className="row">
            {/* First Column */}
            <div className="col-lg-3 col-md-3">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>1230</h4>
                <h3 style={{ color: "#000" }} ><i className="flaticon-black-graduation-cap-tool-of-university-student-for-head" style={{ color: "#000" }} /> Happy Students</h3>
              </div>
            </div>
            {/* Second Column */}
            <div className="col-lg-3 col-md-3">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>331</h4>
                <h3 style={{ color: "#000" }} ><i className="flaticon-online-course" style={{ color: "#000" }} /> Course Done</h3>
              </div>
            </div>
            {/* Third Column */}
            <div className="col-lg-3 col-md-3">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>8901</h4>
                <h3 style={{ color: "#000" }} ><i className="flaticon-coffee-cup" style={{ color: "#000" }} />Book published</h3>
              </div>
            </div>
            {/* Fourth Column */}
            <div className="col-lg-3 col-md-3">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>901</h4>
                <h3 style={{ color: "#000" }}><i className="flaticon-coffee-cup" style={{ color: "#000" }} /> Total sales</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="card-container">
        <div className="section-title text-center">
          <h3 style={{ color: "#3F497F" }}>Explore Our Programmes</h3>
          <p>
            Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu, sit amet fringilla ex ultricies.
          </p>
          <a href="#" className="btn btn_border border_radius" style={{ marginTop: "25px", backgroundColor: "#3F497F", border: "none" }}>Learn more...</a>
        </div>

        <div className="row g-4"> {/* `g-4` adds a gap between columns */}
          {/* First Column */}
          <div className="col-md-6">
            <div className="card text-center border shadow-sm border_radius card-bg" style={{ backgroundImage: `url(${phy})` }}>
              <div className="card-body">
                {/* <h5 className="card-title">Special title treatment 1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content..</p> */}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-center border shadow-sm border_radius card-bg" style={{ backgroundImage: `url(${chem})` }}>
              <div className="card-body">
              </div>
            </div>
          </div>


          {/* Second Column */}

          <div className="col-md-6">
            <div className="card text-center border shadow-sm border_radius card-bg" style={{ backgroundImage: `url(${math})` }}>
              <div className="card-body">
                {/* <h5 className="card-title">Special title treatment 1</h5> */}
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content..</p> */}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-center border shadow-sm border_radius card-bg" style={{ backgroundImage: `url(${eng})` }}>
              <div className="card-body">
                {/* <h5 className="card-title">Special title treatment 1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content..</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={about_us} alt="About Us" style={{ width: '100%', borderRadius: '5px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div className="col-md-6">
              <h2 className="slideInLeft wow" style={{color:"#3F497F"}}>About Us</h2>
              <p>
                We are committed to providing quality education through innovative programs that cater to the needs of today's learners. Our aim is to empower students with the knowledge and skills they need to succeed.
                We are committed to providing quality education through innovative programs that cater to the needs of today's learners. Our aim is to empower students with the knowledge and skills they need to succeed.
                We are committed to providing
              </p>
              <Link to="/aboutus" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none" }}>Learn More</Link> &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are" style={{ padding: '40px 0', backgroundColor: "#F8F5E4" }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="slideInLeft wow" style={{color:"#3F497F"}}>Who We Are</h2>
              <p>
                Our team consists of experienced educators, innovators, and professionals who share a passion for making education accessible to all. Together, we work towards creating a learning environment that is inclusive, engaging, and impactful.
              </p>
              <Link to="/aboutus" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none" }}>Learn More</Link> &nbsp;&nbsp;&nbsp;
            </div>
            <div className="col-md-6">
              <img src={who_we_are} alt="Who We Are" style={{ width: '100%', borderRadius: '5px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section db p120" style={{ backgroundColor: "#3F497F" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tagline-message text-center">
                <h3>Unlock every student's true potential with following courses</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gb nopadtop" >
        <div className="container" >
          <div className="row">
            <div className="col-md-3">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-computer-tool-for-education" /> */}
                <h4>Physics</h4>
                <p style={{ color: "#000" }}>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                <a href="#" className="readmore">Read more</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-monitor-tablet-and-smartohone" /> */}
                <h4>Chemistry</h4>
                <p style={{ color: "#000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat molestias optio! Dolor Corrupti placeat molestias optio! Dolor</p>
                <a href="#" className="readmore">Read more</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-download-business-statistics-symbol-of-a-graphic" /> */}
                <h4>Matahmatics(A&E)</h4>
                <p style={{ color: "#000" }}>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                <a href="#" className="readmore">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>      

      <h1 style={{textAlign:"center"}}>Follow us on Instagram: @yourinstagam_handle</h1>
      <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="row">
          <div className="col-md-3">
            <img 
              src={temp1} 
              alt="temp1" 
              style={{ width: "90%", cursor: "pointer" }} 
              onClick={() => openModal(temp1)}
            />
          </div>
          <div className="col-md-3">
            <img 
              src={temp2} 
              alt="temp2" 
              style={{ width: "90%", cursor: "pointer" }} 
              onClick={() => openModal(temp2)}
            />
          </div>
          <div className="col-md-3">
            <img 
              src={temp2} 
              alt="temp2" 
              style={{ width: "90%", cursor: "pointer" }} 
              onClick={() => openModal(temp2)}
            />
          </div>
          <div className="col-md-3">
            <img 
              src={temp2} 
              alt="temp2" 
              style={{ width: "90%", cursor: "pointer" }} 
              onClick={() => openModal(temp2)}
            />
          </div>
        </div>
      </div>

      {/* Modal to show selected image */}
      <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </MDBModalHeader>
            <MDBModalBody>
              {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />}
            </MDBModalBody>
            <MDBModalFooter>
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      {/* Newsletter Section */}
      <section className="newsletter-section" style={{ backgroundColor: "#F7C04A", padding: "40px 0" }}>
        <div className="container text-center">
          <h3 style={{ color: "#3F497F" }}>Subscribe to our Newsletter</h3>
          <p style={{ color: "#000" }}>Stay updated with the latest news, courses, and special offers.</p>
          <form onSubmit={''} className="newsletter-form" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <input 
              type="email" 
              placeholder="Enter your email"  
              required 
              style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #3F497F' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#3F497F', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
