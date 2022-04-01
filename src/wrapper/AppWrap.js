import React, { useEffect, useState } from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {

  const [bgcolor, setBgcolor] = useState("app__blackbg");

  const listenScrollEvent = event => {
    if (window.scrollY < 1200) {
      return setBgcolor("app__blackbg");
    } else if (window.scrollY > 1180) {
      return setBgcolor("app__whitebg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window. removeEventListener("scroll", listenScrollEvent);
  },[]);

  return (
    <div id={idName} className={`app__container ${classNames} ${bgcolor}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 Sukhvant</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;