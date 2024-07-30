import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Games from './pages/Games';

const App = () => (
  <MuiThemeProvider theme={theme.muiTheme}>
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app-container">
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Games /> {/* Include the new Games page */}
          <Contact />
        </main>
        <Footer />
      </div>
    </StyledThemeProvider>
  </MuiThemeProvider>
);

export default App;
