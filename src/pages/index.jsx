import Navbar from "@/components/global/Navbar.jsx";
import Testimonials from "@/components/core/home/Testimonials.jsx";
import Hero from "@/components/core/home/Hero.jsx";
import Categories from "@/components/core/home/Categories.jsx";
import ClientOnly from "@/components/global/ClientOnly.jsx";
import TopInsights from "@/components/core/home/TopInsights.jsx";
import Services from "@/components/core/home/Services.jsx";
import Footer from "@/components/core/home/Footer.jsx";

const Home = () => {
  return (
    <main>
      <Navbar/>
      <div className="space-y-44">
        <Hero/>
        <ClientOnly>
          <Categories/>
        </ClientOnly>
        <TopInsights/>
        <Services/>
        <Testimonials/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
