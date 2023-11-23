import React from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/UI/Contact";
import About from "./components/UI/About";
import History from "./components/UI/History";

function App() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="dark:text-textDark dark:bg-darkMode duration-100">
      <Header />
      <main>
        <Hero />
        <History />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
