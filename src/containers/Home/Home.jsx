import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Home.scss';

const Home = () => {
  return (
    <div className='app__home'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__home-info"
      >
          <p className="p-text">For Website And Video Editing</p>
          <h1 className="head-text">Videographer's <br/>Portfolio</h1>
          {/*<h1 className="head-text"></h1>*/}
          <button className='app__home-btn'><span>KNOW MORE</span></button>
      </motion.div>
    </div>
  )
}

export default AppWrap(Home, 'home');
