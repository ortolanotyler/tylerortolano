import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'; // Import the new Skills page
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <div className="app-container">
      <Header />
      <main>
        <Home />
        <About />
        <Skills /> {/* Include the new Skills page */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
