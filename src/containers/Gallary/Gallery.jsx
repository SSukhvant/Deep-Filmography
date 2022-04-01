import React from 'react';
import './Gallery.scss';
import images from '../../constants/images';

const Gallery = () => {
  return (
    <div className='app__gallery'>
      <div className='app__gallery-pictures'>
      <div className='app__gallery-1'>
      <div className='app__gallery-picture'><img src={images.work1} alt="picture"/></div>
      <div className='app__gallery-picture'><img src={images.work5} alt="picture"/></div>
      <div className='app__gallery-picture'><img src={images.work6} alt="picture"/></div>
      </div>
      <div className='app__gallery-2'>
      <div className='app__gallery-picture'><img src={images.work2} alt="picture"/></div>
      <div className='app__gallery-picture'><img src={images.work3} alt="picture"/></div>
      <div className='app__gallery-picture'><img src={images.work7} alt="picture"/></div>
      </div>
      <div className='app__gallery-3'><img src={images.work4} alt="picture"/></div>
      </div>
    </div>
  )
}

export default Gallery;
