import React from 'react';

const AboutMe = () => {
  return (
    <section className="about translate snap-item" data-speed="-0.25" id="about">
      {/* Row with text left + photo right */}
      <div className="about-top">
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I am <span className="highlight-name">Nidhi Navandar</span>, Computer engineering graduate with Diploma in Advanced Computing. Passionate about web development, data analytics, and continuous learning.
          </p>
          <a
            href="/Nidhi-Navandar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>
        <div className="about-photo">
          <img
            src="https://ik.imagekit.io/desxuuelt/WhatsApp%20Image%202025-05-17%20at%2011.19.20.jpeg?updatedAt=1747461881615"
            alt="Nidhi Navandar"
            className="about-img"
          />
        </div>
      </div>

      {/* Education Section Below */}
      <div className="education-container">
        <div className="education-box">
          <h3>B.E. Computer Engineering</h3>
          <p>MES Wadia College of Engineering<br />Aug 2019 -  June 2023</p>
        </div>
        <div className="education-box">
          <h3>Diploma in Advanced Computing</h3>
          <p>CDAC - Mumbai <br />Feb 2025 - Aug 2025</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;