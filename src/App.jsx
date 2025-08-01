import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <>
    <div >
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <SkillSection />
      <Experience />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
