import React from 'react';
import { S3_BUCKET_NAME } from '@/lib/constants';

const Image = ({ src, alt, ...props }) => {
  return <img src={`https://${S3_BUCKET_NAME}.s3.amazonaws.com/${src}`} alt={alt} {...props} />;
};

export default Image;
