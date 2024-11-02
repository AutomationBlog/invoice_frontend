import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = ({ value }) => {
  return (
    <div>
      <Navbar value={value} />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
