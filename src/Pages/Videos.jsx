import React from "react";
import Layout from "../Components/Layout/Layout";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

const Videos = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=cRahkaKeGus",
    "https://www.youtube.com/watch?v=sSXG8KJDiPI",
    "https://www.youtube.com/watch?v=E2YtD_FT2fU",
    "https://www.youtube.com/watch?v=E2YtD_FT2fU",
    "https://www.youtube.com/watch?v=sSXG8KJDiPI",
    "https://www.youtube.com/watch?v=cRahkaKeGus",
  ];

  return (
    <Layout>
      <section
        style={{
          padding: '130px 0',
          background: "#3F497F",
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h1 style={{ color: "#F7C04A", fontWeight: "bolder" }}>Videos</h1>
              <p style={{ fontWeight: "bold" }}>
                At WISE PL, we provide a comprehensive range of educational programs designed to support and enhance students' academic journey.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="videos-section" style={{ padding: "25px" }}>
        <MDBContainer>
          <MDBRow>
            {videoUrls.map((videoUrl, index) => (
              <MDBCol key={index} md="6" lg="4" className="mb-4">
                <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <Plyr
                    source={{
                      type: 'video',
                      sources: [{ src: videoUrl.split("v=")[1], provider: 'youtube' }]
                    }}
                    options={{
                      controls: ['play-large', 'play', 'fullscreen', 'progress'], // Show only play buttons
                      autoplay: false, // Autoplay disabled by default
                      muted: false, // Enable sound
                    }}
                  />
                </div>
                <h4 style={{ marginTop: "10px" }}>Video Title:</h4>
                <p>Video Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium in saepe nesciunt autem neque?</p>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>

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

export default Videos;

// controls: [
//   'play-large', // The large play button in the center
//   'play', // Play/Pause button
//   'progress', // Progress bar
//   'current-time', // Current time indicator
//   'duration', // Total duration indicator
//   'mute', // Mute/Unmute button
//   'volume', // Volume control
//   'captions', // Closed captions
//   'settings', // Settings menu (for captions, quality, etc.)
//   'pip', // Picture-in-picture mode
//   'airplay', // AirPlay (for Apple devices)
//   'fullscreen', // Fullscreen button
// ]