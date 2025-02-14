import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Gallery2 from '../components/Gallery2';

const Contact = () => (
  <StyledContact id="contact">
    <h2>Contact Me</h2>
    <ContactForm />
    <br />
    <Gallery2 />
  </StyledContact>
);

const StyledContact = styled.section`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  h2 {
      font-size: 2rem;

    text-align: center;
    
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Contact;
