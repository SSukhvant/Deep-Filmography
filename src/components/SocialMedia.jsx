import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/SSukhvant" alt="GitHub" target="_blank" rel="noreferrer">
      <BsGithub />
      </a>
    </div>

    <div>
    <a href="https://www.linkedin.com/in/sukhvant-singh-11707506/" alt="Linkedin" target="_blank" rel="noreferrer">
    <BsLinkedin />
    </a>
    </div>

    <div>
    <a href="https://twitter.com/ssukhvant_21" alt="Twitter" target="_blank" rel="noreferrer">
    <BsTwitter />
    </a>
    </div>

    <div>
    <a href="https://www.facebook.com/profile.php?id=100009763596747" alt="Facebook" target="_blank" rel="noreferrer">
    <FaFacebookF />
    </a>
    </div>

    <div>
    <a href="https://www.instagram.com/ssukhvant/" alt="Instagram" target="_blank" rel="noreferrer">
    <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;