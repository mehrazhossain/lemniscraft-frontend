import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import Service from "@/components/Service/Service";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
      <Footer />
    </div>
  );
};

export default HomePage;
