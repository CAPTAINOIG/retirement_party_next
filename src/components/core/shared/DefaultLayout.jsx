import React from 'react';
import Navbar from "@/components/global/Navbar.jsx";
import Footer from "@/components/core/home/Footer.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>
        { children }
      </main>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
