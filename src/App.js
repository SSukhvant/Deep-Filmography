import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { About, Blog, Footer, Home, Work } from './containers';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
