import React from 'react';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

import profileimg from '../img/profile.jpg';

const Home = () => {
  return (
    <>
      <section className='home section active' id='home'>
        <div className='container'>
          <div className='intro'>
            <img src={profileimg} alt='profile' />
            <h1>ijaz khan Afridi</h1>
            <p>i am Web Developer</p>
            <div className='social-link'>
              <a
                href='https://www.linkedin.com/in/ijaz-khan-afridi/'
                className='link'
                target={'_blank'}
                rel='noreferrer'
              >
                <LinkedIn className='fab fa ' />
              </a>
              <a
                href='https://github.com/IjazkhanAfridi/'
                className='link'
                rel='noreferrer'
                target={'_blank'}
              >
                <GitHub className='fab fa' />
              </a>
              <a href='/#' className='link'>
                <Facebook className='fab fa ' />
              </a>
              <a href='/#' className='link'>
                <Twitter className='fab fa' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
