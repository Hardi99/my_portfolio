import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

import { GlobalStyle, theme } from './styles/global';
import Header from './components/Header';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar onMenuToggle={handleMenuToggle} />
        <div
          style={{
            paddingTop: isMenuOpen && window.innerWidth <= 768 ? '200px' : '',
          }}
        >
        <AnimatePresence mode="wait">
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;