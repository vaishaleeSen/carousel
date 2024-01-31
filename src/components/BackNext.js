// components/BackNext.js
import React from 'react';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../actions';

const BackNext = ({ nextImage, prevImage }) => {
  return (
    <div>
      <button onClick={prevImage}>&lt;</button>
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default connect(null, { nextImage, prevImage })(BackNext);
