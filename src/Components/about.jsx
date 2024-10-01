import React from "react";
import aboutImage from "../assets/about1.jpg";
import "./about.css";

function AboutUs() {
  return (
    <div className="about-section">
      <div className="about-head">
        <h1>ABOUT US </h1>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="aboutImage" />
        </div>
        <div className="about-description">
          <h1>What we do:</h1>
          <p>
            At Murang'a University Tech Club (MUTC), we are dedicated to
            fostering a dynamic and inclusive community of tech enthusiasts. Our
            mission is to empower students with the tools and knowledge they
            need to excel in the ever-evolving world of technology. Through
            collaborative projects, interactive workshops, and skill-building
            events, we aim to bridge the gap between classroom learning and
            real-world tech innovation. By joining MUTC, you become part of a
            community that is passionate about building the future of technology
            and driving innovation at Murang'a University and beyond.
          </p>
        </div>
      </div>

      <div className="about-statements">
        <div className="mission">
          <h1>OUR MISSION:</h1>
          <p>
            Empowering future innovators through hands-on learning,
            collaboration, and cutting-edge technology. At Murang'a University
            Tech Club, we inspire and equip students to build the tech solutions
            of tomorrow.
          </p>
        </div>
        
        <div className="values">
          <h1>OUR VALUES:</h1>
          <ul>
            <li>
              Innovation: We encourage creativity and out-of-the-box thinking,
              allowing members to explore new ideas and develop solutions for
              real-world challenges.
            </li>
            <li>
              Collaboration: At MUTC, teamwork is at the heart of everything we
              do. We believe in working together to share knowledge, build
              projects, and foster a supportive community.
            </li>
            <li>
              Growth: We prioritize continuous learning and personal
              development, offering opportunities for members to expand their
              technical and professional skills.
            </li>
          </ul>
        </div>
        <div className="objectives">
          <h1>OBJECTIVES:</h1>
          <ul>
            <li>
              To provide hands-on experiences in various technology fields such
              as programming, UI/UX design, machine learning, and more.
            </li>
            <li>
              To create an inclusive space where students, regardless of
              experience level, can learn and grow their technical expertise.
            </li>
            <li>
              To host events and seminars that connect members with industry
              professionals and new technologies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;