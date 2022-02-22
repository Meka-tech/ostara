import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Products from "./Components/Pages/Products/Products";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Sustainability from "./Components/Pages/Sustainability/Sustainability";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from "./Components/Pages/Locations/Location";
function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
