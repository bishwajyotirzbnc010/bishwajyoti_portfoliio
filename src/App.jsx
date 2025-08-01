import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <div >
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
