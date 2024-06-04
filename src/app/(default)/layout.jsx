'use client';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
