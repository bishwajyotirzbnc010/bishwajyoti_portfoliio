// src/App.jsx
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
