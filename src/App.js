import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { About, Blog, Footer, Gallery, Home, Work } from './containers';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Work/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
