import React, {useState} from "react";
import "./Navbar.scss";
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {FaHome} from 'react-icons/fa';
import {motion} from 'framer-motion';

const navlinks = [
  {
    name: 'home',
    icon: <FaHome/>
  },

  {
    name: 'About',
    icon: <FaHome/>
  },

  {
    name: 'Work',
    icon: <FaHome/>
  },

  {
    name: 'Blog',
    icon: <FaHome/>
  },

  {
    name: 'Contact',
    icon: <FaHome/>
  }
  
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2 className="logo">Deep Rai Films</h2>
      </div>

      <ul className="app__navbar-links">
        {navlinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item.name}`}>
            <div />
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
          initial={{ width: 0 }}
          animate={{
            width: 300,
            transition: { duration: 0.5, type: "spring", damping: 10 }
          }}
          exit={{
            width: 0
          }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navlinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.name}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
