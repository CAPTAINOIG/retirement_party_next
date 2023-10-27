import Head from "next/head";
import Hero from "@/components/core/home/Hero";
import OmniChannel from "@/components/core/home/OmniChannel";
import ConvertYourData from "@/components/core/home/ConvertYourData";
import SupportingSectors from "@/components/core/home/SupportingSectors";
import HowItWorks from "@/components/core/home/HowItWorks";
import Categories from "@/components/core/home/Categories";
import InsightsOnTheGo from "@/components/core/home/InsightsOnTheGo";
import Newsletter from "@/components/core/home/Newsletter";
import Testimonials from "@/components/core/home/Testimonials";
import DefaultLayout from "@/components/core/DefaultLayout";
import DefaultHeadTags from "@/components/DefaultHeadTags";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Statisense - Pioneering AI Data Company for Informed Business Decisions</title>
        <DefaultHeadTags/>
      </Head>
      <div className="bg-slate-100">
        <Hero/>
        <div className="py-28 md:py-44 md:pb-48 relative overflow-hidden">
          <div className="space-y-28 md:space-y-56">
            <OmniChannel/>
            <ConvertYourData/>
          </div>
          <div className="md:block hidden absolute bottom-[-1rem] w-full">
            <img alt="curve" src="/images/curve-2.svg"/>
          </div>
        </div>
        <div className="bg-white py-28 md:pt-24 md:pb-48 space-y-32 md:space-y-48">
          <SupportingSectors/>
        </div>
        <HowItWorks/>
        <div className="bg-white py-28 md:py-32 space-y-24 md:space-y-36 overflow-hidden">
          <Categories/>
          <InsightsOnTheGo/>
        </div>
        <div className="relative overflow-hidden">
          <Newsletter/>
          <div className="xl:block hidden absolute left-0 -bottom-10 w-full z-20">
            <img alt="curve" src="/images/curve-3.svg"/>
          </div>
        </div>
        <div className="bg-white py-28 md:py-40 relative">
          <Testimonials/>
        </div>
      </div>
    </>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;
