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
   let baseUrl = 'https://api.starshipit.com/api';
  const requestBody = {
    destination: {
      street: '11-17 Davidson Street',
      suburb: 'Greenacre',
      state: 'NSW',
      post_code: '2190',
      country_code: 'AU',
    },
    packages: [
      {
        weight: 10,
      },
    ],
  };
  const credentials = {
    headers: {
      Host: 'api.starshipit.com',
      'Content-Type': 'application/json',
      'StarShipIT-Api-Key': '4e325c0dedec47b080320a80caf07584',
      'Ocp-Apim-Subscription-Key': '57c7554c5ef145fbb2069d45b28fa77c',
    },
  };
  const getQuote = () => {
    axios
      .post(`${baseUrl}/rates`, requestBody, credentials)
      .then((res) => {
        console.log(res.data.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getQuote();
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
              I am in my Last year, pursuing a Bachelor's degree at UTS. I like
              developing mobile applications. Current Tech Stack that I am
              working with is MERN Stack.
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
