import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div className="app-container">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
