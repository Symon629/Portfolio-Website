import React from 'react';
import mainBtnStyles from './MainButton.module.css';

const MainButton = (props) => {
  return (
    <div>
      <a
        href={props.link}
        target='_blank'
        rel='noreferrer'
        className={mainBtnStyles.links}
      >
        <button className={mainBtnStyles.mainButton}>
          {props.icon}
          <p> &nbsp;{props.name}</p>
        </button>
      </a>
    </div>
  );
};
export default MainButton;
