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
import styled from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <div className="app-container">
      <Header />
      <Main>
        <Section>
          <Home />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Main>
      <Footer />
    </div>
  </ThemeProvider>
);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  padding: 1px 0; /* Adjust the padding to control the space between sections */
  
  &:first-child {
    padding-top: 100px; /* Adjust for fixed header */
  }
`;

export default App;
