import React, { useState } from 'react';
import AboutStyles from './AboutStyle.module.css';

const AboutMe = () => {
  const AboutData = () => {
    return (
      <p>
      Hello, I am Asadul Islam Symon, currently pursuing a Bachelor's degree in Information Technology with a focus on software development. My sub-major is in data science.
      During my high school years, I gained experience in writing basic HTML and CSS code. As I progressed, I expanded my knowledge to include Java, JavaScript, and C++. Additionally, I have hands-on experience in developing web applications using technologies such as React, Java, Spring boot, C#,Asp.net, SQL, MongoDB, and Node.js.
      Furthermore, I have also developed mobile applications using React Native and Java. My experience in both web and mobile app development has allowed me to gain a well-rounded skill set in various programming languages and frameworks.
      </p>
    );
  };
  const ExperienceData = () => {
    return (
      <div className={AboutStyles.timeline}>
        <div className={`${AboutStyles.container} ${AboutStyles.left}`}>
          <div className={AboutStyles.content}>
            <h2 className={AboutStyles.timelineHeading}>
            Software Engineer/Full Stack Developer
            </h2>
            <p>Firebrand Pty Ltd</p>
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
