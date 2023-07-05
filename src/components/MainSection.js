import React from 'react';
import mainStyles from './MainSection.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MainButton from './Shared/MainButton';
/*import image from '../assets/PortfolioImage.jpg';
*<img src={image} alt='My portfolio' />
*/
const MainSection = () => {
  return (
    <div tabIndex='0'>
      <section className={mainStyles.container}>
        <div className={mainStyles.textContainer}>
          <div className={mainStyles.background_img}>
        
          </div>
          <div className={mainStyles.content}>
            <h5 className={mainStyles.intro}>Asadul Islam Symon</h5>
            <h1 className={mainStyles.mainHeading}>
              A Full Stack Software developer and Data Analyst
            </h1>
            <p className={mainStyles.shortDescription}>
            Recently graduated with a bachelor’s degree in information technology, I possess a solid foundation in software development principles and a keen interest in data analysis and visualization. Eager to apply skills and make positive real-world contributions to business success.
            </p>
            <div className={mainStyles.buttonContainer}>
              <MainButton
                link={'https://github.com/Symon629'}
                icon={<GitHubIcon />}
                name={'Github'}
              />
              <MainButton
                link={
                  'https://www.linkedin.com/in/asadul-islam-symon-36a407195'
                }
                icon={<LinkedInIcon className={mainStyles.logo} />}
                name={'LinkedIn'}
              />
              <MainButton
                link={'mailto:symon.asadul@gmail.com'}
                icon={<EmailIcon />}
                name={'Email'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
