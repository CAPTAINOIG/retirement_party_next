import React from 'react';
import Navbar from "@/components/global/Navbar.jsx";
import Footer from "@/components/global/Footer.jsx";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>
        { children }
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default DefaultLayout;
