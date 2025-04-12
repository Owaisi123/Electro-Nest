// import './App.css';
import SecNavbar from "./Components/Navbar/SecNavbar";
import TopHeader from "./Components/Topheader/TopHeader";
import HeroSection from "./Components/Hero/HeroSection";
import ProductSection from "./Components/Product/ProductSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopHeader />
      <SecNavbar />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
