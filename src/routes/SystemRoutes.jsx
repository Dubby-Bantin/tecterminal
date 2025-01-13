import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Navbar from "../components/Navbar";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Footer from "../pages/home/components/Footer";
import Education from "../pages/education/Education";

const SystemRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default SystemRoutes;
