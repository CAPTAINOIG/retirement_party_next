import Navbar from "@/components/global/Navbar.jsx";
import Testimonials from "@/components/core/home/Testimonials.jsx";
import Hero from "@/components/core/home/Hero.jsx";
import Categories from "@/components/core/home/Categories.jsx";
import ClientOnly from "@/components/global/ClientOnly.jsx";
import TopInsights from "@/components/core/home/TopInsights.jsx";
import Services from "@/components/core/home/Services.jsx";
import Footer from "@/components/core/home/Footer.jsx";
import BankStatement from "@/components/core/home/BankStatement";
import SocialCredit from "@/components/core/home/SocialCredit";
import Curves from "@/components/core/home/Curves";
import Credible from "@/components/core/home/Credible";

const Home = () => {
  return (
    <main>
      <Navbar/>
      <div className="space-y-44">
        <Hero/>
        <ClientOnly>
          <Categories/>
        </ClientOnly>
        <BankStatement/>
        <TopInsights/>
        <Services/>
        <SocialCredit/>
        <Testimonials/>
        <Credible/>
        <Footer/>
        <Curves/>
      </div>
    </main>
  );
};

export default Home;
