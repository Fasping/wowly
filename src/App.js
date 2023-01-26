import './App.css';
import  HeaderMenu  from './components/HeaderMenu.jsx'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Pricing from './components/Pricing.js'
import Features from './components/Features.js'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <HeaderMenu />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
