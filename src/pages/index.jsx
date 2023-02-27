import Testimonials from "@/components/core/home/Testimonials.jsx";
import Hero from "@/components/core/home/Hero.jsx";
import Categories from "@/components/core/home/Categories.jsx";
import ClientOnly from "@/components/global/ClientOnly.jsx";
import TopInsights from "@/components/core/home/TopInsights.jsx";
import Services from "@/components/core/home/Services.jsx";
import DefaultLayout from "@/components/core/shared/DefaultLayout.jsx";
import BankStatement from "@/components/core/home/BankStatement.jsx";

const Home = () => {
  return (
    <div className="space-y-24 md:space-y-44">
      <Hero/>
      <ClientOnly>
        <Categories/>
      </ClientOnly>
      <TopInsights/>
      <BankStatement/>
      <Services/>
      {/*<SocialCredit/>*/ }
      <Testimonials/>
    </div>
  );
};

Home.Layout = DefaultLayout;

export default Home;
