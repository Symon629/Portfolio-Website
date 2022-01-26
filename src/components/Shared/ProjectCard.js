import React from 'react';
import MainButton from './MainButton';
import CardStyles from './ProjectCard.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const ProjectCard = (props) => {
  return (
    <div className={CardStyles.projectContainer}>
      <div className={CardStyles.projectDescription}>
        <div className={CardStyles.content}>
          <h2>{props.item.heading}</h2>
          <p className={CardStyles.text_content}>{props.item.description}</p>
          <p>
            <span className={CardStyles.techStack}>Tech Stack used: </span>
            {props.item.TechStack}
          </p>
          <br />
          <div className={CardStyles.buttons}>
            <MainButton
              link={props.item.githublink}
              icon={<GitHubIcon />}
              name={'Github'}
            />
            <MainButton
              link={props.item.demolink}
              icon={<PlayCircleIcon />}
              name={'See Demo'}
            />
          </div>
        </div>
      </div>
      <div className={CardStyles.projectImgContainer}>
        <img
          className={CardStyles.projectImg}
          src={props.item.image}
          alt='Project'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
