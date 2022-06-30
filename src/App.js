import React, { useState } from 'react';
import Header from './Components/Header'; 
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  const [categories] = useState(['about', 'portfolio', 'contact', 'resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  function renderComponent(currentCategory) {
    switch (currentCategory) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Project />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />; 
      default:
        return <About />;
    }
  }
  return (
    <div className="App min-vh-100 position-relative">
      <div className='content-wrap'>
        <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <main>
          {renderComponent(currentCategory)}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
