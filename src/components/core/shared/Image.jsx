import React from 'react';

const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

const Image = ({ src, alt, ...props }) => {
  return <img src={`https://${bucket}.s3.amazonaws.com/${src}`} alt={alt} {...props} />;
};

export default Image;
