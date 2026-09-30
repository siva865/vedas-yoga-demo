import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navabar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Classes from "./Components/Classes";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}