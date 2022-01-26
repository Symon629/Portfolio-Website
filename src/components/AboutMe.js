import React, { useState } from 'react';
import AboutStyles from './AboutStyle.module.css';

const AboutMe = () => {
  const AboutData = () => {
    return (
      <p>
        Hey there, I am Asadul Islam Symon. I am pursuing of my Bachelor's of IT
        majoring in software development and I have data science as my
        Sub-Major.
        <br />I used to write some basic HTML and CSS code back in my High
        School and then moved towards Java JavaScript and C++ later. I also have
        Experience in developing Web Apps using React, Java, SQL, MongoDB and
        NodeJs.For developing Mobile Applications I have Experience with React
        Native and Java. Currently I am into Competitive Coding and Blockchain
        technology
        <br />
        When I am not coding I like to travel and play games.
      </p>
    );
  };
  const ExperienceData = () => {
    return (
      <div className={AboutStyles.timeline}>
        <div className={`${AboutStyles.container} ${AboutStyles.left}`}>
          <div className={AboutStyles.content}>
            <h2 className={AboutStyles.timelineHeading}>
              Customer Service Representative
            </h2>
            <p>LiveWorks</p>
          </div>
        </div>
        <div className={`${AboutStyles.container} ${AboutStyles.right}`}>
          <div className={AboutStyles.content}>
            <h2 className={AboutStyles.timelineHeading}>Logistics Assitant</h2>
            <p> David Jones</p>
          </div>
        </div>
      </div>
    );
  };
  const EducationData = () => {
    return (
      <div className={AboutStyles.edtimeline}>
        <div className={`${AboutStyles.edcontainer} `}>
          <div className={AboutStyles.content}>
            <h2 className={AboutStyles.timelineHeading}>
              Bachelor's of Information Technology
            </h2>
            <p>2020-2023</p>
            <p>Major- Software development </p>
            <p>SubMajor - Data Analytics</p>
          </div>
        </div>
      </div>
    );
  };

  const [data, setData] = useState(<AboutData />);

  const aboutClick = () => {
    setData(<AboutData />);
  };
  const experienceClick = () => {
    setData(<ExperienceData />);
  };
  const educationClick = () => {
    setData(<EducationData />);
  };

  return (
    <section id='About' className={AboutStyles.aboutContainer}>
      <h1 className={AboutStyles.containerHeading}> ⚡About Me</h1>
      <div className={AboutStyles.infoContainer}>
        <div className={AboutStyles.buttonContainer}>
          <button className={AboutStyles.aboutButtons} onClick={aboutClick}>
            Read More about me
          </button>
          <button
            className={AboutStyles.aboutButtons}
            onClick={experienceClick}
          >
            Experience
          </button>
          <button className={AboutStyles.aboutButtons} onClick={educationClick}>
            Education
          </button>
        </div>
        <div className={AboutStyles.textContainer}>{data}</div>
      </div>
    </section>
  );
};

export default AboutMe;
