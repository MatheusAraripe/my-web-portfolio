import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Footer />
    </main>
    </>
  );
}

export default App;
