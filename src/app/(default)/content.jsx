'use client';
import React from 'react';
import Testimonials from '@/components/core/home/Testimonials';
import Hero from '@/components/core/home/Hero';
import AdSection from '@/components/core/home/AdSection';
import BigIdeas from '@/components/core/home/BigIdeas';
import ImmortalProducts from '@/components/core/home/ImmortalProducts';

const HomePageContent = () => {
  return (
    <div>
      <Hero />
      <BigIdeas />
      <ImmortalProducts />
      <AdSection />
      <Testimonials />
    </div>
  );
};

export default HomePageContent;
