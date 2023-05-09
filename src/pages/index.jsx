import React from "react";
import Testimonials from "@/components/core/home/Testimonials.jsx";
import Hero from "@/components/core/home/Hero.jsx";
import Categories from "@/components/core/home/Categories.jsx";
import ClientOnly from "@/components/global/ClientOnly.jsx";
import Services from "@/components/core/home/Services.jsx";
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import SocialCredit from "@/components/core/home/SocialCredit.jsx";
import Newsletter from "@/components/core/home/Newsletter.jsx";
import SwiperSection from "@/components/core/home/SwiperSection";
import AiAssistant from "@/components/core/home/AiAssistant";

const Home = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Hero/>
        <div className="py-28 md:py-40">
          <AiAssistant/>
        </div>
        <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
          <ClientOnly>
            <Categories/>
          </ClientOnly>
          <SocialCredit/>
        </div>
        <Services/>
        <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
          <SwiperSection/>
        </div>
        <Newsletter/>
        <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
          <Testimonials/>
        </div>
      </div>
    </>
  );
};

Home.Layout = DefaultLayout;

export default Home;
