import React from 'react';

const Image = ({ src, alt, ...props }) => {
  return (
    <img src={ `https://statisense.s3.amazonaws.com/${ src }` } alt={ alt } { ...props }/>
  );
};

export default Image;
