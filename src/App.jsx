import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FinalExpense from "./pages/FinalExpense";
import Medicare from "./pages/Medicare";
import ACA from "./pages/ACA";
import MortgageProtection from "./pages/MortgageProtection";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Router>
      <Header />

       <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/final-expense" element={<FinalExpense />} />
       <Route path="/medicare" element={<Medicare />} />
      
        <Route path="/aca" element={<ACA />} />
         <Route path="/mortgage-protection" element={<MortgageProtection />} />
                 <Route path="/aboutus" element={<AboutUs />} /> 

        <Route path="/contact" element={<Contact />} /> 
      </Routes> 

      <Footer />
    </Router>
  );
}
