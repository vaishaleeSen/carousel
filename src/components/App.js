// components/App.js
import React from 'react';
import Image from './Image';
import BackNext from './BackNext';
import '../styles.css';

const App = () => {
  return (
    <div className="carousel-container">
      <Image />
      <div className="button-container">
        <BackNext />
      </div>
    </div>
  );
};

export default App;
