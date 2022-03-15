import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Products from "./Components/Pages/Products/Products";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Sustainability from "./Components/Pages/Sustainability/Sustainability";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./Components/Pages/Locations/Location";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Palm from "./Components/Pages/Products/Palm/Palm";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Routes className="App">
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/palm" element={<Palm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
