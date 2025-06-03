import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";


const App: React.FC = () => (
  <div className="bg-darkbg min-h-screen w-full font-mono scroll-smooth">
    <NavBar />
    <Header />
    <main className="space-y-0">
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  </div>
);

export default App;
