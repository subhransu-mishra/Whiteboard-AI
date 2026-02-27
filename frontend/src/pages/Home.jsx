import React from "react";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import HowToUse from "../components/HowToUse";
import { BrowserRouter , Route, Routes } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Navigation */}

      <main>
        {/* Hero */}
        <Hero />

        {/* How to Use */}
        <HowToUse />

        {/* Pricing */}

        {/* Reviews */}
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
