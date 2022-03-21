import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Home.scss';

const Home = () => {
  return (
    <div className='app__home app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
      <div className="app__header-badge">
      <div className="badge-cmp app__bgwhite app__flex">
        <span>👋</span>
        <div className='badge-html' style={{ marginLeft: 20 }}>
          <p className="p-text">Hello, I'm</p>
          <h1 className="head-text">Sukhvant</h1>
        </div>
      </div>

      <div className="tag-cmp app__bgviolet text-white app__flex">
        <p>WEB DEVELOPER</p>
        <p>FREELANCER</p>
      </div>
    </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Home, 'home');
