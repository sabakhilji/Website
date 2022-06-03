import React from "react";
import About from "./components/About";
import MyDesigns from "./components/MyDesigns";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="App">
     
              <Navbar/>
              <About/>
              <MyDesigns/>
              <ContactForm/>
              <Skills/>
    </div>
    
  );
}


