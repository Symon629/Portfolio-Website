import React from 'react';
import ProjectStyles from './Projects.module.css';
import projectImage from '../assets/Screenshot_20220107-160507.png';
import projectImage2 from '../assets/React Movie App.png';
import ProjectCard from './Shared/ProjectCard';

const data = [
  {
    heading: `Mern-grocery App`,
    description: ` Mobile app built with react native for shopping grocery online,
    Project Features User Authentication with MongoDB, shopping cart,
    OrderProducts, Admin Panel, Add Product, Add Category, Fetches Data from a api built with mongoDB and NodeJs`,
    TechStack: `React Native, React, MongoDB, Nodejs, Express`,
    demolink: `https://youtu.be/xT8OqL0NC9I`,
    githublink: `https://github.com/Symon629`,
    image: projectImage,
  },
  {
    heading: `Movie DB App`,
    description: `A React App that fetches data from the TMDB api based on the input given by the user using the search button`,
    TechStack: `React, HTML,CSS`,
    demolink: `https://goofy-goldwasser-b97ae7.netlify.app/`,
    githublink: `https://github.com/Symon629/React-MovieApp`,
    image: projectImage2,
  },
];

const Projects = () => {
  return (
    <section id='Projects' className={ProjectStyles.mainContainer}>
      <h1 className={ProjectStyles.heading}> 📚 Projects</h1>
      {data.map((item, index) => {
        return <ProjectCard key={index} item={item} />;
      })}
    </section>
  );
};
export default Projects;
