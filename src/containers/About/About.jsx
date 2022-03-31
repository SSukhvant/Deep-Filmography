import React from 'react';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { GiFilmSpool } from 'react-icons/gi';
import { BsCameraReels } from 'react-icons/bs';
import { RiLiveLine, RiVideoLine } from 'react-icons/ri';

const services = [
  {
    name: 'Motion Graphics',
    icon: <GiFilmSpool/>,
    description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
  },

  {
    name: 'Scriptwriting and editing',
    icon: <BsCameraReels/>,
    description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
  },

  {
    name: 'Video distribution',
    icon: <RiLiveLine/>,
    description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
  },

  {
    name: 'Video hosting',
    icon: <RiVideoLine/>,
    description: 'Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.',
  },
]

const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-intro'>
       <h5>Our Services</h5>
       <h2>What We do?</h2>
       <div/>
       <p className='p-text'>If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is over.</p>

       <a href="http://marcel-pirnay.be/" class="app__about-btn">
       <svg width="277" height="62">
         <defs>
             <linearGradient id="grad1">
                 <stop offset="0%" stop-color="#FF8282"/>
                 <stop offset="100%" stop-color="#E178ED" />
             </linearGradient>
         </defs>
          <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
       </svg>
         <span>View All Services</span>
     </a>
      </div>
      
      <div className='app__about-services'>
      
      { services.map((items) => (
        <div className='app__about-service'>
        <div className='app__about-service-icon'>
        <span>{items.icon}</span>
        <div className='app__about-service-icon-frame'/>
        </div>
        <h3>{items.name}</h3>
        <p className='p-text'>{items.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__blackbg',
);