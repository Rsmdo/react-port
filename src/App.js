import React, { useState } from 'react';
import Header from './Components/Header'; 
import Nav from './Components/Nav';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  const [activePage, setActivePage] = useState({
    About: true,
    Project: false,
    Contact: false,
    Resume: false,
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
          <Project />
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
