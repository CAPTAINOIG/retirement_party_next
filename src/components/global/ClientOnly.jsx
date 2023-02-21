import React, { useEffect, useState } from 'react';

const ClientOnly = ({ children }) => {
  const [show, setShow] = useState();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>{ show && children }</>
  );
};

export default ClientOnly;
