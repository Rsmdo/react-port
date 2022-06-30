import React, { useState } from 'react';
import Header from './Components/Header'; 
import Nav from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  const [activePage, setActivePage] = useState({
    about: true,
    portfolio: false,
    contact: false,
    resume: false,
  });
  return (
    <main>
      <nav>
        <Header />
        <Nav activePage={activePage} setActivePage={setActivePage} />
      </nav>
      <section >
        {activePage.about ? (
          <About />
        ) : activePage.portfolio ? (
          <Portfolio />
        ) : activePage.contact ? (
          <Contact />
        ) : activePage.resume ? (
          <Resume />
        ) : (
          ''
        )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
