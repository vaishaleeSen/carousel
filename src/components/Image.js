// components/Image.js
import React from 'react';
import { connect } from 'react-redux';

const Image = ({ url }) => {
  return (
    <div>
      <img src={url} alt="carousel" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  url: state.image.images[state.image.currentIndex],
});

export default connect(mapStateToProps)(Image);
