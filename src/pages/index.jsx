import Testimonials from "@/components/core/home/Testimonials.jsx";
import Hero from "@/components/core/home/Hero.jsx";
import Categories from "@/components/core/home/Categories.jsx";
import ClientOnly from "@/components/global/ClientOnly.jsx";
import Services from "@/components/core/home/Services.jsx";
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import SocialCredit from "@/components/core/home/SocialCredit.jsx";
import React from "react";
import Newsletter from "@/components/core/home/Newsletter.jsx";
import InfographicsSection from "@/components/core/home/InfographicsSection";
import SwiperSection from "@/components/core/home/SwiperSection";
import TrendingInfographics from "@/components/core/home/TrendingInfographics.jsx";

const Home = () => {
  return (
    <div className="space-y-28 md:space-y-44">
      <Hero/>
      <TrendingInfographics/>
      <ClientOnly>
        <Categories/>
      </ClientOnly>
      <SocialCredit/>
      <Services/>
      <SwiperSection/>
      <InfographicsSection/>
      <Newsletter/>
      <Testimonials/>
    </div>
  );
};

Home.Layout = DefaultLayout;

export default Home;
