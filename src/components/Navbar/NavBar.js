import React, { useState } from 'react';

import navStyles from './NavBar.module.css';

const NavBar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handlebuttonClick = () => {
    setShowNavModal((prevState) => !prevState);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={` ${
        navbar ? `${navStyles.active} ${navStyles.navbar}` : navStyles.navbar
      }`}
    >
      <div className={navStyles.navBox}>
        <h1 className={navStyles.redy}>&#60;Symon/&#62;</h1>
        <div
          className={`${
            showNavModal
              ? `${navStyles.navigation__modal} ${navStyles.open}`
              : navStyles.navigation__modal_hide
          }`}
        >
          <ul>
            <li onClick={handlebuttonClick}>
              <a href='#'>Home</a>
            </li>
            <li onClick={handlebuttonClick}>
              <a href='./#About'>About Me</a>
            </li>
            <li onClick={handlebuttonClick}>
              <a href='./#Projects'>Projects</a>
            </li>
          </ul>
        </div>
        <div className={navStyles.mobileNavigation}>
          <button
            className={navStyles.navigation__button}
            onClick={handlebuttonClick}
          >
            <span
              className={`${
                showNavModal
                  ? `${navStyles.navigation__icon_active}`
                  : navStyles.navigation__icon
              } `}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
